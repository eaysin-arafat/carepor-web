import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import RequestError from "@/components/core/error/RequestError";
import CustomNupn from "@/components/core/form-elements/Custom-nupn";
import CardLoader from "@/components/core/loader/CardLoader";
import DefaultModal from "@/components/core/modal/DefaultModal";
import NotFound from "@/components/core/not-found/NotFound";
import { clientModalTypes } from "@/constants/modal-types";
import {
  useReadClientByNupnAndGenderQuery,
  useReadMotherByMotherLinkKeyQuery,
  useUpdateClientMotherMutation,
} from "@/features/client/client-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { Client } from "@/interface/clients";
import { cn } from "@/utilities/cn";
import { TypeValidation } from "@/utilities/type-valdation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ClientCard from "./ClientCard";
import MotherCard from "./MotherCard";

type Props = {
  clientObj: Client;
};
const LinkWithMother = ({ clientObj }: Props) => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  // IS MOTHER LINKED WITH CLIENT
  let isLinked: boolean;
  let motherProfileId = clientObj?.motherProfileId;
  const unLinkedString = "00000000-0000-0000-0000-000000000000";
  if (!motherProfileId || motherProfileId == unLinkedString) {
    isLinked = false;
  } else if (motherProfileId && motherProfileId !== unLinkedString) {
    isLinked = true;
  }

  // Rtk Mutation
  const [updateClientMother] = useUpdateClientMotherMutation();

  // If client is linked with mother profile get data
  const {
    data: mother,
    isLoading: isMotherLoading,
    isError: isMotherError,
    isSuccess: isMotherSuccess,
  } = useReadMotherByMotherLinkKeyQuery(motherProfileId, {
    skip: !isLinked,
  });

  // search state
  const [NUPNSearch, setNUPNSearch] = useState("");
  // Rtk Mother By NUPN Search
  const {
    data: searchedProfile,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useReadClientByNupnAndGenderQuery(NUPNSearch, {
    refetchOnMountOrArgChange: false,
    skip: !TypeValidation.isNUPN(NUPNSearch),
  });

  // input state
  const [nupn, setNupn] = useState("");
  const [nupnError, setNupnError] = useState("");
  // HANDLE SEARCH
  const handleNUPNSearch = (e) => {
    e.preventDefault();
    if (!nupn) {
      setNupnError("Please type NUPN number first.");
      return;
    }
    if (!TypeValidation.isNUPN(nupn)) {
      setNupnError("Please type valid NUPN number.");
      return;
    }
    setNupnError("");
    setNUPNSearch(nupn);
  };

  // HANDLE LINK WITH MOTHER
  const handleMotherLink = () => {
    const data = {
      key: clientObj?.oid,
      childOID: clientObj?.oid,
      motherOID: searchedProfile?.oid,
    };

    updateClientMother(data)
      .unwrap()
      .then(() => {
        closeModal();
        toast.success("Linked Successful");
      })
      .catch(() => {
        toast.error("Linked Failed");
      });
  };

  const handleRemoveMotherLink = () => {
    const data = {
      key: clientObj?.oid,
      childOID: clientObj?.oid,
      motherOID: "00000000-0000-0000-0000-000000000000",
    };
    updateClientMother(data)
      .unwrap()
      .then(() => {
        closeModal();
        toast.success("Unlinked Successful");
      })
      .catch(() => {
        toast.error("Unlinked Failed");
      });
  };

  return (
    <div>
      {addModal?.isOpen &&
        addModal?.modalId === clientModalTypes.linkWithMother && (
          <DefaultModal
            title="Link With Mother"
            toggler={closeModal}
            size="6xl"
          >
            <ClientCard client={clientObj} />

            {/* If Client linked with mother */}
            {isLinked && (
              <>
                {isMotherError && !isMotherLoading && (
                  <CardShap>
                    <RequestError />
                  </CardShap>
                )}
                {!isMotherError && isMotherLoading && (
                  <CardShap>
                    <CardLoader />
                  </CardShap>
                )}
                {!isMotherError && !isMotherLoading && isMotherSuccess && (
                  // already linked mother profile
                  <>
                    <MotherCard
                      disabled={false}
                      handler={handleRemoveMotherLink}
                      isLinked={isLinked}
                      mother={mother}
                    />
                  </>
                )}
              </>
            )}
            {/* If client not linked mother */}
            {!isLinked && (
              <>
                <form
                  onSubmit={handleNUPNSearch}
                  className="flex gap-2 items-start "
                >
                  <CustomNupn
                    errMsg={nupnError}
                    // label="Enter NUPN"
                    onChange={(e) => setNupn(e.target.value)}
                    placeholder="Enter NUPN"
                  />
                  <button className="bg-primaryColor hover:bg-primaryHoverColor px-5 py-2 h-fit mt-[5px] border-2 border-primaryColor text-whiteColor rounded-lg">
                    Search
                  </button>
                </form>

                <>
                  {isError && !isLoading && (
                    <CardShap>
                      <NotFound
                        messages={
                          //@ts-ignore
                          typeof error?.data == "string"
                            ? //@ts-ignore
                              error?.data
                            : "No match found!"
                        }
                      />
                    </CardShap>
                  )}
                  {!isError && isLoading && (
                    <CardShap>
                      <CardLoader />
                    </CardShap>
                  )}
                  {!isError && !isLoading && isSuccess && (
                    <>
                      <MotherCard
                        title="Searched Profile"
                        mother={searchedProfile}
                        handler={handleMotherLink}
                        isLinked={isLinked}
                        disabled={false}
                      />
                    </>
                  )}
                </>
              </>
            )}
            <ButtonSection
              // disabled={!isSuccess}
              // isLinked={isLinked}
              closeModal={closeModal}
              // handleMotherLink={handleMotherLink}
            />
          </DefaultModal>
        )}
    </div>
  );
};

export default LinkWithMother;

const buttonStyle =
  "px-3 md:px-6 py-3 text-md md:text-lg bg-whiteBgColor border border-borderColor hover:bg-borderColor rounded-full whitespace-nowrap";

const ButtonSection = ({
  closeModal,
  disabled = false,
  isLinked = false,
  handleMotherLink = null,
}) => {
  return (
    <div className="mt-5 flex justify-center w-full">
      <div className={cn(` flex gap-3 justify-center`)}>
        <button onClick={closeModal} className={buttonStyle}>
          Close
        </button>
        {false && !isLinked && (
          <button
            onClick={null}
            disabled={disabled}
            className={cn(buttonStyle, "bg-primaryColor text-white")}
          >
            Link With Mother
          </button>
        )}

        {false && isLinked && (
          <button
            onClick={handleMotherLink}
            disabled={disabled}
            className={cn(
              buttonStyle,
              "bg-dangerColor hover:bg-red-600 text-whiteColor"
            )}
          >
            Unlink With Mother
          </button>
        )}
      </div>
    </div>
  );
};

const CardShap = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      // title={title || "Mother's Profile"}
      className="bg-whiteColor shadow-none border min-h-[2rem] md:px-3"
      titleClass="text-secondaryColor pt-6"
    >
      {children}
    </Card>
  );
};

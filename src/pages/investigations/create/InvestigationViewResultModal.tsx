import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { investigationModalTypes } from "@/constants/modal-types";
import { EnumIsResultNormal } from "@/enum/enumerators";
import { TypeMergeInvestigations } from "@/features/investigation/investigation-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useClinician from "@/hooks/useClinician";
import useFindFacility from "@/hooks/useFindFacility";
import { DateFunc } from "@/utilities/date";
import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ResultUpdate from "./ResultUpdate";

const InvestigationViewResultModal = () => {
  const { addModal } = useSelector((store: RootState) => store.modal);
  const { data, modalId } = addModal;
  const investigation: TypeMergeInvestigations = data;

  const dispatch = useDispatch();
  const { getClinicianFullName } = useClinician();
  const { getFacilityName } = useFindFacility();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const [isResultEdit, setIsResultEdit] = useState(false);
  const handleResultEdit = () => {
    setIsResultEdit(true);
  };
  const handleCancelEdit = (): void => {
    setIsResultEdit(false);
  };

  return (
    <div>
      {modalId === investigationModalTypes.investigationViewResult && (
        <DefaultModal
          title="View Result"
          className="p-1"
          toggler={closeModal}
          size="4xl"
        >
          <Card className="bg-whiteBgColor shadow-none mt-3 ">
            <div className=" border border-borderColor p-3 rounded-lg">
              <div className="grid grid-cols-1 font-semibold  md:grid-cols-1">
                <div className="p-1">
                  Order Date: {DateFunc.formatDate(investigation?.dateCreated)}
                </div>
                <div className="p-1">
                  Facility: {getFacilityName(investigation?.createdIn)}
                </div>
                <div className="p-1">
                  Clinician:{" "}
                  {getClinicianFullName(
                    investigation?.clinicianID || investigation?.clinicianId
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* *** */}
          {/* If Result is not over 24 hours then editable */}
          {isResultEdit && (
            <ResultUpdate
              handleCancelEdit={handleCancelEdit}
              investigation={investigation}
            />
          )}

          {/*  */}
          {!isResultEdit && (
            <Card className="bg-whiteBgColor shadow-none ">
              <div className="w-full justify-end "></div>
              <DataCard
                handleResultEdit={handleResultEdit}
                investigation={investigation}
              />

              <div className="flex justify-center mt-8">
                <button onClick={closeModal} className="transparent_btn">
                  Close
                </button>
              </div>
            </Card>
          )}
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationViewResultModal;

const DataCard = ({
  investigation,
  handleResultEdit,
}: {
  investigation: TypeMergeInvestigations;
  handleResultEdit: () => void;
}) => {
  const data = investigation?.result;
  return (
    <>
      <div className=" border border-borderColor p-5 rounded-lg w-full">
        <div className="w-full flex justify-end ">
          {DateFunc.isBetween24Hours(investigation?.result?.dateCreated) && (
            <button
              onClick={handleResultEdit}
              className="text-primaryColor text-base font-normal px-1 pt-3 me-4 font-poppins flex items-center gap-1 right-8"
            >
              <MdOutlineEdit />
              Edit
            </button>
          )}
        </div>
        <DataRow title={"Date"} data={DateFunc.formatDate(data?.dateCreated)} />
        <DataRow title={"Test"} data={investigation?.testNameDetails} />
        <DataRow title={"Result"} data={investigation?.testResult} />
        <DataRow title={"Unit"} data={investigation?.unitTest} />
        <div>{JSON.stringify(data)}</div>
        <DataRow
          title={"Reference Range"}
          data={
            data?.minumumRange &&
            data?.maxumumRange &&
            investigation?.unitTest &&
            data?.minumumRange +
              "-" +
              data?.maxumumRange +
              " / " +
              // data?.unitTest
              investigation?.unitTest
          }
        />
        <DataRow
          title={"Remark"}
          data={
            data?.isResultNormal && EnumIsResultNormal[data?.isResultNormal]
          }
        />
        <DataRow title={"Comments"} data={data?.commentOnResult} />
      </div>
    </>
  );
};

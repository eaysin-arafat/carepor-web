import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { investigationModalTypes } from "@/constants/modal-types";
import { EnumIsResultNormal } from "@/enum/enumerators";
import { useReadFacilitiesQuery } from "@/features/facility/facility-api";
import { TypeMergeInvestigations } from "@/features/investigation/investigation-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useReadUserAccountsQuery } from "@/features/user-accounts/user-accounts-api";
import { DateFunc } from "@/utilities/date";
import findUserData from "@/utilities/find-user-data";
import findFacility from "@/utilities/find-user-data copy";
import { useDispatch, useSelector } from "react-redux";

const InvestigationViewResultModal = () => {
  const { data: users } = useReadUserAccountsQuery(undefined);
  const { data: facilites } = useReadFacilitiesQuery(undefined);
  const { data, modalId } = useSelector(
    (store: RootState) => store.modal.addModal
  );
  const investigation: TypeMergeInvestigations = data;

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {modalId === investigationModalTypes.investigationViewResult && (
        <DefaultModal
          title="View Result"
          className="p-1"
          toggler={closeModal}
          size="3xl"
        >
          <Card className="bg-whiteBgColor shadow-none mt-3 ">
            <div className=" border border-borderColor p-3 rounded-lg">
              <div className="grid grid-cols-1 font-semibold  md:grid-cols-1">
                <div className="p-1">
                  Order Date: {DateFunc.formatDate(investigation?.dateCreated)}
                </div>
                <div className="p-1">
                  Facility:{" "}
                  {
                    findFacility(investigation?.createdIn, facilites)
                      .facilityName
                  }
                </div>
                <div className="p-1">
                  Clinician:{" "}
                  {
                    findUserData(
                      investigation?.clinicianID || investigation?.clinicianId,
                      users
                    ).username
                  }
                </div>
              </div>
            </div>
          </Card>
          <Card className="bg-whiteBgColor shadow-none ">
            {/* <div>{JSON.stringify(investigation)}</div> */}
            <DataCard investigation={investigation} />

            <div className="flex justify-center mt-8">
              <button onClick={closeModal} className="transparent_btn">
                Close
              </button>
            </div>
          </Card>
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationViewResultModal;

const DataCard = ({
  investigation,
}: {
  investigation: TypeMergeInvestigations;
}) => {
  const data = investigation?.result;
  return (
    <>
      <div className=" border border-borderColor p-5 rounded-lg">
        <DataRow title={"Date"} data={DateFunc.formatDate(data?.dateCreated)} />
        <DataRow title={"Test"} data={investigation?.testNameDetails} />
        <DataRow title={"Result"} data={investigation?.testResult} />
        <DataRow title={"Unit"} data={investigation?.unitTest} />
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

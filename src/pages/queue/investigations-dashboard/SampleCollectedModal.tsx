import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";

import DateInput from "@/components/core/form-elements/DatePicker";
import TimeInput from "@/components/core/form-elements/TimeInput";
import { investigationModalTypes } from "@/constants/modal-types";
import {
  TypeMergeInvestigations,
  useCreateInvestigationSampleCollectionMutation,
} from "@/features/investigation/investigation-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useClinician from "@/hooks/useClinician";
import { DateFunc, getDateTimeDetails } from "@/utilities/date";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { PriorityColor } from "./InvestigationsDashboard";

type TypeSampleCollection = {
  collectionDate: string;
  collectionTime: string;
};

const SampleCollectedModal = () => {
  //Hooks
  const dispatch = useDispatch();
  // const [baseData] = useBaseDataCreate();
  const { getClinicianFullName } = useClinician();
  // Redux state
  const { data, modalId } = useSelector(
    (store: RootState) => store.modal.addModal
  );
  const investigation: TypeMergeInvestigations = data;

  // Rtk Put // Sample submit request
  const [
    investigationSampleCollection,
    { isLoading, isError, isSuccess, status },
  ] = useCreateInvestigationSampleCollectionMutation();

  // date and time state
  const [collectionDate, setCollectionDate] = useState(null);
  const [collectionTime, setCollectionTime] = useState(null);
  // error state
  const [inputError, setInputError] = useState<TypeSampleCollection>(null);

  // "interactionId": "765514a5-fb6a-492c-90b4-abd868c73c1f",
  // "sampleCollectionDate": "09/07/2023",
  // "sampleCollectionTime": "12:30:00"

  const handleSubmitSampleCollection = (e) => {
    e.preventDefault();

    if (!collectionDate) {
      setInputError((prev) => ({ ...prev, collectionDate: "Required" }));
      return false;
    }

    // convert time value
    const dateDetails = getDateTimeDetails(collectionDate);
    const timeDetails = getDateTimeDetails(collectionTime);

    const submitData = {
      interactionId: investigation?.interactionId,
      sampleCollectionDate: dateDetails?.monthDayYear,
      sampleCollectionTime: timeDetails?.hourMinuteSecond,
    };

    investigationSampleCollection({
      id: investigation?.interactionId,
      body: submitData,
    });
  };

  useEffect(() => {
    if (isSuccess && status == "fulfilled") {
      toast.dismiss();
      toast.success("Result Update successful.");
      setCollectionTime(null);
      setCollectionDate(null);
      dispatch(closeAddModal());
    }
    if (isError && status == "rejected") {
      toast.dismiss();
      toast.error("Result Update Failed");
    }
  }, [isSuccess, isError]);

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const clientName = () => {
    return (
      investigation?.client?.firstName + " " + investigation?.client?.surname
    );
  };

  return (
    <div>
      {modalId === investigationModalTypes.sampleCollection && (
        <DefaultModal
          title="Sample Collection"
          className="p-1"
          toggler={closeModal}
          size="6xl"
        >
          {/* Card Head  */}
          <Card className="bg-whiteBgColor shadow-none mt-3 p-0">
            <div className="bg-lightBlueColor rounded-lg h-fit p-4 mt-3 mb-5">
              <div className="flex flex-wrap md:flex-row flex-col gap-3 justify-between text-sm">
                <div>
                  <p>
                    <span className="font-semibold">Patient Name : </span>
                    &nbsp;{clientName()}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Order Date : </span>
                    &nbsp;{DateFunc.formatDate(investigation?.dateCreated)}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold"> Order Number : </span>
                    &nbsp;{investigation.orderNumber}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold"> Order By : </span>
                    &nbsp;{getClinicianFullName(investigation?.clinicianId)}
                  </p>
                </div>
              </div>
            </div>
          </Card>
          {/* Investigation details */}
          <Card className="bg-whiteBgColor shadow-none ">
            <Table className="min-w-[650px] text-xs">
              <Table.Head>
                {/* 					 */}
                <Table.HeadCell>Test Name</Table.HeadCell>
                <Table.HeadCell>Piority</Table.HeadCell>
                <Table.HeadCell>Test Qty</Table.HeadCell>
                <Table.HeadCell>Sample Qty</Table.HeadCell>
                <Table.HeadCell>Additional Comment</Table.HeadCell>
                <Table.HeadCell>Imaging Comment</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-lightBlueColor text-textColor">
                  <Table.Cell>{investigation.testName}</Table.Cell>
                  <Table.Cell>
                    {<PriorityColor p={investigation.piority} key={"0"} />}
                  </Table.Cell>
                  <Table.Cell>{investigation.quantity}</Table.Cell>
                  <Table.Cell>{investigation.sampleQuantity}</Table.Cell>
                  <Table.Cell>{investigation.additionalComment}</Table.Cell>
                  <Table.Cell>{investigation.imagingTestDetails}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>

          {/* Sample collection collection form */}
          <div className="grid grid-cols-4 gap-5 my-5">
            <div className="col-span-4">Sample collection date </div>
            {/* <form onSubmit={handleSubmitSampleCollection}> */}
            <div className="col-span-4 md:col-span-2">
              {/* COLLECTION DATE */}
              <DateInput
                name="collectionDate"
                onChange={(date) => {
                  setCollectionDate(date);
                  setInputError((prev) => ({
                    ...prev,
                    collectionDate: "",
                  }));
                }}
                label={"Date"}
                selected={collectionDate}
                required
                max={new Date()}
                min={
                  investigation?.orderDate
                    ? new Date(investigation?.orderDate)
                    : null
                }
                errMsg={inputError?.collectionDate}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <TimeInput
                selected={collectionTime}
                onChange={(date) => {
                  setCollectionTime(date);
                  setInputError((prev) => ({ ...prev, collectionTime: "" }));
                }}
                label="Collection Time"
              />
            </div>

            {/* </form> */}
          </div>
          <div className="flex justify-center mt-8 w-full  gap-5">
            <button
              type="button"
              onClick={closeModal}
              className="transparent_btn"
            >
              Close
            </button>
            <button
              disabled={isLoading}
              onClick={handleSubmitSampleCollection}
              type="button"
              className="main_btn py-2 sm:py-3 disabled:bg-slate-400"
            >
              Save
            </button>
          </div>
        </DefaultModal>
      )}
    </div>
  );
};

export default SampleCollectedModal;

// const DataCard = ({
//   investigation,
// }: {
//   investigation: TypeMergeInvestigations;
// }) => {
//   const data = investigation?.result;
//   return (
//     <>
//       <div className=" border border-borderColor p-5 rounded-lg">
//         <DataRow title={"Date"} data={DateFunc.formatDate(data?.dateCreated)} />
//         <DataRow title={"Test"} data={investigation?.testNameDetails} />
//         <DataRow title={"Result"} data={investigation?.testResult} />
//         <DataRow title={"Unit"} data={investigation?.unitTest} />
//         <DataRow
//           title={"Reference Range"}
//           data={
//             data?.minumumRange &&
//             data?.maxumumRange &&
//             investigation?.unitTest &&
//             data?.minumumRange +
//               "-" +
//               data?.maxumumRange +
//               " / " +
//               // data?.unitTest
//               investigation?.unitTest
//           }
//         />
//         <DataRow
//           title={"Remark"}
//           data={
//             data?.isResultNormal && EnumIsResultNormal[data?.isResultNormal]
//           }
//         />
//         <DataRow title={"Comments"} data={data?.commentOnResult} />
//       </div>
//     </>
//   );
// };

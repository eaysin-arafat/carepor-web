import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { DateFunc } from "@/utilities/date";
import { filterBy24HoursCopy } from "@/utilities/transformation";
import { Loader } from "react-feather";
import ChiefComplaintsForm from "../chief-complaints-form/ChiefComplaintsForm";
import { CreateComplaintsAndHistoriesProps } from "../constant";
import useCreate from "./useCreate";

const CreateComplaintsAndHistories = ({
  toggler,
  encounterType,
}: CreateComplaintsAndHistoriesProps) => {
  const {
    complaintsAndHistoryData,
    errorMsg,
    filteredChiefComplaints,
    handleChange,
    handleSerostatusDisClosureChange,
    handleSubmit,
    isCreating,
    isLoading,
    serostatusDisclosure,
    status,
    handleEdit,
  } = useCreate({ encounterType });

  filterBy24HoursCopy;

  return (
    <DefaultModal
      title="Medical Encounter IPD (Complaints & Histories)"
      toggler={toggler}
      size="6xl"
    >
      <form onSubmit={handleSubmit}>
        <ChiefComplaintsForm
          complaintsAndHistoryData={complaintsAndHistoryData}
          errorMsg={errorMsg}
          handleChange={handleChange}
          handleSerostatusDisClosureChange={handleSerostatusDisClosureChange}
          serostatusDisclosure={serostatusDisclosure}
        />

        {/* DIVIDER */}
        <hr className="my-6" />

        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {/* LOADING SPINNER */}
          {isLoading && status === "pending" && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}

          {/* NO DATA MESSAGE */}
          {status === "fulfilled" && filteredChiefComplaints?.length === 0 && (
            <div className="flex justify-center items-center h-40">
              <p className="text-xl text-gray-500">No Past Record Found</p>
            </div>
          )}

          {filteredChiefComplaints?.slice(0, 10)?.map((item) => (
            <PastRecordWrapper
              isDeleteAble={false}
              isEditAble={DateFunc.isBetween24Hours(item?.dateCreated)}
              handleEdit={() => handleEdit(item)}
            >
              <PastRecordData
                title="Chief Complaints"
                data={item.chiefComplaints}
              />
              <PastRecordData
                title="History of Chief Complaints"
                data={item.historyOfChiefComplaint}
              />
            </PastRecordWrapper>
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={toggler} disableBoth={isCreating} />
        </div>
      </form>
    </DefaultModal>
  );
};

export default CreateComplaintsAndHistories;

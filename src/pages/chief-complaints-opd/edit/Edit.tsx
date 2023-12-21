import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";
import ChiefComplaintsForm from "../chief-complaints-form/ChiefComplaintsForm";
import { EditComplaintsAndHistoriesProps } from "../constant";
import useEdit from "./useEdit";

const EditComplaintsAndHistory = ({
  toggler,
  encounterType,
}: EditComplaintsAndHistoriesProps) => {
  const {
    complaintsAndHistoryData,
    errorMsg,
    handleChange,
    handleSerostatusDisClosureChange,
    handleSubmit,
    isUpdating,
    isLoading,
    serostatusDisclosure,
    status,
    editModal,
    editableData,
    handleEditItem,
  } = useEdit({ encounterType });

  return (
    <DefaultModal
      title="Medical Encounter IPD (Complaints & Histories)"
      toggler={toggler}
      size="6xl"
    >
      <form onSubmit={handleSubmit}>
        {editModal?.data && (
          <>
            <ChiefComplaintsForm
              complaintsAndHistoryData={complaintsAndHistoryData}
              errorMsg={errorMsg}
              handleChange={handleChange}
              handleSerostatusDisClosureChange={
                handleSerostatusDisClosureChange
              }
              serostatusDisclosure={serostatusDisclosure}
            />

            {/* DIVIDER */}
            <hr className="my-6" />
          </>
        )}

        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {/* LOADING SPINNER */}
          {isLoading && status === "pending" && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}

          {/* NO DATA MESSAGE */}
          {status === "fulfilled" && editableData?.length === 0 && (
            <div className="flex justify-center items-center h-40">
              <p className="text-xl text-gray-500">No Past Record Found</p>
            </div>
          )}

          {editableData?.map((item) => (
            <PastRecordWrapper
              isDeleteAble={false}
              isEditAble={true}
              handleEdit={() => handleEditItem(item)}
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
        {editModal?.data && (
          <div className="mt-5">
            <CancelAndAddButton toggler={toggler} disableBoth={isUpdating} />
          </div>
        )}
      </form>
    </DefaultModal>
  );
};

export default EditComplaintsAndHistory;

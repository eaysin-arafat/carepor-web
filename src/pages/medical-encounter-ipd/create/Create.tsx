import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import IpdComplaintsHistory from "@/components/medical-encounter-ipd/IpdComplaintsHistory";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import { ipdModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import FormLayout from "@/layout/FormLayout";
import { useDispatch, useSelector } from "react-redux";

const IPDCreate = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const handleChiefComplaints = () => {
    dispatch(
      openAddModal({
        modalId: ipdModalTypes.ipdCreateModal,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <FormLayout
      latestData={
        <PastRecordList
          title="Latest Encounter"
          isSubTitleShow
          subTitle="12-Dec-2023"
          isPastEncounter
        />
      }
    >
      <div>
        <FormHeading
          title="Presenting Complaints"
          modalHandler={handleChiefComplaints}
          isEdit
        />
        {addModal?.modalId === ipdModalTypes.ipdCreateModal && (
          <IpdComplaintsHistory toggler={closeModal} />
        )}
        <FormHeading
          title="Presenting Complaints"
          // modalHandler={handleChiefComplaints}
          isEdit={false}
        />
        <FormHeading
          title="Presenting Complaints"
          // modalHandler={handleChiefComplaints}
          isEdit
        />
      </div>
    </FormLayout>
  );
};

export default IPDCreate;

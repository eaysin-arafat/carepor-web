import { RootState } from "@/app/store";
import AdmissionDetailsCard from "@/components/admissions/AdmissionDetailsCard";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const AdmissionDetails = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <>
      <DefaultModal title="Admission Details" size="4xl" toggler={closeModal}>
        <AdmissionDetailsCard data={addModal?.data} />
      </DefaultModal>
    </>
  );
};

export default AdmissionDetails;

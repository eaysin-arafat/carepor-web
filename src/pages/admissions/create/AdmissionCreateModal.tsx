import Modal from "@/components/core/modal/Modal";
import { admissionModalTypes } from "@/constants/modal-types";
import AdmissionForm from "./AdmissionForm";

const AdmissionCreateModal = () => {
  return (
    <div>
      <Modal
        className="max-w-[1420px]"
        title="Admit Patient"
        addModalId={admissionModalTypes.addAdmission}
      >
        <div className="grid md:grid-cols-1 gap-5 mb-3">
          <div className="sm:border-2 border-lightGrayColor rounded-lg sm:px-5 my-3">
            <AdmissionForm />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdmissionCreateModal;

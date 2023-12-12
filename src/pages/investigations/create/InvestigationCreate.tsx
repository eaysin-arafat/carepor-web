import Modal from "@/components/core/modal/Modal";
import InvestigationCreateForm from "@/components/investigations/InvestigationCreateForm";
import { investigationModalTypes } from "@/constants/modal-types";

const InvestigationCreate = () => {
  return (
    <div>
      <Modal
        addModalId={investigationModalTypes.addInvestigation}
        title="Investigation"
        className="max-w-[1524px]"
      >
        <InvestigationCreateForm />
      </Modal>
    </div>
  );
};

export default InvestigationCreate;

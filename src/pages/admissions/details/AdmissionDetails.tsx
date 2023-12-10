import AdmissionDetailsCard from "@/components/admissions/AdmissionDetailsCard";
import Modal from "@/components/core/modal/Modal";
import { admissionModalTypes } from "@/constants/modal-types";

type Props = {};

const AdmissionDetails = ({}: Props) => {
  return (
    <div className="mt-5">
      <>
        <Modal
          className="max-w-[800px]"
          title="Admission Details"
          addModalId={admissionModalTypes.admissionDetails}
        >
          <AdmissionDetailsCard />
        </Modal>
      </>
    </div>
  );
};

export default AdmissionDetails;

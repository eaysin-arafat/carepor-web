import AdmissionDetailsCard from "@/components/admissions/AdmissionDetailsCard";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import DateInput from "@/components/core/form-elements/DatePicker";
import Textarea from "@/components/core/form-elements/textarea";
import Modal from "@/components/core/modal/Modal";
import { admissionModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch } from "react-redux";

const AdmissionDischarge = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      <Modal
        className="max-w-[1420px]"
        title="Admission Discharge "
        addModalId={admissionModalTypes.admissionDischarge}
      >
        <div className="my-5">
          <Container className="max-w-[1300px]">
            <div className="mx-3">
              <div className="grid gap-5 lg:grid-cols-2">
                <Card className="bg-whiteColor shadow-none border border-lightGrayColor md:px-5">
                  <h2 className="text-2xl font-semibold text-secondaryColor text-center">
                    Discharge Details
                  </h2>
                  <h2 className="text-sm text-center mt-2">
                    Fields marked by <span className="text-dangerColor">*</span>{" "}
                    are mandatory
                  </h2>
                  <form action="" className="mt-5">
                    <div className="grid gap-5">
                      <DateInput
                        // name="Admission Date"
                        label="Discharge Date"
                        required
                        onChange={() => {}}
                      />
                      <Textarea label="Discharge Note" max={500} />
                    </div>
                    <div className="mt-5">
                      <CancelAndAddButton toggler={closeModal} />
                    </div>
                  </form>
                </Card>

                <div className="border-2 border-lightGrayColor rounded-lg px-5">
                  <AdmissionDetailsCard />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Modal>
    </div>
  );
};

export default AdmissionDischarge;

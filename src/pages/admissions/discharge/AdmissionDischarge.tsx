import AdmissionDetailsCard from "@/components/admissions/AdmissionDetailsCard";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import DateInput from "@/components/core/form-elements/DatePicker";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import useDischarge from "./useDischarge";

const AdmissionDischarge = () => {
  const {
    closeModal,
    dischargeData,
    errMsg,
    handleDateChange,
    handleDischargeDataChange,
    handleSubmit,
    isLoading,
    editModal,
  } = useDischarge();

  return (
    <div>
      <DefaultModal title="Admission Discharge" size="7xl" toggler={closeModal}>
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
                  <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="grid gap-5">
                      <DateInput
                        required
                        label="Discharge Date"
                        selected={
                          dischargeData.ipdDischargeDate
                            ? new Date(dischargeData.ipdDischargeDate)
                            : null
                        }
                        errMsg={errMsg.ipdDischargeDate}
                        onChange={handleDateChange}
                      />
                      <Textarea
                        required
                        label="Discharge Note"
                        max={500}
                        name="dischargeNote"
                        errMsg={errMsg.dischargeNote}
                        value={dischargeData.dischargeNote}
                        onChange={handleDischargeDataChange}
                      />
                    </div>
                    <div className="mt-5">
                      <CancelAndAddButton
                        toggler={closeModal}
                        disableBoth={isLoading}
                      />
                    </div>
                  </form>
                </Card>

                <div className="border-2 border-lightGrayColor rounded-lg px-5">
                  <AdmissionDetailsCard data={editModal?.data} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </DefaultModal>
    </div>
  );
};

export default AdmissionDischarge;

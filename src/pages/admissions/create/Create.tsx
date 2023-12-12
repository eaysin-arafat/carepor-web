import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import DateInput from "@/components/core/form-elements/DatePicker";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import useCreate from "./useCreate";

const AdmissionCreateModal = () => {
  const {
    admissionData,
    beds,
    closeModal,
    departments,
    errMsg,
    firms,
    handleAdmissionDataChange,
    wards,
    handleSubmit,
    handleDateChange,
    isLoading,
  } = useCreate();

  // render department options
  const renderDepartmentOptions = () => {
    return departments?.map((department) => (
      <option key={department.oid} value={department.oid}>
        {department.description}
      </option>
    ));
  };

  // render firm options
  const renderFirmOptions = () => {
    return firms?.map((firm) => (
      <option key={firm.oid} value={firm.oid}>
        {firm.description}
      </option>
    ));
  };

  // render ward options
  const renderWardOptions = () => {
    return wards?.map((ward) => (
      <option key={ward.oid} value={ward.oid}>
        {ward.description}
      </option>
    ));
  };

  // render bed options
  const renderBedOptions = () => {
    return beds?.map((bed) => (
      <option key={bed.oid} value={bed.oid}>
        {bed.description}
      </option>
    ));
  };

  return (
    <DefaultModal title="Admit Patient" toggler={closeModal} size="6xl">
      <div className="grid md:grid-cols-1 gap-5 mb-3">
        <div className="sm:border-2 border-lightGrayColor rounded-lg sm:px-5 my-3">
          <form action="" className="mt-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-1">
                <DateInput
                  required
                  name="admissionDate"
                  label="Admission Date"
                  errMsg={errMsg.admissionDate}
                  selected={
                    admissionData.admissionDate
                      ? new Date(admissionData.admissionDate)
                      : null
                  }
                  onChange={handleDateChange}
                />
              </div>
              <div className="col-span-1">
                <Select
                  required
                  label="Department"
                  name="departmentID"
                  errMsg={errMsg.departmentID}
                  value={admissionData.departmentID}
                  onChange={handleAdmissionDataChange}
                >
                  {renderDepartmentOptions()}
                </Select>
              </div>
              <div className="col-span-1">
                <Select
                  required
                  label="Firm/Unit"
                  name="firmID"
                  errMsg={errMsg.firmID}
                  value={admissionData.firmID}
                  onChange={handleAdmissionDataChange}
                >
                  {renderFirmOptions()}
                </Select>
              </div>
              <div className="col-span-1">
                <Select
                  required
                  label="Ward"
                  name="wardID"
                  errMsg={errMsg.wardID}
                  value={admissionData.wardID}
                  onChange={handleAdmissionDataChange}
                >
                  {renderWardOptions()}
                </Select>
              </div>
              <div className="col-span-1">
                <Select
                  required
                  label="Bed"
                  name="bedID"
                  errMsg={errMsg.bedID}
                  value={admissionData.bedID}
                  onChange={handleAdmissionDataChange}
                >
                  {renderBedOptions()}
                </Select>
              </div>
              <div className="md:col-span-2">
                <Textarea
                  label="Additional Comments"
                  name="admissionNote"
                  errMsg={errMsg.admissionNote}
                  value={admissionData.admissionNote}
                  onChange={handleAdmissionDataChange}
                  placeholder="Additional Components"
                  max={500}
                />
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-4 mb-4">
              <OutlineButton
                title="Cancel"
                onClick={closeModal}
                buttonType="button"
                className="w-fit px-10 text-base sm:text-lg"
                disabled={isLoading}
              />
              <SubmitButton
                buttonType="submit"
                title="Save & Admit"
                className="w-fit text-base sm:px-10 sm:text-lg"
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </DefaultModal>
  );
};

export default AdmissionCreateModal;

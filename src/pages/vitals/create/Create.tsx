import DefaultModal from "../../../components/core/modal/DefaultModal";
import VitalForm from "../form/VitalForm";
import useCreate from "./useCreate";

const VitalsCreateForm = () => {
  const {
    closeModal,
    errorMessages,
    handleBmiChange,
    handleDateChange,
    handleHeadCircumferenceChange,
    handleMuacChange,
    handleSubmit,
    handleVitalDataChange,
    isLoading,
    vitalData,
    status,
  } = useCreate();

  return (
    <DefaultModal title="Patient Information" size="7xl" toggler={closeModal}>
      <form onSubmit={handleSubmit}>
        <VitalForm
          vitalData={vitalData}
          handleInputChange={handleVitalDataChange}
          handleDateChange={handleDateChange}
          errorMessages={errorMessages}
          handleBmiChange={handleBmiChange}
          handleHeadCircumferenceChange={handleHeadCircumferenceChange}
          handleMuacChange={handleMuacChange}
        />
        <div className="px-5 flex gap-5 justify-center md:justify-end my-5">
          {/* <CancelAndAddButton /> */}
          <button
            onClick={closeModal}
            className="transparent_btn px-5 py-2 md:py-2.5"
            disabled={isLoading || status === "pending"}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="main_btn py-2 md:py-2.5"
            disabled={isLoading || status === "pending"}
          >
            Save
          </button>
        </div>
      </form>
    </DefaultModal>
  );
};

export default VitalsCreateForm;

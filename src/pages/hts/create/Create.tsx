import DefaultModal from "@/components/core/modal/DefaultModal";
import HTSForm from "../hts-form/HTSForm";
import useHtsCreate from "./useHtsCreate";

const HtsCreateForm = () => {
  const {
    closeModal,
    errorMessages,
    handleDateChange,
    handleHtsDataChange,
    handleSubmit,
    htsData,
    isLoading,
    selectedOptions,
    setSelectedOptions,
    status,
  } = useHtsCreate();

  return (
    <DefaultModal title="HIV Test Services" toggler={closeModal} size="7xl">
      <form onSubmit={handleSubmit}>
        <HTSForm
          htsData={htsData}
          errorMessages={errorMessages}
          handleDateChange={handleDateChange}
          handleHtsDataChange={handleHtsDataChange}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />

        <div className="px-5 flex gap-5 justify-center md:justify-end mt-8 mb-2">
          <button
            onClick={closeModal}
            disabled={isLoading || status === "pending"}
            className="transparent_btn px-5 py-2 md:py-2.5"
          >
            Close
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

export default HtsCreateForm;

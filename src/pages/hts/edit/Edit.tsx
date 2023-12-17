import DefaultModal from "@/components/core/modal/DefaultModal";
import HTSForm from "../hts-form/HTSForm";
import useEdit from "./useEdit";

const EditHTS = () => {
  const {
    htsData,
    errorMessages,
    handleDateChange,
    handleHtsDataChange,
    handleSubmit,
    selectedOptions,
    setSelectedOptions,
    isLoading,
    status,
    closeModal,
  } = useEdit();

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

export default EditHTS;

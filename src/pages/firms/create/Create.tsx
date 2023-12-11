import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import useCreate from "./useCreate";

const CreateFirm = () => {
  const {
    errorMsg,
    firmName,
    handleFirmNameChange,
    handleSubmit,
    isLoading,
    toggler,
  } = useCreate();

  return (
    <DefaultOpenModal isShow={true} toggler={toggler}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <Input
            label="Firm Name"
            placeholder="Enter Firm Name"
            value={firmName}
            errMsg={errorMsg}
            onChange={handleFirmNameChange}
          />
        </div>
        <div>
          <CancelAndAddButton
            toggler={toggler}
            disableBoth={isLoading || status === "pending"}
          />
        </div>
      </form>
    </DefaultOpenModal>
  );
};

export default CreateFirm;

import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import useCreate from "./useCreate";

const CreateWard = () => {
  const {
    errMsg,
    handleSubmit,
    handleWardNameChange,
    isLoading,
    toggler,
    wardName,
    status,
  } = useCreate();

  return (
    <DefaultOpenModal isShow={true} toggler={toggler} title="Create ward">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <Input
            label="Ward Name"
            placeholder="Enter Ward Name"
            errMsg={errMsg}
            value={wardName}
            onChange={handleWardNameChange}
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

export default CreateWard;

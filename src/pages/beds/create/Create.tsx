import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import useCreate from "./useCreate";

const CreateBed = () => {
  const {
    bedName,
    errMsg,
    handleBedNameChange,
    handleSubmit,
    isLoading,
    toggler,
    status,
  } = useCreate();

  return (
    <DefaultOpenModal isShow={true} toggler={toggler} title="Create Bed">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <Input
            label="Bed name"
            placeholder="Enter Bed Name"
            errMsg={errMsg}
            onChange={handleBedNameChange}
            value={bedName}
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

export default CreateBed;

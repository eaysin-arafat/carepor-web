import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import useEdit from "./useEdit";

const EditBed = () => {
  const {
    bedName,
    errMsg,
    handleBedNameChange,
    handleSubmit,
    isLoading,
    status,
    toggler,
  } = useEdit();

  return (
    <DefaultOpenModal isShow={true} toggler={toggler} title="Edit Bed">
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

export default EditBed;

import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import useEdit from "./useEdit";

const EditDepartment = () => {
  const {
    departmentName,
    errorMsg,
    handleDepartmentNameChange,
    handleSubmit,
    isLoading,
    status,
    toggler,
  } = useEdit();

  return (
    <DefaultOpenModal isShow={true} toggler={toggler}>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <Input
            label="Department Name"
            placeholder="Enter Department Name"
            value={departmentName}
            errMsg={errorMsg}
            onChange={handleDepartmentNameChange}
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

export default EditDepartment;

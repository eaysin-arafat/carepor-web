import CancelButton from "@/components/core/buttons/CancelButton";
import SaveButton from "@/components/core/buttons/SaveButton";
import Input from "@/components/core/form-elements/Input";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";

const CreateDepartment = () => {
  // hooks
  const {
    departmentData,
    error,
    handleCancel,
    handleChange,
    handleSubmit,
    isLoading,
  } = useCreateDepartment();

  return (
    <DefaultOpenModal
      className="max-w-[700px] h-[45vh] "
      title="Department"
      handler={handleCancel}
    >
      <MainLayout className="border shadow pb-5" heading="New Department">
        <form onSubmit={handleSubmit}>
          <div className="p-5 pb-0">
            <Input
              required
              errMsg={error?.department}
              label="Department Name"
              value={departmentData?.department}
              onChange={handleChange}
              name="department"
            />
          </div>
          <div className="flex justify-center mt-4 gap-2">
            <SaveButton
              buttonText="Save"
              buttonType="submit"
              disabled={isLoading || status === "pending"}
            />
            <CancelButton
              buttonText="Cancel"
              buttonType="button"
              clickHandler={handleCancel}
              disabled={isLoading || status === "pending"}
            />
          </div>
        </form>
      </MainLayout>
    </DefaultOpenModal>
  );
};

export default CreateDepartment;

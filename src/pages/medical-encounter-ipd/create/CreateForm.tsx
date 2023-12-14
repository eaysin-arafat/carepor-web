import SelectContainer from "@/components/core/selectable-container/SelectContainer";

const CreateForm = () => {
  return (
    <form>
      <div>
        <SelectContainer selected={[]} />
        <SelectContainer selected={[]} />
        <hr />
        
      </div>
    </form>
  );
};

export default CreateForm;

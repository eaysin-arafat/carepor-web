import SelectableButton from "../buttons/SelectableButton";

interface SelectContainerProps {
  children?: React.ReactNode;
}

const SelectContainer = ({ children }: SelectContainerProps) => {
  return (
    <div>
      {children}
      <h1>Select & Add Symptoms</h1>
      <div className="flex gap-3 flex-wrap mt-2">
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
        <SelectableButton isActive />
        <SelectableButton />
      </div>
    </div>
  );
};

export default SelectContainer;

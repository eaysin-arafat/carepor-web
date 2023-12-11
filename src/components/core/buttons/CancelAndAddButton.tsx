interface CancelAndAddButtonProps {
  toggler?: () => void;
  disableBoth?: boolean;
}

const CancelAndAddButton = ({
  toggler = () => {},
  disableBoth,
}: CancelAndAddButtonProps) => {
  return (
    <div className="flex justify-end gap-4">
      <button
        className="flex gap-2 items-center  border border-gray-400 px-7 rounded-full text-lg"
        type="button"
        onClick={toggler}
        disabled={disableBoth}
      >
        Cancel
      </button>
      <button
        className="flex gap-2 items-center border border-[#1890FF] bg-[#1890FF] py-2.5  px-7 rounded-full"
        type="submit"
        disabled={disableBoth}
      >
        <span className="inline-block text-lg text-white">Save</span>
      </button>
    </div>
  );
};

export default CancelAndAddButton;

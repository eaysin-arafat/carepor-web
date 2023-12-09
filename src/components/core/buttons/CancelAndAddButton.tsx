const CancelAndAddButton = ({ toggler = () => {} }) => {
  return (
    <div className="flex justify-end gap-4">
      <button
        className="flex gap-2 items-center  border border-gray-400 px-7 rounded-full text-lg"
        type="button"
        onClick={toggler}
      >
        Cancel
      </button>
      <button
        className="flex gap-2 items-center border border-[#1890FF] bg-[#1890FF] py-2.5  px-7 rounded-full"
        type="submit"
      >
        <span className="inline-block text-lg text-white">Save</span>
      </button>
    </div>
  );
};

export default CancelAndAddButton;

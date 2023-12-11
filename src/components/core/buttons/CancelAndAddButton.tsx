const CancelAndAddButton = ({ toggler = () => {} }) => {
  return (
    <div className="flex justify-end gap-4">
      <button
        className="flex gap-2 items-center  border border-lightGrayColor hover:bg-lightGrayColor px-7 rounded-full text-lg"
        type="button"
        onClick={toggler}
      >
        Cancel
      </button>
      <button
        className="flex gap-2 items-center border border-primaryColor bg-primaryColor hover:bg-primaryHoverColor py-2 sm:py-2.5  px-10 rounded-full"
        type="submit"
      >
        <span className="inline-block text-lg text-whiteColor">Save</span>
      </button>
    </div>
  );
};

export default CancelAndAddButton;

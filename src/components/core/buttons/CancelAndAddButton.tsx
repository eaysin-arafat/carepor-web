interface CancelAndAddButtonProps {
  toggler?: () => void;
  disableBoth?: boolean;
  isUpdate?: boolean;
  disableSubmit?: boolean;
}

const CancelAndAddButton = ({
  toggler = () => {},
  disableBoth,
  isUpdate,
  disableSubmit,
}: CancelAndAddButtonProps) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        className="flex gap-2 items-center  border border-lightGrayColor bg-grayColor text-white hover:text-black hover:bg-lightGrayColor px-7 rounded-full text-lg"
        type="button"
        onClick={toggler}
        disabled={disableBoth}
      >
        Cancel
      </button>
      <button
        className="flex gap-2 items-center border border-primaryColor bg-primaryColor hover:bg-primaryHoverColor py-2 sm:py-2.5  px-10 rounded-full"
        type="submit"
        disabled={disableBoth || disableSubmit}
      >
        <span className="inline-block text-lg text-whiteColor">
          {isUpdate ? "Update" : "Save"}
        </span>
      </button>
    </div>
  );
};

export default CancelAndAddButton;

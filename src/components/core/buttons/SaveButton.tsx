import { CheckCircle } from "react-feather";

interface SaveButtonProps {
  clickHandler?: () => void;
  buttonText?: string;
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const SaveButton = ({
  clickHandler = () => {},
  buttonText = "Save",
  buttonType = "button",
  disabled = false,
}: SaveButtonProps) => {
  return (
    <button
      type={buttonType}
      onClick={clickHandler}
      className="btn main mx-2 rounded-md"
      disabled={disabled}
    >
      <CheckCircle size={22} /> {buttonText}
    </button>
  );
};

export default SaveButton;

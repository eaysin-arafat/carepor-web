import { XCircle } from "react-feather";

interface CancelButtonProps {
  buttonType?: "button" | "submit" | "reset";
  clickHandler?: () => void;
  buttonText?: string;
  disabled?: boolean;
}

const CancelButton = ({
  buttonType = "button",
  clickHandler = () => {},
  buttonText = "Cancel",
  disabled = false,
}: CancelButtonProps) => {
  return (
    <button
      type={buttonType}
      className="btn btn-ghost text-[var(--primary)] mx-2 rounded-md"
      onClick={clickHandler}
      disabled={disabled}
    >
      <XCircle size={22} /> {buttonText}
    </button>
  );
};

export default CancelButton;

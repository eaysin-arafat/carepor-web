import { cn } from "@/utilities/cn";

interface SubmitButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  buttonType?: "submit" | "button";
}

const SubmitButton = (props: SubmitButtonProps) => {
  /* Destructuring props */
  const {
    title,
    className,
    icon,
    disabled = false,
    onClick,
    loading = false,
    buttonType = "button",
  } = props;

  return (
    <button
      className={cn(
        `btn w-full text-whiteColor bg-primaryColor hover:bg-primaryHoverColor`,
        className
      )}
      type={buttonType}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        icon && <>{icon}</>
      )}
      {title}
    </button>
  );
};

export default SubmitButton;

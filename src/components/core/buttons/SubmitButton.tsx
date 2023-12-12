import { cn } from "@/utilities/cn";

interface SubmitButtonProps {
  title: string;
  onClick?: (e: any) => any;
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
        `btn text-white bg-buttonBg hover:bg-primaryHoverColor h-fit`,
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

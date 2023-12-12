import { cn } from "@/utilities/cn";

interface OutlineButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  buttonType?: "submit" | "button";
  loading?: boolean;
}

const OutlineButton = ({
  title,
  className,
  icon,
  loading = false,
  onClick,
  disabled = false,
  buttonType = "button",
}: OutlineButtonProps) => {
  return (
    <button
      className={cn(
        `btn w-full text-blackColor bg-buttonBg text-white hover:bg-slate-50 border-2 border-borderColor dark:border-gray-800 h-fit`,
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

export default OutlineButton;

import { cn } from "@/utilities/cn";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  title: string;
  link?: string;
  style?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const LinkButton = (props: LinkButtonProps) => {
  /* Destructuring props */
  const { title, link, style, className, icon, disabled = false } = props;

  return (
    <Link
      to={link!}
      style={style}
      className={cn("btn w-40 border-2 border-borderColor h-fit ", className, {
        "disabled_bg cursor-not-allowed": disabled,
        " bg-whiteColor hover:bg-borderColor text-blackColor": !disabled,
      })}
    >
      {icon} {title}
    </Link>
  );
};

export default LinkButton;

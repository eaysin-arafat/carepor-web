import { cn } from "@/utilities/cn";

type Props = {
  children?: any;
  title?: string;
  className?: string;
  image?: string;
  isImage?: boolean;
  icon?: boolean;
  titleClass?: string;
  imageClass?: string;
};

const Card = ({
  children,
  title,
  className,
  isImage,
  image,
  icon,
  titleClass = " ",
  imageClass = " ",
}: Props) => {
  return (
    <div className={cn("bg-borderColor rounded-lg shadow-md", className)}>
      {title && (
        <h2
          className={cn(
            "text-blackColor heading_2 text-2xl px-4 py-3 border-b flex items-center gap-2 rounded-t ",
            titleClass
          )}
        >
          {image && <img src={image} alt="Home" className={cn(" " , imageClass )} />}
          {icon && icon}
          {title}
        </h2>
      )}
      <div className={`${!isImage && "p-4"}`}>{children}</div>
    </div>
  );
};

export default Card;

export const CardBody = ({ children, className }: Props) => {
  return (
    <div className={cn("bg-whiteColor rounded-lg shadow-md", className)}>
      <div className="p-4">{children}</div>
    </div>
  );
};

export const CardFooter = ({ children, className }: Props) => {
  return (
    <div className={cn("bg-whiteColor rounded shadow-md", className)}>
      <div className={`px-4 py-3 border-t border-t-grayColor`}>{children}</div>
    </div>
  );
};

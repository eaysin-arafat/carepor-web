import { cn } from "@/utilities/cn";
import { MdOutlineEdit } from "react-icons/md";

type Props = {
  children?: any;
  title?: string;
  className?: string;
  image?: string;
  isImage?: boolean;
  icon?: boolean;
  titleClass?: string;
  imageClass?: string;
  view?: string;
  titleBorder?: string;
  edit?: boolean;
  editHandler?: React.MouseEventHandler<HTMLButtonElement>;
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
  view,
  titleBorder = " ",
  edit,
  editHandler,
}: Props) => {
  return (
    <div className={cn("bg-borderColor dark:bg-whiteBgColor rounded-lg shadow-md ", className)}>
      <div className={cn("flex justify-between", titleBorder)}>
        {title && (
          <h2
            className={cn(
              " heading_2 text-2xl px-4 py-3 flex items-center gap-2 rounded-t ",
              titleClass
            )}
          >
            {image && (
              <img src={image} alt="Home" className={cn(" ", imageClass)} />
            )}
            {icon && icon}
            {title}
          </h2>
        )}
        {view && (
          <>
            <button className="text-gray-500 text-base font-semibold px-4 py-3 font-poppins flex items-center gap-1">
              {view}{" "}
              <img
                src="/public/assets/icons/arrow-right.svg"
                alt=""
                className="
            "
              />
            </button>
          </>
        )}
        {edit && (
          <>
            <button onClick={editHandler} className="text-primaryColor text-base font-normal px-1 pt-3 me-4 font-poppins flex items-center gap-1">
              <MdOutlineEdit/>Edit
            </button>
          </>
        )}
      </div>
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

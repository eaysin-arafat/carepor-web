type Props = {
  children?: any;
  title?: string;
  className?: string;
  image?: string;
  isImage?: boolean;
  icon?: boolean;
};

const Card = ({ children, title, className, isImage, image , icon }: Props) => {
  return (
    <div className={`${className} bg-borderColor rounded-lg shadow-md`}>
      {title && (
        <h2 className="text-blackColor heading_2 text-2xl px-4 py-3 border-b border-b-grayColor flex items-center gap-2 rounded-t">
          {image && <img src={image} alt="Home" className="" />} 
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
    <div className={`${className} bg-whiteColor rounded shadow-md`}>
      <div className="p-4">{children}</div>
    </div>
  );
};

export const CardFooter = ({ children, className }: Props) => {
  return (
    <div className={`${className} bg-whiteColor rounded shadow-md`}>
      <div className={`px-4 py-3 border-t border-t-grayColor`}>{children}</div>
    </div>
  );
};

type Props = {
  children?: any;
  title?: string;
  className?: string;
  image?: string;
  isImage?: boolean;
};

const Card = ({ children, title, className, isImage }: Props) => {
  return (
    <div className={`${className} bg-whiteColor rounded border`}>
      {title && (
        <h2 className="text-blackColor px-4 py-3 border-b border-b-borderColor rounded-t">
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
      <div className={`px-4 py-3 border-t border-t-borderColor`}>{children}</div>
    </div>
  );
};
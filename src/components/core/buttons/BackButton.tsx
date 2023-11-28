import React, { ReactNode, ReactElement } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'; // Assuming you are using react-router

type ButtonProps = {
  type: "link" | "button" ;
  title: string;
  link?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

const BackButton = ({
  type,
  title,
  link,
  style,
  className,
  onClick,
  icon,
}: ButtonProps): ReactElement => {
  switch (type) {
    case "link":
      return (
        <Link
          to={link!}
          style={style}
          className={` btn w-40 border-2 border-borderColor text-blackColor bg-whiteColor ${className}`}
        >
          {icon} {title}
        </Link>
      );

    case "button":
      return (
        <button
          className={`btn w-40 border-2 border-borderColor text-blackColor bg-whiteColor hover:bg-borderColor ${className}`}
          type="button"
          style={style}
          onClick={onClick}
        >
          {icon} {title}
        </button>
      );

    default:
      throw new Error("Invalid button type");
  }
};

export default BackButton;

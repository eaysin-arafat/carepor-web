import React, { ReactNode, ReactElement } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'; // Assuming you are using react-router

type ButtonProps = {
  type: "link" | "button" | "submit" ;
  title: string;
  link?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  loading?: boolean;
};

const NextButton = ({
  type,
  title,
  link,
  style,
  className,
  onClick,
  icon,
  loading=false,
}: ButtonProps): ReactElement => {
  switch (type) {
    case "link":
      return (
        <Link
          to={link!}
          style={style}
          className={` btn w-full border-2 border-primaryColor text-whiteColor bg-primaryColor ${className}`}
        >
          {icon} {title}
        </Link>
      );

    case "button":
      return (
        <button
          className={`btn w-40 border-2 border-primaryColor text-whiteColor bg-primaryColor hover:bg-primaryHoverColor ${className} `}
          type="button"
          style={style}
          onClick={onClick}
        >
          {icon} {title}
        </button>
      );

    case "submit":
      return (
        <button
        className={`btn w-40 text-whiteColor bg-primaryColor hover:bg-primaryHoverColor ${className}`}
        type="submit"
        disabled={loading}
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
      

    default:
      throw new Error("Invalid button type");
  }
};

export default NextButton;

import React, { ReactElement, ReactNode } from "react";
// import { Link } from 'react-router-dom'; // Assuming you are using react-router

type ButtonProps = {
  type: "submit" | "link" | "button" | "outline";
  title: string;
  link?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  loading?: boolean;
};

/**
 *
 * @param type submit | link | outline | button
 * @param title Button Title
 * @param link Button Link
 * @param style CSS
 * @param className Class
 * @param onClick Function
 * @param icon Icon Component
 * @param loading Loading State
 * @returns
 */

const Button = ({
  type,
  title,
  link,
  style,
  className,
  onClick,
  icon,
  loading,
}: ButtonProps): ReactElement => {
  switch (type) {
    case "submit":
      return (
        <button
          className={`btn w-full text-whiteColor bg-primaryColor hover:bg-primaryHoverColor ${className}`}
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

    case "outline":
      return (
        <button
          className={`btn w-full text-blackColor bg-whiteColor hover:bg-slate-50 border-2 border-borderColor ${className}`}
          type="button"
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

    case "link":
      return (
        <a
          href={link!}
          style={style}
          className={`${className} btn w-full text-whiteColor bg-primaryColor `}
        >
          {icon} {title}
        </a>
      );

    case "button":
      return (
        <button
          className={`btn w-full text-whiteColor bg-primaryColor hover:bg-primaryHoverColor ${className}`}
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

export default Button;

import React, { ReactNode, ReactElement } from 'react';
// import { Link } from 'react-router-dom'; // Assuming you are using react-router

type ButtonProps = {
  type: 'submit' | 'link' | 'button';
  title: string;
  link?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  loading?: boolean;
};

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
    case 'submit':
      return (
        <button
          className={`btn text-whiteColor bg-primaryColor hover:bg-primaryHoverColor ${className}`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <span
              className="loading loading-spinner"
            />
          ) : (
            icon && <>{icon}</>
          )}
          {title}
        </button>
      );

    case 'link':
      return (
        <a href={link!} style={style} className={`${className} btn text-whiteColor bg-primaryColor hover:bg-primaryHoverColor `}>
          {icon} {title}
        </a>
      );

    case 'button':
      return (
        <button
          className={`btn text-whiteColor bg-primaryColor hover:bg-primaryHoverColor ${className}`}
          type="button"
          style={style}
          onClick={onClick}
        >
          {icon} {title}
        </button>
      );

    default:
      throw new Error('Invalid button type');
  }
};

export default Button;

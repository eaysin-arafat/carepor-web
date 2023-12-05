// Breadcrumb.tsx
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface BreadcrumbItemProps {
  href?: string;
  text: string;
  active?: boolean;
  noIcon?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href,
  text,
  noIcon,
  active = false,
}) => {
  const linkClass = `inline-flex items-center text-sm font-medium ${
    active
      ? "text-blue-500"
      : "text-gray-700 dark:text-gray-400 dark:hover:text-white"
  }`;

  return (
    <li className="inline-flex items-center">
      {href ? (
        <Link to={href} className={`${linkClass} `}>
          {!noIcon && <IoIosArrowForward className="me-1" />}
          {text}
        </Link>
      ) : (
        <button className={`${linkClass} `}>
          {!noIcon && <IoIosArrowForward className="me-1" />}
          {text}
        </button>
      )}
    </li>
  );
};
export default BreadcrumbItem;

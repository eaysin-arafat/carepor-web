import React from "react";
import { BsPlusCircle } from "react-icons/bs";

type CardProps = {
  title: string;
  icon: JSX.Element;
  children: JSX.Element;
  handler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const DashboardCard = ({ icon, title, children, handler }: CardProps) => {
  return (
    <div className="bg-whiteBgColor rounded-lg shadow-light p-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-gray-100 text-primaryColor dark:bg-gray-800 p-2 rounded-md">
            {icon}
          </div>
          <h2 className="text-base font-medium text-secondaryColor capitalize">
            {title}
          </h2>
        </div>
        <button onClick={handler}>
          <BsPlusCircle className="text-primaryColor text-xl font-bold" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default DashboardCard;

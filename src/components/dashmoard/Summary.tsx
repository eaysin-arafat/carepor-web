import React from "react";
import { BsHospital } from "react-icons/bs";
import DashboardCard from "./DashboardCard";
import DashboardDataRow from "./DashboardDataRow";

const DashboardSummary: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-5">
      <DashboardCard title="Service Queue" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
      <DashboardCard title="Lab Orders" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
      <DashboardCard title="Vitals" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
      <DashboardCard title="Medications" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
      <DashboardCard title="Diagnosis" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
      <DashboardCard title="Encounters" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
      <DashboardCard title="Past Medical Problems" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
    </div>
  );
};

export default DashboardSummary;

// type CardProps = {
//   title: string;
//   icon: JSX.Element;
//   children: JSX.Element;
//   handler?:  (event: React.MouseEvent<HTMLButtonElement>) => void;
// };

// const Card = ({ icon, title, children , handler }: CardProps) => {
//   return (
//     <div className="bg-whiteBgColor rounded-lg shadow-light p-5">
//       <div className="flex justify-between items-center">
//         <div className="flex gap-2 items-center">
//           <div className="bg-gray-100 text-primaryColor dark:bg-gray-800 p-2 rounded-md">
//             {icon}
//           </div>
//           <h2 className="text-base font-medium text-secondaryColor capitalize">{title}</h2>
//         </div>
//         <button onClick={handler}>
//           <BsPlusCircle className="text-primaryColor text-xl font-bold" />
//         </button>
//       </div>
//       {children}
//     </div>
//   );
// };

// type DataRowProps = {
//   title: string;
//   value?: string;
// };

// const DataRow = ({ title, value }: DataRowProps) => {
//   return (
//     <div className="mt-5">
//       <h2 className="text-black dark:text-white/80  font-medium text-sm capitalize">
//         {title}
//       </h2>
//       <h2 className="text-gray-400 font-medium text-sm dark:text-gray-500 capitalize">
//         {value}
//       </h2>
//     </div>
//   );
// };

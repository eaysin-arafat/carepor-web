import Diagnosis from "@/assets/icons/Diagnosis";
import HTSStatus from "@/assets/icons/HTSStatus";
import HeartBit from "@/assets/icons/HeartBit";
import LabOrder from "@/assets/icons/Laborder";
import Medication from "@/assets/icons/Medication";
import DataSummaryItem from "./DataSummaryItem";
import PastRecordList from "../past-record-list/PastRecordList";

type Props = {
  isResponsive?: boolean;
};
const DataSummaryList = ({ isResponsive }: Props) => {
  return (
    // <div className="w-full">
    //   <div className="bg-whiteBgColor rounded-lg shadow-light pb-4">
    //     <h1 className="text-secondaryColor bg-lightBlueColor border-b border-b-primaryColor font-semibold font-poppins py-2.5 px-5">
    //       Recent Data Summary
    //     </h1>
    //     <div className="flex flex-col gap-5 px-5 py-2">
    //       <DataSummaryItem
    //         title="HTS Status"
    //         Icon={<HTSStatus size={16} color="#1890FF" />}
    //       />
    //       <DataSummaryItem
    //         title="Medications"
    //         Icon={<Medication size={16} color="#1890FF" />}
    //       />
    //       <DataSummaryItem
    //         title="Lab Orders"
    //         Icon={<LabOrder size={20} color="#1890FF" />}
    //       />
    //       <DataSummaryItem
    //         title="Vitals"
    //         Icon={<HeartBit size={18} color="#1890FF" />}
    //       />
    //       <DataSummaryItem
    //         title="Diagnoses"
    //         Icon={<Diagnosis size={18} color="#1890FF" />}
    //       />
    //     </div>
    //   </div>
    // </div>
    <PastRecordList
      title="Recent Data Summary"
      isAccordion={isResponsive && true}
    />
  );
};

export default DataSummaryList;
// import Diagnosis from "@/assets/icons/Diagnosis";
// import HTSStatus from "@/assets/icons/HTSStatus";
// import HeartBit from "@/assets/icons/HeartBit";
// import LabOrder from "@/assets/icons/Laborder";
// import Medication from "@/assets/icons/Medication";
// import DataSummaryItem from "./DataSummaryItem";

// const DataSummaryList = () => {
//   return (
//     <div className="col-span-2 col-start-11">
//       <div className="box_shadow_2 pb-4">
//         <h1 className="text-center text-secondaryColor font-semibold font-poppins py-2.5 border-b border-b-[#1890FF80]">
//           Data Summary
//         </h1>
//         <div className="flex flex-col gap-5 px-5 py-2">
//           <DataSummaryItem
//             title="HTS Status"
//             Icon={<HTSStatus size={16} color="#1890FF" />}
//           />
//           <DataSummaryItem
//             title="Medications"
//             Icon={<Medication size={16} color="#1890FF" />}
//           />
//           <DataSummaryItem
//             title="Lab Orders"
//             Icon={<LabOrder size={20} color="#1890FF" />}
//           />
//           <DataSummaryItem
//             title="Vitals"
//             Icon={<HeartBit size={18} color="#1890FF" />}
//           />
//           <DataSummaryItem
//             title="Diagnoses"
//             Icon={<Diagnosis size={18} color="#1890FF" />}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataSummaryList;

import HTSStatus from "@/assets/icons/HTSStatus";

const DataSummaryItem = ({
  title = "title",
  Icon = <HTSStatus size={16} color="#1890FF" />,
}) => {
  return (
    <div className="space-y-1 animate__animated animate__fadeInRight">
      <h1 className="flex items-center gap-2 font-medium font-poppins">
        <span className="inline-block ">{Icon}</span>
        <span className="inline-block">{title}</span>
      </h1>
      <div className="text-xs">
        Test Date: &nbsp;{" "}
        <span className="font-semibold inline-block">14-Nov-2023</span> Test
        Date: &nbsp;{" "}
        <span className="font-semibold inline-block">14-Nov-2023 </span>
        Test Date: &nbsp;
        <span className="font-semibold inline-block"> 14-Nov-2023</span>
      </div>
    </div>
  );
};

export default DataSummaryItem;
// import HTSStatus from "@/assets/icons/HTSStatus";

// const DataSummaryItem = ({
//   title = "title",
//   Icon = <HTSStatus size={16} color="#1890FF" />,
// }) => {
//   return (
//     <div className="space-y-1 animate__animated animate__fadeInRight">
//       <h1 className="flex items-center gap-2 font-medium font-poppins">
//         <span className="inline-block rounded bg-gray-100">{Icon}</span>
//         <span className="inline-block">{title}</span>
//       </h1>
//       <div className="text-xs">
//         Test Date: &nbsp;{" "}
//         <span className="font-semibold inline-block">14-Nov-2023</span> Test
//         Date: &nbsp;{" "}
//         <span className="font-semibold inline-block">14-Nov-2023 </span>
//         Test Date: &nbsp;
//         <span className="font-semibold inline-block"> 14-Nov-2023</span>
//       </div>
//     </div>
//   );
// };

// export default DataSummaryItem;

import { cn } from "@/utilities/cn";
import React from "react";

type Props = {
  title: string;
  data: string | number;
  titleClass?: string;
  dataClass?: string;
  isHideOnEmptyData?: boolean;
};

const DataRow: React.FC<Props> = ({
  title,
  data,
  titleClass,
  dataClass,
  isHideOnEmptyData,
}) => {
  if (isHideOnEmptyData && !data) {
    return false;
  }
  return (
    <div className="flex items-start justify-end xs:justify-start">
      <div
        className={cn(
          "min-w-[50%] xs:min-w-[145px] max-w-[145px] flex justify-between mr-5 items-start text-textColor text-sm py-2",
          titleClass
        )}
      >
        <div>{title}</div>
        <div className="hidden xs:block ">:</div>
      </div>
      <div
        className={cn(
          "w-full md:w-[100%] flex gap-2 items-center  text-textColor justify-end xs:justify-start text-right xs:text-left text-base py-2",
          dataClass
        )}
      >
        <div className="text-base whitespace-pre-wrap">{data}</div>
      </div>
    </div>
  );
};

export default DataRow;

// import { cn } from "@/utilities/cn";
// import React from "react";

// type Props = {
//   title: string;
//   data: string | number;
//   titleClass?: string;
//   dataClass?: string;
// };

// const DataRow: React.FC<Props> = ({ title, data, titleClass, dataClass }) => {
//   return (
//     <div className="flex items-start justify-end xs:justify-start">
//       <div
//         className={cn(
//           "w-full xs:w-[50%] md:w-[50%] max-w-[350px] flex justify-between mr-5 items-start text-black dark:text-gray-300 text-sm py-2",
//           titleClass
//         )}
//       >
//         <div>{title}</div>
//         <div className="hidden xs:block ">:</div>
//       </div>
//       <div
//         className={cn(
//           "w-full md:w-[100%] flex gap-2 items-center  text-black dark:text-gray-300 justify-end xs:justify-start text-right xs:text-left text-base py-2",
//           dataClass
//         )}
//       >
//         <div className="text-lg ">{data}</div>
//       </div>
//     </div>
//   );
// };

// export default DataRow;

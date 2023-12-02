import { cn } from "@/utilities/cn";
import React from "react";

type Props = {
  title: string;
  data: string;
  titleClass?: string;
  dataClass?: string;
};

const DataRow: React.FC<Props> = ({ title, data, titleClass, dataClass }) => {
  return (
    <div className="flex items-center justify-end xs:justify-start">
      <div
        className={cn("w-full xs:w-[50%] md:w-[50%] max-w-[350px] text-sm py-2", titleClass)}
      >
        {title}
      </div>
      <div
        className={cn(
          "w-full md:w-[50%] flex gap-2 items-center justify-end xs:justify-start text-base py-2",
          dataClass
        )}
      >
        <div className="hidden xs:block">:</div>
        <div className="text-lg">{data}</div>
      </div>
    </div>
  );
};

export default DataRow;

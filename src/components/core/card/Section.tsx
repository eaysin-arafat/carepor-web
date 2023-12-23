import { cn } from "@/utilities/cn";
import React from "react";

type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ title, children, className }: Props) => {
  return (
    <div
      className={cn("border border-borderColor rounded-lg mt-5 p-4", className)}
    >
      <h2
        className={cn("text-secondaryColor text-lg lg:text-xl font-medium ", {
          "mb-4": title,
        })}
      >
        {title}
      </h2>
      <div className="">{children}</div>
    </div>
  );
};

export default Section;

// import React from 'react'

import { cn } from "@/utilities/cn";

type Props = {
  children: JSX.Element;
  className?: string;
};

const Container = ({ children, className, }: Props) => {
  return (
    <div className={cn(`max-w-[1340px] mx-auto`, className)}>
      {children}
    </div>
  );
};

export default Container;

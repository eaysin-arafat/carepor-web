import React from "react";

type Props = {
  children?: React.ReactNode;
  message?: string;
  title?: string;
};

const RequestError = ({ children, title, message }: Props) => {
  return (
    <div>
      <div className="text-xl text-dangerColor">{title || "Error!"}</div>
      <div className="text-lg">{message || "There was an error!"}</div>
      <div>{children}</div>
    </div>
  );
};

export default RequestError;

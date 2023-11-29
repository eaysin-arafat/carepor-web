import Title from "@/components/core/titles/Titles";
import { Alert } from "flowbite-react";

function Test() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title title="Hello SmartCare PRO" type="h1" />
        <Alert color="failure" withBorderAccent>
          <span className="font-medium">Info alert!</span> Change a few things
          up and try submitting again.
        </Alert>
      </div>
    </div>
  );
}

export default Test;

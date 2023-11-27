import Input from "@/components/core/form-elements/Input";
import FormLayout from "@/components/core/form-layouts/FormLayout";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import { useState } from "react";

function Test() {
  const [count, setCount] = useState(1);
  const stepTitle = [
    "Personal <br /> Information",
    "Contact <br /> Information",
    "Login <br /> Information",
    "Login <br /> Information",
    "Login <br /> Information",
    "Login <br /> Information",
    "Login <br /> Information",
  ];

  const handleBack = () => {
    setCount((prev) => prev - 1);
  };
  const handleNext = () => {
    setCount((next) => next + 1);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "1500px",
        margin: "auto",
      }}
    >
      <div className="w-[1000px] m-auto">
        <MultiStepComponent active={count} title={stepTitle} />
      </div>
      <FormLayout
        className="min-w-[1300px] mt-10"
        subTitle="Client Profile Registration"
      >
        <div className="mt-5">
          {count === 1 && (
            <div className="grid grid-cols-2 gap-5">
              <Input label="Signup" />
              <Input label="Signup" />
              <Input label="Signup" />
              <Input label="Signup" />
              <Input label="Signup" />
              <Input label="Signup" />
            </div>
          )}
          {count === 2 && (
            <div className="grid grid-cols-2 gap-5">
              <Input label="Signup" />
              <Input label="Signup" />
            </div>
          )}
          <div className="flex gap-5">
            <button className="btn bg-slate-500 mt-5" onClick={handleBack}>
              {" "}
              Back{" "}
            </button>
            <button className="btn bg-slate-500 mt-5" onClick={handleNext}>
              {" "}
              Next{" "}
            </button>
          </div>
        </div>
      </FormLayout>
    </div>
  );
}

export default Test;

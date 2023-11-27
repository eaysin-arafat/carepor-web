import Input from "@/components/core/form-elements/Input";
import FormLayout from "@/components/core/form-layouts/FormLayout";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";

function Test() {
  const stepTitle = [
    "Personal <br /> Information",
    "Parents or <br /> Guardian Details",
    "Parents or <br /> Guardian Details",
    "Parents or <br /> Guardian Details",
    "Parents or <br /> Guardian Details",
    "Parents or <br /> Guardian Details",
    "Parents or <br /> Guardian Details",
  ];
  return (
    <div
      style={{
        height: "100vh",
        width: "1500px",
        margin: "auto",
      }}
    >
      <MultiStepComponent active={1} title={stepTitle} />
      <FormLayout
        className="min-w-[1300px]"
        subTitle="Client Profile Registration"
      >
        <div className="mt-5">
          <div className="grid grid-cols-2 gap-5">
            <Input label="Signup" />
            <Input label="Signup" />
            <Input label="Signup" />
            <Input label="Signup" />
            <Input label="Signup" />
            <Input label="Signup" />
          </div>
        </div>
      </FormLayout>
    </div>
  );
}

export default Test;

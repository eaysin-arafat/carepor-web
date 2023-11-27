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
    "Parents or <br /> Guardian Details",
    "Parents or <br /> Guardian Details",
    "Parents or <br /> Guardian Details",
  ];
  return (
    <div
      style={{
        height: "100vh",
        width: "1500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <MultiStepComponent active={2} title={stepTitle} />
    </div>
  );
}

export default Test;

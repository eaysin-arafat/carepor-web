import ModuleStepping from "@/components/shared/multi-step/ModuleStepping";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";
import { useState } from "react";
import PepComplaintsHistory from "../complaints-history/ComplaintsHistory";
import PepExaminationAndDiagnosis from "../examination-diagnosis/ExaminationDiagnosis";
import PepGynAndObs from "../gyn-and-obs/GynObs";
import PepPaediatricHistory from "../paediatric/PaediatricHistory";
import PepPlan from "../plan/Plan";

const PepCreate = () => {
  const data = [
    { label: "Complaints & Histories", content: <PepComplaintsHistory /> },
    { label: "Paediatric History", content: <PepPaediatricHistory /> },
    { label: "Gyn & Obs Histories", content: <PepGynAndObs /> },
    {
      label: "Examination & Diagnosis",
      content: <PepExaminationAndDiagnosis />,
    },
    { label: "Plan", content: <PepPlan /> },
  ];
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index === activeTab ? index : index);
  };

  const handleBack = () => {
    setActiveTab((prevTab) => Math.max(prevTab - 1, 0));
  };

  const handleSkip = () => {
    setActiveTab((prevTab) => Math.min(prevTab + 1, data.length - 1));
  };

  return (
    <FormLayout
      latestData={
        <PastRecordList
          title="Latest Encounter"
          isSubTitleShow
          subTitle="12-Dec-2023"
          isPastEncounter
        />
      }
    >
      <>
        <div className="mb-5">
          <ModuleStepping
            breadcrumbs={data}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
        </div>
        <div className="flex flex-row justify-center  gap-3 ">
          <button
            onClick={handleBack}
            className="transparent_btn hover:bg-borderColor"
          >
            Back
          </button>
          <button onClick={handleSkip} className="main_btn">
            Skip
          </button>
        </div>
      </>
    </FormLayout>
  );
};

export default PepCreate;

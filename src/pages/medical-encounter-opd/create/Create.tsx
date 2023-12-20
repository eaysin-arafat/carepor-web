import ModuleStepping from "@/components/shared/multi-step/ModuleStepping";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";
import { useState } from "react";
import OpdComplaintsHistory from "../complaints-history/ComplaintsHistory";
import OpdExaminationAndDiagnosis from "../examination-diagnosis/ExaminationDiagnosis";
import OpdGynAndObs from "../gyn-and-obs/GynObs";
import OpdPaediatricHistory from "../paediatric/PaediatricHistory";
import OpdPlan from "../plan/Plan";

const OpdCreate = () => {
  const data = [
    { label: "Complaints & Histories", content: <OpdComplaintsHistory /> },
    { label: "Paediatric History", content: <OpdPaediatricHistory /> },
    { label: "Gyn & Obs Histories", content: <OpdGynAndObs /> },
    {
      label: "Examination & Diagnosis",
      content: <OpdExaminationAndDiagnosis />,
    },
    { label: "Plan", content: <OpdPlan /> },
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

export default OpdCreate;

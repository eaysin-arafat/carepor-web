import ModuleStepping from "@/components/shared/multi-step/ModuleStepping";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";

function FamilyPlaningCreate() {
  // data
  // const data = [
  //   { label: "Family Plan Register", content: <FamilyPlanRegister /> },
  //   { label: "Complaints & Histories", content: <ComplaintsAndHistories /> },
  //   { label: "Gyn & Obs Histories", content: <GynAndObsHistories /> },
  //   { label: "Examination & Diagnosis", content: <ExaminationAndDiagnosis /> },
  //   { label: "Plan", content: <FPlan /> },
  // ];

  return (
    <div>
      <FormLayout
        latestData={
          <PastRecordList
            title="Latest Family Plan"
            isSubTitleShow
            subTitle="12-Dec-2023"
            isPastEncounter
          />
        }
      >
        <div className="col-span-6 mb-5">
          <ModuleStepping />
        </div>
      </FormLayout>
    </div>
  );
}

export default FamilyPlaningCreate;

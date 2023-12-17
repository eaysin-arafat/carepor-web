import ModuleStepping from "@/components/shared/multi-step/ModuleStepping";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import FormLayout from "@/layout/FormLayout";
import OpdComplaintsHistory from "../complaints-history/ComplaintsHistory";
import OpdExaminationAndDiagnosis from "../examination-diagnosis/ExaminationDiagnosis";
import OpdGynAndObs from "../gyn-and-obs/GynObs";
import OpdPaediatricHistory from "../paediatric/PaediatricHistory";
import OpdPlan from "../plan/Plan";

const OpdCreate = () => {
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
      <div>
        <div className="mb-5">
          <ModuleStepping />
        </div>
        <OpdComplaintsHistory />

        <br />
        <h2>Opd Paediatric History</h2>
        <br />
        <OpdPaediatricHistory />

        <br />
        <h2>Opd Gyn And Obs</h2>
        <br />
        <OpdGynAndObs />

        <br />
        <h2>Opd Examination And Diagnosis</h2>
        <br />
        <OpdExaminationAndDiagnosis />

        <br />
        <h2>Opd Plan</h2>
        <br />
        <OpdPlan />
      </div>
    </FormLayout>
  );
};

export default OpdCreate;

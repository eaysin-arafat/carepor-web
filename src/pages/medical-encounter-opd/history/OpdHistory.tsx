import MasterDetails from "@/components/shared/master-details/MasterDetails";
import { URLOPDCreate } from "@/routers/module-link";

const OPDHistory = () => {
  return (
    <div>
      <h2 className="heading_2 mb-7">History of Medical Encounter</h2>
      <MasterDetails link={URLOPDCreate()} />
    </div>
  );
};

export default OPDHistory;

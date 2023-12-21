import MasterDetails from "@/components/shared/master-details/MasterDetails";
import { URLPepCreate } from "@/routers/module-link";

const PepHistory = () => {
  return (
    <div>
      <h2 className="heading_2 mb-7">History of PEP</h2>
      <MasterDetails link={URLPepCreate()} />
    </div>
  );
};

export default PepHistory;

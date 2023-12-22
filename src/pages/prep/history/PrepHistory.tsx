import MasterDetails from "@/components/shared/master-details/MasterDetails";
import { URLPrepCreate } from "@/routers/module-link";

const PrepHistory = () => {
  return (
    <div>
      <h2 className="heading_2 mb-7">History of PrEP</h2>
      <MasterDetails link={URLPrepCreate()} />
    </div>
  );
};

export default PrepHistory;

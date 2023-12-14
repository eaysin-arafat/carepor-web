import MasterDetails from "@/components/shared/master-details/MasterDetails";
import { URLIPD } from "@/routers/module-link";

function IPDHistry() {
  return (
    <>
      <h2 className="heading_2 mb-7">History of Medical Encounter IPD</h2>
      <MasterDetails link={URLIPD()} />
    </>
  );
}

export default IPDHistry;

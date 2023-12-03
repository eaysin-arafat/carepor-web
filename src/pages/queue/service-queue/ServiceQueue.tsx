import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import useWindowWidth from "@/hooks/useWindow";

function ServiceQueue() {
  const w900 = useWindowWidth(900);
  const w550 = useWindowWidth(550);
  return (
    <div className="border p-5 bg-whiteBgColor rounded-md shadow">
      <h1 className="text-3xl mb-4">Service Queue</h1>
      <div
        className={`grid ${
          w900 ? (w550 ? "grid-cols-1" : "grid-cols-2") : "grid-cols-4"
        } gap-3 justify-between`}
      >
        <div className="w-full">
          <Input label="Client Name" placeholder="Search..." />
        </div>
        <div className="w-full">
          <Select label="Service Area"></Select>
        </div>
        <div className="w-full">
          <Select label="Urgency">
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="emergency">Emergency</option>
          </Select>
        </div>
        <div className="w-full">
          <Select label="Provider"></Select>
        </div>
      </div>
    </div>
  );
}

export default ServiceQueue;

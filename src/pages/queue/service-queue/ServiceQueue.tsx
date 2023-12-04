import Badge from "@/components/core/badge/Badge";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import useWindowWidth from "@/hooks/useWindow";
import { Avatar, Dropdown } from "flowbite-react";

function ServiceQueue() {
  const w900 = useWindowWidth(900);
  const w550 = useWindowWidth(550);
  return (
    <>
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

      <div className="border p-5 bg-whiteBgColor rounded-md shadow mt-5">
        <h1 className="text-2xl mb-4 flex items-center gap-3">
          OPD
          <Badge type="circle" value={10} />
        </h1>

        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default ServiceQueue;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion } from "flowbite-react";
import { FaChartPie } from "react-icons/fa6";

function DropdownList({ item }) {
  return (
    <Accordion
      className="border-none rounded-[1px] overflow-auto"
      style={{ borderRadius: "0px" }}
    >
      {item.map((list: any, index: number) => (
        <Accordion.Panel className="border-none rounded-none" key={index}>
          <Accordion.Title className="p-3 border-none outline-none hover:bg-primaryColor active:text-white focus:bg-primaryColor hover:text-white active:bg-primaryColor rounded-none">
            <div className="flex items-center gap-2">
              {list.icon ? (
                <img src={item.icon} alt="" className="h-[30px] w-[30px]" />
              ) : (
                <FaChartPie size={20} />
              )}
              {list.title}
            </div>
          </Accordion.Title>
          {/* <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              An open-source library of interactive components
            </p>
          </Accordion.Content> */}
        </Accordion.Panel>
      ))}
    </Accordion>
  );
}

export default DropdownList;

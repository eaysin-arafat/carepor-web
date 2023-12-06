import { cn } from "@/utilities/cn";
import { Dropdown } from "flowbite-react";
import { Calendar } from "react-feather";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const ClientDetailsCard = ({ className }: Props) => {
  return (
    <div>
      <div
        className={cn(
          "flex flex-wrap bg-lightBlueColor gap-2 py-6 justify-between box_shadow_2 rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
          className
        )}
      >
        <div className="w-[50%] lg:w-40">
          <h1 className="text-xl font-medium font-poppins text-secondaryColor">
            Chukwuebuka Nwachinemelu
          </h1>
        </div>
        <div className="w-[44%] text-center lg:w-[120px] flex justify-end lg:order-last">
          <Dropdown
            arrowIcon={false}
            inline
            className="min-w-[300px] w-[300px] bg-white dark:bg-[#181A20] !border-2 !border-[#14AC10] dark:!border-[#14AC10] rounded-lg max-h-[400px] md:min-h-[500px] overflow-y-auto"
            label={
              <button className="gap-1 flex items-center bg-[#14AC10] px-4 py-2 rounded-full text-white">
                Actions{" "}
                <MdOutlineKeyboardArrowDown className="text-2xl font-bold" />
              </button>
            }
          >
            <Dropdown.Header className="bg-[#14AC10] rounded-t -mt-1 sticky top-0">
              <div className="flex justify-between">
                <h2 className="block text-base text-start font-bold text-white">
                  Patients Actions
                </h2>
                {/* <button>
                  <MdClose className="text-xl font-bold" />
                </button> */}
              </div>
            </Dropdown.Header>
            <div className="bg-white dark:bg-[#181A20] -mt-2">
              <Dropdown.Item as={Link} to="#">
                Admit Patient
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Admit Patient
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Admit Patient
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Admit Patient
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Admit Patient
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#">
                Admit Patient
              </Dropdown.Item>
            </div>
          </Dropdown>
        </div>

        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991 sdfghjk fdghjkl dfghjk, thjkm, dfghjnm "
          icon={<Calendar size={18} />}
        />
      </div>
    </div>
  );
};

export default ClientDetailsCard;

type CardProps = {
  title: string;
  data: string;
  icon: React.ReactNode;
};

const Item = ({ title, data, icon }: CardProps) => {
  return (
    <div className="flex flex-col font-poppins my-[6px]">
      <div className="text-xs font-semibold text-secondaryColor">{title}</div>
      <div className="flex gap-x-2 items-center">
        <span className="text-secondaryColor">{icon}</span>
        <span className="dark:text-grayColor text-secondaryColor text-xs ">
          {data}
        </span>
      </div>
    </div>
  );
};

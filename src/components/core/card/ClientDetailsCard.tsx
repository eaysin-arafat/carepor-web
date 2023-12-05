import { cn } from "@/utilities/cn";
import { Calendar, ChevronDown } from "react-feather";

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
        <div className="w-[44%] text-center lg:w-[120px] flex justify-end lg:order-last ">
          <button className="flex items-center gap-2 bg-[#14AC10] text-white  h-fit px-5 py-2 font-poppins text-base rounded-full">
            <span className="text-white">Actions</span>
            <span>
              <ChevronDown size={14} className="text-white" />
            </span>
          </button>
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

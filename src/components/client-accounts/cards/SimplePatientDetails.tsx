import { cn } from "@/utilities/cn";
import { Calendar } from "react-feather";

interface Props {
  className?: string;
  withoutAction?: boolean;
}

const SimplePatientDetails = ({ className }: Props) => {
  return (
    <div>
      <div
        className={cn(
          "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 bg-lightBlueColor gap-2 py-6 justify-between shadow-md rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
          className
        )}
      >
        <div className="col-span-2 flex items-center">
          <h1 className="text-xl font-medium font-poppins text-secondaryColor w-[80%]">
            Chukwuebuka Nwachinemelu
          </h1>
          <div className="w-[20%] sm:border-s  h-12"></div>
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
        <div className="col-span-2">
          <Item
            title="Date of Birth"
            data="3-Jan-1991 sdfghjk fdghjkl dfghjk, thjkm, dfghjnm "
            icon={<Calendar size={18} />}
          />
        </div>
      </div>
    </div>
  );
};
export default SimplePatientDetails ;

type CardProps = {
  title: string;
  data: string;
  icon: React.ReactNode;
};

const Item = ({ title, data, icon }: CardProps) => {
  return (
    <div className="flex flex-col font-poppins my-[6px]">
      <div className="text-xs font-semibold text-secondaryColor">{title}</div>
      <div className="flex gap-x-2 items-start mt-1.5">
        <span className="text-secondaryColor">{icon}</span>
        <span className="dark:text-grayColor text-secondaryColor text-xs ">
          {data}
        </span>
      </div>
    </div>
  );
};

import { EnumSex } from "@/enum/enumerators";
import { Client } from "@/interface/clients";
import { clientAddress } from "@/utilities";
import { cn } from "@/utilities/cn";
import { cookieManager } from "@/utilities/cookie-manager";
import { DateFunc } from "@/utilities/date";
import { Calendar, MapPin, Phone, User } from "react-feather";
import { FaRegAddressCard } from "react-icons/fa6";

interface Props {
  className?: string;
  withoutAction?: boolean;
}

const SimplePatientDetails = ({ className }: Props) => {
  const client: Client | null = cookieManager.parseCookie("client") || null;

  return (
    <div>
      <div
        className={cn(
          "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 bg-lightBlueColor gap-2 py-6 justify-between shadow-md rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
          className
        )}
      >
        <div className="col-span-2 flex items-center">
          <h1 className="text-xl font-medium font-poppins text-secondaryColor capitalize w-[80%]">
            {client?.firstName && client?.surname
              ? client.firstName + " " + client.surname
              : ""}
          </h1>
          <div className="w-[20%] sm:border-s  h-12"></div>
        </div>
        <Item
          title="Date of Birth"
          data={DateFunc.formatDate(client?.dob)}
          icon={<Calendar size={18} />}
        />
        <Item
          title="Sex"
          data={client?.sex && EnumSex[client?.sex]}
          icon={<User size={18} />}
        />
        <Item
          title="Cellphone"
          data={
            client?.cellphone && client.cellphoneCountryCode
              ? client?.cellphoneCountryCode + " " + client.cellphone
              : ""
          }
          icon={<Phone size={18} />}
        />
        <Item title="NUPN" data={client?.nupn} icon={<FaRegAddressCard />} />
        <Item title="NRC" data={client?.nrc} icon={<FaRegAddressCard />} />

        <div className="col-span-2">
          <Item
            title="Address"
            data={clientAddress(client)}
            icon={<MapPin size={18} />}
          />
        </div>
      </div>
    </div>
  );
};
export default SimplePatientDetails;

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

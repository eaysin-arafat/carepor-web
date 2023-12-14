import { EnumSex } from "@/enum/enumerators";
import { useReadClientByKeyQuery } from "@/features/client/client-api";
import { TypeClientCookie } from "@/types";
import { clientAddress } from "@/utilities";
import { cn } from "@/utilities/cn";
import { cookieManager } from "@/utilities/cookie-manager";
import { DateFunc } from "@/utilities/date";
import { Dropdown } from "flowbite-react";
import { Calendar, MapPin, Phone, User } from "react-feather";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  withoutAction?: boolean;
}

const ClientDetailsCard = ({ className, withoutAction }: Props) => {
  const clientCookie: TypeClientCookie | null =
    cookieManager.parseCookie("client") || null;
  const {
    data: client,
    isError,
    isLoading,
    isSuccess,
  } = useReadClientByKeyQuery(clientCookie?.oid, {
    skip: !clientCookie?.oid,
  });

  

  return (
    <div>
      {isLoading && !isSuccess && (
        <div
          className={cn(
            "flex flex-wrap bg-lightBlueColor gap-2 py-6 justify-between shadow-md rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
            className
          )}
        >
          Loading..
        </div>
      )}
      {isError && !isLoading && <div>There was an error</div>}

      {!isLoading && isSuccess && (
        <div
          className={cn(
            "flex flex-wrap bg-lightBlueColor gap-2 py-6 justify-between shadow-md rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
            className
          )}
        >
          <div className="w-[50%] lg:w-40">
            <div className="flex  md:items-center  h-full">
              <h1 className="text-xl md:text-2xl font-medium font-poppins capitalize text-secondaryColor">
                {client?.firstName && client?.surname
                  ? client.firstName + " " + client.surname
                  : ""}
              </h1>
            </div>
          </div>
          {!withoutAction && (
            <div className="w-[44%] text-center lg:w-[120px] flex justify-end lg:order-last">
              <Dropdown
                arrowIcon={false}
                inline
                className="min-w-[300px] w-[300px] bg-white dark:bg-[#181A20] !border-2 !border-[#14AC10] dark:!border-[#14AC10] rounded-lg max-h-[400px] md:min-h-[400px] overflow-y-auto"
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
          )}

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
          <Item
            title="Address"
            data={clientAddress(client)}
            icon={<MapPin size={18} />}
          />
        </div>
      )}
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
      <h2 className=" text-xs md:text-base test-xs  mb-1 font-semibold text-secondaryColor  ">
        {title}
      </h2>
      <div className="flex gap-x-2 items-center">
        <span className="text-secondaryColor">{icon}</span>
        <span className="dark:text-grayColor text-secondaryColor text-xs ">
          {data}
        </span>
      </div>
    </div>
  );
};

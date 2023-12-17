import { useReadClientByKeyQuery } from "@/features/client/client-api";
import { Client } from "@/interface/clients";
import { TypeClientCookie } from "@/types";
import { clientAddress } from "@/utilities";
import { cn } from "@/utilities/cn";
import { cookieManager } from "@/utilities/cookie-manager";
import { DateFunc, getSingleYear } from "@/utilities/date";
import { Calendar } from "react-feather";
import { FaRegAddressCard } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePerson2, MdOutlinePhone } from "react-icons/md";

interface Props {
  className?: string;
  withoutAction?: boolean;
  client?: Client;
}

const gender = {
  1: "Male",
  2: "Female",
};

const SimplePatientDetails = ({ className, client: clientData }: Props) => {
  const clientCookie: TypeClientCookie | null =
    cookieManager.parseCookie("client");
  const { data } = useReadClientByKeyQuery(clientCookie?.oid, {
    // skip: !clientCookie?.oid && Object.keys(clientData)?.length > 0,
    skip: !clientCookie?.oid || !clientData?.oid == false,
    refetchOnMountOrArgChange: true,
  });

  let client = clientData;
  if (!client) {
    client = data;
  }

  return (
    <div>
      <div
        className={cn(
          "flex flex-wrap bg-lightBlueColor gap-4 py-6 justify-start shadow-md rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
          className
        )}
      >
        <div className="w-full xs:w-[200px] flex items-center sm:border-e">
          <h1 className="text-xl font-medium font-poppins text-secondaryColor text-center">
            {client?.firstName} {client?.surname}
          </h1>
          {/* <div className="sm:border-e sm:w-[15%] h-12"></div> */}
        </div>
        {/* <div className="flex gap-10"> */}
        <div className="w-[122px]">
          <Item
            title="Date of Birth"
            data={
              client?.dob
                ? DateFunc.toFormatted(client?.dob) +
                  " (" +
                  getSingleYear(client.dob) +
                  ")"
                : ""
            }
            icon={<Calendar size={18} />}
          />
        </div>
        <div className="w-[75px]">
          <Item
            title="Sex"
            data={gender[client?.sex]}
            icon={<MdOutlinePerson2 size={18} />}
          />
        </div>
        <div className="w-[130px]">
          <Item
            title="Cellphone"
            data={client?.cellphoneCountryCode + " " + client?.cellphone}
            icon={<MdOutlinePhone size={18} />}
          />
        </div>
        <div className="w-[170px]">
          <Item
            title="NUPN"
            data={client?.nupn}
            icon={<FaRegAddressCard size={18} />}
          />
        </div>
        <div className="w-[80px]">
          <Item
            title="NRC"
            data={client?.nrc}
            icon={<FaRegAddressCard size={18} />}
          />
        </div>
        <div className="min-w-[200px]">
          <Item
            title="Address"
            data={clientAddress(client)}
            icon={<LuMapPin size={18} />}
          />
        </div>
        {/* </div> */}
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
      <div className="text-xs font-semibold text-secondaryColor mb-2">
        {title}
      </div>
      <div className="flex gap-x-2 items-start mt-1.5">
        <span className="text-secondaryColor">{icon}</span>
        <span className="dark:text-grayColor text-secondaryColor text-xs whitespace-nowrap">
          {data}
        </span>
      </div>
    </div>
  );
};
// import { useReadClientByKeyQuery } from "@/features/client/client-api";
// import { Client } from "@/interface/clients";
// import { TypeClientCookie } from "@/types";
// import { clientAddress } from "@/utilities";
// import { cn } from "@/utilities/cn";
// import { cookieManager } from "@/utilities/cookie-manager";
// import { DateFunc } from "@/utilities/date";
// import { Calendar } from "react-feather";
// import { FaRegAddressCard } from "react-icons/fa";
// import { LuMapPin } from "react-icons/lu";
// import { MdOutlinePerson2, MdOutlinePhone } from "react-icons/md";

// interface Props {
//   className?: string;
//   withoutAction?: boolean;
//   client?: Client;
// }

// const gender = {
//   1: "Male",
//   2: "Female",
// };

// const SimplePatientDetails = ({ className, client: clientData }: Props) => {
//   const clientCookie: TypeClientCookie | null =
//     cookieManager.parseCookie("client");
//   const { data } = useReadClientByKeyQuery(clientCookie?.oid, {
//     skip: !clientCookie?.oid && Object.keys(clientData)?.length > 0,
//     refetchOnMountOrArgChange: true,
//   });

//   let client = clientData;
//   if (!client) {
//     client = data;
//   }

//   return (
//     <div>
//       <div
//         className={cn(
//           "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 bg-lightBlueColor gap-2 py-6 justify-between shadow-md rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
//           className
//         )}
//       >
//         <div className="col-span-2 flex items-center">
//           <h1 className="text-xl font-medium font-poppins text-secondaryColor w-[80%]">
//             {client?.firstName} {client?.surname}
//           </h1>
//           <div className="w-[20%] sm:border-s  h-12"></div>
//         </div>
//         {/* <div className="flex gap-10"> */}
//           <Item
//             title="Date of Birth"
//             data={client?.dob ? DateFunc.toFormatted(client?.dob) : ""}
//             icon={<Calendar size={18} />}
//           />
//           <Item
//             title="Sex"
//             data={gender[client?.sex]}
//             icon={<MdOutlinePerson2 size={18} />}
//           />
//           <Item
//             title="Cellphone"
//             data={client?.cellphoneCountryCode + " " + client?.cellphone}
//             icon={<MdOutlinePhone size={18} />}
//           />
//           <Item
//             title="NUPN"
//             data={client?.nupn}
//             icon={<FaRegAddressCard size={18} />}
//           />
//           <Item
//             title="NRC"
//             data={client?.nrc}
//             icon={<FaRegAddressCard size={18} />}
//           />
//           <div className="col-span-2">
//             <Item
//               title="Address"
//               data={clientAddress(client)}
//               icon={<LuMapPin size={18} />}
//             />
//           </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };
// export default SimplePatientDetails;

// type CardProps = {
//   title: string;
//   data: string;
//   icon: React.ReactNode;
// };

// const Item = ({ title, data, icon }: CardProps) => {
//   return (
//     <div className="flex flex-col font-poppins my-[6px]">
//       <div className="text-xs font-semibold text-secondaryColor">{title}</div>
//       <div className="flex gap-x-2 items-start mt-1.5">
//         <span className="text-secondaryColor">{icon}</span>
//         <span className="dark:text-grayColor text-secondaryColor text-xs ">
//           {data}
//         </span>
//       </div>
//     </div>
//   );
// };

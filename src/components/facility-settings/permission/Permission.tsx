import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/core/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import { TypeFacilityAccess } from "@/types/facility";
import RequestsItems, { headerData } from "../components/RequestsItem";

type Props = {
  activeUsers: TypeFacilityAccess[];
};
function UserPermission({ activeUsers }: Props) {
  return (
    <div>
      <div className="flex gap-5">
        <Input label="Search" />
        <Select label="Facility">
          <option value="">Hello</option>
        </Select>
        <Select label="Designation">
          <option value="">Designation</option>
        </Select>
      </div>
      <div className="mt-5">
        <Table className="min-w-[1000px]">
          <TableHeader
            className="bg-primaryHoverColor"
            actionWidth="w-[280px]"
            isAction
            title={headerData}
          />
          {activeUsers.map((item, index) => (
            <RequestsItems
              request={item}
              key={index}
              requestType="permission"
            />
          ))}
        </Table>
      </div>
    </div>
  );
}

export default UserPermission;

// import Input from "@/components/core/form-elements/Input";
// import Select from "@/components/core/form-elements/Select";
// import Table from "@/components/core/table/Table";
// import TableBody from "@/components/shared/table/TableBody";
// import TableHeader from "@/components/shared/table/TableHeader";

// function UserPermission() {
//   return (
//     <div>
//       <div className="flex gap-5">
//         <Input label="Search" />
//         <Select label="Facility">
//           <option value="">Hello</option>
//         </Select>
//         <Select label="Designation">
//           <option value="">Designation</option>
//         </Select>
//       </div>
//       <div className="mt-5">
//         <Table className="min-w-[1000px]">
//           <TableHeader
//             className="bg-primaryHoverColor"
//             actionWidth="w-[280px]"
//             isAction
//             title={[
//               {
//                 title: "User Name",
//                 w: "20%",
//               },
//               {
//                 title: "Designation",
//                 w: "10%",
//               },
//               {
//                 title: "Facility",
//                 w: "30%",
//               },
//               {
//                 title: "Cell Phone",
//                 w: "20%",
//               },
//               {
//                 title: "Contact Address",
//                 w: "20%",
//               },
//             ]}
//           />
//           {data.map((item, index) => (
//             <TableBody
//               index={index}
//               actionWidth="w-[290px]"
//               isAction
//               btn={{
//                 btnOutline: "Revoke Login",
//                 viewResult: "Permissions",
//               }}
//               item={[
//                 { title: item.name, w: "20%" },
//                 { title: item.des, w: "10%" },
//                 { title: item.facility, w: "30%" },
//                 { title: item.number, w: "20%" },
//                 { title: item.address, w: "20%" },
//               ]}
//             />
//           ))}
//         </Table>
//       </div>
//     </div>
//   );
// }

// export default UserPermission;

// const data = [
//   {
//     id: 1,
//     name: "John Smith",
//     des: "Admin",
//     facility: "Bauleni Mini Hospital",
//     number: "+260 555555555",
//     address: "5285258258",
//   },
//   {
//     id: 1,
//     name: "John Smith",
//     des: "Admin",
//     facility: "Bauleni Mini Hospital",
//     number: "+260 555555555",
//     address: "5285258258",
//   },
// ];

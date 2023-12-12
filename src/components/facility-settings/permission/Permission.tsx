import Input from "@/components/core/form-elements/Input";
import Table from "@/components/core/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import { TypeFacilityAccess } from "@/types/facility";
import RequestsItems, { headerData } from "../components/RequestsItem";
import ModulePermissionModal from "../components/module-permission/ModulePermissionModal";
import useRequestSearch from "../useRequestSearch";

type Props = {
  activeUsers: TypeFacilityAccess[];
};
function UserPermission({ activeUsers }: Props) {
  const { filteredRequests, handleSearchChange, search } =
    useRequestSearch(activeUsers);

  return (
    <div>
      {/* Modal */}
      <ModulePermissionModal />
      <div className="flex items-center gap-5">
        <Input
          placeholder="Search for name or cellphone"
          value={search}
          type="search"
          onChange={handleSearchChange}
        />
      </div>
      <div className="mt-5">
        <Table className="min-w-[1000px]">
          <TableHeader
            className="bg-tableHeadColor"
            actionWidth="w-[280px]"
            isAction
            title={headerData}
          />
          {filteredRequests.map((item, index) => (
            <RequestsItems
              index={index}
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

import Input from "@/components/core/form-elements/Input";
import Table from "@/components/core/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import { TypeFacilityAccess } from "@/types/facility";
import RequestsItems, { headerData } from "../components/RequestsItem";
import ResetPasswordModal from "../components/reset-password/ResetPasswordModal";
import useRequestSearch from "../useRequestSearch";

type Props = {
  recoveryRequests: TypeFacilityAccess[];
};
function RecoveryRequest({ recoveryRequests }: Props) {
  const { filteredRequests, handleSearchChange, search } =
    useRequestSearch(recoveryRequests);

  return (
    <div>
      {/* Modal */}
      <ResetPasswordModal />
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
            actionWidth="w-[220px]"
            isAction
            title={headerData}
          />
          {filteredRequests.map((item, index) => (
            <RequestsItems
              index={index}
              request={item}
              key={index}
              requestType="recovery"
            />
          ))}
        </Table>
      </div>
    </div>
  );
}

export default RecoveryRequest;

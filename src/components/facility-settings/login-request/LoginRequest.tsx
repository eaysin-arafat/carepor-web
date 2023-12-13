import Input from "@/components/core/form-elements/Input";
import Table from "@/components/core/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import { TypeFacilityAccess } from "@/types/facility";
import RequestsItems, { headerData } from "../components/RequestsItem";
import useRequestSearch from "../useRequestSearch";

type Props = {
  loginRequests: TypeFacilityAccess[];
};

// recovery-requests
function LoginRequest({ loginRequests }: Props) {
  const { filteredRequests, handleSearchChange, search } =
    useRequestSearch(loginRequests);

  return (
    <div>
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
              requestType="login"
            />
          ))}
        </Table>
      </div>
    </div>
  );
}

export default LoginRequest;

/**
 *             <TableBody
              index={index}
              actionWidth="w-[160px]"
              isAction
              viewResultHandler={() => alert("view")}
              btnOutlineHandler={() => alert("out")}
              btnHandler={() => alert("h")}
              btn={{
                viewResult: "Accept",
                btnOutline: "Reject",
              }}
              item={[
                {
                  title:
                    item?.userAccount?.firstName +
                    " " +
                    item?.userAccount?.surname,
                  w: "20%",
                },
                { title: item?.userAccount?.designation, w: "15%" },
                {
                  title: useFacilityData(item?.facilityId)?.facilityName,
                  w: "25%",
                },
                {
                  title:
                    item?.userAccount?.countryCode +
                    " " +
                    item?.userAccount?.cellphone,
                  w: "15%",
                },
                { title: item?.userAccount?.contactAddress, w: "25%" },
              ]}
            />
 */

import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/core/table/Table";
import TableHeader from "@/components/shared/table/TableHeader";
import { TypeFacilityAccess } from "@/types/facility";
import RequestsItems, { headerData } from "../components/RequestsItem";

type Props = {
  loginRequests: TypeFacilityAccess[];
};

// recovery-requests
function LoginRequest({ loginRequests }: Props) {
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
            actionWidth="w-[180px]"
            isAction
            title={headerData}
          />
          {loginRequests.map((item, index) => (
            <RequestsItems request={item} key={index} requestType="login" />
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

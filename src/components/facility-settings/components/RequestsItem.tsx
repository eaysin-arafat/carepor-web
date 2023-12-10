import TableBody from "@/components/shared/table/TableBody";
import useFacilityData from "@/hooks/useFacilityData";
import { TypeFacilityAccess } from "@/types/facility";
import { useDispatch } from "react-redux";
import useRequestItem from "./useRequestItem";

type Props = {
  request: TypeFacilityAccess;
  requestType: "login" | "recovery" | "permission";
};

function RequestsItems({ request, requestType }: Props) {
  const dispatch = useDispatch();

  const {
    handleLoginAccept,
    handleLoginRecovery,
    handlePermission,
    handleRejectLogin,
    handleRevokeLoginReq,
  } = useRequestItem({ data: request });

  let manageBtn = {};
  if (requestType === "login") {
    manageBtn = {
      btn: "Accept",
      btnOutline: "Reject",
    };
  } else if (requestType === "recovery") {
    manageBtn = {
      btn: "Reset Password",
    };
  } else if (requestType === "permission") {
    manageBtn = {
      btnOutline: "Revoke",
      btn: "Permission",
    };
  }

  return (
    <>
      <TableBody
        index={1}
        actionWidth="w-[180px]"
        isAction
        btnOutlineHandler={
          requestType === "permission"
            ? handleRevokeLoginReq
            : handleRejectLogin
        }
        btnHandler={
          requestType === "permission"
            ? handlePermission
            : requestType === "login"
            ? handleLoginAccept
            : requestType === "recovery"
            ? handleLoginRecovery
            : null
        }
        btn={manageBtn}
        item={[
          {
            title:
              request?.userAccount?.firstName +
              " " +
              request?.userAccount?.surname,
            w: "20%",
          },
          { title: request?.userAccount?.designation, w: "15%" },
          {
            title: useFacilityData(request?.facilityId)?.facilityName,
            w: "25%",
          },
          {
            title:
              request?.userAccount?.countryCode +
              " " +
              request?.userAccount?.cellphone,
            w: "20%",
          },
          { title: request?.userAccount?.contactAddress, w: "20%" },
        ]}
      />
    </>
  );
}

export default RequestsItems;

export const headerData = [
  {
    title: "User Name",
    w: "20%",
  },
  {
    title: "Designation",
    w: "15%",
  },
  {
    title: "Facility",
    w: "25%",
  },
  {
    title: "Cell Phone",
    w: "20%",
  },
  {
    title: "Contact Address",
    w: "20%",
  },
];

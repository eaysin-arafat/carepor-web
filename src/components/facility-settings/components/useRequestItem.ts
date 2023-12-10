// import {
//   useApprovedFacilityAccessMutation,
//   useRejectFacilityAccessMutation,
//   useRevokeLoginMutation,
// } from "@/features/facility/facility-access-api";
// import { today } from "@/lib/helpers/date-helpers";
import { RtkStatusEnum } from "@/enum/rtk";
import {
  useApproveFacilityAccessMutation,
  useRejectFacilityAccessMutation,
  useRevokeLoginByUserAccountIDMutation,
} from "@/features/facility-access/facility-access-api";
import ConfirmAlert from "@/utilities/confirm-alert";

import { DateFunc } from "@/utilities/date";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const useRequestItem = ({ data }) => {
  // const navigate = useNavigate();
  const user = data?.userAccount;
  const isApproved = data?.isApproved;
  const forgotPassword = data?.forgotPassword;

  // api hooks
  const [rejectFacility, { status: rejectStatus }] =
    useRejectFacilityAccessMutation();
  const [revokeLogin, { status: revokeStatus }] =
    useRevokeLoginByUserAccountIDMutation();
  const [approveFacilityAccess, { status: approveStatus }] =
    useApproveFacilityAccessMutation();

  // ***
  const handleLoginAccept = () => {
    const update = {
      key: data.oid,
      body: {
        oid: data.oid,
        dateModified: DateFunc.toDay(),
        isApproved: true,
        isIgnored: false,
        isDeleted: false,
        dateApproved: DateFunc.toDay(),
      },
    };
    ConfirmAlert.approveConfirm({
      handler: () => approveFacilityAccess(update),
      confirmButtonText: "Approve",
      title: "Approve Login Request?",
    });
  };

  const handleRevokeLoginReq = () => {
    const update = {
      key: data?.userAccountId,
      body: {
        userAccountId: data?.userAccountId,
      },
    };

    ConfirmAlert.deleteConfirm({
      handler: () => revokeLogin(update),
      confirmButtonText: "Revoke",
      title: "Revoke Login Permission?",
    });
  };

  // handle reject login ***
  const handleRejectLogin = () => {
    const update = {
      key: data?.oid,
      body: {
        oid: data.oid,
        dateRequested: DateFunc.toDay(),
        isIgnored: true,
        isDeleted: false,
      },
    };

    ConfirmAlert.deleteConfirm({
      handler: () => rejectFacility(update),
      confirmButtonText: "Reject",
      title: "Reject Login Request?",
    });
  };

  const handleLoginRecovery = () => {
    alert("handleLoginRecovery");
    // navigate(`/login-recovery/${data?.oid}`);
  };

  const handlePermission = () => {
    alert("handlePermission");
    // navigate(`/facility-administration/permission/${data?.oid}`);
  };

  // side effects
  useEffect(() => {
    if (approveStatus === RtkStatusEnum.fulfilled) {
      toast.success("Login Request Accepted Successfully");
    }
    if (approveStatus === RtkStatusEnum.rejected) {
      toast.error("Failed to accepted login request");
    }
  }, [approveStatus]);
  useEffect(() => {
    if (revokeStatus === RtkStatusEnum.fulfilled) {
      toast.success("Request Revoke Successful");
    }
    if (revokeStatus === RtkStatusEnum.rejected) {
      toast.error("Request Revoke Failed");
    }
  }, [revokeStatus]);
  useEffect(() => {
    if (rejectStatus === RtkStatusEnum.fulfilled) {
      toast.success("Request Reject Successful");
    }
    if (rejectStatus === RtkStatusEnum.rejected) {
      toast.error("Request Reject Failed");
    }
  }, [rejectStatus]);

  return {
    user,
    isApproved,
    forgotPassword,
    handleLoginAccept,
    handleRevokeLoginReq,
    handleRejectLogin,
    handleLoginRecovery,
    handlePermission,
  };
};

export default useRequestItem;

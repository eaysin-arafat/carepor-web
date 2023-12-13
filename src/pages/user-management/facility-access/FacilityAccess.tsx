import RequestError from "@/components/core/error/RequestError";
import { LineSkeleton } from "@/components/core/skeleton/Skeleton";
import LoginRequest from "@/components/facility-settings/login-request/LoginRequest";
import UserPermission from "@/components/facility-settings/permission/Permission";
import RecoveryRequest from "@/components/facility-settings/recovery-request/RecoveryRequest";
import { useReadFacilityAccessByFacilityIDQuery } from "@/features/facility-access/facility-access-api";
import { FacilityToken } from "@/types/coreTypes";

import { cn } from "@/utilities/cn";
import { cookieManager } from "@/utilities/cookie-manager";
import { useState } from "react";

function FacilityAccess() {
  const [tab, setTab] = useState("login");
  const facility = cookieManager.parseCookie<FacilityToken | null>(
    "facility"
  );
  // Read data from the database
  const {
    data: facilityAccess,
    isError,
    isLoading,
    isSuccess,
  } = useReadFacilityAccessByFacilityIDQuery(facility?.facilityId);

  const loginRequests = Array.isArray(facilityAccess)
    ? facilityAccess.filter(
        (data) => !data.isApproved && !data?.forgotPassword && !data?.isIgnored
      )
    : [];
  const recoveryRequests = Array.isArray(facilityAccess)
    ? facilityAccess.filter(
        (data) => !data.isApproved && data?.forgotPassword && !data?.isIgnored
      )
    : [];
  const activeUsers = Array.isArray(facilityAccess)
    ? facilityAccess.filter(
        (data) => data.isApproved && !data?.forgotPassword && !data?.isIgnored
      )
    : [];

  return (
    <div className="m-5">
      <h1 className="text-3xl">User Management</h1>
      <div className="mt-5 flex gap-2 ml-2">
        <button
          onClick={() => setTab("login")}
          className={cn(
            "border-t border-t-borderColor dark:text-white bg-whiteBgColor px-3 py-2 border-x border-x-borderColor rounded-t-lg",
            { "bg-primaryColor text-white": tab === "login" }
          )}
        >
          Login Request ({loginRequests.length})
        </button>
        <button
          onClick={() => setTab("recovery")}
          className={cn(
            "border-t border-t-borderColor dark:text-white bg-whiteBgColor px-3 py-2 border-x border-x-borderColor rounded-t-lg",
            { "bg-primaryColor text-white": tab === "recovery" }
          )}
        >
          Recovery Requests ({recoveryRequests.length})
        </button>
        <button
          onClick={() => setTab("permission")}
          className={cn(
            "border-t border-t-borderColor dark:text-white bg-whiteBgColor px-3 py-2 border-x border-x-borderColor rounded-t-lg",
            { "bg-primaryColor text-white": tab === "permission" }
          )}
        >
          Active Users ({activeUsers.length})
        </button>
      </div>{" "}
      <div className=" p-5 border border-borderColor bg-whiteBgColor rounded-md">
        {isLoading && !isError && (
          <>
            <LineSkeleton />
            <LineSkeleton />
            <LineSkeleton />
            <LineSkeleton />
            <LineSkeleton />
          </>
        )}
        {isSuccess && !isLoading && (
          <>
            {tab === "login" && <LoginRequest loginRequests={loginRequests} />}
            {tab === "recovery" && (
              <RecoveryRequest recoveryRequests={recoveryRequests} />
            )}
            {tab === "permission" && (
              <UserPermission activeUsers={activeUsers} />
            )}
          </>
        )}
        {isError && !isLoading && <RequestError />}
      </div>
    </div>
  );
}

export default FacilityAccess;

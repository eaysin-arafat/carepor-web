import LoginRequest from "@/components/facility-settings/login-request/LoginRequest";
import UserPermission from "@/components/facility-settings/permission/Permission";
import RecoveryRequest from "@/components/facility-settings/recovery-request/RecoveryRequest";
import { cn } from "@/utilities/cn";
import { useState } from "react";

function FacilityAccess() {
  const [tab, setTab] = useState("login");

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
          Login Request (5)
        </button>
        <button
          onClick={() => setTab("recovery")}
          className={cn(
            "border-t border-t-borderColor dark:text-white bg-whiteBgColor px-3 py-2 border-x border-x-borderColor rounded-t-lg",
            { "bg-primaryColor text-white": tab === "recovery" }
          )}
        >
          Recovery Request (5)
        </button>
        <button
          onClick={() => setTab("permission")}
          className={cn(
            "border-t border-t-borderColor dark:text-white bg-whiteBgColor px-3 py-2 border-x border-x-borderColor rounded-t-lg",
            { "bg-primaryColor text-white": tab === "permission" }
          )}
        >
          Recovery Request (5)
        </button>
      </div>
      <div className=" p-5 border border-borderColor bg-whiteBgColor rounded-md">
        {tab === "login" && <LoginRequest />}
        {tab === "recovery" && <RecoveryRequest />}
        {tab === "permission" && <UserPermission />}
      </div>
    </div>
  );
}

export default FacilityAccess;

import { EnumUserType } from "@/enum/enumerators";
import { useReadUserAccountsQuery } from "@/features/user-accounts/user-accounts-api";
import { TypeUser } from "@/types/user-accounts";
// import { TypeUser } from "@/types/user-accounts";

const useClinician = () => {
  const { data: users } = useReadUserAccountsQuery(undefined, {});

  /**
   * get user/clinician information by id
   * @param userId
   * @returns user information / null
   */
  const getUserDetails = (userId: string): TypeUser | null => {
    const user =
      (Array.isArray(users) && users.find((data) => data.oid == userId)) ||
      null;
    return user;
  };

  /**
   *  * get user/clinician information by id
   * @param userId
   * @returns
   */
  const getUserName = (userId: string): string => {
    const user = getUserDetails(userId);
    return user ? user?.username : "";
  };
  /**
   * get user/clinician full name by id
   * @param userId
   * @returns string
   */
  const getUserFullName = (userId: string): string => {
    const user = getUserDetails(userId);
    return user ? `${user.firstName} ${user.surname}` : "";
  };

  /**
   * get user/clinician Type  by id
   * @param userId
   * @returns
   */
  const getUserType = (userId: string): string => {
    const user = getUserDetails(userId);
    return user ? EnumUserType[user.userType] : "";
  };

  return {
    getUserDetails,
    getUserName,
    getUserFullName,
    getUserType,
    getClinicianDetails: getUserDetails,
    getClinicianName: getUserName,
    getClinicianFullName: getUserFullName,
    getClinicianType: getUserType,
  };
};

export default useClinician;

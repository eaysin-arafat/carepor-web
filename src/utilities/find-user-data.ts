import { TypeUser } from "@/types/user-accounts";

export const findUserData = (userId: string = "", users: TypeUser[] = []) => {
  const user =
    (Array.isArray(users) && users.find((data) => data.oid == userId)) || null;

  return {
    username: user?.username,
    name: user ? `${user.firstName} ${user.surname}` : "",
  };
};
export default findUserData;

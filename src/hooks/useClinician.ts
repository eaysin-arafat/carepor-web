import { useReadUserAccountsQuery } from "@/features/user-accounts/user-accounts-api";
// import { TypeUser } from "@/types/user-accounts";

const useClinician = (userId: string) => {
  const { data: users, isError } = useReadUserAccountsQuery(undefined, {});
  if (isError) {
    console.log("Failed to read users");
  }

  const user =
    (Array.isArray(users) && users.find((data) => data.oid == userId)) || null;

  return {
    username: user?.username,
    name: user ? `${user.firstName} ${user.surname}` : "",
  };
};

export default useClinician;

// const useClinician = ({
//   userId,
//   users,
// }: {
//   userId: string;
//   users: TypeUser[];
// }) => {
//   const user =
//     (Array.isArray(users) && users.find((data) => data.oid == userId)) || null;

//   return {
//     username: user?.username,
//     name: user ? `${user.firstName} ${user.surname}` : "",
//   };
// };
// export default useClinician;

import UserLogin from "@/pages/home/user-login/UserLogin";
import ChangePassword from "@/pages/user-accounts/change-password/ChangePassword";
import CreateUserAccount from "@/pages/user-accounts/create/CreateUserAccount";
import RecoveryRequest from "@/pages/user-accounts/recovery-request/RecoveryRequest";

// route paths for user accounts pages
export const userAccountCreate = (): string => "/user-accounts/create";
export const userAccountEdit = (id: string): string =>
  `/user-accounts/edit/${id}`;
export const userAccountDetails = (id: string): string =>
  `/user-accounts/details/${id}`;
export const forgotPassword = (): string => "/forgot-password";
export const changePassword = (): string => "/change-password";
export const userLogin = (): string => "/user-accounts/login";
export const userRecoveryRequest = (): string => "/recovery-request";

// routers for user accounts pages
const userAccountsRouter = [
  {
    path: userAccountCreate(),
    element: <CreateUserAccount />,
  },
  {
    path: userAccountEdit(":id"),
    element: "<EditUserAccount />",
  },
  {
    path: userAccountDetails(":id"),
    element: "<UserAccountDetails />",
  },
  {
    path: forgotPassword(),
    element: "<ForgotPassword />",
  },
  {
    path: changePassword(),
    element: <ChangePassword />,
  },
  {
    path: userLogin(),
    element: <UserLogin />,
  },
  {
    path: userRecoveryRequest(),
    element: <RecoveryRequest />,
  },
];

export default userAccountsRouter;

import PrivateGuard from "@/components/shared/guard/PrivateGuard";
// import AuthHeader from "@/components/shared/header/AuthHeader";
import ChangePassword from "@/pages/user-accounts/change-password/ChangePassword";

export const URLForgotPassword = (): string => "/forgot-password";
export const URLChangePassword = (): string => "/change-password";

// routers for user accounts pages
const UserAccountsRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: URLForgotPassword(),
        element: "<ForgotPassword />",
      },
      {
        path: URLChangePassword(),
        element: <ChangePassword />,
      },
    ],
  },
];

export default UserAccountsRouter;

// userAccountEdit

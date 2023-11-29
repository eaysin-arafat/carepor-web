import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ChangePassword from "@/pages/user-accounts/change-password/ChangePassword";

// route paths for user accounts pages
export const URLUserAccountEdit = (id: string): string =>
  `/user-accounts/edit/${id}`;
export const URLUserAccountDetails = (id: string): string =>
  `/user-accounts/details/${id}`;
export const URLForgotPassword = (): string => "/forgot-password";
export const URLChangePassword = (): string => "/change-password";

// routers for user accounts pages
const userAccountsRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: URLUserAccountEdit(":id"),
        element: "<EditUserAccount />",
      },
      {
        path: URLUserAccountDetails(":id"),
        element: "<UserAccountDetails />",
      },
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

export default userAccountsRouter;

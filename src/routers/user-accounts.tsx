import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ChangePassword from "@/pages/user-accounts/change-password/ChangePassword";

// route paths for user accounts pages
export const userAccountEdit = (id: string): string =>
  `/user-accounts/edit/${id}`;
export const userAccountDetails = (id: string): string =>
  `/user-accounts/details/${id}`;
export const forgotPassword = (): string => "/forgot-password";
export const changePassword = (): string => "/change-password";

// routers for user accounts pages
const userAccountsRouter = [
  {
    element: <PrivateGuard />,
    children: [
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
    ],
  },
];

export default userAccountsRouter;

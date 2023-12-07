import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import UserLayout from "@/layout/UserLayout";
import ChangePassword from "@/pages/user-accounts/change-password/ChangePassword";
import UserAccountDetails from "@/pages/user-accounts/details/UserAccountDetils";
import EditUserAccount from "@/pages/user-accounts/edit/UserAccountEdit";

// route paths for user accounts pages
export const URLUserAccountEdit = (): string => `/user-accounts/edit`;

export const URLUserAccountDetails = (id: string): string =>
  `/user-accounts/details/${id}`;
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
      {
        element: <UserLayout />,
        children: [
          {
            path: URLUserAccountEdit(),
            element: <EditUserAccount />,
          },
          {
            path: URLUserAccountDetails(":id"),
            element: <UserAccountDetails />,
          },
        ],
      },
    ],
  },
];

export default UserAccountsRouter;

// userAccountEdit

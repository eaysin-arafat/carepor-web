import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ChangePassword from "@/pages/user-accounts/change-password/ChangePassword";
import UserAccountDetails from "@/pages/user-accounts/details/UserAccountDetils";
import EditUserAccount from "@/pages/user-accounts/edit/UserAccountEdit";

// route paths for user accounts pages
export const URLUserAccountEdit = ({
  userId = ":userId",
}: {
  userId: string;
}): string => `/user-accounts/edit/${userId}`;

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
        path: URLUserAccountEdit({ userId: ":userId" }),
        element: <EditUserAccount />,
      },
      {
        path: URLUserAccountDetails(":id"),
        element: <UserAccountDetails />,
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

export default UserAccountsRouter;

// userAccountEdit

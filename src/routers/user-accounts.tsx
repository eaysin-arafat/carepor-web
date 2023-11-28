import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ChangePassword from "@/pages/user-accounts/change-password/ChangePassword";
import EditUserAccount from "@/pages/user-accounts/edit/UserAccountEdit";

// route paths for user accounts pages
export const userAccountEdit = ({
  userId = ":userId",
}: {
  userId: string;
}): string => `/user-accounts/edit/${userId}`;
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
        path: userAccountEdit({ userId: ":userId" }),
        element: <EditUserAccount />,
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

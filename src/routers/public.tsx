import PublicGuard from "@/components/shared/guard/PublicGuard";
import UserLogin from "@/pages/home/user-login/UserLogin";
import CreateUserAccount from "@/pages/user-accounts/create/CreateUserAccount";
import RecoveryRequest from "@/pages/user-accounts/recovery-request/RecoveryRequest";

// routes for public
export const userAccountCreate = (): string => "/user-accounts/create";
export const userLogin = (): string => "/";
export const userRecoveryRequest = (): string => "/recovery-request";

const publicRoutes = [
  {
    element: <PublicGuard />,
    children: [
      {
        path: userLogin(),
        element: <UserLogin />,
      },
      {
        path: userAccountCreate(),
        element: <CreateUserAccount />,
      },
      {
        path: userRecoveryRequest(),
        element: <RecoveryRequest />,
      },
    ],
  },
];

export default publicRoutes;

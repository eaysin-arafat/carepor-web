import PublicGuard from "@/components/shared/guard/PublicGuard";
import UserLogin from "@/pages/home/user-login/UserLogin";
import CreateUserAccount from "@/pages/user-accounts/create/CreateUserAccount";
import RecoveryRequest from "@/pages/user-accounts/recovery-request/RecoveryRequest";

// routes for public
export const URLUserAccountCreate = (): string => "/user-accounts/create";
export const URLUserLogin = (): string => "/";
export const URLUserRecoveryRequest = (): string => "/recovery-request";

const publicRoutes = [
  {
    element: <PublicGuard />,
    children: [
      {
        path: URLUserLogin(),
        element: <UserLogin />,
      },
      {
        path: URLUserAccountCreate(),
        element: <CreateUserAccount />,
      },
      {
        path: URLUserRecoveryRequest(),
        element: <RecoveryRequest />,
      },
    ],
  },
];

export default publicRoutes;

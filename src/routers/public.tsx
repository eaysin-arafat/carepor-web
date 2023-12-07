import PublicGuard from "@/components/shared/guard/PublicGuard";
import AuthHeader from "@/components/shared/header/AuthHeader";
import UserLogin from "@/pages/home/user-login/UserLogin";
import CreateUserAccount from "@/pages/user-accounts/create/CreateUserAccount";
import RecoveryRequest from "@/pages/user-accounts/recovery-request/RecoveryRequest";

// routes for public
export const URLUserAccountCreate = (): string => "/user-accounts/create";
export const URLUserLogin = (): string => "/";
export const URLUserRecoveryRequest = (): string => "/recovery-request";

const PublicRoutes = [
  {
    element: <PublicGuard />,
    children: [
      {
        path: URLUserLogin(),
        element: <UserLogin />,
      },
      {
        element: <AuthHeader />,
        children: [
          {
            path: URLUserAccountCreate(),
            element: <CreateUserAccount />,
          },
        ],
      },
      {
        path: URLUserRecoveryRequest(),
        element: <RecoveryRequest />,
      },
    ],
  },
];

export default PublicRoutes;

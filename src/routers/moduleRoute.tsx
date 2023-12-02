import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Vitals from "@/pages/vitals/Vitals";

// routes for public
export const URLUserAccountCreate = (): string => "/user-accounts/create";
export const URLUserLogin = (): string => "/";
export const URLUserRecoveryRequest = (): string => "/recovery-request";

const ModuleRoute = [
  {
    element: <PrivateGuard />,
    children: [
      {
        element: <ModuleSidebar />,
        children: [
          {
            path: "/vitals",
            element: <Vitals />,
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

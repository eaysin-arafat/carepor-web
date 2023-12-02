import PublicGuard from "@/components/shared/guard/PublicGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import RootLayout from "@/layout/RootLayout";
import Vitals from "@/pages/vitals/Vitals";

// routes for public
export const URLUserAccountCreate = (): string => "/user-accounts/create";
export const URLUserLogin = (): string => "/";
export const URLUserRecoveryRequest = (): string => "/recovery-request";

const ModuleRoute = [
  {
    element: <PublicGuard />,
    children: [
      {
        element: <RootLayout />,
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
    ],
  },
];

export default ModuleRoute;

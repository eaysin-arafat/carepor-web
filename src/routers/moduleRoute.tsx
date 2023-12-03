import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Investigation from "@/pages/investigations/index/Investigation";
import Vitals from "@/pages/vitals/Vitals";

// routes for public

export const URLInvestigation = (): string => "/investigation";

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
          {
            path: URLInvestigation(),
            element: <Investigation />,
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

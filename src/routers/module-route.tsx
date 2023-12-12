import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Dashboard from "@/pages/dashboard/Dashboard";
import Vitals from "@/pages/vitals/Vitals";

// routes for public
//! Will change later Dashboard URL
export const URLDashboard = (): string => "/dashboard";
export const URLUserAccountCreate = (): string => "/user-accounts/create";

export const URLUserRecoveryRequest = (): string => "/recovery-request";
import Investigation from "@/pages/investigations/index/Investigation";
import SurgeryIndex from "@/pages/surgery/index/Surgery";

// routes for public

export const URLInvestigation = (): string => "/investigation";
export const URLSurgery = (): string => "/surgery";

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
            path: URLDashboard(),
            element: <Dashboard />,
          },
          {
            path: URLInvestigation(),
            element: <Investigation />,
          },
          {
            path: URLSurgery(),
            element: <SurgeryIndex />,
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

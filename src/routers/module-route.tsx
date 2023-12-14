import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Dashboard from "@/pages/dashboard/Dashboard";
import Investigation from "@/pages/investigations/index/Investigation";
import SurgeryIndex from "@/pages/surgery/index/Surgery";
import Vitals from "@/pages/vitals/index/Vitals";
import {
  URLDashboard,
  URLHts,
  URLInvestigation,
  URLSurgery,
  URLVitals,
} from "./module-link";

// routes for public
//! Will change later Dashboard URL
// export const URLDashboard = (): string => "/dashboard";
// export const URLUserAccountCreate = (): string => "/user-accounts/create";

// export const URLUserRecoveryRequest = (): string => "/recovery-request";

// // routes for public

// export const URLInvestigation = (): string => "/investigation";
// export const URLSurgery = (): string => "/surgery";

const ModuleRoute = [
  {
    element: <PrivateGuard />,
    children: [
      {
        element: <ModuleSidebar />,
        children: [
          {
            path: URLVitals(),
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
          {
            path: URLHts(),
            element: "",
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

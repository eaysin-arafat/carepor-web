import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Dashboard from "@/pages/dashboard/Dashboard";
import Investigation from "@/pages/investigations/index/Investigation";
import OpdHistry from "@/pages/medical-encounter/histry/OpdHistry";
import SurgeryIndex from "@/pages/surgery/index/Surgery";
import Vitals from "@/pages/vitals/index/Vitals";
import {
  URLDashboard,
  URLHts,
  URLInvestigation,
  URLOPD,
  URLSurgery,
  URLVitals,
} from "./module-link";

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
          {
            path: URLOPD(),
            element: <OpdHistry />,
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

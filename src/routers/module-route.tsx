import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import CovaxIndex from "@/pages/covax/index/Index";
import Dashboard from "@/pages/dashboard/Dashboard";
import HtsIndex from "@/pages/hts/index/HtsIndex";
import Investigation from "@/pages/investigations/index/Investigation";
import IPDHistry from "@/pages/medical-encounter-ipd/histry/IPDHistry";
import OPDHistory from "@/pages/medical-encounter-opd/history/OpdHistory";
import SurgeryIndex from "@/pages/surgery/index/Surgery";
import VitalsDetails from "@/pages/vitals/details/VitalsDetails";
import Vitals from "@/pages/vitals/index/Vitals";
import {
  URLCovax,
  URLCovid,
  URLDashboard,
  URLHts,
  URLIPDHistory,
  URLInvestigation,
  URLOPD,
  URLSurgery,
  URLVitals,
  URLVitalsDetails,
} from "./module-link";
import CovidIndex from "@/pages/covid/index/Index";

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
            path: URLVitalsDetails(),
            element: <VitalsDetails />,
          },
          {
            path: URLHts(),
            element: <HtsIndex />,
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
          // {
          //   path: "/medical-encounters",
          //   element: <OpdHistry />,
          // },
          {
            path: URLOPD(),
            element: <OPDHistory />,
          },
          {
            path: URLIPDHistory(),
            element: <IPDHistry />,
          },
          {
            path: URLCovax(),
            element: <CovaxIndex />,
          },
          {
            path: URLCovid(),
            element: <CovidIndex />,
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Dashboard from "@/pages/dashboard/Dashboard";
import HtsIndex from "@/pages/hts/index/HtsIndex";
import Investigation from "@/pages/investigations/index/Investigation";
import IPDHistry from "@/pages/medical-encounter-ipd/histry/IPDHistry";
import OpdHistry from "@/pages/medical-encounter/histry/OpdHistry";
import PainRecordsHistory from "@/pages/pain-records/history/History";
import SurgeryIndex from "@/pages/surgery/index/Surgery";
import VitalsDetails from "@/pages/vitals/details/VitalsDetails";
import Vitals from "@/pages/vitals/index/Vitals";
import {
  URLDashboard,
  URLHts,
  URLIPDHistory,
  URLInvestigation,
  URLOPD,
  URLPainRecords,
  URLSurgery,
  URLVitals,
  URLVitalsDetails,
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
          {
            path: URLOPD(),
            element: <OpdHistry />,
          },
          {
            path: URLIPDHistory(),
            element: <IPDHistry />,
          },
          {
            path: URLPainRecords(),
            element: <PainRecordsHistory />,
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

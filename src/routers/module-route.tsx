import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import BirthRecord from "@/pages/birth-record/index/BirthRecord";
import CovaxIndex from "@/pages/covax/index/Index";
import CovidIndex from "@/pages/covid/index/Index";
import Dashboard from "@/pages/dashboard/Dashboard";
import DeathRecordHistory from "@/pages/death-record/history/History";
import HtsIndex from "@/pages/hts/index/HtsIndex";
import Investigation from "@/pages/investigations/index/Investigation";
import IPDHistry from "@/pages/medical-encounter-ipd/histry/IPDHistry";
import OPDHistory from "@/pages/medical-encounter-opd/history/OpdHistory";
import PainRecordsHistory from "@/pages/pain-records/history/History";
import ReferralsHistory from "@/pages/referrals/index/History";
import SurgeryIndex from "@/pages/surgery/index/Surgery";
import VitalsDetails from "@/pages/vitals/details/VitalsDetails";
import Vitals from "@/pages/vitals/index/Vitals";
import {
  URLBirthRecord,
  URLCovax,
  URLCovid,
  URLDashboard,
  URLDeathRecord,
  URLHts,
  URLIPDHistory,
  URLInvestigation,
  URLOPD,
  URLPainRecords,
  URLPep,
  URLPrep,
  URLReferral,
  URLSurgery,
  URLVitals,
  URLVitalsDetails,
} from "./module-link";
import PepHistory from "@/pages/pep/history/PepHistory";
import PrepHistory from "@/pages/prep/history/PrepHistory";

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
          {
            path: URLPainRecords(),
            element: <PainRecordsHistory />,
          },
          {
            path: URLReferral(),
            element: <ReferralsHistory />,
          },
          {
            path: URLBirthRecord(),
            element: <BirthRecord />,
          },
          {
            path: URLDeathRecord(),
            element: <DeathRecordHistory />,
          },
          {
            path: URLPep(),
            element: <PepHistory />,
          },
          {
            path: URLPrep(),
            element: <PrepHistory />,
          },
        ],
      },
    ],
  },
];

export default ModuleRoute;

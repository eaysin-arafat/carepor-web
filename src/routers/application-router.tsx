import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Error from "@/pages/error/error";
import CreateMedicalEncounter from "@/pages/medical-encounter/create/Create";
import Test from "@/pages/test/Test";
import RequestFacility from "@/pages/user-accounts/request-facility/RequestFacility";
import FacilitySettings from "./FacilitySettings";
import QueueRoutes from "./QueueRoutes";
import clientRouter from "./client";
import facilityRouter from "./facility";
import ModuleRoute from "./moduleRoute";
import publicRoutes from "./public";
import userAccountsRouter from "./user-accounts";

// routes for facility
export const URLRequestFacility = (): string => "/request-facility";

const Routes = [
  ...userAccountsRouter,
  ...facilityRouter,
  ...clientRouter,
  ...publicRoutes,
  ...FacilitySettings,
  ...ModuleRoute,
  ...QueueRoutes,
  {
    path: URLRequestFacility(),
    element: <RequestFacility />,
  },
  {
    path: "*",
    element: <Error />,
  },

  {
    element: <ModuleSidebar />,
    children: [
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "encounter",
    element: <CreateMedicalEncounter />,
  },
];

export default Routes;

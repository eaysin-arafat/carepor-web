import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import Error from "@/pages/error/error";
import CreateMedicalEncounter from "@/pages/medical-encounter/create/Create";
import Test from "@/pages/test/Test";
import Test2 from "@/pages/test/Test2";
import RequestFacility from "@/pages/user-accounts/request-facility/RequestFacility";
import clientRouter from "./client";
import facilityRouter from "./facility";
import FacilitySettings from "./facility-settings";
import FormRouter from "./formRoute";
import ModuleRoute from "./module-route";
import publicRoutes from "./public";
import QueueRoutes from "./queue-routes";
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
  ...FormRouter,
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
      {
        path: "/test2",
        element: <Test2 />,
      },
    ],
  },
  {
    path: "encounter",
    element: <CreateMedicalEncounter />,
  },
];

export default Routes;

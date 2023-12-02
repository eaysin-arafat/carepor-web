import ModuleSidebar from "@/components/sidebar/ModuleSidebar";
import RootLayout from "@/layout/RootLayout";
import Error from "@/pages/error/error";
import Test from "@/pages/test/Test";
import RequestFacility from "@/pages/user-accounts/request-facility/RequestFacility";
import FacilitySettings from "./FacilitySettings";
import clientRouter from "./client";
import facilityRouter from "./facility";
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
  {
    path: URLRequestFacility(),
    element: <RequestFacility />,
  },
  {
    path: "*",
    element: <Error />,
  },

  {
    element: (
      <RootLayout>
        <ModuleSidebar />
      </RootLayout>
    ),
    children: [
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
];

export default Routes;

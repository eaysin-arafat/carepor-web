import UserDashboardLayout from "@/layout/UserDashboardLayout";
import Error from "@/pages/error/error";
import Test from "@/pages/test/Test";
import RequestFacility from "@/pages/user-accounts/request-facility/RequestFacility";
import clientRouter from "./client";
import facilityRouter from "./facility";
import publicRoutes from "./public";
import userAccountsRouter from "./user-accounts";

// routes for facility
export const URLRequestFacility = (): string => "/request-facility";

const routes = [
  ...userAccountsRouter,
  ...facilityRouter,
  ...clientRouter,
  ...publicRoutes,
  {
    path: URLRequestFacility(),
    element: <RequestFacility />,
  },
  {
    path: "*",
    element: <Error />,
  },

  {
    element: <UserDashboardLayout />,
    children: [
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
];

export default routes;

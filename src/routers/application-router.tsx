import UserDashboardLayout from "@/layout/UserDashboardLayout";
import Error from "@/pages/error/error";
import Test from "@/pages/test/Test";
import clientRouter from "./client";
import facilityRouter from "./facility";
import userAccountsRouter from "./user-accounts";

const routes = [
  ...userAccountsRouter,
  ...facilityRouter,
  ...clientRouter,
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

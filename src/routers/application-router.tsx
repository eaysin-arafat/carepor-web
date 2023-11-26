import clientRouter from "./client";
import facilityRouter from "./facility";
import userAccountsRouter from "./user-accounts";

const routes = [
  ...userAccountsRouter,
  ...facilityRouter,
  ...clientRouter,
  {
    path: "*",
    element: "<Error />",
  },
];

export default routes;

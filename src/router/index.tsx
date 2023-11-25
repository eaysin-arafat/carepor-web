import demoRoutes from "./demo-route/demo-routes";
import privateRoute from "./private-route.tsx/private-route";
import publicRoute from "./public-route/public-route";

const routes = [
  ...publicRoute,
  ...privateRoute,
  ...demoRoutes,
  {
    path: "*",
    element: "<Error />",
  },
];

export default routes;

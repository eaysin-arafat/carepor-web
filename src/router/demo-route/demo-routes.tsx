import Demo from "@/pages/demo-pages/Demo";
import HomePage from "@/pages/demo-pages/HomePage";

const demoRoutes: any[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dev",
    element: <Demo />,
  },
];

export default demoRoutes;

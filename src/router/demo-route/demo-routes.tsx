import Demo from "@/pages/demo-pages/Demo";
import HomePage from "@/pages/demo-pages/HomePage";
import UserRegistration from "@/pages/demo-pages/UserRegistration";

const demoRoutes: any[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dev",
    element: <Demo />,
  },
  {
    path: "/sign-up",
    element: <UserRegistration />,
  },
];

export default demoRoutes;

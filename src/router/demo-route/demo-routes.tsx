import SelectFacility from "@/pages/demo-pages/FacilitySelect";
import HomePage from "@/pages/demo-pages/HomePage";
import UserRegistration from "@/pages/demo-pages/UserRegistration";

const demoRoutes: any[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/select-facility",
    element: <SelectFacility />,
  },
  {
    path: "/sign-up",
    element: <UserRegistration />,
  },
];

export default demoRoutes;

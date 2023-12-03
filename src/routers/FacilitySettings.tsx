import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import FacilitySettingsSidebar from "@/components/sidebar/FacilitySettingsSidebar";
import Test from "@/pages/test/Test";

// * route paths for client pages
export const URLFacilitySettings = (): string => "/facility-settings";

// * routers for client pages
const FacilitySettings = [
  {
    element: <PrivateGuard />,
    children: [
      {
        element: <FacilitySettingsSidebar />,
        children: [
          {
            path: URLFacilitySettings(),
            element: <Test />,
          },
        ],
      },
    ],
  },
];

export default FacilitySettings;

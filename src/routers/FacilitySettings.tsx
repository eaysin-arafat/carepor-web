import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import FacilitySettingsSidebar from "@/components/sidebar/FacilitySettingsSidebar";
import FacilityAccess from "@/pages/user-managment/facility-access/FacilityAccess";

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
            element: <FacilityAccess />,
          },
        ],
      },
    ],
  },
];

export default FacilitySettings;

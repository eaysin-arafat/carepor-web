import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import FacilitySettingsSidebar from "@/components/sidebar/FacilitySettingsSidebar";
import Beds from "@/pages/user-management/departments/Beds";
import Departments from "@/pages/user-management/departments/Departments";
import Firms from "@/pages/user-management/departments/Firms";
import Wards from "@/pages/user-management/departments/Wards";
import FacilityAccess from "@/pages/user-management/facility-access/FacilityAccess";

// * route paths for client pages
export const URLFacilitySettings = (): string => "/facility-settings";
export const URLDepartment = (): string => "/department";
export const URLFirms = (): string => "/firms";
export const URLWards = (): string => "/wards";
export const URLBeds = (): string => "/beds";

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
          {
            path: URLDepartment(),
            element: <Departments />,
          },
          {
            path: URLFirms(),
            element: <Firms />,
          },
          {
            path: URLWards(),
            element: <Wards />,
          },
          {
            path: URLBeds(),
            element: <Beds />,
          },
        ],
      },
    ],
  },
];

export default FacilitySettings;

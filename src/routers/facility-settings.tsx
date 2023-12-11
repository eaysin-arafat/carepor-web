import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import FacilitySettingsSidebar from "@/components/sidebar/FacilitySettingsSidebar";
import Beds from "@/pages/beds/index/Beds";
import Departments from "@/pages/department/index/Departments";
import Firms from "@/pages/firms/index/Firms";
import FacilityAccess from "@/pages/user-management/facility-access/FacilityAccess";
import Wards from "@/pages/wards/index/Wards";

// * route paths for client pages
export const URLFacilitySettings = (): string => "/facility-settings";
export const URLDepartment = (): string => "/department";
export const URLFirms = (departmentId: string = ":departmentId"): string =>
  `/firms/${departmentId}`;
export const URLWards = (firmId: string = ":firmId"): string =>
  `/wards/${firmId}`;
export const URLBeds = (wardId: string = ":wardId"): string =>
  `/beds/${wardId}`;

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

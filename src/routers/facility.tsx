import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import SelectFacility from "@/pages/home/select-facility/SelectFacility";
import RequestFacility from "@/pages/user-accounts/request-facility/RequestFacility";

// routes for facility
export const URLSelectFacility = (): string => "/select-facility";
export const URLRequestFacility = (): string => "/request-facility";

// routers for facility
const facilityRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: URLSelectFacility(),
        element: <SelectFacility />,
      },
      {
        path: URLRequestFacility(),
        element: <RequestFacility />,
      },
    ],
  },
];

export default facilityRouter;

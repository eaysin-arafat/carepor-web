import SelectFacility from "@/pages/home/select-facility/SelectFacility";
import RequestFacility from "@/pages/user-accounts/request-facility/RequestFacility";

// routes for facility
export const selectFacility = (): string => "/select-facility";
export const requestFacility = (): string => "/request-facility";

// routers for facility
const facilityRouter = [
  {
    path: selectFacility(),
    element: <SelectFacility />,
  },
  {
    path: requestFacility(),
    element: <RequestFacility />,
  },
];

export default facilityRouter;

import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import SelectFacility from "@/pages/home/select-facility/SelectFacility";

// routes for facility
export const URLSelectFacility = (): string => "/select-facility";

// routers for facility
const FacilityRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: URLSelectFacility(),
        element: <SelectFacility />,
      },
    ],
  },
];

export default FacilityRouter;

// routes for facility
export const selectFacility = (): string => "/facility-select";
export const requestFacility = (): string => "/facility-request";

// routers for facility
const facilityRouter = [
  {
    path: selectFacility(),
    element: "<SelectFacility />",
  },
  {
    path: requestFacility(),
    element: "<RequestFacility />",
  },
];

export default facilityRouter;

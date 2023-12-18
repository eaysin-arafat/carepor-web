import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import IPDCreate from "@/pages/medical-encounter-ipd/create/Create";
import CreateMedicalEncounter from "@/pages/medical-encounter/create/Create";
import { URLIPD, URLOPD, URLOPDCreate } from "./module-link";
import OPDHistory from "@/pages/medical-encounter-opd/history/OpdHistory";
import OpdCreate from "@/pages/medical-encounter-opd/create/Create";

// routes for facility
export const URLOpdCreate = (): string => "/medical-encounters/create";

// routers for facility
const FormRouter = [
  {
    element: <PrivateGuard />,
    children: [
      {
        path: URLOpdCreate(),
        element: <CreateMedicalEncounter />,
      },
      {
        path: URLIPD(),
        element: <IPDCreate />,
      },
      {
        path: URLOPD(),
        element: <OPDHistory />,
      },
      {
        path: URLOPDCreate(),
        element: <OpdCreate />,
      },
    ],
  },
];

export default FormRouter;

import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import IPDCreate from "@/pages/medical-encounter-ipd/create/Create";
import OpdCreate from "@/pages/medical-encounter-opd/create/Create";
import OPDHistory from "@/pages/medical-encounter-opd/history/OpdHistory";
import CreateMedicalEncounter from "@/pages/medical-encounter/create/Create";
import PepCreate from "@/pages/pep/create/Create";
import {
  URLIPD,
  URLOPD,
  URLOPDCreate,
  URLPepCreate,
  URLPrepCreate,
} from "./module-link";

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
      {
        path: URLPepCreate(),
        element: <PepCreate />,
      },
      {
        path: URLPrepCreate(),
        element: "<PepCreate />",
      },
    ],
  },
];

export default FormRouter;

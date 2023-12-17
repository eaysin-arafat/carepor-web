import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import IPDCreate from "@/pages/medical-encounter-ipd/create/Create";
import CreateMedicalEncounter from "@/pages/medical-encounter/create/Create";
import { URLIPD } from "./module-link";

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
    ],
  },
];

export default FormRouter;

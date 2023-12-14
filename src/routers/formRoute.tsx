import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import FormLayout from "@/layout/FormLayout";
import IPDCreate from "@/pages/medical-encounter-ipd/create/Create";
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
        element: <FormLayout />,
      },
      {
        path: URLIPD(),
        element: (
          <FormLayout>
            <IPDCreate />
          </FormLayout>
        ),
      },
    ],
  },
];

export default FormRouter;

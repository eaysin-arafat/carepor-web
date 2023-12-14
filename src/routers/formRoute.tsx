import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import FormLayout from "@/layout/FormLayout";

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
    ],
  },
];

export default FormRouter;

import CreateAdmission from "@/pages/admissions/create/CreateAdmission";
import CreateClientAccount from "@/pages/client-accounts/create/CreateClientAccount";
import EditAdmission from "./../pages/admissions/edit/EditAdmission";

// route paths for client pages
export const clientSearch = (): string => "/client-search";
export const clientDetails = ({ id = ":id" }: { id: string }): string =>
  `/client-details/${id}`;
export const clientCreate = (): string => "/client-create";
export const clientEdit = ({ id = ":id" }: { id: string }): string =>
  `/client-edit/${id}`;
export const createAdmission = ({
  clientId = ":clientId",
}: {
  clientId: string;
}): string => `/admission-create/${clientId}`;
export const editAdmission = ({
  clientId = ":clientId",
}: {
  clientId: string;
}): string => `/admission-edit/${clientId}`;

// routers for client pages
const clientRouter = [
  {
    path: clientSearch(),
    element: "<ClientSearch />",
  },
  {
    path: clientDetails({ id: ":id" }),
    element: "<ClientDetails />",
  },
  {
    path: clientCreate(),
    element: <CreateClientAccount />,
  },
  {
    path: clientEdit({ id: ":id" }),
    element: "<ClientEdit />",
  },
  {
    path: createAdmission({ clientId: ":clientId" }),
    element: <CreateAdmission />,
  },
  {
    path: editAdmission({ clientId: ":clientId" }),
    element: <EditAdmission />,
  },
];

export default clientRouter;

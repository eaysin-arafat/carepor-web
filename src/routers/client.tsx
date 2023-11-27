import CreateClientAccount from "@/pages/client-accounts/create/CreateClientAccount";

// route paths for client pages
export const clientSearch = (): string => "/client-search";
export const clientDetails = ({ id = ":id" }: { id: string }): string =>
  `/client-details/${id}`;
export const clientCreate = (): string => "/client-create";
export const clientEdit = ({ id = ":id" }: { id: string }): string =>
  `/client-edit/${id}`;

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
    element: <CreateClientAccount/>,
  },
  {
    path: clientEdit({ id: ":id" }),
    element: "<ClientEdit />",
  },
];

export default clientRouter;

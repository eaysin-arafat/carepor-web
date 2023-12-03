import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import UserLayout from "@/layout/UserLayout";
import CreateAdmission from "@/pages/admissions/create/Create";
import CreateClientAccount from "@/pages/client-accounts/create/CreateClientAccount";
import ClientAccountEdit from "@/pages/client-accounts/edit/ClientAccountEdit";
import ClientSearch from "@/pages/client-accounts/index/ClientSearch";
import ServicePoints from "@/pages/service-point/ServicePoints";
import EditAdmission from "../pages/admissions/edit/Edit";
import AdmissionSearch from "./../pages/admissions/index/AdmissionSearch";

// route paths for client pages
export const URLClientSearch = (): string => "/client-search";
export const URLServicePoint = (): string => "/service-points";
export const URLAdmissionSearch = (): string => "/admission-search";
export const URLClientDetails = ({ id = ":id" }: { id: string }): string =>
  `/client-details/${id}`;
export const URLClientCreate = (): string => "/client-create";
export const URLClientEdit = ({ id = ":id" }: { id: string }): string =>
  `/client-edit/${id}`;
export const URLCreateAdmission = ({
  clientId = ":clientId",
}: {
  clientId: string;
}): string => `/admission-create/${clientId}`;
export const URLEditAdmission = ({
  clientId = ":clientId",
}: {
  clientId: string;
}): string => `/admission-edit/${clientId}`;

// routers for client pages
const ClientRouter = [
  {
    element: <UserLayout />,
    children: [
      {
        element: <PrivateGuard />,
        children: [
          {
            path: URLClientSearch(),
            element: <ClientSearch />,
          },
          {
            path: URLAdmissionSearch(),
            element: <AdmissionSearch />,
          },
          {
            path: URLClientDetails({ id: ":id" }),
            element: "<ClientDetails />",
          },
          {
            path: URLClientCreate(),
            element: <CreateClientAccount />,
          },
          {
            path: URLClientEdit({ id: ":id" }),
            element: <ClientAccountEdit />,
          },
          {
            path: URLCreateAdmission({ clientId: ":clientId" }),
            element: <CreateAdmission />,
          },
          {
            path: URLEditAdmission({ clientId: ":clientId" }),
            element: <EditAdmission />,
          },
          {
            path: URLServicePoint(),
            element: <ServicePoints />,
          },
        ],
      },
    ],
  },
];

export default ClientRouter;

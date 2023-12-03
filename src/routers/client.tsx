import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import UserLayout from "@/layout/UserLayout";
import CreateAdmission from "@/pages/admissions/create/Create";
import CreateClientAccount from "@/pages/client-accounts/create/CreateClientAccount";
import ClientAccountEdit from "@/pages/client-accounts/edit/ClientAccountEdit";
import ClientSearch from "@/pages/client-accounts/index/ClientSearch";
import EditAdmission from "../pages/admissions/edit/Edit";
import AdmissionSearch from "./../pages/admissions/index/AdmissionSearch";
import AdmissionDetails from "./../pages/admissions/details/AdmissionDetails";
import ServicePoints from "@/pages/service-point/ServicePoints";

// route paths for client pages
export const URLClientSearch = (): string => "/client-search";
export const URLServicePoint = (): string => "/service-points";
export const URLAdmissionSearch = (): string => "/admission-search";
export const URLClientDetails = ({ id = ":id" }: { id: string }): string =>
  `/client-details/${id}`;
export const URLClientCreate = (): string => "/client-create";
export const URLClientEdit = ({ id }: { id: string }): string =>
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
export const URLAdmissionDetails = ({
  clientId = ":clientId",
}: {
  clientId: string;
}): string => `/admission-details/${clientId}`;

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
            path: URLAdmissionDetails({clientId: ":clientId"}),
            element: <AdmissionDetails />,
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

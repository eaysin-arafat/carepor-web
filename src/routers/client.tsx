import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import UserLayout from "@/layout/UserLayout";
import AdmissionDischarge from "@/pages/admissions/discharge/AdmissionDischarge";
import AdmissionsIndex from "@/pages/admissions/index/Index";
import CreateClientAccount from "@/pages/client-accounts/create/CreateClientAccount";
import ClientDetails from "@/pages/client-accounts/details/ClientsDetils";
import ClientAccountEdit from "@/pages/client-accounts/edit/ClientAccountEdit";
import ClientSearch from "@/pages/client-accounts/index/ClientSearch";
import AssignServiceQueue from "@/pages/service-point/AssignServiceQueue";
import ServicePoints from "@/pages/service-point/ServicePoints";
import EditAdmission from "../pages/admissions/edit/Edit";
import AdmissionDetails from "./../pages/admissions/details/AdmissionDetails";
import AdmissionSearch from "./../pages/admissions/index/AdmissionSearch";

// route paths for client pages
export const URLClientSearch = (): string => "/client-search";
export const URLServicePoint = (): string => "/service-points";
export const URLAssignServiceQueue = (): string => "/assign-service-queue";
export const URLAdmissionSearch = (): string => "/admission-search";
export const URLClientDetails = ({ id }: { id: string }): string =>
  `/client-details/${id}`;
export const URLLinkWithMother = ({ id }: { id: string }): string =>
  `/link-with-mother/${id}`;
export const URLClientCreate = (): string => "/client-create";
export const URLClientEdit = ({ id }: { id: string }): string =>
  `/client-edit/${id}`;
export const URLAdmissions = ({
  clientId = ":clientId",
}: {
  clientId: string;
}): string => `/admissions/${clientId}`;
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
export const URLAdmissionDischarge = ({
  clientId = ":clientId",
}: {
  clientId: string;
}): string => `/admission-discharge/${clientId}`;
// export const URLAdmissions = (): string => "/admissions";

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
            path: URLAdmissionDetails({ clientId: ":clientId" }),
            element: <AdmissionDetails />,
          },
          {
            path: URLClientDetails({ id: ":clientId" }),
            element: <ClientDetails />,
          },
          {
            path: URLLinkWithMother({ id: ":id" }),
            element: "", // "<LinkWithMother />",
          },
          {
            path: URLClientCreate(),
            element: <CreateClientAccount />,
          },
          {
            path: URLClientEdit({ id: ":id" }),
            element: <ClientAccountEdit />,
          },
          // {
          //   path: URLCreateAdmission({ clientId: ":clientId" }),
          //   element: <CreateAdmission />,
          // },
          {
            path: URLEditAdmission({ clientId: ":clientId" }),
            element: <EditAdmission />,
          },
          {
            path: URLAdmissionDischarge({ clientId: ":clientId" }),
            element: <AdmissionDischarge />,
          },
          {
            path: URLServicePoint(),
            element: <ServicePoints />,
          },
          {
            path: URLAssignServiceQueue(),
            element: <AssignServiceQueue />,
          },
          {
            path: URLAdmissions({ clientId: ":clientId" }),
            element: <AdmissionsIndex />,
          },
        ],
      },
    ],
  },
];

export default ClientRouter;

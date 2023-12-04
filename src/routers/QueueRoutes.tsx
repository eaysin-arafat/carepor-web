import PrivateGuard from "@/components/shared/guard/PrivateGuard";
import QueueSidebar from "@/components/sidebar/QueueSidebar";
import InvestigationsDashboard from "@/pages/queue/investigations-dashboard/InvestigationsDashboard";
import PharmacyQueue from "@/pages/queue/pharmacy-queue/PharmacyQueue";
import ServiceQueue from "@/pages/queue/service-queue/ServiceQueue";

// * route paths for client pages
export const URLInvestigationsDashboard = (): string =>
  "/investigations-dashboard";
export const URLPharmacyQueue = (): string => "/pharmacy-queue";
export const URLServiceQueue = (): string => "/service-queue";

// * routers for client pages
const QueueRoutes = [
  {
    element: <PrivateGuard />,
    children: [
      {
        element: <QueueSidebar />,
        children: [
          {
            path: URLInvestigationsDashboard(),
            element: <InvestigationsDashboard />,
          },
          {
            path: URLPharmacyQueue(),
            element: <PharmacyQueue />,
          },
          {
            path: URLServiceQueue(),
            element: <ServiceQueue />,
          },
        ],
      },
    ],
  },
];

export default QueueRoutes;

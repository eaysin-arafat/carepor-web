import ServiceQueueBurnSkin from "@/components/queue/service-queue/burn-skin/ServiceQueueBurnSkin";
import ServiceQueueOpd from "@/components/queue/service-queue/opd/ServiceQueueOpd";
import ServiceQueueTriage from "@/components/queue/service-queue/triage/ServiceQueueTriage";
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
export const URLServiceQueueTriage = (): string => "/service-queue/triage";
export const URLServiceQueueOpd = (): string => "/service-queue/opd";
export const URLServiceQueueBurnSkin = (): string => "/service-queue/burn-skin";

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
          {
            path: URLServiceQueueTriage(),
            element: <ServiceQueueTriage />,
          },
          {
            path: URLServiceQueueOpd(),
            element: <ServiceQueueOpd />, 
          },
          {
            path: URLServiceQueueBurnSkin(),
            element: <ServiceQueueBurnSkin />,
          },
        ],
      },
    ],
  },
];

export default QueueRoutes;

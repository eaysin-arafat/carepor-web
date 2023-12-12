import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { EnumEncounterType } from "@/enum/encounter-type";
import { EnumPiority } from "@/enum/enumerators";
import { useReadInvestigationsForDashboardQuery } from "@/features/investigation/investigation-api";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useWindowWidth from "@/hooks/useWindow";
import InvestigationQueueFilters from "@/pages/queue/investigations-dashboard/InvestigationQueueFilters";
import { DateFunc } from "@/utilities/date";
import { useState } from "react";

function InvestigationsDashboard() {
  const w1100 = useWindowWidth(1100);

  const { Investigation } = EnumEncounterType;
  const [baseData] = useBaseDataCreate(Investigation);

  // Request state for page and item
  const [pageNo, setPageNo] = useState(1);
  // const [itemPerPage, setItemPerPage] = useState(10);
  const itemPerPage = 10;
  const dateSearc = "";
  const patientName = "";
  // const [dateSearc, setDateSearce] = useState("");
  // const [patientName, setPatientName] = useState("");
  // Request for investigation data
  const {
    data: invstigationDashBoard,

    // isLoading,
    // isError,
    // isSuccess,
  } = useReadInvestigationsForDashboardQuery(
    {
      facilityId: baseData?.createdIn,
      pageNo,
      itemPerPage,
      investigationDateSearch: dateSearc,
      PatientName: patientName,
    },
    {
      skip: !baseData?.createdIn,
    }
  );

  const { investigations = [], resultRecievedTotalItems } =
    invstigationDashBoard || {};

  const priortyColor = (p: number): string => {
    return p == 2 ? "text-red-500" : p == 3 ? "text-green-500" : "";
  };

  return (
    <div className={`${w1100 && "mt-12"}`}>
      <InvestigationQueueFilters title="Investigation Queue" />

      <br />
      <div className="mt-5 bg-whiteBgColor pb-5 rounded-xl shadow-light">
        <Table isRounded>
          <TableHeader
            className="bg-tableHeadColor text-textColor py-2"
            isAction
            actionWidth="min-w-[270px]"
            title={investigationDashboardHeader}
          />

          {investigations?.map((item, index) => {
            const {} = item;
            return (
              <TableBody
                index={index}
                isAction
                actionWidth="min-w-[270px]"
                btn={{
                  viewResult: "View Results",
                  btnOutline: "Sample Collected",
                }}
                item={[
                  {
                    title:
                      item?.client?.firstName + " " + item?.client?.surname,
                    w: "20%",
                  },
                  {
                    title: item.orderDate
                      ? DateFunc.formatDate(item.orderDate)
                      : "",
                    w: "20%",
                  },
                  { title: item?.orderNumber, w: "20%" },
                  { title: item?.test?.title, w: "20%" },
                  {
                    title: EnumPiority[item?.piority],
                    w: "20%",
                    dataClass: priortyColor(item?.piority),
                  },
                  {
                    title: item?.sampleCollectionDate
                      ? DateFunc.formatDate(item?.sampleCollectionDate)
                      : "",
                    w: "20%",
                  },
                ]}
              />
            );
          })}
        </Table>
        <div className="flex justify-end mx-5">
          <CustomPagination
            activePage={pageNo}
            itemsCountPerPage={itemPerPage}
            setActivePage={setPageNo}
            totalItemsCount={resultRecievedTotalItems}
          />
        </div>
      </div>
    </div>
  );
}

export default InvestigationsDashboard;

const investigationDashboardHeader = [
  {
    title: "Patient Name",
    w: "20%",
  },
  {
    title: "Order Date",
    w: "20%",
  },
  {
    title: "Order Number",
    w: "20%",
  },
  {
    title: "Test",
    w: "20%",
  },
  {
    title: "Priority",
    w: "20%",
  },

  {
    title: "Sample Collection Date",
    w: "20%",
  },
];

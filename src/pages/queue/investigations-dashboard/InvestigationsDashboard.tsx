import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { EnumPiority } from "@/enum/enumerators";
import useWindowWidth from "@/hooks/useWindow";
import InvestigationQueueFilters from "@/pages/queue/investigations-dashboard/InvestigationQueueFilters";
import { DateFunc } from "@/utilities/date";
import useInvestigationsDashboard from "./useInvestigationsDashboard";

function InvestigationsDashboard() {
  const w1100 = useWindowWidth(1100);

  const {
    priority,
    setPriority,
    test,
    setTest,
    department,
    setDepartment,
    date,
    setDate,
    handleSearch,
    name,
    setName,
    pageNo,
    itemPerPage,
    setItemPerPage,
    setPageNo,
    totalItems,
    filterInvestigation,
  } = useInvestigationsDashboard();

  console.log(filterInvestigation);

  return (
    <div className={`${w1100 && "mt-12 "}`}>
      <InvestigationQueueFilters
        priority={priority}
        setPriority={setPriority}
        test={test}
        setTest={setTest}
        department={department}
        setDepartment={setDepartment}
        title="Investigation Queue"
        date={date}
        setDate={setDate}
        handleSearch={handleSearch}
        name={name}
        setName={setName}
      />

      <div className="mt-5 bg-whiteBgColor pb-5 rounded-xl shadow-light ">
        <Table isRounded>
          <TableHeader
            className="bg-tableHeadColor text-textColor py-2"
            isAction
            actionWidth="min-w-[270px]"
            title={investigationDashboardHeader}
          />

          {filterInvestigation?.map((item, index) => {
            const {} = item;
            return (
              <TableBody
                index={index}
                btnHandler={() => {
                  alert("Sample Collected");
                }}
                btnOutlineHandler={() => {
                  alert("Add Result");
                }}
                viewResultHandler={() => {
                  alert("View Results");
                }}
                isAction
                actionWidth="min-w-[270px]"
                btn={{
                  btn: "Sample Collected",
                  viewResult: item?.isResultReceived && "View Result",
                  btnOutline: !item?.isResultReceived && "Add Result",
                }}
                item={[
                  {
                    title:
                      item?.client?.firstName + " " + item?.client?.surname,
                    w: "20%",
                  },
                  {
                    title: (
                      <PriortyColor key={index + "piority"} p={item?.piority} />
                    ),
                    w: "20%",
                    // dataClass: priortyColor(item?.piority),
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
            setItemPerPage={setItemPerPage}
            setActivePage={setPageNo}
            totalItemsCount={totalItems}
          />
        </div>
      </div>
    </div>
  );
}

export default InvestigationsDashboard;

const PriortyColor = ({ p }: { p: number }) => {
  let color = "";
  if (p == 1) {
    color = "before:bg-green-500";
  }
  if (p == 2) {
    color = "before:bg-blue-500";
  }
  if (p == 3) {
    color = "before:bg-red-500";
  }
  return (
    <span
      className={
        "relative mx-auto before:rounded-full before:ml-[-12px] ml-[12px] before:mt-[3px] before:absolute  before:h-2 before:w-2 " +
        color
      }
    >
      {EnumPiority[p]}
    </span>
  );
};

const investigationDashboardHeader = [
  {
    title: "Patient Name",
    w: "20%",
  },
  {
    title: "Priority",
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
    title: "Sample Collection Date",
    w: "20%",
  },
];

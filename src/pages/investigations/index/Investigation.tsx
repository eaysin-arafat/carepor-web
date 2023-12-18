import RequestError from "@/components/core/error/RequestError";
import { SearchableInputType } from "@/components/core/form-elements/custom-searchable";
import TableLoader from "@/components/core/loader/TableLoader";
import NotFound from "@/components/core/not-found/NotFound";
import Table from "@/components/shared/table/Table";
import { investigationModalTypes } from "@/constants/modal-types";
import { useReadInvestigationByClientQuery } from "@/features/investigation/investigation-api";
import { openAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import dayjs from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import InvestigationAddResultModal from "../create/InvestigationAddResultModal";
import InvestigationCreate from "../create/InvestigationCreate";
import InvestigationEdit from "../create/InvestigationEdit";
import InvestigationViewOrderModal from "../create/InvestigationViewOrderModal";
import InvestigationViewResultModal from "../create/InvestigationViewResultModal";
import InvestigationFilter from "./InvestigationFilter";
import InvestigationHeader from "./InvestigationHeader";
import InvestigationTable from "./InvestigationTable";

const Investigation = () => {
  const dispatch = useDispatch();
  const w1100 = useWindowWidth(1100);
  const [baseData] = useBaseDataCreate();
  const { clientId } = baseData;

  // Rtk Request
  const {
    data: investigations,
    isSuccess,
    isLoading,
    isError,
  } = useReadInvestigationByClientQuery(clientId, {
    skip: !clientId,
  });

  // filter states
  const [priority, setPriority] = useState(undefined);
  const [test, setTest] = useState<SearchableInputType>({
    label: "",
    value: "",
  });
  const [orderDate, setOrderDate] = useState(undefined);
  console.log(priority);

  const filterByPriority = (data) => {
    console.log(data);

    if (test?.value) {
      return test?.value == data?.testId;
    } else {
      return true;
    }
  };
  const filterByTestId = (data) => {
    if (priority) {
      return priority == data?.piority;
    } else {
      return true;
    }
  };
  const handleOrderDateFilter = (data) => {
    if (orderDate && data?.orderDate) {
      return dayjs(new Date(dayjs(orderDate).format("YYYY-MM-DD"))).isSame(
        dayjs(new Date(dayjs(data?.orderDate).format("YYYY-MM-DD")))
      );
    } else {
      return true;
    }
  };

  const handleTotalFilter = (data) => {
    const mergeInvestigations = data?.mergeInvestigations
      .filter(filterByPriority)
      .filter(filterByTestId)
      .filter(handleOrderDateFilter);

    return {
      ...data,
      mergeInvestigations,
    };
  };
  const filteredInvestigation = investigations
    ?.map(handleTotalFilter)
    .filter((d) => d.mergeInvestigations?.length > 0);

  // Pazinations locally
  // const [activePage, setActivePage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleInvestigationForm = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.addInvestigation,
        data: null,
      })
    );
  };

  return (
    <>
      {/* Modal Components  */}
      <InvestigationViewOrderModal />
      <InvestigationCreate />
      <InvestigationAddResultModal addType="module" />
      <InvestigationViewResultModal />
      <InvestigationEdit />

      <div className={cn("", { "mt-12": w1100 })}>
        {/* <InvestigationCreateForm /> */}
        <div>
          <div>
            <div className="flex justify-between items-center md:mb-2">
              <h1 className="text-xl md:text-2xl text-secondaryColor font-semibold">
                Investigation
              </h1>
            </div>
            <div className=" bg-whiteBgColor pb-5 rounded-xl shadow-light">
              <InvestigationFilter
                handleInvestigationForm={handleInvestigationForm}
                priority={priority}
                setPriority={setPriority}
                setTest={setTest}
                test={test}
                setDate={setOrderDate}
                date={orderDate}
                department={0}
                setDepartment={() => {}}
                title=""
                className="border-none bg-transparent"
              />
              <Table>
                <InvestigationHeader />
                {isLoading && !isError && (
                  <>
                    <TableLoader /> <TableLoader />
                  </>
                )}

                {!isLoading && isError && <RequestError />}
                {!isLoading &&
                  isSuccess &&
                  Array.isArray(investigations) &&
                  investigations.length == 0 && <NotFound />}
                {/* Data Render Table */}
                {!isLoading &&
                  isSuccess &&
                  Array.isArray(investigations) &&
                  investigations.length > 0 && (
                    <InvestigationTable
                      investigations={filteredInvestigation}
                    />
                  )}
              </Table>

              {/*Pagination not full functional on api */}
              {/* Not back response as page size // all data in response when page size  */}
              <div className="flex justify-end mx-5">
                {/* <CustomPagination
                  activePage={activePage}
                  itemsCountPerPage={itemsPerPage}
                  setActivePage={setActivePage}
                  totalItemsCount={100}
                  setItemPerPage={setItemsPerPage}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investigation;

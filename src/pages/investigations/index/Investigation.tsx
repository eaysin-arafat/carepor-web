import RequestError from "@/components/core/error/RequestError";
import TableLoader from "@/components/core/loader/TableLoader";
import NotFound from "@/components/core/not-found/NotFound";
import Table from "@/components/shared/table/Table";
import { useReadInvestigationByClientQuery } from "@/features/investigation/investigation-api";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
// import { useDispatch } from "react-redux";
import InvestigationAddResultModal from "../create/InvestigationAddResultModal";
import InvestigationCreate from "../create/InvestigationCreate";
import InvestigationViewOrderModal from "../create/InvestigationViewOrderModal";
import InvestigationViewResultModal from "../create/InvestigationViewResultModal";
// import InvestigationFilter from "./InvestigationFilter";
import { investigationModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import { useDispatch } from "react-redux";
import InvestigationEdit from "../create/InvestigationEdit";
import InvestigationHeader from "./InvestigationHeader";
import InvestigationTable from "./InvestigationTable";

const Investigation = () => {
  // const [state, setState] = React.useState(1);
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
              {/* <InvestigationFilter
                handleInvestigationForm={handleInvestigationForm}
                priority={0}
                setPriority={() => {}}
                setTest={() => {}}
                test={0}
                department={0}
                setDepartment={() => {}}
                title=""
                className="border-none bg-transparent"
              /> */}
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
                    <InvestigationTable investigations={investigations} />
                  )}
              </Table>

              {/*Pagination not full functional on api */}
              {/* Not back response as page size // all data in response when page size  */}
              {/* <div className="flex justify-end mx-5">
                <CustomPagination
                  activePage={1}
                  itemsCountPerPage={state}
                  setActivePage={setState}
                  totalItemsCount={100}
                  setItemPerPage={() => {}}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investigation;

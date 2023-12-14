import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import { EnumPiority } from "@/enum/enumerators";
import useWindowWidth from "@/hooks/useWindow";
import {
  withCompositeInvestigation,
  withoutCompositeInvestigation,
} from "@/types/module-types/investigation";
import { TypeUser } from "@/types/user-accounts";
import { cn } from "@/utilities/cn";
import { DateFunc } from "@/utilities/date";
import findUserData from "@/utilities/find-user-data";
import React from "react";
// import { Loader } from "react-feather";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import RequestError from "@/components/core/error/RequestError";
import TableLoader from "@/components/core/loader/TableLoader";
import NotFound from "@/components/core/not-found/NotFound";
import InvestigationAddResultModal from "../create/InvestigationAddResultModal";
import InvestigationCreate from "../create/InvestigationCreate";
import InvestigationViewOrderModal from "../create/InvestigationViewOrderModal";
import InvestigationViewResultModal from "../create/InvestigationViewResultModal";
import InvestigationFilter from "./InvestigationFilter";
import InvestigationHeader from "./InvestigationHeader";
import useInvestigation from "./useInvestigation";
// import InvestigationCreateForm from "@/components/investigations/InvestigationCreateForm";

const Investigation = () => {
  const [state, setState] = React.useState(1);
  const w1100 = useWindowWidth(1100);

  const {
    // users data
    users,
    // show test name
    // renderTestName,
    // array grouping
    transformArrayToObjectCompositeName,
    // Modal handlers
    handleViewOrder,
    handleAddResult,
    handleInvestigationForm,
    handleViewResult,
    //
    clientInvestigation,
  } = useInvestigation();
  const {
    data: investigations,
    isSuccess,
    isLoading,
    isError,
  } = clientInvestigation;

  console.log(clientInvestigation);

  return (
    <>
      {/* Modal Components  */}
      <InvestigationViewOrderModal />
      <InvestigationCreate />
      <InvestigationAddResultModal />
      <InvestigationViewResultModal />

      <div className={cn("", { "mt-12": w1100 })}>
        {/* <InvestigationCreateForm/> */}
        <div>
          <div>
            <div className="flex justify-between items-center md:mb-2">
              <h1 className="text-xl md:text-2xl text-secondaryColor font-semibold">
                Investigation
              </h1>
              {/* <button
                onClick={handleInvestigationForm}
                className="flex gap-2 main_btn px-3 sm:px-4 text-[14px] sm:text-base py-2.5"
              >
                <FiPlusCircle className="text-xl sm:text-2xl " /> Add
                Investigation
              </button> */}
            </div>
            <div className=" bg-whiteBgColor pb-5 rounded-xl shadow-light">
              <InvestigationFilter
                handleInvestigationForm={handleInvestigationForm}
                priority={0}
                setPriority={() => {}}
                setTest={() => {}}
                test={0}
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

                {Array.isArray(investigations) &&
                  investigations?.map((rootInvestigationsObj, index) => {
                    // const encounterInvestigations =
                    //   rootInvestigationsObj.investigation;
                    const investigationsWithComposite =
                      rootInvestigationsObj?.investigationWithComposite;
                    const investigationsWithOutComposite =
                      rootInvestigationsObj?.investigationWithOutComposite;

                    // Composite Name Grouping
                    const compositeTestGroup =
                      (Array.isArray(investigationsWithComposite) &&
                        transformArrayToObjectCompositeName(
                          investigationsWithComposite
                        )) ||
                      [];

                    return (
                      <>
                        <SectionWrapper
                          key={index}
                          dateString={rootInvestigationsObj?.encounterDate}
                          handleAddResult={handleAddResult}
                          handleViewOrder={() =>
                            handleViewOrder(rootInvestigationsObj)
                          }
                        >
                          {/* Investigations Without Composite */}
                          {Array.isArray(investigationsWithOutComposite) &&
                            // false &&
                            investigationsWithOutComposite?.map(
                              (composite, woc_index) => {
                                return (
                                  <>
                                    <TableBody
                                      key={woc_index + "woc"}
                                      index={woc_index}
                                      isAction
                                      className="border-b"
                                      actionWidth="min-w-[220px]"
                                      btnOutlineHandler={handleAddResult}
                                      viewResultHandler={handleViewResult}
                                      btn={{
                                        viewResult: "View Result",
                                        btnOutline: "Edit Result",
                                      }}
                                      item={showTableData({ composite, users })}
                                    />
                                  </>
                                );
                              }
                            )}
                          {/* Investigations With Composite */}
                          {Object.keys(compositeTestGroup).map(
                            (compositeNameKey, com_index) => {
                              const compositeItems =
                                compositeTestGroup[compositeNameKey];

                              return (
                                <>
                                  <div className="bg-tableRow px-5 text-sm pt-3 pb-2 font-medium">
                                    {compositeNameKey}
                                  </div>
                                  {Array.isArray(compositeItems) &&
                                    compositeItems?.map(
                                      (
                                        composite: withCompositeInvestigation,
                                        item_index
                                      ) => {
                                        return (
                                          <TableBody
                                            key={com_index + "com"}
                                            index={item_index}
                                            isAction
                                            // colorKey={1}
                                            className="border-b"
                                            actionWidth="min-w-[220px]"
                                            btnOutlineHandler={handleAddResult}
                                            viewResultHandler={handleViewResult}
                                            btn={{
                                              viewResult: "View Result",
                                              btnOutline: "Edit Result",
                                            }}
                                            item={showTableData({
                                              composite,
                                              users,
                                            })}
                                          />
                                        );
                                      }
                                    )}
                                </>
                              );
                            }
                          )}
                        </SectionWrapper>
                      </>
                    );
                  })}
              </Table>

              <div className="flex justify-end mx-5">
                <CustomPagination
                  activePage={1}
                  itemsCountPerPage={state}
                  setActivePage={setState}
                  totalItemsCount={100}
                  setItemPerPage={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investigation;

/**
 *
 * @param composite composite object
 * @param users all users
 * @returns
 */
const showTableData = ({
  composite,
  users = [],
}: {
  composite: withCompositeInvestigation | withoutCompositeInvestigation;
  users: TypeUser[];
}) => {
  return [
    {
      title: DateFunc.formatDate(composite?.orderDate),
      w: "12%",
    },

    {
      title: EnumPiority[composite?.piority],
      w: "12%",
    },
    {
      title: composite?.createdIn,
      w: "12%",
    },
    {
      title: findUserData(composite?.createdBy, users)?.name,
      w: "12%",
    },
    {
      title: renderTestName(
        composite?.test?.title,
        //@ts-ignore
        composite?.test?.testSubtype?.description,
        //@ts-ignore
        composite?.test?.testSubtype?.testType?.description
      ),
      w: "14%",
    },
    {
      title: composite?.orderNumber ? composite?.orderNumber : "-",
      w: "12%",
    },
    {
      title: "Test Result*",
      w: "12%",
    },
    {
      title: "Test Unit*",
      w: "12%",
    },
  ];
};

type WrapperProps = {
  children?: React.ReactNode;
  handleAddResult?: () => void;
  handleViewOrder?: () => void;
  dateString?: string;
};

const SectionWrapper = ({
  children,
  handleAddResult,
  handleViewOrder,
  dateString,
}: WrapperProps) => {
  return (
    <div className="mb-5 ">
      <div className="bg-tableRow flex justify-between border-y-2  gap-2 py-2 relative">
        <h2 className="ps-5 font-semibold ">
          Date : {DateFunc.formatDate(dateString)}
        </h2>
        <div className="min-w-[220px] bg-tableRow flex gap-2 sticky right-0 px-2">
          <button
            onClick={handleAddResult}
            className="border border-primaryColor rounded-full px-3 py-0.5 text-[13px] text-primaryColor bg-primaryColor  hover:bg-primaryHoverColor text-white"
          >
            Add Result
          </button>
          <button
            onClick={handleViewOrder}
            className="border border-primaryColor rounded-full px-3 py-0.5 text-[13px]  bg-lightBlueColor hover:bg-tableHeadColor text-textColor"
          >
            View Order
          </button>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

// show test name
export const renderTestName = (test, subType, type) => {
  return test && subType && type ? `${test} (${subType}, ${type})` : "";
};

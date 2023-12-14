import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import { EnumPiority } from "@/enum/enumerators";
import useWindowWidth from "@/hooks/useWindow";
import {
  withCompositeInvestigation,
  withoutCompositeInvestigation,
} from "@/types/module-types/investigation";
import { cn } from "@/utilities/cn";
import { DateFunc } from "@/utilities/date";
import React from "react";
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
    // Modal handlers
    handleAddResult,
    handleInvestigationForm,
    handleViewOrder,
    handleViewResult,
    //
    clientInvestigation,
  } = useInvestigation();
  const {
    data: investigations,
    // isSuccess,
    // isLoading,
    // isError,
    // status,
  } = clientInvestigation;

  return (
    <>
      {/* Modal Components  */}
      <InvestigationCreate />
      <InvestigationAddResultModal />
      <InvestigationViewOrderModal />
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

                {Array.isArray(investigations) &&
                  investigations?.map((item, index) => {
                    const investigationsWithComposite =
                      item?.investigationWithComposite;
                    const investigationsWithOutComposite =
                      item?.investigationWithOutComposite;

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
                          dateString={item?.encounterDate}
                          handleAddResult={handleAddResult}
                          handleViewOrder={handleViewOrder}
                        >
                          {/* investigationsWithOutComposite */}
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
                                      // colorKey={1}
                                      className="border-b"
                                      actionWidth="min-w-[220px]"
                                      btnOutlineHandler={handleAddResult}
                                      viewResultHandler={handleViewResult}
                                      btn={{
                                        viewResult: "View Result",
                                        btnOutline: "Edit Result",
                                      }}
                                      item={showTableData(composite)}
                                    />
                                  </>
                                );
                              }
                            )}
                          {/*  */}
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
                                            item={showTableData(composite)}
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

const showTableData = (
  composite: withCompositeInvestigation | withoutCompositeInvestigation
) => {
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
      title: composite?.createdBy,
      w: "12%",
    },
    {
      title: composite?.test?.title,
      w: "12%",
    },
    {
      title: composite?.orderNumber,
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
        <h2 className="ps-5 font-semibold underline">
          Date : {DateFunc.formatDate(dateString)}
        </h2>
        <div className="min-w-[220px] bg-tableRow flex gap-2 sticky right-0 px-2">
          <button
            onClick={handleAddResult}
            className="border border-primaryColor rounded-full px-3 py-0.5 text-[13px] text-primaryColor hover:bg-primaryColor hover:text-white"
          >
            Add Result
          </button>
          <button
            onClick={handleViewOrder}
            className="border border-primaryColor rounded-full px-3 py-0.5 text-[13px] text-primaryColor hover:bg-primaryColor hover:text-white"
          >
            View Order
          </button>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};
const transformArrayToObjectCompositeName = (data) => {
  return data?.reduce((acc, cur) => {
    const key = `${cur?.compositeName}`;
    if (!acc[key]) {
      acc[key] = [cur];
    } else {
      acc[key].push(cur);
    }
    return acc;
  }, {});
};

// const data = [
//   {
//     id: 1,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 2,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 3,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//     collapsible: [
//       {
//         id: 1,
//         name: "Ananda Kumar",
//         age: "23",
//         orderDate: "25 Nov, 2023",
//         priority: "Regular",
//         test: "test",
//         orderNumber: "1",
//         sample: "25 Nov, 2023",
//       },
//       {
//         id: 1,
//         name: "Achem",
//         age: "23",
//         orderDate: "25 Nov, 2023",
//         priority: "Regular",
//         test: "test",
//         orderNumber: "1",
//         sample: "25 Nov, 2023",
//       },
//       {
//         id: 1,
//         name: "Anamul",
//         age: "23",
//         orderDate: "25 Nov, 2023",
//         priority: "Regular",
//         test: "test",
//         orderNumber: "1",
//         sample: "25 Nov, 2023",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 5,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 6,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 7,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 8,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 9,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
//   {
//     id: 10,
//     name: "Amir Hamza",
//     age: "23",
//     orderDate: "25 Nov, 2023",
//     priority: "Regular",
//     test: "test",
//     orderNumber: "1",
//     sample: "25 Nov, 2023",
//   },
// ];

{
  /* <Table isRounded>
                <TableHeader
                  className="bg-tableHeadColor text-textColor"
                  isAction
                  actionWidth="min-w-[220px]"
                  title={[
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
                      title: "Test",
                      w: "20%",
                    },
                    {
                      title: "Order Number",
                      w: "20%",
                    },
                    {
                      title: "Sample Date Collection",
                      w: "20%",
                    },
                  ]}
                />
                {data.map((item, index) => (
                  <>
                    {item.collapsible ? (
                      <CollapsibleTableBody addResult>
                        {item?.collapsible.map((subItem, i) => (
                          <>
                            <TableBody
                              index={i}
                              colorKey={2}
                              isAction
                              btnOutlineHandler={handleAddResult}
                              viewResultHandler={handleViewOrder}
                              actionWidth="min-w-[220px]"
                              btn={{
                                viewResult: "View Order",
                                btnOutline: "Add Result",
                              }}
                              item={[
                                { title: subItem.name, w: "20%" },
                                { title: subItem.orderDate, w: "20%" },
                                { title: subItem.orderDate, w: "20%" },
                                { title: subItem.test, w: "20%" },
                                { title: subItem.orderNumber, w: "20%" },
                                { title: subItem.sample, w: "20%" },
                              ]}
                            />
                          </>
                        ))}
                      </CollapsibleTableBody>
                    ) : (
                      <TableBody
                        index={index}
                        isAction
                        actionWidth="min-w-[220px]"
                        btnOutlineHandler={handleAddResult}
                        viewResultHandler={handleViewOrder}
                        btn={{
                          viewResult: "View Order",
                          btnOutline: "Add Result",
                        }}
                        item={[
                          { title: item.name, w: "20%" },
                          { title: item.orderDate, w: "20%" },
                          { title: item.orderDate, w: "20%" },
                          { title: item.test, w: "20%" },
                          { title: item.orderNumber, w: "20%" },
                          { title: item.sample, w: "20%" },
                        ]}
                      />
                    )}
                  </>
                ))}
              </Table> */
}

/**
                        <SectionWrapper
                          key={index}
                          handleAddResult={handleAddResult}
                          handleViewOrder={handleViewOrder}
                        >
                          <>
                            <TableBody
                              index={1}
                              isAction
                              colorKey={1}
                              className="border-b"
                              actionWidth="min-w-[220px]"
                              btnOutlineHandler={handleAddResult}
                              viewResultHandler={handleViewResult}
                              btn={{
                                viewResult: "View Result",
                                btnOutline: "Edit Result",
                              }}
                              item={[
                                { title: "item.name", w: "20%" },
                                { title: "item.orderDate", w: "20%" },
                                { title: "item.orderDate", w: "20%" },
                                { title: "item.test", w: "20%" },
                                { title: "item.orderNumber", w: "20%" },
                                { title: "item.sample", w: "20%" },
                              ]}
                            />
                          </>
                        </SectionWrapper>
 */

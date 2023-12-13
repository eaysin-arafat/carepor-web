import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { investigationModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import useWindowWidth from "@/hooks/useWindow";
import InvestigationQueueFilters from "@/pages/queue/investigations-dashboard/InvestigationQueueFilters";
import { cn } from "@/utilities/cn";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import InvestigationAddResultModal from "../create/InvestigationAddResultModal";
import InvestigationCreate from "../create/InvestigationCreate";
import InvestigationViewOrderModal from "../create/InvestigationViewOrderModal";
import InvestigationViewResultModal from "../create/InvestigationViewResultModal";
// import InvestigationCreateForm from "@/components/investigations/InvestigationCreateForm";

const Investigation = () => {
  const [state, setState] = React.useState(1);
  const w1100 = useWindowWidth(1100);
  const dispatch = useDispatch();

  const handleInvestigation = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.addInvestigation,
        data: null,
      })
    );
  };

  const handleAddResult = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.addInvestigationResult,
        data: null,
      })
    );
  };

  const handleViewOrder = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewOrder,
        data: null,
      })
    );
  };

  const handleViewResult = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewResult,
        data: null,
      })
    );
  };

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
              <h2 className="text-xl md:text-2xl text-secondaryColor font-medium">
                Investigations
              </h2>
              <button
                onClick={handleInvestigation}
                className="flex gap-2 main_btn px-3 sm:px-4 text-[14px] sm:text-base py-2.5"
              >
                {" "}
                <FiPlusCircle className="text-xl sm:text-2xl " /> Add
                Investigation
              </button>
            </div>
            <div className=" bg-whiteBgColor pb-5 rounded-xl shadow-light">
              <InvestigationQueueFilters
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
                {/* {data.map((item, index) => ( */}
                <SectionWrapper
                  handleAddResult={handleAddResult}
                  handleViewOrder={handleViewOrder}
                >
                  <>
                    <TableBody
                      index={1}
                      isAction
                      colorKey={1}
                      className="border-t"
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
                {/* ))} */}
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

type WrapperProps = {
  children?: React.ReactNode;
  handleAddResult?: () => void;
  handleViewOrder?: () => void;
};

const SectionWrapper = ({
  children,
  handleAddResult,
  handleViewOrder,
}: WrapperProps) => {
  return (
    <div className="mt-3">
      <div className="bg-tableRow flex justify-between border-b gap-2 py-2 relative">
        <h2 className="ps-5 font-semibold"> Date : 12-12-23</h2>
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

import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { htsModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import useWindowWidth from "@/hooks/useWindow";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import HtsCreateForm from "../create/HtsCreateForm";

function HtsIndex() {
  const [state, setState] = React.useState(1);
  const dispatch = useDispatch();
  const w1100 = useWindowWidth(1100);

  const handleAddHtsModal = () => {
    dispatch(
      openAddModal({
        modalId: htsModalTypes.htsCreateModal,
        data: null,
      })
    );
  };

  return (
    <div className={`${w1100 ? "mt-12" : ""}`}>
      <HtsCreateForm />

      <div className=" font-poppins">
        <div className="">
          <div className="">
            <div className="md:flex justify-between items-center">
              <h2 className="heading_2">Vitals & Anthropometry</h2>
              <div className="flex gap-4 mt-3">
                <button
                  onClick={handleAddHtsModal}
                  className="main_btn py-2 px-5 gap-1 inline-flex"
                >
                  <FiPlusCircle className="" /> Add Vital
                </button>
              </div>
            </div>
            <div className="mt-5 bg-whiteBgColor pb-5 rounded-lg">
              <Table isRounded className="shadow min-w-[1100px]">
                <TableHeader
                  className="bg-tableHeadColor text-textColor"
                  isAction
                  actionWidth="min-w-[100px]"
                  title={[
                    {
                      title: "Source of Client",
                      w: "10%",
                    },
                    {
                      title: "Reason for testing",
                      w: "10%",
                    },
                    {
                      title: "Last Tested Date",
                      w: "15%",
                    },
                    {
                      title: "Last Test Result",
                      w: "15%",
                    },
                    {
                      title: "Consent Obtained",
                      w: "10%",
                    },
                    {
                      title: "Reason for not testing",
                      w: "15%",
                    },
                    {
                      title: "Others",
                      w: "20%",
                    },
                  ]}
                />
                {data.map((item, index) => (
                  <TableBody
                    index={index}
                    isAction
                    actionWidth="min-w-[100px]"
                    viewResultHandler={handleAddHtsModal}
                    btn={{
                      viewResult: "Edit",
                    }}
                    item={[
                      { title: item.name, w: "10%" },
                      { title: item.orderDate, w: "10%" },
                      { title: item.test, w: "15%" },
                      { title: item.orderNumber, w: "15%" },
                      { title: item.orderNumber, w: "10%" },
                      { title: item.orderNumber, w: "15%" },
                      { title: item.orderNumber, w: "20%" },
                    ]}
                  />
                ))}
              </Table>
              <div className="flex justify-end mx-8">
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
    </div>
  );
}

export default HtsIndex;
const data = [
  {
    id: 1,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
  {
    id: 2,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
  {
    id: 3,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
  {
    id: 4,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
];

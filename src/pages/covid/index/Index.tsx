import { RootState } from "@/app/store";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { covidModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import React from "react";
import { PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import CovidCreate from "../create/Create";
import CovidDetails from "../details/Details";

const CovidIndex = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const [state, setState] = React.useState(1);

  const handleAddCovid = () => {
    dispatch(
      openAddModal({
        modalId: covidModalTypes.covidCreateModal,
        data: null,
      })
    );
  };
  const handleViewCovid = () => {
    dispatch(
      openAddModal({
        modalId: covidModalTypes.covidViewModal,
        data: null,
      })
    );
  };
  return (
    <div>
      {/* Modal Components  */}
      <CovidCreate />
      {addModal?.modalId === covidModalTypes.covidViewModal && <CovidDetails />}

      <div className="flex justify-between">
        <h2 className="heading_2">Covid</h2>
        <button onClick={handleAddCovid} className="main_btn px-5 py-2.5">
          <PlusCircle className="mr-2" /> New Record{" "}
        </button>
      </div>
      <div className="mt-5 bg-whiteBgColor pb-5 rounded-lg">
        <Table isRounded className="shadow min-w-[1100px]">
          <TableHeader
            className="bg-tableHeadColor text-textColor"
            isAction
            actionWidth="min-w-[130px]"
            title={[
              {
                title: "Source of Alert",
                w: "20%",
              },
              {
                title: "Date of Notification",
                w: "20%",
              },
              {
                title: "Oxygen Saturation",
                w: "20%",
              },
              {
                title: "ICU Admission",
                w: "20%",
              },
              {
                title: "Date First Positive",
                w: "20%",
              },
            ]}
          />
          {data.map((item, index) => (
            <TableBody
              index={index}
              isAction
              actionWidth="min-w-[130px]"
              viewResultHandler={handleViewCovid}
              // btnOutlineHandler={handleViewHtsModal}
              btn={{
                viewResult: "View Details",
              }}
              item={[
                { title: item.name, w: "20%" },
                { title: item.orderDate, w: "20%" },
                { title: item.test, w: "20%" },
                { title: item.orderNumber, w: "20%" },
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
  );
};

export default CovidIndex;
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

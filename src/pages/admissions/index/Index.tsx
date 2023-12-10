import AdmissionsFilters from "@/components/admissions/AdmissionsFilters";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Modal from "@/components/core/modal/Modal";
import DataSummaryList from "@/components/shared/data-summary/DataSummaryList";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { admissionModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import AdmissionForm from "../create/AdmissionForm";

const AdmissionsIndex = () => {
  const [state, setState] = React.useState(1);
  const dispatch = useDispatch();

  const handleAdmissionModal = () => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.addAdmission,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      <Modal
        className="max-w-[1420px]"
        title="Admit Patient"
        addModalId={admissionModalTypes.addAdmission}
      >
        <>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border-2 border-lightGrayColor rounded-lg px-5 my-3">
              <AdmissionForm />
              <div className="my-5">
                <CancelAndAddButton toggler={closeModal} />
              </div>
            </div>
            <div className="border-2 border-lightGrayColor rounded-lg px-5 my-3">
                <h2 className="text-secondaryColor text-xl font-medium mt-4 text-center">Recent Admissions</h2>
              <div className="bg-lightBlueColor rounded-lg h-fit p-4 mt-3 mb-5">
                <div className="flex flex-wrap gap-4 text-xs">
                  <p>
                    <span className="font-semibold">Admission Date : </span>
                    28-Nov-2023
                  </p>
                  <p>
                    <span className="font-semibold">Department : </span> Bauleni
                    Mini Hospital
                  </p>
                  <p>
                    <span className="font-semibold">Firm/Ward : </span> John
                    Wick
                  </p>
                  <p>
                    <span className="font-semibold">Operation Time :</span> John
                    Wick
                  </p>
                  <p>
                    <span className="font-semibold">Surgery Type : </span> John
                    Wick{" "}
                  </p>
                  <p>
                    <span className="font-semibold">Department : </span> John
                    Wick
                  </p>
                  <p>
                    <span className="font-semibold"> Bed :</span> John Wick{" "}
                  </p>
                  <p>
                    {" "}
                    <span className="font-semibold text-xs">Notes :</span>{" "}
                    ------{" "}
                  </p>
                </div>
                <div className="flex items-center justify-end text-xs gap-2">
                  <button className="text-red-500">
                    <BsTrash />
                  </button>
                  <button className="text-primaryColor flex">
                    <MdOutlineModeEdit />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
      <ClientDetailsCard className="shadow-none" />
      <div className="grid grid-cols-7 gap-5 mt-5">
        <div className="col-span-7 lg:col-span-5">
          <div className="flex justify-between items-center">
            <h2 className="heading_2">Admissions</h2>
            <div className="text-end ">
              <button
                className="main_btn text-base py-3 px-5"
                onClick={handleAdmissionModal}
              >
                <FiPlusCircle className="mr-1 text-xl" /> Admit Patient
              </button>
            </div>
          </div>
          <AdmissionsFilters />
          <div className="">
            <div className="mt-5 bg-whiteBgColor pb-5 rounded-xl shadow-light">
              <Table isRounded>
                <TableHeader
                  className=""
                  isAction
                  actionWidth="min-w-[220px]"
                  title={[
                    {
                      title: "Admission Date",
                      w: "20%",
                    },
                    {
                      title: "Department",
                      w: "20%",
                    },
                    {
                      title: "Firm/Unit",
                      w: "20%",
                    },
                    {
                      title: "Ward",
                      w: "20%",
                    },
                    {
                      title: "Bed",
                      w: "20%",
                    },
                    {
                      title: "Discharge Date",
                      w: "20%",
                    },
                  ]}
                />
                {data.map((item, index) => (
                  <TableBody
                    index={index}
                    isAction
                    actionWidth="min-w-[220px]"
                    btn={{
                      viewResult: "View Details ",
                      btnOutline: "Discharge",
                    }}
                    item={[
                      { title: item.name, w: "20%" },
                      { title: item?.priority, w: "20%" },
                      { title: item.orderDate, w: "20%" },
                      { title: item.test, w: "20%" },
                      { title: item.orderNumber, w: "20%" },
                      { title: item.sample, w: "20%" },
                    ]}
                  />
                ))}
              </Table>
              <div className="flex justify-end mx-5">
                <CustomPagination
                  activePage={1}
                  itemsCountPerPage={state}
                  setActivePage={setState}
                  totalItemsCount={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7 lg:col-span-2">
          <DataSummaryList />
        </div>
      </div>
    </div>
  );
};

export default AdmissionsIndex;
const data = [
  {
    id: 1,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
];

import AdmissionsFilters from "@/components/admissions/AdmissionsFilters";
import SimplePatientDetails from "@/components/client-accounts/cards/SimplePatientDetails";
import Container from "@/components/core/container/Container";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { admissionModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdmissionCreateModal from "../create/AdmissionCreateModal";
import AdmissionDischarge from "../discharge/AdmissionDischarge";
import AdmissionDetails from "../details/AdmissionDetails";

const AdmissionsIndex = () => {
  const [state, setState] = React.useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdmissionModal = () => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.addAdmission,
        data: null,
      })
    );
  };

  const handleAdmissionDetails = () => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.admissionDetails,
        data: null,
      })
    );
  };

  const handleAdmissionDischarge = () => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.admissionDischarge,
        data: null,
      })
    );
  };

  return (
    <div className="mx-2">
      <Container className="max-w-[1400px]">
        <div>
            {/* Modal Components  */}
          <AdmissionCreateModal />
          <AdmissionDischarge />
          <AdmissionDetails />

          <SimplePatientDetails className=" shadow-none mt-5" />
          <div className="grid grid-cols-7 gap-5 mt-5 bg-whiteBgColor p-5 rounded-lg ">
            <div className="col-span-7">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <button onClick={() => navigate(-1)}>
                    <IoArrowBack className="text-3xl" />
                  </button>
                  <h2 className="heading_2 text-xl">Admissions</h2>
                </div>
                <div className="text-end ">
                  <button
                    className="main_btn text-[14px] py-2 px-3 sm:px-5"
                    onClick={handleAdmissionModal}
                  >
                    <FiPlusCircle className="mr-1 text-xl sm:text-xl " /> Admit Patient
                  </button>
                </div>
              </div>
              <AdmissionsFilters />
              <div className="">
                <div className="mt-2 bg-whiteBgColor pb-5 rounded-xl ">
                  <Table isRounded >
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
                        btnOutlineHandler={handleAdmissionDischarge}
                        viewResultHandler={handleAdmissionDetails}
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
          </div>
        </div>
      </Container>
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

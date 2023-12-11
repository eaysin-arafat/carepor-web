import { RootState } from "@/app/store";
import AdmissionsFilters from "@/components/admissions/AdmissionsFilters";
import SimplePatientDetails from "@/components/client-accounts/cards/SimplePatientDetails";
import Container from "@/components/core/container/Container";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { admissionModalTypes } from "@/constants/modal-types";
import {
  Encounter,
  useReadAdmissionListByClientQuery,
} from "@/features/medical-encounter/medical-encounter-api";
import { openAddModal } from "@/features/modal/modal-slice";
import { DateFunc } from "@/utilities/date";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdmissionCreateModal from "../create/AdmissionCreateModal";
import AdmissionDetails from "../details/AdmissionDetails";
import AdmissionDischarge from "../discharge/AdmissionDischarge";

const AdmissionsIndex = () => {
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );
  const [state, setState] = React.useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientId } = useParams();

  const { data: admissionList } = useReadAdmissionListByClientQuery(clientId, {
    skip: !clientId,
    refetchOnMountOrArgChange: true,
  });

  const handleAdmissionModal = () => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.addAdmission,
        data: null,
      })
    );
  };

  const handleAdmissionDetails = (item: Encounter) => {
    dispatch(
      openAddModal({
        modalId: admissionModalTypes.admissionDetails,
        data: item,
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
                    <FiPlusCircle className="mr-1 text-xl sm:text-xl " /> Admit
                    Patient
                  </button>
                </div>
              </div>
              <AdmissionsFilters />
              <div className="">
                <div className="mt-2 bg-whiteBgColor pb-5 rounded-xl ">
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
                    {admissionList?.map((item, index) => (
                      <TableBody
                        index={index}
                        isAction
                        actionWidth="min-w-[220px]"
                        btnOutlineHandler={handleAdmissionDischarge}
                        viewResultHandler={() => handleAdmissionDetails(item)}
                        btn={{
                          viewResult: "View Details ",
                          ...(!item?.ipdDischargeDate && {
                            btnOutline: "Discharge",
                          }),
                        }}
                        item={[
                          {
                            title: item?.ipdAdmissionDate
                              ? DateFunc.toFormatted(item?.ipdAdmissionDate)
                              : "",
                            w: "20%",
                          },
                          {
                            title:
                              item?.bed?.ward?.firm?.department?.description,
                            w: "20%",
                          },
                          {
                            title: item?.bed?.ward?.firm?.description,
                            w: "20%",
                          },
                          { title: item?.bed?.ward?.description, w: "20%" },
                          { title: item?.bed?.description, w: "20%" },
                          {
                            title: item?.ipdDischargeDate
                              ? DateFunc.toFormatted(item?.ipdDischargeDate)
                              : "",
                            w: "20%",
                          },
                        ]}
                      />
                    ))}
                  </Table>
                  <div className="flex justify-end mx-5">
                    <CustomPagination
                      activePage={state}
                      setActivePage={setState}
                      itemsCountPerPage={5}
                      totalItemsCount={admissionList?.length}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Modal Components  */}
      <AdmissionCreateModal />
      <AdmissionDischarge />

      {/* DETAILS MODAL */}
      {addModal?.isOpen &&
        addModal?.modalId === admissionModalTypes.admissionDetails && (
          <AdmissionDetails />
        )}
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

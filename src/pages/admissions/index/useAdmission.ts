import { RootState } from "@/app/store";
import { admissionModalTypes } from "@/constants/modal-types";
import { useReadClientByKeyQuery } from "@/features/client/client-api";
import {
  Encounter,
  useReadAdmissionListByClientQuery,
} from "@/features/medical-encounter/medical-encounter-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import dayjs from "dayjs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const tableHeader = [
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
];

const useAdmission = () => {
  // get data from the redux store
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  // local state
  const [currentPage, setCurrentPage] = React.useState(1);
  const [department, setDepartment] = React.useState("");
  const [ward, setWard] = React.useState("");
  const [admissionDate, setAdmissionDate] = React.useState("");
  const [dischargeDate, setDischargeDate] = React.useState("");
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientId } = useParams();

  // api hooks
  const {
    data: admissionList,
    isLoading,
    isSuccess,
    status,
  } = useReadAdmissionListByClientQuery(clientId, {
    skip: !clientId,
    refetchOnMountOrArgChange: true,
  });

  const { data: client } = useReadClientByKeyQuery(clientId, {
    skip: !clientId,
    refetchOnMountOrArgChange: true,
  });

  // change handler
  const handleAdmissionDateChange = (date: Date | null) => {
    setAdmissionDate(new Date(dayjs(date).format("YYYY-MM-DD")).toISOString());
  };

  const handleDischargeDateChange = (date: Date | null) => {
    setDischargeDate(new Date(dayjs(date).format("YYYY-MM-DD")).toISOString());
  };

  const handleDepartmentChange = (departmentId: string) => {
    setDepartment(departmentId);
  };

  const handleWardChange = (wardId: string) => {
    setWard(wardId);
  };

  // handle pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleItemsPerPage = (item: number) => {
    setItemsPerPage(item);
  };

  // filter handlers
  const handleAdmissionDateFilter = (item: Encounter) => {
    console.log("admissionDate", admissionDate);
    console.log("item.ipdAdmissionDate", item.ipdAdmissionDate);

    if (admissionDate && item.ipdAdmissionDate) {
      return dayjs(new Date(dayjs(admissionDate).format("YYYY-MM-DD"))).isSame(
        dayjs(new Date(dayjs(item.ipdAdmissionDate).format("YYYY-MM-DD")))
      );
    } else {
      return true;
    }
  };

  const handleDischargeDateFilter = (item: Encounter) => {
    if (dischargeDate && item.ipdDischargeDate) {
      return dayjs(new Date(dayjs(dischargeDate).format("YYYY-MM-DD"))).isSame(
        dayjs(new Date(dayjs(item.ipdDischargeDate).format("YYYY-MM-DD")))
      );
    } else {
      return true;
    }
  };

  const handleDepartmentFilter = (item: Encounter) => {
    if (department) {
      return item?.bed?.ward?.firm?.departmentId == +department;
    } else {
      return true;
    }
  };

  const handleWardFilter = (item: Encounter) => {
    if (ward) {
      return item?.bed?.wardId == +ward;
    } else {
      return true;
    }
  };

  // handler functions
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

  const handleAdmissionDischarge = (item: Encounter) => {
    dispatch(
      openEditModal({
        modalId: admissionModalTypes.admissionDischarge,
        data: item,
      })
    );
  };

  // filtered  data
  const filteredData = admissionList
    ?.slice()
    ?.filter(handleAdmissionDateFilter)
    ?.filter(handleDischargeDateFilter)
    ?.filter(handleDepartmentFilter)
    ?.filter(handleWardFilter);

  // paginated data
  const paginatedData = filteredData?.slice(startIndex, endIndex);

  return {
    admissionList,
    handleAdmissionModal,
    handleAdmissionDetails,
    handleAdmissionDischarge,
    navigate,
    addModal,
    editModal,
    tableHeader,
    handleAdmissionDateChange,
    handleDischargeDateChange,
    handleDepartmentChange,
    handleWardChange,
    department,
    ward,
    admissionDate,
    dischargeDate,
    client,
    isLoading,
    isSuccess,
    status,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    filteredData,
    paginatedData,
    handleItemsPerPage,
  };
};

export default useAdmission;

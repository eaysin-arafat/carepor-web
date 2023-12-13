import { RootState } from "@/app/store";
import { departmentModalTypes } from "@/constants/modal-types";
import {
  Department,
  useReadDepartmentsQuery,
} from "@/features/department/department-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useDepartments = () => {
  const [search, setSearch] = useState("");
  // * Hokes
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const facility = cookieManager.parseCookie<FacilityToken>("facility");

  const {
    data: departments,
    isLoading,
    isSuccess,
    status,
  } = useReadDepartmentsQuery(facility?.facilityId ?? 0);

  const handleEdit = (data: Department) => {
    dispatch(
      openEditModal({ modalId: departmentModalTypes.editDepartment, data })
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (item: Department) => {
    if (search === "") return true;
    return item?.description?.toLowerCase()?.includes(search.toLowerCase());
  };

  const handleAddDepartment = () => {
    dispatch(
      openAddModal({
        modalId: departmentModalTypes.addDepartment,
        data: null,
      })
    );
  };

  return {
    departments,
    isLoading,
    status,
    handleEdit,
    handleAddDepartment,
    editModal,
    addModal,
    navigate,
    isSuccess,
    search,
    handleSearchChange,
    handleFilter,
  };
};

export default useDepartments;

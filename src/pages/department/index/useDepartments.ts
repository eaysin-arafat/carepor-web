import { RootState } from "@/app/store";
import { departmentModalTypes } from "@/constants/modal-types";
import {
  Department,
  useReadDepartmentsQuery,
} from "@/features/department/department-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useDepartments = () => {
  // * Hokes
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const facility = cookieManager.parseCookie<FacilityToken>("facility_token");

  const {
    data: departments,
    isLoading,
    status,
  } = useReadDepartmentsQuery(facility?.facilityId ?? 0);

  const handleEdit = (data: Department) => {
    dispatch(
      openEditModal({ modalId: departmentModalTypes.editDepartment, data })
    );
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
  };
};

export default useDepartments;

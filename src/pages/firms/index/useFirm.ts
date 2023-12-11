import { RootState } from "@/app/store";
import { firmModalTypes } from "@/constants/modal-types";
import {
  FirmType,
  useReadFirmsByDepartmentIdQuery,
} from "@/features/firm/firm-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useFirm = () => {
  // local state
  const [search, setSearch] = useState("");

  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { departmentId } = useParams();

  // get data from the redux store
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  // api hooks
  const {
    data: firms,
    isLoading,
    isSuccess,
    status,
  } = useReadFirmsByDepartmentIdQuery(departmentId, {
    skip: !departmentId,
    refetchOnMountOrArgChange: true,
  });

  // handlers
  const handleAddFirm = () => {
    dispatch(
      openAddModal({
        modalId: firmModalTypes.addFirm,
        data: null,
      })
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (item: FirmType) => {
    if (search === "") return true;
    return item?.description?.toLowerCase()?.includes(search.toLowerCase());
  };

  const handleEditFirm = (item: FirmType) => {
    dispatch(
      openEditModal({
        modalId: firmModalTypes.editFirm,
        data: item,
      })
    );
  };

  return {
    firms,
    handleAddFirm,
    handleEditFirm,
    addModal,
    editModal,
    navigate,
    status,
    isSuccess,
    isLoading,
    search,
    handleSearchChange,
    handleFilter,
  };
};

export default useFirm;

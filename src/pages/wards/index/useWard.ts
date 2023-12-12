import { RootState } from "@/app/store";
import { wardModalTypes } from "@/constants/modal-types";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import { Ward, useReadWardByFirmQuery } from "@/features/ward/ward-api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useWard = () => {
  // local state
  const [search, setSearch] = useState("");

  //  get data from redux store
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  //  Hokes
  const { firmId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  api hooks
  const {
    data: wards,
    isSuccess,
    isLoading,
    status,
  } = useReadWardByFirmQuery(firmId, {
    skip: !firmId,
    refetchOnMountOrArgChange: true,
  });

  //  Handlers
  const handleAddFirm = () => {
    dispatch(
      openAddModal({
        modalId: wardModalTypes.addWard,
        data: null,
      })
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (item: Ward) => {
    if (search === "") return true;
    return item?.description?.toLowerCase()?.includes(search.toLowerCase());
  };

  const handleEditFirm = (item: Ward) => {
    dispatch(
      openEditModal({
        modalId: wardModalTypes.editWard,
        data: item,
      })
    );
  };

  return {
    wards,
    isLoading,
    status,
    handleAddFirm,
    handleEditFirm,
    editModal,
    addModal,
    navigate,
    isSuccess,
    search,
    handleSearchChange,
    handleFilter,
  };
};

export default useWard;

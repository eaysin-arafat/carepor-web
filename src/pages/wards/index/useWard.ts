import { RootState } from "@/app/store";
import { wardModalTypes } from "@/constants/modal-types";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import { Ward, useReadWardByFirmQuery } from "@/features/ward/ward-api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useWard = () => {
  // * get data from redux store
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  // * Hokes
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

  const handleAddFirm = () => {
    dispatch(
      openAddModal({
        modalId: wardModalTypes.addWard,
        data: null,
      })
    );
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
  };
};

export default useWard;

import { RootState } from "@/app/store";
import { firmModalTypes } from "@/constants/modal-types";
import {
  FirmType,
  useReadFirmsByDepartmentIdQuery,
} from "@/features/firm/firm-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useFirm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { departmentId } = useParams();

  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const { data: firms } = useReadFirmsByDepartmentIdQuery(departmentId, {
    skip: !departmentId,
    refetchOnMountOrArgChange: true,
  });

  const handleAddFirm = () => {
    dispatch(
      openAddModal({
        modalId: firmModalTypes.addFirm,
        data: null,
      })
    );
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
  };
};

export default useFirm;

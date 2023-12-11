import { RootState } from "@/app/store";
import { bedModalTypes } from "@/constants/modal-types";
import { BedType, useReadBedByWardQuery } from "@/features/bed/bed-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useBeds = () => {
  // * get data from the redux store
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );
  // * Hokes
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wardId } = useParams();

  // api hooks
  const {
    data: beds,
    isSuccess,
    isLoading,
    status,
  } = useReadBedByWardQuery(wardId, {
    skip: !wardId,
    refetchOnMountOrArgChange: true,
  });

  // * Handlers
  const handleAddBed = () => {
    dispatch(
      openAddModal({
        modalId: bedModalTypes.addBed,
        data: null,
      })
    );
  };

  const handleEditBed = (item: BedType) => {
    dispatch(
      openEditModal({
        modalId: bedModalTypes.editBed,
        data: item,
      })
    );
  };

  return {
    beds,
    isLoading,
    status,
    handleAddBed,
    handleEditBed,
    editModal,
    addModal,
    navigate,
    isSuccess,
  };
};

export default useBeds;

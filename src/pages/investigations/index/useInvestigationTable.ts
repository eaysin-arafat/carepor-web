import { investigationModalTypes } from "@/constants/modal-types";
import {
  TypeMergeInvestigations,
  TypeMergeInvestigationsClient,
} from "@/features/investigation/investigation-api";
import { openAddModal, openEditModal } from "@/features/modal/modal-slice";
// import { TypeTestResults } from "@/types/module-types/investigation";
import { useDispatch } from "react-redux";

const useInvestigationTable = () => {
  const dispatch = useDispatch();

  // Modal handlers
  // ***
  const handleViewOrder = (data) => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewOrder,
        data: data,
      })
    );
  };

  // **
  const handleViewResult = (data: TypeMergeInvestigations) => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewResult,
        // data: null,
        data: data,
      })
    );
  };

  const handleAddResult = (data: TypeMergeInvestigationsClient) => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.addInvestigationResult,
        data: data,
      })
    );
  };
  const handleEditInvestigation = (data: TypeMergeInvestigations) => {
    dispatch(
      openEditModal({
        modalId: investigationModalTypes.editInvestigation,
        data: data,
      })
    );
  };

  return {
    // modal handlers
    handleAddResult,
    handleEditInvestigation,
    handleViewOrder,
    handleViewResult,
  };
};

export default useInvestigationTable;

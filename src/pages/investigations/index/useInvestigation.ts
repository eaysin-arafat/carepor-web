import { investigationModalTypes } from "@/constants/modal-types";
import { useReadInvestigationByClientQuery } from "@/features/investigation/investigation-api";
import { openAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { useDispatch } from "react-redux";

const useInvestigation = () => {
  const dispatch = useDispatch();
  const [baseData] = useBaseDataCreate();
  const { clientId } = baseData;

  // Rtk Request
  const clientInvestigation = useReadInvestigationByClientQuery(clientId, {
    skip: !clientId,
  });

  // const {
  //   data: investigations,
  //   isSuccess,
  //   isLoading,
  //   isError,
  //   status,
  // } = clientInvestigation;

  // Modal handlers
  const handleInvestigationForm = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.addInvestigation,
        data: null,
      })
    );
  };
  const handleAddResult = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.addInvestigationResult,
        data: null,
      })
    );
  };
  const handleViewOrder = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewOrder,
        data: null,
      })
    );
  };
  const handleViewResult = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewResult,
        data: null,
      })
    );
  };

  return {
    // modal handlers
    handleInvestigationForm,
    handleAddResult,
    handleViewOrder,
    handleViewResult,
    // client investigation status
    clientInvestigation,
    // investigations,
    // isSuccess,
    // isLoading,
    // isError,
    // status,
    //
  };
};

export default useInvestigation;

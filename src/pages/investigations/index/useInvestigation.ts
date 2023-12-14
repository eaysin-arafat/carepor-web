import { investigationModalTypes } from "@/constants/modal-types";
import { useReadInvestigationByClientQuery } from "@/features/investigation/investigation-api";
import { openAddModal } from "@/features/modal/modal-slice";
import { useReadUserAccountsQuery } from "@/features/user-accounts/user-accounts-api";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { withCompositeInvestigation } from "@/types/module-types/investigation";
import { useDispatch } from "react-redux";

const useInvestigation = () => {
  const dispatch = useDispatch();
  const [baseData] = useBaseDataCreate();
  const { clientId } = baseData;
  const { data: users } = useReadUserAccountsQuery(undefined);

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
  const handleViewOrder = (data) => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewOrder,
        data: data,
      })
    );
  };
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

  const handleViewResult = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.investigationViewResult,
        data: null,
      })
    );
  };

  // show test name
  const renderTestName = (test, subType, type) => {
    return test && subType && type ? `${test} (${subType}, ${type})` : "";
  };

  // Grouping Composite Investigation with Composite name
  const transformArrayToObjectCompositeName = (
    data: withCompositeInvestigation[]
  ) => {
    return data?.reduce((acc, cur) => {
      const key = `${cur?.compositeName}`;
      if (!acc[key]) {
        acc[key] = [cur];
      } else {
        acc[key].push(cur);
      }
      return acc;
    }, {});
  };

  return {
    //
    users,
    // Test name
    renderTestName,
    // modal handlers
    handleInvestigationForm,
    handleAddResult,
    handleViewOrder,
    handleViewResult,
    // array grouping
    transformArrayToObjectCompositeName,
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

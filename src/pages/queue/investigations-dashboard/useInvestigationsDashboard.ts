import { investigationModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { useReadInvestigationsForDashboardQuery } from "@/features/investigation/investigation-api";
import { openAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { TypeInvestigation } from "@/types/module-types/investigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useInvestigationsDashboard = () => {
  const { Investigation } = EnumEncounterType;
  const [baseData] = useBaseDataCreate(Investigation);

  const dispatch = useDispatch();

  // Request state for page and item
  const [pageNo, setPageNo] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(20);
  const [dateSearch, setDateSearch] = useState("");
  const [patientName, setPatientName] = useState("");

  // Request for investigation data
  const {
    data: instigationDashBoard,
    refetch,
    isLoading,
    isSuccess,
    isError,
  } = useReadInvestigationsForDashboardQuery(
    {
      facilityId: baseData?.createdIn,
      pageNo,
      itemPerPage,
      investigationDateSearch: dateSearch,
      PatientName: patientName,
    },
    {
      skip: !baseData?.createdIn,
      refetchOnMountOrArgChange: false,
    }
  );
  // Response data
  const {
    investigations = [],
    // resultRecievedTotalItems,
    totalItems,
  } = instigationDashBoard || {};

  // Filter states & conditions
  const [priority, setPriority] = useState(0);
  const [test, setTest] = useState(0);
  const [department, setDepartment] = useState(0);
  const priortyFilter = (data: TypeInvestigation) => {
    return !priority ? true : data?.piority == priority;
  };
  const testNameFilter = (data: TypeInvestigation) => {
    return !test ? true : data?.testId == test;
  };
  const departmentFilter = (data: TypeInvestigation) => {
    return data;
  };
  // Filter
  const filterInvestigation =
    investigations
      ?.filter(priortyFilter)
      .filter(testNameFilter)
      .filter(departmentFilter) || [];

  // Search State for order date or name
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");

  // Search handler
  const handleSearch = (): void => {
    setPatientName(name);
    if (date) {
      setDateSearch(new Date(date).toISOString());
    } else {
      setDateSearch("");
    }
    refetch();
  };

  const handleViewResult = (data) => {
    dispatch(
      openAddModal({
        data,
        modalId: investigationModalTypes.investigationViewResult,
      })
    );
  };
  const handleSampleCollectionModal = (data) => {
    dispatch(
      openAddModal({
        data,
        modalId: investigationModalTypes.sampleCollection,
      })
    );
  };
  const handleAddResult = (data) => {
    dispatch(
      openAddModal({
        data,
        modalId: investigationModalTypes.addInvestigationResult,
      })
    );
  };

  return {
    priority,
    setPriority,
    test,
    setTest,
    department,
    setDepartment,
    date,
    setDate,
    handleSearch,
    name,
    setName,
    pageNo,
    itemPerPage,
    setItemPerPage,
    setPageNo,
    totalItems,
    filterInvestigation,
    // Modal handlers
    handleViewResult,
    handleSampleCollectionModal,
    isLoading,
    isSuccess,
    isError,
    investigations,
    handleAddResult,
  };
};

export default useInvestigationsDashboard;

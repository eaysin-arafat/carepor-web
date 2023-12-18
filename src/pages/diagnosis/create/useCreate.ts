import {
  useLoadICDDiagnosisQuery,
  useLoadNTGLevel1DiagnosisQuery,
  useLoadNTGLevel2DiagnosisQuery,
  useLoadNTGLevel3DiagnosisQuery,
  useReadDiagnosesByClientQuery,
} from "@/features/diagnosis/diagnosis-api";
import useClient from "@/hooks/useClient";
import { filterByEncounter } from "@/utilities/transformation";
import { debounce } from "lodash";
import React, { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

const useCreate = ({ encounterType }) => {
  // selected diagnosis state
  const [selectedLevelOneDiagnosis, setSelectedLevelOneDiagnosis] =
    useState(null);
  const [selectedLevelTwoDiagnosis, setSelectedLevelTwoDiagnosis] =
    useState(null);
  const [selectedLevelThreeDiagnosis, setSelectedLevelThreeDiagnosis] =
    useState(null);
  const [selectedIcdDiagnosis, setSelectedIcdDiagnosis] = useState(null);

  // diagnosis list state
  const [ntgDiagnosisList, setNtgDiagnosisList] = useState([]);
  const [icdDiagnosisList, setIcdDiagnosisList] = useState([]);
  const [icdOption, setIcdOption] = useState([]);

  // diagnosis switcher
  const [diagnosisSwitcher, setDiagnosisSwitcher] = useState(1);

  // other state
  const [searchValue, setSearchValue] = useState("");

  // hooks and variables
  const client = useClient();

  // api hooks
  const { data: diagnoses } = useReadDiagnosesByClientQuery(client?.oid, {
    skip: !client?.oid,
    refetchOnMountOrArgChange: true,
  });
  const { data: levelOneDiagnosis } = useLoadNTGLevel1DiagnosisQuery(null);
  const { data: levelTwoDiagnosis } = useLoadNTGLevel2DiagnosisQuery(null);
  const { data: levelThreeDiagnosis } = useLoadNTGLevel3DiagnosisQuery(null);

  // handlers
  const handleAddDiagnosis = () => {
    // reset selected diagnosis
    setSelectedLevelOneDiagnosis(null);
    setSelectedLevelTwoDiagnosis(null);
    setSelectedLevelThreeDiagnosis(null);

    // set the list of diagnosis
    if (diagnosisSwitcher === 1) {
      return setNtgDiagnosisList((prev) => [
        ...prev,
        {
          id: uuid(),
          ...selectedLevelThreeDiagnosis,
        },
      ]);
    }

    return setIcdDiagnosisList((prev) => [
      ...prev,
      {
        id: uuid(),
        ...selectedIcdDiagnosis,
      },
    ]);
  };

  const handleNtgDelete = (id: string) => {
    setNtgDiagnosisList((prev) => prev.filter((item) => item?.id !== id));
  };

  const handleIcdDelete = (id: string) => {
    setIcdDiagnosisList((prev) => prev.filter((item) => item?.id !== id));
  };

  const options = useMemo(() => {
    if (levelOneDiagnosis) {
      return levelOneDiagnosis?.map((item) => ({
        value: item.oid,
        label: item.description,
      }));
    }

    return [];
  }, [levelOneDiagnosis]);

  const filteredDiagnoses = useMemo(() => {
    if (!diagnoses) return [];
    return filterByEncounter(diagnoses?.slice(), encounterType);
  }, [diagnoses, encounterType]);

  const filteredLevelTwo = useMemo(() => {
    if (!levelTwoDiagnosis) return [];

    return levelTwoDiagnosis
      ?.filter(
        (item) => item?.ntgLevelOneId === selectedLevelOneDiagnosis?.value
      )
      ?.map((item) => ({
        value: item.oid,
        label: item.description,
      }));
  }, [levelTwoDiagnosis, selectedLevelOneDiagnosis]);

  const filteredLevelThree = useMemo(() => {
    if (!levelThreeDiagnosis) return [];

    return levelThreeDiagnosis
      ?.filter(
        (item) => item?.ntgLevelTwoId === selectedLevelTwoDiagnosis?.value
      )
      ?.map((item) => ({
        value: item.oid,
        label: item.description,
      }));
  }, [levelThreeDiagnosis, selectedLevelTwoDiagnosis]);

  // ! icd diagnosis options
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filteredIcdDiagnoses, setFilteredIcdDiagnoses] = useState([]);
  const itemsPerPage = 15;

  const {
    data: icdDiagnoses,
    isLoading,
    status: icdStatus,
  } = useLoadICDDiagnosisQuery(null);

  const handleSearchChange = debounce((value) => {
    setSearchValue(value);
  }, 500);

  React.useEffect(() => {
    if (searchValue && icdDiagnoses?.length > 0) {
      setHasMore(false);
      const filtered = icdDiagnoses?.filter((item) =>
        item?.label?.toLowerCase().includes(searchValue?.toLowerCase())
      );
      setFilteredIcdDiagnoses(filtered);
    } else if (!searchValue && icdDiagnoses?.length > 0) {
      setPage(1);
      setIcdOption([]);
      setHasMore(true);
    }
  }, [searchValue, icdDiagnoses]);

  const totalPages = Math.ceil(icdDiagnoses?.length / itemsPerPage);

  const fetchMoreData = () => {
    if (page >= totalPages) {
      setHasMore(false);
      return;
    }
    // setHasMore(true);
    setPage((prev) => prev + 1);
  };

  React.useEffect(() => {
    if (icdDiagnoses?.length > 0) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setIcdOption((prev) => [...prev, ...icdDiagnoses.slice(start, end)]);
    }
  }, [page, icdDiagnoses]);

  return {
    // diagnosis list
    ntgDiagnosisList,
    icdDiagnosisList,
    icdDiagnoses,

    // selected diagnosis
    selectedLevelOneDiagnosis,
    selectedLevelTwoDiagnosis,
    selectedLevelThreeDiagnosis,
    selectedIcdDiagnosis,

    // diagnosis switcher
    diagnosisSwitcher,
    searchValue,

    // other state
    hasMore,
    isLoading,
    icdStatus,

    // handlers
    handleAddDiagnosis,
    handleNtgDelete,
    handleIcdDelete,
    setDiagnosisSwitcher,
    fetchMoreData,
    handleSearchChange,

    // options
    options,
    filteredDiagnoses,
    filteredIcdDiagnoses,
    filteredLevelTwo,
    filteredLevelThree,
    icdOption,

    // select setter
    setSelectedLevelOneDiagnosis,
    setSelectedLevelTwoDiagnosis,
    setSelectedLevelThreeDiagnosis,
    setSelectedIcdDiagnosis,
  };
};

export default useCreate;

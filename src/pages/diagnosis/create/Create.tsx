import { useAppSelector } from "@/app/store";
import DiagnosisPastRecord from "@/components/common-components/examination-diagnosis/DiagnosisPastRecord";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import IcdSelectableSearch from "@/components/core/form-elements/IcdSelectableSearch";
import SearchableSelect from "@/components/core/form-elements/SearchableSelect";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import {
  diagnosisApiEndpoints,
  useLoadICDDiagnosisQuery,
  useLoadNTGLevel1DiagnosisQuery,
  useLoadNTGLevel2DiagnosisQuery,
  useLoadNTGLevel3DiagnosisQuery,
} from "@/features/diagnosis/diagnosis-api";
import useClient from "@/hooks/useClient";
import { cn } from "@/utilities/cn";
import { filterByEncounter } from "@/utilities/transformation";
import React, { useMemo, useState } from "react";
import { Loader } from "react-feather";
import { BsPlusCircle } from "react-icons/bs";
import { v4 as uuid } from "uuid";

interface Props {
  toggler: () => void;
  encounterType: number;
}

const CreateDiagnosis = ({ toggler, encounterType }: Props) => {
  const [selectedLevelOneDiagnosis, setSelectedLevelOneDiagnosis] =
    useState(null);
  const [selectedLevelTwoDiagnosis, setSelectedLevelTwoDiagnosis] =
    useState(null);
  const [selectedLevelThreeDiagnosis, setSelectedLevelThreeDiagnosis] =
    useState(null);
  const [selectedIcdDiagnosis, setSelectedIcdDiagnosis] = useState(null);
  const [ntgDiagnosisList, setNtgDiagnosisList] = useState([]);
  const [icdDiagnosisList, setIcdDiagnosisList] = useState([]);
  const [diagnosisSwitcher, setDiagnosisSwitcher] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  /// ICD Options
  const [icdOption, setIcdOption] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const client = useClient();

  const selectDiagnosis = useMemo(
    () => diagnosisApiEndpoints.readDiagnosesByClient.select(client?.oid),
    [client?.oid]
  );

  const {
    data: diagnoses,
    isLoading,
    status,
  } = useAppSelector(selectDiagnosis);

  const { data: levelOneDiagnosis } = useLoadNTGLevel1DiagnosisQuery(null);
  const { data: levelTwoDiagnosis } = useLoadNTGLevel2DiagnosisQuery(null);
  const { data: levelThreeDiagnosis } = useLoadNTGLevel3DiagnosisQuery(null);
  const {
    data: icdDiagnoses,
    isSuccess,
    status: icdStatus,
  } = useLoadICDDiagnosisQuery(null);

  console.log("icdDiagnoses", icdDiagnoses);

  const handleAddDiagnosis = () => {
    setSelectedLevelOneDiagnosis(null);
    setSelectedLevelTwoDiagnosis(null);
    setSelectedLevelThreeDiagnosis(null);

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

  const options = levelOneDiagnosis?.map((item) => ({
    value: item.oid,
    label: item.description,
  }));

  const filteredDiagnoses = filterByEncounter(
    diagnoses?.slice(),
    encounterType
  );
  const filteredLevelTwo = levelTwoDiagnosis
    ?.filter((item) => item?.ntgLevelOneId === selectedLevelOneDiagnosis?.value)
    ?.map((item) => ({
      value: item.oid,
      label: item.description,
    }));

  const filteredLevelThree = levelThreeDiagnosis
    ?.filter((item) => item?.ntgLevelTwoId === selectedLevelTwoDiagnosis?.value)
    ?.map((item) => ({
      value: item.oid,
      label: item.description,
    }));

  const filteredIcdDiagnoses = icdDiagnoses?.filter((item) => {
    if (!searchValue) return true;

    return item?.label
      ?.toLocaleLowerCase()
      .includes(searchValue?.toLocaleLowerCase());
  });

  const itemsPerPage = 35;
  const totalPages = Math.ceil(filteredIcdDiagnoses?.length / itemsPerPage);

  const fetchMoreData = () => {
    console.log("fetchMoreData");

    if (page >= totalPages) {
      setHasMore(false);
      return;
    }
    setPage((prev) => prev + 1);
    setHasMore(true);
  };

  React.useEffect(() => {
    if (isSuccess && icdStatus === "fulfilled") {
      setIcdOption(filteredIcdDiagnoses?.slice(0, itemsPerPage));
    }
  }, [isSuccess, icdStatus]);

  React.useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setIcdOption((prev) => [
      ...prev,
      ...(filteredIcdDiagnoses?.slice(start, end) || []),
    ]);
  }, [page]);

  return (
    <DefaultModal size="7xl" toggler={toggler}>
      <form>
        <div className="grid grid-cols-2 mb-5">
          <label
            className={cn(
              " inline-flex cursor-pointer gap-4 justify-center items-center px-5 py-3 text-sm font-medium text-center rounded border-2 border-borderColor",
              {
                "bg-primaryColor text-whiteColor border-primaryColor":
                  diagnosisSwitcher === 1,
              }
            )}
          >
            <input
              type="radio"
              name="diagnosis"
              className="hidden"
              value={1}
              onChange={() => setDiagnosisSwitcher(1)}
              checked={diagnosisSwitcher === 1}
            />
            &nbsp; National Treatment Guideline
          </label>
          <label
            className={cn(
              " inline-flex cursor-pointer gap-4 justify-center items-center px-5 py-3 text-sm font-medium text-center rounded border-2 border-borderColor",
              {
                "bg-primaryColor text-whiteColor border-primaryColor":
                  diagnosisSwitcher === 2,
              }
            )}
          >
            <input
              type="radio"
              name="diagnosis"
              className="hidden"
              value={2}
              onChange={() => setDiagnosisSwitcher(2)}
              checked={diagnosisSwitcher === 2}
            />
            &nbsp; ICD 11
          </label>
        </div>
        {diagnosisSwitcher === 1 && (
          <div className="flex flex-col gap-6">
            <div>
              <div className="space-y-4">
                <SearchableSelect
                  required
                  label="NTG Level 1"
                  placeholder="Select"
                  selectedValue={selectedLevelOneDiagnosis}
                  setSelectedValue={setSelectedLevelOneDiagnosis}
                  options={options}
                />
                <SearchableSelect
                  required
                  label="NTG Level 2"
                  placeholder=""
                  options={filteredLevelTwo}
                  selectedValue={selectedLevelTwoDiagnosis}
                  setSelectedValue={setSelectedLevelTwoDiagnosis}
                />
                <SearchableSelect
                  required
                  label="NTG Level 3"
                  placeholder=""
                  options={filteredLevelThree}
                  selectedValue={selectedLevelThreeDiagnosis}
                  setSelectedValue={setSelectedLevelThreeDiagnosis}
                />
              </div>
            </div>
          </div>
        )}
        {diagnosisSwitcher === 2 && (
          <div className="flex flex-col gap-6">
            <div>
              <div className="space-y-4">
                <IcdSelectableSearch
                  required
                  label="ICD 11"
                  placeholder=""
                  options={icdOption}
                  selectedValue={selectedIcdDiagnosis}
                  setSelectedValue={setSelectedIcdDiagnosis}
                  hasMore={hasMore}
                  fetchMoreData={fetchMoreData}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  dataLength={filteredIcdDiagnoses?.length}
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-5">
          <button
            className="bg-primaryColor py-2 px-3 rounded-md flex items-center gap-1 text-whiteColor"
            onClick={handleAddDiagnosis}
            type="button"
          >
            <BsPlusCircle className="font-bold text-lg" /> Add
          </button>

          {[
            ...ntgDiagnosisList.map((item) => (
              <PastRecordWrapper
                noHeading
                className="mt-5"
                handleDelete={() => handleNtgDelete(item?.id)}
              >
                <PastRecordData key={item?.id} title="NTG" data={item?.label} />
              </PastRecordWrapper>
            )),
            ...icdDiagnosisList.map((item) => (
              <PastRecordWrapper
                noHeading
                className="mt-5"
                handleDelete={() => handleIcdDelete(item?.id)}
              >
                <PastRecordData key={item?.id} title="ICD" data={item?.label} />
              </PastRecordWrapper>
            )),
          ]}
        </div>

        <hr className="my-6" />

        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {(isLoading || status === "pending") && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}

          {filteredDiagnoses?.map((item, index) => (
            <DiagnosisPastRecord key={index} data={item} />
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
    </DefaultModal>
  );
};

export default CreateDiagnosis;

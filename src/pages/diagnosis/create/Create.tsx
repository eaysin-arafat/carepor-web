import DiagnosisPastRecord from "@/components/common-components/examination-diagnosis/DiagnosisPastRecord";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import IcdSelectableSearch from "@/components/core/form-elements/IcdSelectableSearch";
import SearchableSelect from "@/components/core/form-elements/SearchableSelect";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { cn } from "@/utilities/cn";
import { Loader } from "react-feather";
import { BsPlusCircle } from "react-icons/bs";
import useCreate from "./useCreate";

interface Props {
  toggler: () => void;
  encounterType: number;
}

const CreateDiagnosis = ({ toggler, encounterType }: Props) => {
  const {
    diagnosisSwitcher,
    fetchMoreData,
    filteredDiagnoses,
    filteredLevelThree,
    filteredLevelTwo,
    handleAddDiagnosis,
    handleIcdDelete,
    handleNtgDelete,
    hasMore,
    icdDiagnosisList,
    icdOption,
    ntgDiagnosisList,
    options,
    selectedIcdDiagnosis,
    selectedLevelOneDiagnosis,
    selectedLevelThreeDiagnosis,
    selectedLevelTwoDiagnosis,
    setDiagnosisSwitcher,
    setSelectedIcdDiagnosis,
    setSelectedLevelOneDiagnosis,
    setSelectedLevelThreeDiagnosis,
    setSelectedLevelTwoDiagnosis,
    isLoading,
    icdStatus,
    handleSearchChange,
    searchValue,
    icdDiagnoses,
    filteredIcdDiagnoses,
  } = useCreate({ encounterType });

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
                  selectedValue={selectedIcdDiagnosis}
                  setSelectedValue={setSelectedIcdDiagnosis}
                  options={searchValue ? filteredIcdDiagnoses : icdOption}
                  hasMore={hasMore}
                  fetchMoreData={fetchMoreData}
                  handleSearchChange={handleSearchChange}
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
          {(isLoading || icdStatus === "pending") && (
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

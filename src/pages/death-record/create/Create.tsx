import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import SearchableSelect from "@/components/core/form-elements/SearchableSelect";
import Select from "@/components/core/form-elements/Select";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DeathRecordReferenceNote from "@/components/death-record/DeathRecordReferenceNote";
import {
  EnumInformantRelationship,
  EnumWhereDeathOccurred,
} from "@/enum/enumerators";
import dayjs from "dayjs";
import { Plus, Trash2 } from "react-feather";
import useCreate from "./useCreate";

export interface DeathRecordErrorType {
  ageOfDeceased?: string;
  whereDeathOccured?: string; // required
  informantFirstName?: string; // required
  informantSurname?: string; // required
  informantNickname?: string;
  informantRelationship?: string; // required
  informantOtherRelationship?: string;
  informantCity?: string;
  informantStreetNo?: string;
  informantPOBox?: string;
  informantLandmark?: string;
  informantLandlineCountryCode?: string;
  informantLandline?: string;
  informantCellphoneCountryCode?: string;
  informantCellphone?: string;
  districtOfDeath?: string; // required
  icpC2ID?: string; // required
  icD11ID?: string; // required
  dateOfDeath?: string;
  causeDeath?: string;
  selectedProvince?: string;
  anatomicAxis?: string;
  pathologyAxis?: string;
  icpc2Description?: string;
  icdDiagnosis?: string;
}

function DeathRecordCreate({ toggler }) {
  const {
    anatomicAxes,
    contributingCauseAnatomicAxis,
    contributingCauseICDDiagnosis,
    contributingCauseICPC2Description,
    contributingCauseIcdDiagnosis,
    contributingCausePathologyAxis,
    contributingErrorMsg,
    countries,
    deathData,
    errorMsg,
    filteredDistricts,
    handleAddContributionCause,
    handleChange,
    handleDeleteContributingCause,
    handleProvinceChange,
    handleSubmit,
    icpc2Descriptions,
    isLoading,
    isSuccess,
    isSuccessProvince,
    mainCauseAnatomicAxis,
    mainCauseICDDiagnosis,
    mainCauseICPC2Description,
    mainCauseIcdDiagnosis,
    mainCausePathologyAxis,
    pathologyAxes,
    provinces,
    selectProvinceId,
    selectedContributionCauseList,
    setContributingCauseAnatomicAxis,
    setContributingCauseICDDiagnosis,
    setContributingCauseICPC2Description,
    setContributingCausePathologyAxis,
    setMainCauseAnatomicAxis,
    setMainCauseICDDiagnosis,
    setMainCauseICPC2Description,
    setMainCausePathologyAxis,
    status,
    statusProvince,
    client,
    setErrorMsg,
    setDeathData,
    setContributingErrorMsg,
    createStatus,
  } = useCreate();

  // render options
  const renderCountriesOptions = () => {
    return countries?.map((item) => (
      <option key={item.oid} value={item.countryCode}>
        {item.isoCodeAlpha2} ({item.countryCode})
      </option>
    ));
  };

  const renderedProvincesOptions = () => {
    return provinces?.map((item) => (
      <option key={item.oid} value={item.oid}>
        {item.description}
      </option>
    ));
  };

  const renderedDistrictsOptions = () => {
    return filteredDistricts?.map((item) => (
      <option key={item.oid} value={item.oid}>
        {item.description}
      </option>
    ));
  };

  return (
    <DefaultModal title="Death Record" toggler={toggler} size="7xl">
      <DeathRecordReferenceNote />

      <form onSubmit={handleSubmit}>
        <div className="show border p-5 rounded">
          <h1 className="text-md font-medium border-b-borderColor  border-b mb-5 pb-1">
            Deceased :
          </h1>
          <div className="flex gap-5">
            <DateInput
              label="Date of Death"
              errMsg={errorMsg?.dateOfDeath}
              selected={
                deathData?.dateOfDeath ? new Date(deathData?.dateOfDeath) : null
              }
              onChange={(date) =>
                setDeathData({
                  ...deathData,
                  dateOfDeath: new Date(
                    dayjs(date).format("YYYY-MM-DD")
                  ).toISOString(),
                })
              }
            />
            <Input
              label="Age (Years at Death)"
              disabled
              onChange={() => {}}
              value={
                deathData?.dateOfDeath
                  ? dayjs(new Date(deathData?.dateOfDeath)).diff(
                      dayjs(client?.dob),
                      "year"
                    )
                  : ""
              }
            />
          </div>
          <div className="flex gap-5 mt-5">
            <Select
              label="Province of Death"
              value={selectProvinceId}
              errMsg={errorMsg?.selectedProvince}
              onChange={(e) => handleProvinceChange(e.target.value)}
            >
              {isSuccessProvince &&
                statusProvince === "fulfilled" &&
                renderedProvincesOptions()}
            </Select>
            <Select
              label="District of Death"
              name="districtOfDeath"
              errMsg={errorMsg?.districtOfDeath}
              value={deathData?.districtOfDeath}
              onChange={handleChange}
            >
              {isSuccessProvince &&
                statusProvince === "fulfilled" &&
                renderedDistrictsOptions()}
            </Select>
            <Select
              label="Where Death Occurred"
              name="whereDeathOccured"
              errMsg={errorMsg?.whereDeathOccured}
              value={deathData?.whereDeathOccured}
              onChange={handleChange}
            >
              {Object.keys(EnumWhereDeathOccurred).map((key) => (
                <option key={key} value={key}>
                  {EnumWhereDeathOccurred[key]}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className=" p-5 rounded border mt-5 shadow">
          <h1 className="text-md font-medium border-b-borderColor border-b mb-2 pb-1">
            Main Cause of Death :
          </h1>
          <div className="flex gap-5">
            <SearchableSelect
              required
              label="Anatomic Axis"
              setError={() =>
                setErrorMsg((prev) => ({ ...prev, anatomicAxis: "" }))
              }
              errMsg={errorMsg?.anatomicAxis}
              selectedValue={mainCauseAnatomicAxis}
              setSelectedValue={setMainCauseAnatomicAxis}
              options={anatomicAxes?.slice() || []}
            />
            <SearchableSelect
              required
              label="Pathology Axis"
              setError={() =>
                setErrorMsg((prev) => ({ ...prev, pathologyAxis: "" }))
              }
              errMsg={errorMsg?.pathologyAxis}
              selectedValue={mainCausePathologyAxis}
              setSelectedValue={setMainCausePathologyAxis}
              options={pathologyAxes?.slice() || []}
            />
          </div>
          <div className="flex gap-5 mt-5">
            <SearchableSelect
              required
              label="ICPC2 Description"
              setError={() =>
                setErrorMsg((prev) => ({ ...prev, icpc2Description: "" }))
              }
              errMsg={errorMsg?.icpc2Description}
              selectedValue={mainCauseICPC2Description}
              setSelectedValue={setMainCauseICPC2Description}
              options={icpc2Descriptions?.slice() || []}
            />
            <SearchableSelect
              required
              label="ICD-11 Diagnosis"
              setError={() =>
                setErrorMsg((prev) => ({ ...prev, icdDiagnosis: "" }))
              }
              errMsg={errorMsg?.icdDiagnosis}
              selectedValue={mainCauseICDDiagnosis}
              setSelectedValue={setMainCauseICDDiagnosis}
              options={mainCauseIcdDiagnosis?.slice() || []}
            />
          </div>
        </div>

        <div className="border p-5 rounded mt-5 shadow">
          <h1 className="text-md font-medium border-b-borderColor mb-2 border-b pb-1">
            Contributing Cause of Death :
          </h1>
          <div className="flex gap-5">
            <SearchableSelect
              required
              label="Anatomic Axis"
              setError={() =>
                setContributingErrorMsg((prev) => ({
                  ...prev,
                  anatomicAxis: "",
                }))
              }
              errMsg={contributingErrorMsg?.anatomicAxis}
              selectedValue={contributingCauseAnatomicAxis}
              setSelectedValue={setContributingCauseAnatomicAxis}
              options={anatomicAxes?.slice() || []}
            />
            <SearchableSelect
              required
              label="Pathology Axis"
              setError={() =>
                setContributingErrorMsg((prev) => ({
                  ...prev,
                  pathologyAxis: "",
                }))
              }
              errMsg={contributingErrorMsg?.pathologyAxis}
              selectedValue={contributingCausePathologyAxis}
              setSelectedValue={setContributingCausePathologyAxis}
              options={pathologyAxes?.slice() || []}
            />
          </div>
          <div className="flex gap-5 mt-5">
            <SearchableSelect
              required
              label="ICPC2 Description"
              setError={() =>
                setContributingErrorMsg((prev) => ({
                  ...prev,
                  icpc2Description: "",
                }))
              }
              errMsg={contributingErrorMsg?.icpc2Description}
              selectedValue={contributingCauseICPC2Description}
              setSelectedValue={setContributingCauseICPC2Description}
              options={icpc2Descriptions?.slice() || []}
            />
            <SearchableSelect
              required
              label="ICD-11 Diagnosis"
              setError={() =>
                setContributingErrorMsg((prev) => ({
                  ...prev,
                  icdDiagnosis: "",
                }))
              }
              errMsg={contributingErrorMsg?.icdDiagnosis}
              selectedValue={contributingCauseICDDiagnosis}
              setSelectedValue={setContributingCauseICDDiagnosis}
              options={contributingCauseIcdDiagnosis?.slice() || []}
            />
          </div>
          <button
            type="button"
            className="px-3 py-1 rounded bg-buttonBg text-white mt-2 ml-auto flex items-center"
            onClick={handleAddContributionCause}
          >
            <Plus size={15} /> Add
          </button>

          <div className="border border-borderColor bg-whiteBgColor p-5 rounded mt-2">
            <div className="grid grid-cols-9 border-b pb-1">
              <p className="text-sm col-span-2">Anatomic Axis</p>
              <p className="text-sm col-span-2">Pathology Axis </p>
              <p className="text-sm col-span-2">ICPC2 Description</p>
              <p className="text-sm col-span-2"> ICD-11 Diagnosis</p>
              <p>&nbsp;</p>
            </div>

            {selectedContributionCauseList.map((item) => (
              <div
                key={item?.id}
                className="grid grid-cols-9 border-b py-2 text-xs align-middle"
              >
                <p className="col-span-2">{item.anatomicAxis}</p>
                <p className="col-span-2">{item.pathologyAxis}</p>
                <p className="col-span-2">{item.icpc2Description}</p>
                <p className="col-span-2">{item.icdDiagnosis}</p>
                <button
                  className="justify-self-end text-red-500"
                  onClick={() => handleDeleteContributingCause(item?.id)}
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="border p-5 rounded mt-5 shadow mb-4">
          <h1 className="text-md font-medium border-b-borderColor  border-b mb-5 pb-1">
            Informant Details :
          </h1>
          <div className="flex gap-5">
            <Input
              label="First Name"
              name="informantFirstName"
              errMsg={errorMsg?.informantFirstName}
              value={deathData?.informantFirstName}
              onChange={handleChange}
            />
            <Input
              label="Surname"
              name="informantSurname"
              errMsg={errorMsg?.informantSurname}
              value={deathData?.informantSurname}
              onChange={handleChange}
            />
            <Input
              label="Nickname"
              name="informantNickname"
              errMsg={errorMsg?.informantNickname}
              value={deathData?.informantNickname}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-6 gap-5 mt-5">
            <div className="col-span-1">
              <Select label="Code">
                {isSuccess &&
                  status === "fulfilled" &&
                  renderCountriesOptions()}{" "}
              </Select>
            </div>
            <div className="col-span-2">
              <Input
                label="Cellphone Number"
                name="informantCellphone"
                errMsg={errorMsg?.informantCellphone}
                value={deathData?.informantCellphone}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <Select
                label="Code"
                name="informantLandlineCountryCode"
                errMsg={errorMsg?.informantLandlineCountryCode}
                value={deathData?.informantLandlineCountryCode}
                onChange={handleChange}
              >
                {isSuccess &&
                  status === "fulfilled" &&
                  renderCountriesOptions()}
              </Select>
            </div>
            <div className="col-span-2">
              <Input
                label="Landline Number"
                name="informantLandline"
                errMsg={errorMsg?.informantLandline}
                value={deathData?.informantLandline}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <Select
              label="Relationship"
              name="informantRelationship"
              errMsg={errorMsg?.informantRelationship}
              value={deathData?.informantRelationship}
              onChange={handleChange}
            >
              {Object.keys(EnumInformantRelationship).map((key) => (
                <option key={key} value={key}>
                  {EnumInformantRelationship[key]}
                </option>
              ))}
            </Select>

            <Input
              label="Other Relationship"
              name="informantOtherRelationship"
              errMsg={errorMsg?.informantOtherRelationship}
              value={deathData?.informantOtherRelationship}
              onChange={handleChange}
              disabled={deathData?.informantRelationship !== "13"}
            />
          </div>

          <div className="flex gap-5 mt-5">
            <Input
              label="City/Town/Village"
              name="informantCity"
              errMsg={errorMsg?.informantCity}
              value={deathData?.informantCity}
              onChange={handleChange}
            />
            <Input
              label="Cmpd Street No."
              name="informantStreetNo"
              errMsg={errorMsg?.informantStreetNo}
              value={deathData?.informantStreetNo}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-5 mt-5">
            <Input
              label="PO Box,Pvt bag"
              name="informantPOBox"
              errMsg={errorMsg?.informantPOBox}
              value={deathData?.informantPOBox}
              onChange={handleChange}
            />
            <Input
              label="Landmark"
              name="informantLandmark"
              errMsg={errorMsg?.informantLandmark}
              value={deathData?.informantLandmark}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* BUTTONS */}
        <CancelAndAddButton
          toggler={toggler}
          disableBoth={isLoading || createStatus === "pending"}
        />
      </form>
    </DefaultModal>
  );
}

export default DeathRecordCreate;

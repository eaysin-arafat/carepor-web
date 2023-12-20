import { EnumEncounterType } from "@/enum/encounter-type";
import { useReadAnatomicAxesQuery } from "@/features/anatomic-axis/anatomic-axis-api";
import { useReadCountriesQuery } from "@/features/country/country-api";
import { useCreateDeathRecordMutation } from "@/features/death-record/death-record-api";
import { useReadDistrictsQuery } from "@/features/district/district-api";
import { useReadICDDiagnosisByICP2Query } from "@/features/icd-diagnosis/icd-diagnosis-api";
import { useReadICPC2DescriptionsQuery } from "@/features/icpc2-description/icpc2-description-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useReadPathologyAxesQuery } from "@/features/pathology-axis/pathology-axis-api";
import { useReadProvincesQuery } from "@/features/province/province-api";
import useBaseModel from "@/hooks/useBaseModel";
import { CookieClient } from "@/hooks/useClientAge";
import useEncounter from "@/hooks/useEncounter";
import { cookieManager } from "@/utilities/cookie-manager";
import {
  ContributingCauseErrorType,
  contributingCauseValidator,
  deathRecordValidator,
} from "@/validation-models/death-record-validator";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { DeathRecordErrorType } from "./Create";

const initialState = {
  dateOfDeath: new Date(dayjs(new Date()).format("YYYY-MM-DD")).toISOString(),
  causeType: 2,
  ageOfDeceased: "",
  whereDeathOccured: "", // required
  districtOfDeath: "", // required
  // icpC2ID: "", // required
  // icD11ID: "", // required
  informantFirstName: "", // required
  informantSurname: "", // required
  informantNickname: "",
  informantRelationship: "", // required
  informantOtherRelationship: "",
  informantCity: "",
  informantStreetNo: "",
  informantPOBox: "",
  informantLandmark: "",
  informantLandlineCountryCode: "",
  informantLandline: "",
  informantCellphoneCountryCode: "",
  informantCellphone: "",
};

const useCreate = () => {
  // main cause states
  const [mainCauseAnatomicAxis, setMainCauseAnatomicAxis] =
    React.useState(null);
  const [mainCausePathologyAxis, setMainCausePathologyAxis] =
    React.useState(null);
  const [mainCauseICPC2Description, setMainCauseICPC2Description] =
    React.useState(null);
  const [mainCauseICDDiagnosis, setMainCauseICDDiagnosis] =
    React.useState(null);

  // contributing cause states
  const [contributingCauseAnatomicAxis, setContributingCauseAnatomicAxis] =
    React.useState(null);
  const [contributingCausePathologyAxis, setContributingCausePathologyAxis] =
    React.useState(null);
  const [
    contributingCauseICPC2Description,
    setContributingCauseICPC2Description,
  ] = React.useState(null);
  const [contributingCauseICDDiagnosis, setContributingCauseICDDiagnosis] =
    React.useState(null);

  // other states
  const [deathData, setDeathData] = React.useState(initialState);
  const [selectProvinceId, setSelectProvinceId] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState<DeathRecordErrorType>({});
  const [contributingErrorMsg, setContributingErrorMsg] =
    React.useState<ContributingCauseErrorType>({});

  // selected contributing cause list
  const [selectedContributionCauseList, setSelectedContributionCauseList] =
    React.useState([]);

  // hooks and variables
  const client = cookieManager.parseCookie<CookieClient>("client");
  const baseData = useBaseModel({});
  const encounter = useEncounter(EnumEncounterType.DeathRecords);
  const dispatch = useDispatch();

  // api hooks
  const {
    data: countries,
    isSuccess,
    status,
  } = useReadCountriesQuery(undefined);
  const {
    data: provinces,
    isSuccess: isSuccessProvince,
    status: statusProvince,
  } = useReadProvincesQuery(undefined);
  const { data: districts } = useReadDistrictsQuery(undefined);
  const { data: anatomicAxes } = useReadAnatomicAxesQuery(undefined);
  const { data: pathologyAxes } = useReadPathologyAxesQuery(undefined);
  const { data: icpc2Descriptions } = useReadICPC2DescriptionsQuery(undefined);

  const { data: mainCauseIcdDiagnosis } = useReadICDDiagnosisByICP2Query(
    mainCauseICPC2Description?.oid,
    {
      skip: !mainCauseICPC2Description?.oid,
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: contributingCauseIcdDiagnosis } =
    useReadICDDiagnosisByICP2Query(contributingCauseICPC2Description?.oid, {
      skip: !contributingCauseICPC2Description?.oid,
      refetchOnMountOrArgChange: true,
    });

  const [
    createDeathRecord,
    {
      isLoading,
      isError,
      isSuccess: isCreateSuccess,
      error,
      status: createStatus,
    },
  ] = useCreateDeathRecordMutation();

  // handle changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeathData({ ...deathData, [name]: value });
    setErrorMsg({});
  };

  // handle add contributing cause
  const handleAddContributionCause = () => {
    const { isValid, errors } = contributingCauseValidator({
      anatomicAxis: contributingCauseAnatomicAxis?.value,
      pathologyAxis: contributingCausePathologyAxis?.value,
      icpc2Description: contributingCauseICPC2Description?.value,
      icdDiagnosis: contributingCauseICDDiagnosis?.value,
    });

    // if not valid
    if (!isValid) return setContributingErrorMsg(errors);

    // if valid
    setSelectedContributionCauseList((prev) => [
      ...prev,
      {
        id: uuid(),
        anatomicAxisId: contributingCauseAnatomicAxis?.oid,
        pathologyAxisId: contributingCausePathologyAxis?.oid,
        icpc2DescriptionId: contributingCauseICPC2Description?.oid,
        icdDiagnosisId: contributingCauseICDDiagnosis?.oid,
        anatomicAxis: contributingCauseAnatomicAxis?.label,
        pathologyAxis: contributingCausePathologyAxis?.label,
        icpc2Description: contributingCauseICPC2Description?.label,
        icdDiagnosis: contributingCauseICDDiagnosis?.label,
      },
    ]);

    // reset
    setContributingCauseAnatomicAxis(null);
    setContributingCausePathologyAxis(null);
    setContributingCauseICPC2Description(null);
    setContributingCauseICDDiagnosis(null);
  };

  const handleDeleteContributingCause = (id: string) => {
    setSelectedContributionCauseList((prev) =>
      prev.filter((item) => item?.id !== id)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contributingDeathCause = selectedContributionCauseList.map(
      (item) => ({
        ...baseData,
        ...encounter,
        clientId: client?.oid,
        causeType: 2,
        icpC2ID: item?.icpc2DescriptionId,
        icD11Id: item?.icdDiagnosisId,
      })
    );

    const payload = {
      ...baseData,
      ...deathData,
      ...encounter,
      causeType: 1,
      clientId: client?.oid,
      icpC2ID: mainCauseICPC2Description?.oid,
      icD11ID: mainCauseICDDiagnosis?.oid,
      deathCause: contributingDeathCause,
      ageOfDeceased: dayjs(new Date(deathData?.dateOfDeath)).diff(
        dayjs(client?.dob),
        "year"
      ),
    };

    const { isValid, errors } = deathRecordValidator({
      ...payload,
      selectedProvince: selectProvinceId,
      anatomicAxis: mainCauseAnatomicAxis?.value,
      pathologyAxis: mainCausePathologyAxis?.value,
      icpc2Description: mainCauseICPC2Description?.value,
      icdDiagnosis: mainCauseICDDiagnosis?.value,
    });

    if (!isValid) return setErrorMsg(errors);

    createDeathRecord(payload);
  };

  const handleProvinceChange = (val: string) => {
    setErrorMsg((prev) => ({ ...prev, selectedProvince: "" }));
    setSelectProvinceId(val);
  };

  // filtered districts based on selected province
  const filteredDistricts = useMemo(() => {
    return districts?.filter((item) => item?.provinceId == selectProvinceId);
  }, [selectProvinceId, districts]);

  React.useEffect(() => {
    if (isCreateSuccess && createStatus === "fulfilled") {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("Death record created successfully");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string"
          ? error.data
          : "Error creating death record"
      );
    }
  }, [isCreateSuccess, createStatus, isError, error, dispatch]);

  return {
    deathData,
    errorMsg,
    contributingErrorMsg,
    selectedContributionCauseList,
    mainCauseAnatomicAxis,
    mainCausePathologyAxis,
    mainCauseICPC2Description,
    mainCauseICDDiagnosis,
    contributingCauseAnatomicAxis,
    contributingCausePathologyAxis,
    contributingCauseICPC2Description,
    contributingCauseICDDiagnosis,
    filteredDistricts,
    handleChange,
    handleAddContributionCause,
    handleDeleteContributingCause,
    handleSubmit,
    handleProvinceChange,
    isLoading,
    isSuccess,
    status,
    isSuccessProvince,
    statusProvince,
    countries,
    provinces,
    anatomicAxes,
    pathologyAxes,
    icpc2Descriptions,
    mainCauseIcdDiagnosis,
    contributingCauseIcdDiagnosis,
    setContributingCauseAnatomicAxis,
    setContributingCausePathologyAxis,
    setContributingCauseICPC2Description,
    setContributingCauseICDDiagnosis,
    setMainCauseAnatomicAxis,
    setMainCausePathologyAxis,
    setMainCauseICPC2Description,
    setMainCauseICDDiagnosis,
    selectProvinceId,
    setErrorMsg,
    client,
    setDeathData,
    setContributingErrorMsg,
    createStatus,
  };
};

export default useCreate;

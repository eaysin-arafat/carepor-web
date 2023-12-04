import { useReadClientByKeyQuery } from "@/features/client/client-api";
import { setClientFormStep } from "@/features/client/client-form-slice";
import { useReadCountriesQuery } from "@/features/country/country-api";
import { useReadDistrictByKeyQuery } from "@/features/district/district-api";
import { useReadEducationLevelsQuery } from "@/features/education-level/education-level-api";
import { useReadHomeLanguagesQuery } from "@/features/home-language/home-language-api";
import { useReadOccupationsQuery } from "@/features/occupation/occupation-api";
import { URLClientEdit } from "@/routers/client";
import { ClientObjectType } from "@/types/clientTypes";
import { DateFunc } from "@/utilities/date";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useClientDetails = () => {
  const { data: homeLanguage } = useReadHomeLanguagesQuery(undefined);
  const { data: countries } = useReadCountriesQuery(undefined);
  const { data: educationLevel } = useReadEducationLevelsQuery(undefined);
  const { data: occupations } = useReadOccupationsQuery(undefined);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const clientId = params?.clientId;

  const {
    data: clientsData,
    isError,
    isLoading,
    isSuccess,
  } = useReadClientByKeyQuery(clientId, {
    skip: !clientId,
    refetchOnMountOrArgChange: true,
  });

  const clientObj: ClientObjectType = clientsData;

  const { data: district } = useReadDistrictByKeyQuery(clientObj?.districtId, {
    skip: !clientObj?.districtId,
  });

  const getCountryName = (id) => {
    const countriesDescription =
      countries?.find((data) => data.oid == id)?.description || "";
    return countriesDescription;
  };

  const getHomeLanguagesName = (id) => {
    const homeLanguages = Array.isArray(homeLanguage) ? homeLanguage : [];
    const homeLanguagesDescription =
      homeLanguages?.find((data) => data.oid == id)?.description || "";
    return homeLanguagesDescription;
  };
  const getEducationLevelName = (id) => {
    const educationLevelData = Array.isArray(educationLevel)
      ? educationLevel
      : [];
    const educationLevelDescription =
      educationLevelData?.find((data) => data.oid == id)?.description || "";
    return educationLevelDescription;
  };
  const getOccupationsName = (id) => {
    const occupationsData = Array.isArray(occupations) ? occupations : [];
    const occupationDescription =
      occupationsData?.find((data) => data.oid == id)?.description || "";
    return occupationDescription;
  };
  const districtName = district?.description || "";

  const isOverFive = clientObj?.dob
    ? DateFunc.isOverYears(clientObj?.dob, 5)
    : false;

  // IS MOTHER LINKED WITH CLIENT
  let isLinked: boolean;
  const motherProfileId = clientObj?.motherProfileId;
  if (!isOverFive) {
    const unLinkedString = "00000000-0000-0000-0000-000000000000";
    if (!motherProfileId || motherProfileId == unLinkedString) {
      isLinked = false;
    }
    if (motherProfileId && motherProfileId !== unLinkedString) {
      isLinked = true;
    }
  }

  // Handle edit redirect
  const handleClientEdit = (step: number) => {
    dispatch(setClientFormStep(step));
    navigate(URLClientEdit({ id: clientId }));
  };

  return {
    clientObj,
    isError,
    isLoading,
    isSuccess,
    districtName,
    getCountryName,
    getHomeLanguagesName,
    getEducationLevelName,
    getOccupationsName,
    handleClientEdit,

    // link with mother
    isOverFive,
    isLinked,
    motherProfileId,
  };
};

export default useClientDetails;

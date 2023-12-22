// import {
//   EnumCovidComorbidCondition,
//   EnumExposureRisks,
// } from "@/enum/enumerators";
// covidSymptomScreenings: CovidSymptomScreening[];
// covidComorbidities: CovidComorbidity[];
// exposureRisks: exposureRisk[];

import {
  EnumCovidComorbidCondition,
  EnumExposureRisks,
} from "@/enum/enumerators";
import {
  CovidComorbidity,
  CovidSymptomScreening,
  exposureRisk,
} from "@/types/module-types/covid";

const useListDetails = () => {
  // Symptom Screen options /Options for multi selection
  //   const { data: covidSymptoms } = useReadCovidSymptomsQuery(undefined);

  const renderSymptomScreenings = (
    covidSymptomScreenings: CovidSymptomScreening[]
  ) => {
    const symptomNameArray = covidSymptomScreenings?.map(
      (data) => data?.covidSymptom?.description
    );
    return symptomNameArray?.join(", ");
  };

  const renderCovidComorbidities = (
    covidSymptomScreenings: CovidComorbidity[]
  ) => {
    const nameArray = covidSymptomScreenings?.map(
      (data) => EnumCovidComorbidCondition[data?.covidComorbidityConditions]
    );
    return nameArray?.join(", ");
  };
  const renderexposureRisks = (exposureRisks: exposureRisk[]) => {
    const nameArray = exposureRisks?.map(
      (data) => EnumExposureRisks[data?.exposureRisks]
    );
    return nameArray?.join(", ");
  };

  return {
    renderSymptomScreenings,
    renderCovidComorbidities,
    renderexposureRisks,
  };
};

export default useListDetails;

import useClientAge from "@/hooks/useClientAge";
import {
  bmiCalculation,
  bmiMessage,
  diastolicBpMessage,
  headCircumferenceMessage,
  muacMessage,
  oxygenSaturationMessage,
  pulseRateMessage,
  respiratoryRateMessage,
  systolicBpMessage,
  temperatureMessage,
} from "@/library/vital";
import React from "react";

const useVitalForm = ({
  vitalData,
  handleBmiChange,
  handleHeadCircumferenceChange,
  handleMuacChange,
}) => {
  const { ageInMonths, clientGender, ageInYears, ageInWeeks } = useClientAge();

  const bmiMsg = bmiMessage(
    +vitalData?.bmi,
    +vitalData.height,
    +vitalData.weight,
    ageInMonths,
    clientGender
  );

  const temperatureMsg = temperatureMessage(+vitalData.temperature);
  const systolicBpMsg = systolicBpMessage(+vitalData.systolic, ageInMonths);
  const diastolicBpMsg = diastolicBpMessage(+vitalData.diastolic, ageInMonths);
  const pulseRateMsg = pulseRateMessage(+vitalData.pulseRate, ageInMonths);
  const oxygenSaturationMsg = oxygenSaturationMessage(
    +vitalData.oxygenSaturation
  );
  const respiratoryRateMsg = respiratoryRateMessage(
    +vitalData.respiratoryRate,
    ageInMonths
  );

  const isShowLength = ageInYears <= 5;
  const isShowTemperatureMsg = vitalData.temperature && temperatureMsg;
  const isShowSystolicBpMsg = vitalData.systolic && systolicBpMsg;
  const isShowDiastolicBpMsg = vitalData.diastolic && diastolicBpMsg;
  const isShowPulseRateMsg = vitalData.pulseRate && pulseRateMsg;
  const isShowRespiratoryRateMsg =
    vitalData.respiratoryRate && respiratoryRateMsg;
  const isShowOxygenSaturationMsg =
    vitalData.oxygenSaturation && oxygenSaturationMsg;
  const isRequiredSystolicDiastolic =
    !vitalData.systolicIfUnrecordable && !vitalData.diastolicIfUnrecordable;
  const isRequiredSystolicDiastolicUnrecordable =
    !vitalData.systolic && !vitalData.diastolic;
  const isHeightWeightAndBmiMsg =
    vitalData?.height && vitalData.weight && bmiMsg;

  // const isHeightWeightAndNotBmiMsg =
  //   vitalData?.height && vitalData.weight && !bmiMsg;

  // handle bmi calculation
  React.useEffect(() => {
    if (vitalData?.height && vitalData.weight) {
      const bmi = bmiCalculation(
        Number(vitalData?.weight),
        Number(vitalData.height)
      );
      handleBmiChange(bmi);
    }
  }, [vitalData?.height, vitalData.weight, handleBmiChange]);

  // handle head circumference score calculation
  React.useEffect(() => {
    if (vitalData?.headCircumference) {
      const hcScore = headCircumferenceMessage(
        +vitalData?.headCircumference,
        ageInWeeks,
        clientGender
      );
      handleHeadCircumferenceChange(hcScore);
    }
  }, [
    vitalData?.headCircumference,
    handleHeadCircumferenceChange,
    ageInWeeks,
    clientGender,
  ]);

  // handle muac score calculation
  React.useEffect(() => {
    if (vitalData?.muac) {
      const muacScore = muacMessage(+vitalData?.muac);
      handleMuacChange(muacScore);
    }
  }, [vitalData?.muac, handleMuacChange]);

  return {
    bmiMsg,
    temperatureMsg,
    systolicBpMsg,
    diastolicBpMsg,
    pulseRateMsg,
    oxygenSaturationMsg,
    respiratoryRateMsg,
    isShowLength,
    isShowTemperatureMsg,
    isShowSystolicBpMsg,
    isShowDiastolicBpMsg,
    isShowPulseRateMsg,
    isShowRespiratoryRateMsg,
    isShowOxygenSaturationMsg,
    isRequiredSystolicDiastolic,
    isRequiredSystolicDiastolicUnrecordable,
    isHeightWeightAndBmiMsg,
    ageInWeeks,
  };
};

export default useVitalForm;

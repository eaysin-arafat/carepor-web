import {
  BMIForUnder5YearsItem,
  bmi_data_boys_under_5_years,
} from "@/data/vitals/bmi-boys-under-5-years-old";
import {
  BmiForBoysGirlItem,
  bmi_data_boys_5_19_years,
} from "@/data/vitals/bmi-for-boys-5-19-years-old";
import { bmi_data_girls_5_19_years } from "@/data/vitals/bmi-for-girls-5-19-years-old";
import { bmi_data_girls_under_5_years } from "@/data/vitals/bmi-girl-under-5-years-old";
import { DiastolicBpItem, diastolicBpData } from "@/data/vitals/diastolic-bp";
import hcfaBoysUpto13 from "@/data/vitals/hcfa-boys-upto-13";
import hcfaGirlsUpto13, {
  HcfaUpto13Item,
} from "@/data/vitals/hcfa-girls-upto-13";
import { PulseRateItem, pulseRateData } from "@/data/vitals/pulse-rate";
import {
  RespiratoryRateItem,
  respiratoryRateData,
} from "@/data/vitals/respiratory-rate";
import { SystolicBpItem, systolicBpData } from "@/data/vitals/systolic-bp";

/**
 *
 * @description this function is used to calculate BMI based on user input
 * @param weight
 * @param height
 */
export const bmiCalculation = (weight: number, height: number): string => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2);
};

/**
 * ===================== Head circumference message generator functions =====================
 * @description this function is used to generate message based on head circumference input
 *
 */
export const headCircumferenceMessage = (
  headCircumference: number,
  ageWeeks: number,
  gender: string
) => {
  let headCircumferenceObj: HcfaUpto13Item;

  if (gender == "male") {
    headCircumferenceObj = hcfaBoysUpto13?.[ageWeeks];
    return generateMessage(headCircumferenceObj, headCircumference);
  }

  if (gender == "female") {
    headCircumferenceObj = hcfaGirlsUpto13?.[ageWeeks];
    return generateMessage(headCircumferenceObj, headCircumference);
  }
};

const generateMessage = (
  headCircumferenceObj: HcfaUpto13Item,
  headCircumference: number
): string => {
  if (headCircumferenceObj && headCircumferenceObj?.[headCircumference]) {
    return headCircumferenceObj?.[headCircumference] as string;
  }

  if (headCircumferenceObj && Object.keys(headCircumferenceObj)?.length > 0) {
    let count = 1;
    const rangeValue = headCircumferenceObj?.range_value || [];
    while (count < rangeValue?.length) {
      if (
        headCircumference > +rangeValue?.[count - 1] &&
        headCircumference < +rangeValue?.[count]
      ) {
        return headCircumferenceObj[
          rangeValue?.[count - 1] + "-" + rangeValue?.[count]
        ] as string;
      }
      count++;
    }
  }

  // if no message found
  return " ";
};

/**
 *
 * ===================== Temperature message generator functions =====================
 * @description this function is used to generate message based on temperature input
 * @param temperature
 */

export const temperatureMessage = (temperature: number) => {
  if (temperature < 36.6) {
    return "Below normal <36.6°C";
  }

  if (temperature >= 36.6 && temperature <= 37) {
    return "Normal temperature 36.6-37°C";
  }

  return "Above normal >37°C";
};

/**
 *
 * ===================== oxygen saturation message generator functions =====================
 * @description this function is used to generate oxygen saturation message based on user input
 *
 */

export const oxygenSaturationMessage = (oxygenSaturation: number) => {
  if (oxygenSaturation > 100) {
    return "Abnormal High oxygen saturation >100%";
  }
  if (oxygenSaturation < 95) {
    return "Below normal oxygen saturation <95%";
  }
  if (oxygenSaturation >= 95 && oxygenSaturation <= 100) {
    return "Normal oxygen saturation 95-100%";
  }
};

/**
 *
 *  ===================== MUAC message generator functions =====================
 * @description this function is used to generate MUAC message based on user input
 *
 */

export const muacMessage = (muac: number) => {
  if (!muac) {
    return null;
  }
  if (muac < 11.5) {
    return "Severe acute malnutrition (SAM) <11.5cm";
  }

  if (muac >= 11.5 && muac < 12.5) {
    return "Moderate acute malnutrition (MAM) ≥ 11.5 to < 12.5 cm";
  }

  if (muac > 12.5) {
    return "Normal MUAC >/= 12.5cm";
  }
};

// ================== End of  MUAC message generator functions =====================

/**
 * ===================== respiratory message generator functions =====================
 * @description this function is used to generate respiratory message based on weight input
 *
 */
const finalRespiratoryRateMsg = (
  respiratoryRateObj: RespiratoryRateItem,
  respiratoryRate: number
) => {
  const [low, high] = respiratoryRateObj?.normal_range || [];

  if (respiratoryRate < low) {
    return `Low Respiratory rate <${low} b/m`;
  }

  if (respiratoryRate >= low && respiratoryRate <= high) {
    return `Normal Respiratory rate ${low}-${high}b/m`;
  }

  if (respiratoryRate > high) {
    return `High Respiratory rate >${high} b/m`;
  }
};

export const respiratoryRateMessage = (
  respiratoryRate: number,
  ageMonth: number
) => {
  let respiratoryObj: RespiratoryRateItem;

  if (ageMonth >= 12 * 12) {
    respiratoryObj = respiratoryRateData?.[">12"];
    return finalRespiratoryRateMsg(respiratoryObj, respiratoryRate);
  }

  if (ageMonth >= 6 * 12 && ageMonth < 12 * 12) {
    respiratoryObj = respiratoryRateData?.["6-11"];
    return finalRespiratoryRateMsg(respiratoryObj, respiratoryRate);
  }

  if (ageMonth >= 3 * 12 && ageMonth < 6 * 12) {
    respiratoryObj = respiratoryRateData?.["3-5"];
    return finalRespiratoryRateMsg(respiratoryObj, respiratoryRate);
  }

  if (ageMonth > 1 * 12 && ageMonth < 3 * 12) {
    respiratoryObj = respiratoryRateData?.["1-2"];
    return finalRespiratoryRateMsg(respiratoryObj, respiratoryRate);
  }

  if (ageMonth > 1 && ageMonth <= 12) {
    respiratoryObj = respiratoryRateData?.["1-12m"];
    return finalRespiratoryRateMsg(respiratoryObj, respiratoryRate);
  }

  if (ageMonth >= 0 && ageMonth <= 1) {
    respiratoryObj = respiratoryRateData?.["0-1m"];
    return finalRespiratoryRateMsg(respiratoryObj, respiratoryRate);
  }
};

// ================== End of  respiratory message generator functions =====================

/**
 *
 * ================== Diastolic BP message generator functions =====================
 * @description following functions are used to generate diastolic BP message based on user input
 * @param diastolicBp
 */

const finalDiastolicMsg = (diastolic: DiastolicBpItem, diastolicBp: number) => {
  const [low, high] = diastolic?.normal_range || [];

  if (diastolic?.high && diastolicBp > diastolic?.high) {
    return `Diastolic BP>${diastolic?.high} mmHg seek emergency care`;
  }

  if (diastolicBp < low) {
    return `Below normal Diastolic BP <${low} mmHg`;
  }

  if (diastolicBp >= low && diastolicBp <= high) {
    return `Normal Diastolic BP ${low}-${high} mmHg`;
  }

  if (diastolicBp > high) {
    return `Above normal Diastolic BP >${high} mmHg`;
  }
};

export const diastolicBpMessage = (diastolicBp: number, ageMonth: number) => {
  let diastolicObj: DiastolicBpItem;

  if (ageMonth > 17 * 12) {
    diastolicObj = diastolicBpData?.[">17"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }

  if (ageMonth > 11 * 12 && ageMonth <= 17 * 12) {
    diastolicObj = diastolicBpData?.["12-17"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }

  if (ageMonth > 9 * 12 && ageMonth <= 11 * 12) {
    diastolicObj = diastolicBpData?.["10-11"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }

  if (ageMonth > 5 * 12 && ageMonth <= 9 * 12) {
    diastolicObj = diastolicBpData?.["6-9"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }

  if (ageMonth > 2 * 12 && ageMonth <= 5 * 12) {
    diastolicObj = diastolicBpData?.["3-5"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }

  if (ageMonth > 1 * 12 && ageMonth <= 2 * 12) {
    diastolicObj = diastolicBpData?.["1-2"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }

  if (ageMonth > 1 && ageMonth <= 12) {
    diastolicObj = diastolicBpData?.["1-12m"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }

  if (ageMonth >= 0 && ageMonth <= 1) {
    diastolicObj = diastolicBpData?.["0-1m"];
    return finalDiastolicMsg(diastolicObj, diastolicBp);
  }
};

// ================== End of  Diastolic BP message generator functions =====================

/**
 *
 * ================== Systolic BP message generator functions =====================
 * @description following functions are used to generate systolic BP message based on user input
 * @param systolicBp
 */
const finalSystolicMsg = (systolic: SystolicBpItem, systolicBp: number) => {
  const [low, high] = systolic?.normal_range || [];

  if (systolic?.high && systolicBp > systolic?.high) {
    return `systolic>${systolic?.high} mmHg seek emergency care`;
  }

  if (systolicBp < low) {
    return `Below normal Systolic BP <${low} mmHg`;
  }

  if (systolicBp >= low && systolicBp <= high) {
    return `Normal Systolic BP ${low}-${high} mmHg`;
  }

  if (systolicBp > high) {
    return `Above normal Systolic BP >${high} mmHg`;
  }
};

export const systolicBpMessage = (systolicBp: number, ageMonth: number) => {
  let systolicObj: SystolicBpItem;

  if (ageMonth > 17 * 12) {
    systolicObj = systolicBpData?.[">17"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }

  if (ageMonth > 11 * 12 && ageMonth <= 17 * 12) {
    systolicObj = systolicBpData?.["12-17"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }

  if (ageMonth > 9 * 12 && ageMonth <= 11 * 12) {
    systolicObj = systolicBpData?.["10-11"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }

  if (ageMonth > 5 * 12 && ageMonth <= 9 * 12) {
    systolicObj = systolicBpData?.["6-9"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }
  if (ageMonth > 2 * 12 && ageMonth <= 5 * 12) {
    systolicObj = systolicBpData?.["3-5"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }
  if (ageMonth > 1 * 12 && ageMonth <= 2 * 12) {
    systolicObj = systolicBpData?.["1-2"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }
  if (ageMonth > 1 && ageMonth <= 12) {
    systolicObj = systolicBpData?.["1-12m"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }
  if (ageMonth >= 0 && ageMonth <= 1) {
    systolicObj = systolicBpData?.["0-1m"];
    return finalSystolicMsg(systolicObj, systolicBp);
  }
};

// ================== End of  Systolic BP message generator functions =====================

/**
 *
 * ================== Pulse rate message generator functions =====================
 * @description following functions are used to generate pulse rate message based on user input
 * @param pulseRate
 * @param ageMonth
 */

const finalPulseRateMsg = (pulseRateObj: PulseRateItem, pulseRate: number) => {
  const [low, high] = pulseRateObj?.normal_range || [];

  if (pulseRate < low) {
    return `Low Pulse rate <${low} b/m`;
  }

  if (pulseRate >= low && pulseRate <= high) {
    return `Normal Pulse rate ${low}-${high}b/m`;
  }

  if (pulseRate > high) {
    return `High Pulse rate >${high} b/m`;
  }
};

export const pulseRateMessage = (pulseRate: number, ageMonth: number) => {
  let pulseRateObj: PulseRateItem;

  if (ageMonth >= 15 * 12) {
    pulseRateObj = pulseRateData?.[">15"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }

  if (ageMonth >= 11 * 12 && ageMonth < 15 * 12) {
    pulseRateObj = pulseRateData?.["11-14"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }

  if (ageMonth >= 6 * 12 && ageMonth < 11 * 12) {
    pulseRateObj = pulseRateData?.["6-10"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }

  if (ageMonth >= 4 * 12 && ageMonth < 6 * 12) {
    pulseRateObj = pulseRateData?.["3-5"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }

  if (ageMonth > 1 * 12 && ageMonth < 4 * 12) {
    pulseRateObj = pulseRateData?.["1-3"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }

  if (ageMonth > 5 && ageMonth <= 12) {
    pulseRateObj = pulseRateData?.["6-12m"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }

  if (ageMonth > 1 && ageMonth <= 5) {
    pulseRateObj = pulseRateData?.["1-5m"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }

  if (ageMonth >= 0 && ageMonth <= 1) {
    pulseRateObj = pulseRateData?.["0-1m"];
    return finalPulseRateMsg(pulseRateObj, pulseRate);
  }
};

// ================== End of  Pulse rate message generator functions =====================

/**
 *
 * ================== BMI message generator functions =====================
 * @description following functions are used to generate BMI message based on user input
 */

export const msgBasedOnBmi = (bmi: number) => {
  if (bmi < 18.5) {
    return `Underweight <18.5kg/m2`;
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return `Normal 18.5-24.9kg/m2`;
  }
  if (bmi >= 24.9 && bmi <= 29.9) {
    return `Overweight/pre-obesity 24.9-29.9kg/m2`;
  }
  if (bmi >= 30 && bmi <= 34.9) {
    return `Class I Obesity 30-34.9kg/m2`;
  }
  if (bmi >= 35 && bmi <= 39.9) {
    return `Class II Obesity 35-39.9kg/m2`;
  }

  return `Very severely obese BMI >40kg/m2`;
};

// final message five to 19
const fiveToNineteenFinalMsg = (bmiObj: BmiForBoysGirlItem, bmi: number) => {
  const rangeValue = bmiObj?.range_value || [];

  if (bmi && bmiObj?.[bmi]) {
    return bmiObj?.[bmi];
  }

  let count = 1;
  while (count < rangeValue?.length) {
    if (bmi > +rangeValue?.[count - 1] && bmi < +rangeValue?.[count]) {
      return bmiObj?.[rangeValue?.[count - 1] + "-" + rangeValue?.[count]];
    }
    count++;
  }

  // if no message found
  return msgBasedOnBmi(bmi);
};

export const bmiMessage = (
  bmi: number,
  length: number,
  weight: number,
  ageMonth: number,
  gender: string
) => {
  // under 5 years
  if (ageMonth >= 0 && ageMonth <= 5 * 12) {
    return bmiMsgBasedOnLengthAndWeight(length, weight, gender);
  }

  //5 to 19 years male
  if (ageMonth > 5 * 12 && ageMonth <= 19 * 12 && gender === "male") {
    const boysBmiObj = bmi_data_boys_5_19_years?.[ageMonth];
    return fiveToNineteenFinalMsg(boysBmiObj, bmi);
  }

  // 5 to 19 years for female
  if (ageMonth > 5 * 12 && ageMonth <= 19 * 12 && gender === "female") {
    const girlsBmiObj = bmi_data_girls_5_19_years?.[ageMonth];
    return fiveToNineteenFinalMsg(girlsBmiObj, bmi);
  }

  // 20 years and above
  return msgBasedOnBmi(bmi);
};

export const bmiMsgBasedOnLengthAndWeight = (
  length: number,
  weight: number,
  gender: string
) => {
  let bmiObj: BMIForUnder5YearsItem;

  if (gender == "male") {
    bmiObj = bmi_data_boys_under_5_years?.[length];
    return underFiveFinalMsg(bmiObj, +weight);
  }

  if (gender == "female") {
    bmiObj = bmi_data_girls_under_5_years?.[length];
    return underFiveFinalMsg(bmiObj, +weight);
  }
};

// final message under five
const underFiveFinalMsg = (bmiObj: BMIForUnder5YearsItem, bmi: number) => {
  const rangeValue = bmiObj?.range_value || [];

  if (bmi && bmiObj?.[bmi]) {
    return bmiObj?.[bmi];
  }

  let count = 1;
  while (count < rangeValue?.length) {
    if (bmi > +rangeValue?.[count - 1] && bmi < +rangeValue?.[count]) {
      return bmiObj?.[rangeValue?.[count - 1] + "-" + rangeValue?.[count]];
    }
    count++;
  }

  // if no message found
  return msgBasedOnBmi(bmi);
};

// ================== End of  BMI message generator functions =====================

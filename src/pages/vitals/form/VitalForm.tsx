import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import { cn } from "@/utilities/cn";
import React from "react";
import { VitalDataType, VitalErrorType } from "../create/useCreate";
import useVitalForm from "./useVitalForm";

type VitalFormProps = {
  vitalData: VitalDataType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (date: Date | null) => void;
  errorMessages: VitalErrorType;
  handleBmiChange: (bmi: string) => void;
  handleHeadCircumferenceChange: (hcScore: string) => void;
  handleMuacChange: (muacScore: string) => void;
};

const VitalForm = ({
  vitalData,
  handleInputChange,
  handleDateChange,
  errorMessages,
  handleBmiChange,
  handleHeadCircumferenceChange,
  handleMuacChange,
}: VitalFormProps) => {
  // components specific hooks for outsource logic
  const {
    bmiMsg,
    diastolicBpMsg,
    isHeightWeightAndBmiMsg,
    isRequiredSystolicDiastolic,
    isRequiredSystolicDiastolicUnrecordable,
    isShowDiastolicBpMsg,
    isShowLength,
    isShowOxygenSaturationMsg,
    isShowPulseRateMsg,
    isShowRespiratoryRateMsg,
    isShowSystolicBpMsg,
    isShowTemperatureMsg,
    oxygenSaturationMsg,
    pulseRateMsg,
    respiratoryRateMsg,
    systolicBpMsg,
    temperatureMsg,
    ageInWeeks,
  } = useVitalForm({
    vitalData,
    handleBmiChange,
    handleHeadCircumferenceChange,
    handleMuacChange,
  });

  // the actual form
  return (
    <div className="grid grid-cols-6 gap-5 p-3">
      <div className="col-span-6  md:col-span-3">
        <DateInput
          label="Date"
          required
          onChange={handleDateChange}
          errMsg={errorMessages?.vitalsDate}
          isClearable={true}
          selected={
            vitalData?.vitalsDate ? new Date(vitalData.vitalsDate) : null
          }
        />
      </div>
      <div className="col-span-6  md:col-span-3">
        <DateInput
          label="Time"
          required
          onChange={handleDateChange}
          errMsg={errorMessages?.vitalsDate}
          placeholderText="hh:mm"
          isClearable={true}
          timeOnly={true}
          selected={
            vitalData?.vitalsDate ? new Date(vitalData.vitalsDate) : null
          }
        />
      </div>

      {/* WEIGHT */}
      <div className="col-span-6  md:col-span-2">
        <Input
          required
          label="Weight (kg)"
          name="weight"
          errMsg={errorMessages?.weight}
          value={vitalData?.weight}
          onChange={handleInputChange}
        />

        {/* BMI MESSAGE */}
        {isHeightWeightAndBmiMsg && (
          <p
            className={cn("text-xs text-red-600", {
              "text-green-600": bmiMsg?.includes("Normal"),
            })}
          >
            <span className="text-black"> BMI: </span> {vitalData?.bmi} (
            {bmiMsg})
          </p>
        )}
      </div>

      {/* HEIGHT */}
      <div className="col-span-6  md:col-span-2">
        <Input
          required
          label={isShowLength ? "Length (cm)" : "Height (cm)"}
          name="height"
          errMsg={errorMessages?.height}
          value={vitalData?.height}
          onChange={handleInputChange}
        />
      </div>

      {/* TEMPERATURE */}
      <div className="col-span-6  md:col-span-2">
        <Input
          required
          label="Temperature (c)"
          name="temperature"
          errMsg={errorMessages?.temperature}
          value={vitalData?.temperature}
          onChange={handleInputChange}
        />

        {/* TEMPERATURE MESSAGE */}
        {isShowTemperatureMsg && (
          <p
            className={cn("text-xs text-red-600", {
              "text-green-600": temperatureMsg?.includes("Normal"),
            })}
          >
            {temperatureMsg}
          </p>
        )}
      </div>
      {/* <div className="col-span-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5"> */}
      {/* SYSTOLIC BP */}
      <div className="col-span-6  md:col-span-2">
        <Input
          required={isRequiredSystolicDiastolic}
          label="Systolic (mmHg)"
          name="systolic"
          disabled={!isRequiredSystolicDiastolic}
          errMsg={errorMessages?.systolic}
          value={vitalData?.systolic}
          onChange={handleInputChange}
        />

        {/* SYSTOLIC BP MESSAGE */}
        {isShowSystolicBpMsg && (
          <p
            className={cn("text-xs text-red-600", {
              "text-green-600": systolicBpMsg?.includes("Normal"),
            })}
          >
            {systolicBpMsg}
          </p>
        )}
      </div>

      {/* SYSTOLIC UNRECORDABLE */}
      {/* <div className="">
          <Select
            required={isRequiredSystolicDiastolicUnrecordable}
            label="Systolic Unrecordable"
            name="systolicIfUnrecordable"
            disabled={!isRequiredSystolicDiastolicUnrecordable}
            errMsg={errorMessages?.systolicIfUnrecordable}
            value={vitalData?.systolicIfUnrecordable}
            onChange={handleInputChange}
          >
            <option value="1">Too Hight</option>
            <option value="2">Too Low</option>
            <option value="3">Unknown</option>
          </Select>
        </div> */}

      {/* DIASTOLIC BP */}
      <div className="col-span-6  md:col-span-2">
        <Input
          required={isRequiredSystolicDiastolic}
          label="Diastolic (mmHg)"
          name="diastolic"
          disabled={!isRequiredSystolicDiastolic}
          errMsg={errorMessages?.diastolic}
          value={vitalData?.diastolic}
          onChange={handleInputChange}
        />

        {/* DIASTOLIC BP MESSAGE */}
        {isShowDiastolicBpMsg && (
          <p
            className={cn("text-xs text-red-600", {
              "text-green-600": diastolicBpMsg?.includes("Normal"),
            })}
          >
            {diastolicBpMsg}
          </p>
        )}
      </div>

      {/* DIASTOLIC UNRECORDABLE */}
      <div className="col-span-6  md:col-span-2">
        <Select
          required={isRequiredSystolicDiastolicUnrecordable}
          label="BP Unrecordable"
          name="diastolicIfUnrecordable"
          disabled={!isRequiredSystolicDiastolicUnrecordable}
          errMsg={errorMessages?.diastolicIfUnrecordable}
          value={vitalData?.diastolicIfUnrecordable}
          onChange={handleInputChange}
        >
          <option value="1">Too Hight</option>
          <option value="2">Too Low</option>
          <option value="3">Unknown</option>
        </Select>
      </div>
      {/* </div> */}

      {/* PULSE RATE */}
      <div className="col-span-6  md:col-span-2">
        <Input
          label="Pulse Rate (bpm)"
          name="pulseRate"
          errMsg={errorMessages?.pulseRate}
          value={vitalData?.pulseRate}
          onChange={handleInputChange}
        />

        {/* PULSE RATE MESSAGE */}
        {isShowPulseRateMsg && (
          <p
            className={cn("text-xs text-red-600", {
              "text-green-600": pulseRateMsg?.includes("Normal"),
            })}
          >
            {pulseRateMsg}
          </p>
        )}
      </div>

      {/* RESPIRATORY RATE */}
      <div className="col-span-6  md:col-span-2">
        <Input
          label="Respiratory Rate (bpm)"
          name="respiratoryRate"
          errMsg={errorMessages?.respiratoryRate}
          value={vitalData?.respiratoryRate}
          onChange={handleInputChange}
        />

        {/* RESPIRATORY RATE MESSAGE */}
        {isShowRespiratoryRateMsg && (
          <p
            className={cn("text-xs text-red-600", {
              "text-green-600": respiratoryRateMsg?.includes("Normal"),
            })}
          >
            {respiratoryRateMsg}
          </p>
        )}
      </div>

      {/* OXYGEN SATURATION */}
      <div className="col-span-6  md:col-span-2">
        <Input
          label="Oxygen Saturation (%)"
          name="oxygenSaturation"
          errMsg={errorMessages?.oxygenSaturation}
          value={vitalData?.oxygenSaturation}
          onChange={handleInputChange}
        />

        {/* OXYGEN SATURATION MESSAGE */}
        {isShowOxygenSaturationMsg && (
          <p
            className={cn("text-xs text-red-600", {
              "text-green-600": oxygenSaturationMsg?.includes("Normal"),
            })}
          >
            {oxygenSaturationMsg}
          </p>
        )}
      </div>

      {/* MUAC */}
      <div className="col-span-6  md:col-span-2">
        <Input
          label="MUAC"
          name="muac"
          disabled={!isShowLength}
          errMsg={errorMessages?.muac}
          value={vitalData?.muac}
          onChange={handleInputChange}
        />
      </div>

      {/* MUAC SCORE */}
      <div className="col-span-6  md:col-span-2">
        <Input
          disabled
          label="MUAC Score"
          name="muacScore"
          className={cn("!text-red-600", {
            "text-green-600": vitalData?.muacScore?.includes("Normal"),
            " ": !vitalData?.muac && !vitalData?.muacScore,
          })}
          errMsg={errorMessages?.muacScore}
          value={vitalData?.muac ? vitalData?.muacScore : ""}
          onChange={() => {}}
        />
      </div>

      {/* ABDOMINAL CIRCUMFERENCE  */}
      <div className="col-span-6  md:col-span-2">
        <Input
          label="Abdominal Circumference (cm)"
          name="abdominalCircumference"
          errMsg={errorMessages?.abdominalCircumference}
          value={vitalData?.abdominalCircumference}
          onChange={handleInputChange}
        />
      </div>

      {/* HEAD CIRCUMFERENCE */}
      <div className="col-span-6  md:col-span-2">
        <Input
          label="Head Circumference (cm)"
          name="headCircumference"
          disabled={ageInWeeks > 13}
          errMsg={errorMessages?.headCircumference}
          value={vitalData?.headCircumference}
          onChange={handleInputChange}
        />
      </div>

      {/* HC SCORE */}
      <div className="col-span-6  md:col-span-2">
        <Input
          disabled
          label="HC Score"
          name="hcScore"
          errMsg={errorMessages?.hcScore}
          value={vitalData?.hcScore}
          onChange={() => {}}
        />
      </div>

      {/* HC SCORE */}
      <div className="col-span-6  md:col-span-2">
        <Textarea
          label="Note"
          name="comment"
          className="h-[52px]"
          errMsg={errorMessages?.comment}
          value={vitalData?.comment}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default VitalForm;

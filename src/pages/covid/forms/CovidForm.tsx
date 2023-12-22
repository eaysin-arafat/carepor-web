import React from "react";

import Section from "@/components/core/card/Section";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import MultiSelect, {
  Option,
} from "@/components/core/form-elements/MultiSelect";
import PatternInput from "@/components/core/form-elements/PatternInput";
import { renderObjEnumOptions } from "@/components/core/form-elements/RenderSelectOptions";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import {
  EnumCovidComorbidCondition,
  EnumExposureRisks,
  EnumSourceOfAlert,
} from "@/enum/enumerators";
import { useReadCovidSymptomsQuery } from "@/features/covid/covid-api";
import { TypeCovid, TypeCovidError } from "@/types/module-types/covid";
import dayjs from "dayjs";
// import { TypeCovid, TypeCovidError } from "@/types/covid";

interface CovidFormProps {
  covidData?: TypeCovid;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: TypeCovidError;
  handleDateChange?: (name: string, value: string) => void;

  setSymptomScreeningList: React.Dispatch<React.SetStateAction<Option[]>>;
  setExposureRisksList: React.Dispatch<React.SetStateAction<Option[]>>;
  setCovidComorbidityList: React.Dispatch<React.SetStateAction<Option[]>>;
  symptomScreeningList: Option[];
  exposureRisksList: Option[];
  covidComorbidityList: Option[];
}

const CovidForm = ({
  covidData,
  errorMsg,
  handleChange,
  handleDateChange,
  symptomScreeningList,
  covidComorbidityList,
  exposureRisksList,
  setSymptomScreeningList,
  setCovidComorbidityList,
  setExposureRisksList,
}: CovidFormProps) => {
  // demo
  // const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

  // Symptom Screen options /Options for multi selection
  const { data: covidSymptoms } = useReadCovidSymptomsQuery(undefined);
  // Create Options for multi selection /ExposureRisks
  const exposureRiskOptions = Object.keys(EnumExposureRisks).map((key) => ({
    oid: +key,
    description: EnumExposureRisks[key],
  }));
  // Create Options for multi selection /CovidComorbidCondition
  const covidComorbiditiesOptions = Object.keys(EnumCovidComorbidCondition).map(
    (key) => ({
      oid: +key,
      description: EnumCovidComorbidCondition[key],
    })
  );

  // const convertToMultiOptions = (enumObject: { [key: number]: string }[]) => {
  //   return Object.keys(EnumCovidComorbidCondition).map((key) => ({
  //     oid: +key,
  //     description: EnumCovidComorbidCondition[key],
  //   }));
  // };

  return (
    <div className="grid ">
      {/* Integrated Screening Form */}
      <Section title="Integrated Screening Form">
        <div className="grid md:grid-cols-2 gap-5">
          <DateInput
            required
            label="Date of Notification"
            errMsg={errorMsg?.notificationDate}
            selected={
              covidData?.notificationDate
                ? new Date(covidData?.notificationDate)
                : null
            }
            onChange={(date) =>
              handleDateChange(
                "notificationDate",
                new Date(dayjs(date).format("YYYY-MM-DD"))?.toISOString()
              )
            }
          />
          <Select
            required
            label="Source of Alert"
            name="sourceOfAlert"
            errMsg={errorMsg?.sourceOfAlert}
            value={covidData?.sourceOfAlert}
            onChange={handleChange}
          >
            {renderObjEnumOptions(EnumSourceOfAlert)}
          </Select>
        </div>
      </Section>

      {/* Symptom Screen */}
      <Section title="Symptom Screen">
        <div className="grid  gap-5">
          <MultiSelect
            isSearchable
            options={covidSymptoms?.slice() || []}
            selectedOptions={symptomScreeningList}
            setSelectedOptions={setSymptomScreeningList}
          />
          <Textarea
            label="Other Symptom Screen"
            name="otherCovidSymptom"
            errMsg={errorMsg?.otherCovidSymptom}
            value={covidData?.otherCovidSymptom}
            onChange={handleChange}
          />
        </div>
      </Section>
      <Section title="Exposure Risk">
        <div className="grid  gap-5">
          <MultiSelect
            options={exposureRiskOptions?.slice() || []} //
            selectedOptions={exposureRisksList}
            setSelectedOptions={setExposureRisksList}
          />
          <Textarea
            label="Other Exposure Risk"
            name="otherExposureRisk"
            errMsg={errorMsg?.otherExposureRisk}
            value={covidData?.otherExposureRisk}
            onChange={handleChange}
          />
        </div>
      </Section>
      {/* Case Report */}
      <Section title="Case Report">
        <div className="grid md:grid-cols-2 gap-5">
          <Select
            label="ICU Admission"
            onChange={handleChange}
            value={covidData.isICUAdmitted}
            errMsg={errorMsg?.isICUAdmitted}
            required
            name="isICUAdmitted"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <DateInput
            label="Date of ICU Admission"
            name="icuAdmissionDate"
            max={new Date()}
            disabled={covidData.isICUAdmitted != "true"}
            errMsg={errorMsg?.icuAdmissionDate}
            selected={
              covidData?.icuAdmissionDate
                ? new Date(covidData?.icuAdmissionDate)
                : null
            }
            onChange={(date) =>
              handleDateChange(
                "icuAdmissionDate",
                new Date(dayjs(date).format("YYYY-MM-DD"))?.toISOString()
              )
            }
          />
          <Select
            required
            label="On Oxygen?"
            name="isOnOxygen"
            errMsg={errorMsg?.isOnOxygen}
            value={covidData?.isOnOxygen}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Input
            required
            label="Oxygen Saturation"
            name="oxygenSaturation"
            errMsg={errorMsg?.oxygenSaturation}
            value={covidData?.oxygenSaturation}
            onChange={handleChange}
            // regexPattern={/^\d{0,3}$/}
          />
          <Select
            required
            label="Received Ventilatory Support"
            name="receivedVentilatorySupport"
            errMsg={errorMsg?.receivedVentilatorySupport}
            value={covidData?.receivedVentilatorySupport}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Select
            required
            label="Received BP Support"
            name="receivedBPSupport"
            errMsg={errorMsg?.receivedBPSupport}
            value={covidData?.receivedBPSupport}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <DateInput
            required
            label="Date First Positive"
            name="dateFirstPositive"
            max={new Date()}
            errMsg={errorMsg?.dateFirstPositive}
            selected={
              covidData?.dateFirstPositive
                ? new Date(covidData?.dateFirstPositive)
                : null
            }
            onChange={(date) =>
              handleDateChange(
                "dateFirstPositive",
                new Date(dayjs(date).format("YYYY-MM-DD"))?.toISOString()
              )
            }
          />
          <Select
            required
            label="Recent International Travel"
            name="anyInternationalTravel"
            value={covidData?.anyInternationalTravel}
            errMsg={errorMsg?.anyInternationalTravel}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <PatternInput
            label="Recent International Travel Destination Name"
            name="travelDestination"
            placeholder="Enter Destination Name"
            disabled={covidData?.anyInternationalTravel != "true"}
            errMsg={errorMsg?.travelDestination}
            value={covidData?.travelDestination}
            onChange={handleChange}
          />
          <Select
            label="Health Care Worker"
            required
            name="isClientHealthCareWorker"
            onChange={handleChange}
            errMsg={errorMsg?.isClientHealthCareWorker}
            value={covidData?.isClientHealthCareWorker}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Select
            required
            label="Covid Exposure"
            name="hadCovidExposure"
            errMsg={errorMsg?.hadCovidExposure}
            value={covidData?.hadCovidExposure}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Input
            label="Mental Status on Admission"
            name="mentalStatusOnAdmission"
            placeholder="Enter Mental Status"
            errMsg={errorMsg?.mentalStatusOnAdmission}
            value={covidData?.mentalStatusOnAdmission}
            onChange={handleChange}
          />
        </div>
      </Section>

      {/* Clinical Assessment */}
      <Section title="Clinical Assessment">
        <div className="grid md:grid-cols-2 gap-5">
          <Select
            required
            label="Pneumonia"
            name="hasPneumonia"
            errMsg={errorMsg?.hasPneumonia}
            value={covidData?.hasPneumonia}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Select
            label="ARDS"
            required
            name="isARDS"
            errMsg={errorMsg?.isARDS}
            value={covidData?.isARDS}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Select
            required
            label="Patient Hospitalised?"
            name="isPatientHospitalized"
            errMsg={errorMsg?.isPatientHospitalized}
            value={covidData?.isPatientHospitalized}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <DateInput
            label="Date of Hospitalised"
            name="dateHospitalized"
            max={new Date()}
            errMsg={errorMsg?.dateHospitalized}
            selected={
              covidData?.dateHospitalized
                ? new Date(covidData?.dateHospitalized)
                : null
            }
            onChange={(date) =>
              handleDateChange(
                "dateHospitalized",
                new Date(dayjs(date).format("YYYY-MM-DD"))?.toISOString()
              )
            }
          />
        </div>
      </Section>

      <Section title="Co-morbid Conditions">
        <div className="grid  gap-5">
          <MultiSelect
            options={covidComorbiditiesOptions?.slice() || []}
            selectedOptions={covidComorbidityList}
            setSelectedOptions={setCovidComorbidityList}
          />
          <Textarea
            label="Other Comorbidities Conditions"
            name="otherComorbiditiesConditions"
            errMsg={errorMsg?.otherComorbiditiesConditions}
            value={covidData?.otherComorbiditiesConditions}
            onChange={handleChange}
          />
          <Textarea
            label="Other Respiratory Illness"
            name="otherRespiratoryIllness"
            errMsg={errorMsg?.otherRespiratoryIllness}
            value={covidData?.otherRespiratoryIllness}
            onChange={handleChange}
          />
        </div>
      </Section>
    </div>
  );
};

export default CovidForm;

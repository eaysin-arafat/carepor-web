import { EnumSourceOfAlert } from "@/enum/enumerators";
import { TypeCovid, TypeCovidError } from "@/types/module-types/covid";
import dayjs from "dayjs";
import React from "react";
import Card from "../core/card/Card";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import MultiSelect from "../core/form-elements/MultiSelect";
import MultipleSelect, { Option } from "../core/form-elements/MultipleSelect";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";

interface CovidFormProps {
  covidData?: TypeCovid;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: TypeCovidError;
  handleDateChange?: (name: string, value: string) => void;
}

const CovidForm = ({
  covidData,
  errorMsg,
  handleChange,
  handleDateChange,
}: CovidFormProps) => {
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

  const renderSourceOfAlertOptions = () => {
    return Object.keys(EnumSourceOfAlert).map((key) => (
      <option key={key} value={key}>
        {EnumSourceOfAlert[key]}
      </option>
    ));
  };

  return (
    <div className="grid gap-8">
      <Card
        title="Integrated Screening Form"
        titleBorder="border-b border-borderColor"
        className="border border-borderColor"
        titleClass="text-xl text-secondary"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <DateInput
            required
            label="Date of Notification"
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
            {renderSourceOfAlertOptions()}
          </Select>
        </div>
      </Card>
      <Card
        title="Symptom Screen"
        titleBorder="border-b border-borderColor"
        className=" border border-borderColor"
        titleClass="text-xl text-secondary"
      >
        <div className="grid  gap-5">
          <MultiSelect
            options={demoOptions?.slice() || []}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <Textarea
            label="Other Symptom Screen"
            name="otherCovidSymptom"
            errMsg={errorMsg?.otherCovidSymptom}
            value={covidData?.otherCovidSymptom}
            onChange={handleChange}
          />
        </div>
      </Card>
      <Card
        title="Exposure Risk"
        titleBorder="border-b border-borderColor"
        className=" border border-borderColor"
        titleClass="text-xl text-secondary"
      >
        <div className="grid  gap-5">
          <MultipleSelect
            options={demoOptions?.slice() || []}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <Textarea
            label="Other Exposure Risk"
            name="otherExposureRisk"
            errMsg={errorMsg?.otherExposureRisk}
            value={covidData?.otherExposureRisk}
            onChange={handleChange}
          />
        </div>
      </Card>

      <Card
        title="Case Report"
        titleBorder="border-b border-borderColor"
        className=" border border-borderColor"
        titleClass="text-xl text-secondary"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <Select label="ICU Admission" required name="isICUAdmitted"></Select>
          <DateInput
            label="Date of ICU Admission"
            name="icuAdmissionDate"
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
            errMsg={errorMsg?.anyInternationalTravel}
            value={covidData?.anyInternationalTravel}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
          <Input
            label="Recent International Travel Destination Name"
            name="travelDestination"
            errMsg={errorMsg?.travelDestination}
            value={covidData?.travelDestination}
            onChange={handleChange}
          />
          <Select
            label="Health Care Worker"
            required
            name="isClientHealthCareWorker"
          ></Select>
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
            errMsg={errorMsg?.mentalStatusOnAdmission}
            value={covidData?.mentalStatusOnAdmission}
            onChange={handleChange}
          />
        </div>
      </Card>
      <Card
        title="Clinical Assessment"
        titleBorder="border-b border-borderColor"
        className=" border border-borderColor"
        titleClass="text-xl text-secondary"
      >
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
      </Card>
      <Card
        title="Co-morbid Conditions"
        titleBorder="border-b border-borderColor"
        className=" border border-borderColor"
        titleClass="text-xl text-secondary"
      >
        <div className="grid  gap-5">
          <MultipleSelect
            options={demoOptions?.slice() || []}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
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
      </Card>
    </div>
  );
};

export default CovidForm;
const demoOptions = [
  {
    oid: 1,
    description: "Indeterminate HIV test",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 2,
    description: "HIV negative pregnant mother",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 3,
    description: "Breastfeeding mother",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 4,
    description: "HIV negative with STIs",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 5,
    description: "HIV negative with TB",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 6,
    description: "Discordant sexual partner",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
];

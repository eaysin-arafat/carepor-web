import { closeAddModal } from "@/features/modal/modal-slice";
import React from "react";
import { useDispatch } from "react-redux";
import CancelAndAddButton from "../core/buttons/CancelAndAddButton";
import Card from "../core/card/Card";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import MultipleSelect, { Option } from "../core/form-elements/MultipleSelect";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";

const CovidForm = () => {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <form>
      <div className="grid gap-8">
        <Card
          title="Integrated Screening Form"
          titleBorder="border-b border-borderColor"
          className="border border-borderColor"
          titleClass="text-xl text-secondary"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <DateInput
              onChange={() => {}}
              label="Date of Notification"
              required
            />
            <Select label="Source of Alert" required></Select>
          </div>
        </Card>
        <Card
          title="Symptom Screen"
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
            <Textarea label="Other Symptom Screen" />
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
            <Textarea label="Other Exposure Risk" />
          </div>
        </Card>

        <Card
          title="Case Report"
          titleBorder="border-b border-borderColor"
          className=" border border-borderColor"
          titleClass="text-xl text-secondary"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Select
              label="ICU Admission"
              required
              name="isICUAdmitted"
            ></Select>
            <DateInput
              onChange={() => {}}
              label="Date of ICU Admission"
              name="icuAdmissionDate"
            />
            <Select label="On Oxygen?" required name="isOnOxygen"></Select>
            <Input label="Oxygen Saturation" name="oxygenSaturation" required />
            <Select
              label="Received Ventilatory Support"
              required
              name="receivedVentilatorySupport"
            ></Select>
            <Select
              label="Received BP Support"
              required
              name="receivedBPSupport"
            ></Select>
            <DateInput
              label="Date First Positive"
              name="dateFirstPositive"
              required
              onChange={() => {}}
            />
            <Select
              label="Recent International Travel"
              required
              name="anyInternationalTravel"
            ></Select>
            <Input
              label="Recent International Travel Destination Name"
              name="travelDestination"
            />
            <Select
              label="Health Care Worker"
              required
              name="isClientHealthCareWorker"
            ></Select>
            <Select
              label="Covid Exposure"
              required
              name="hadCovidExposure"
            ></Select>
            <Input
              label="Mental Status on Admission"
              name="mentalStatusOnAdmission"
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
            <Select label="Pneumonia" required name="hasPneumonia"></Select>
            <Select label="ARDS" required name="isARDS"></Select>
            <Select
              label="Patient Hospitalised?"
              required
              name="isPatientHospitalized"
            ></Select>
            <DateInput
              onChange={() => {}}
              label="Date of Hospitalised"
              name="dateHospitalized"
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
            />
            <Textarea
              label="Other Respiratory Illness"
              name="otherRespiratoryIllness"
            />
          </div>
        </Card>
      </div>
      <div className="flex justify-center mt-8">
        <CancelAndAddButton toggler={closeModal} />
      </div>
    </form>
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
  }
];

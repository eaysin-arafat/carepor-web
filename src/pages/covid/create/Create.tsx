import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultModal from "@/components/core/modal/DefaultModal";
import CovidForm from "@/components/covid/CovidForm";
import { covidModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialCovidData = {
  sourceOfAlert: "",
  otherCovidSymptom: "",
  otherExposureRisk: "",
  isICUAdmitted: "",
  isOnOxygen: "",
  receivedVentilatorySupport: "",
  receivedBPSupport: "",
  anyInternationalTravel: "",
  isClientHealthCareWorker: "",
  hadCovidExposure: "",
  hasPneumonia: "",
  isARDS: "",
  isPatientHospitalized: "",
  oxygenSaturation: "",
  travelDestination: "",
  mentalStatusOnAdmission: "",
  otherComorbiditiesConditions: "",
  otherRespiratoryIllness: "",
  notificationDate: new Date(dayjs().format("YYYY-MM-DD")).toISOString(),
  icuAdmissionDate: new Date(dayjs().format("YYYY-MM-DD")).toISOString(),
  dateFirstPositive: "",
  dateHospitalized: "",

  // covidSymptomScreeningList:  [],
  // covidComobidityList: [],
  // exposureRisksList: [],
};

export interface CovidType {
  sourceOfAlert?: string;
  otherCovidSymptom?: string;
  otherExposureRisk?: string;
  isICUAdmitted?: string;
  isOnOxygen?: string;
  oxygenSaturation?: string;
  receivedVentilatorySupport?: string;
  receivedBPSupport?: string;
  anyInternationalTravel?: string;
  travelDestination?: string;
  isClientHealthCareWorker?: string;
  hadCovidExposure?: string;
  mentalStatusOnAdmission?: string;
  hasPneumonia?: string;
  isARDS?: string;
  isPatientHospitalized?: string;
  otherComorbiditiesConditions?: string;
  otherRespiratoryIllness?: string;

  notificationDate: string;
  icuAdmissionDate: string;
  dateFirstPositive: string;
  dateHospitalized: string;
}

export interface CovidErrorType {
  sourceOfAlert?: string;
  otherCovidSymptom?: string;
  otherExposureRisk?: string;
  isICUAdmitted?: string;
  isOnOxygen?: string;
  oxygenSaturation?: string;
  receivedVentilatorySupport?: string;
  receivedBPSupport?: string;
  anyInternationalTravel?: string;
  travelDestination?: string;
  isClientHealthCareWorker?: string;
  hadCovidExposure?: string;
  mentalStatusOnAdmission?: string;
  hasPneumonia?: string;
  isARDS?: string;
  isPatientHospitalized?: string;
  otherComorbiditiesConditions?: string;
  otherRespiratoryIllness?: string;
  notificationDate?: string;
  icuAdmissionDate?: string;
  dateFirstPositive?: string;
  dateHospitalized?: string;
}

const CovidCreate = () => {
  const [covidData, setCovidData] = useState(initialCovidData);
  const [errorMsg, setErrorMsg] = useState<CovidErrorType>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCovidData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (name: string, value: string) => {
    setCovidData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      // isICUAdmitted: false,
      // isOnOxygen: false,
      // receivedVentilatorySupport: false,
      // receivedBPSupport: false,
      // anyInternationalTravel: false,
      // isClientHealthCareWorker: false,
      // hadCovidExposure: false,
      // hasPneumonia: false,
      // isARDS: false,
      // isPatientHospitalized: false,
    };
    console.log("covidData", covidData);
  };
  return (
    <div>
      {addModal?.modalId === covidModalTypes.covidCreateModal && (
        <DefaultModal title="Covid" toggler={closeModal} size="7xl">
          <form onSubmit={handleSubmit}>
            <CovidForm
              covidData={covidData}
              handleChange={handleChange}
              errorMsg={errorMsg}
              handleDateChange={handleDateChange}
            />
            <div className="flex justify-center mt-8">
              <CancelAndAddButton toggler={closeModal} />
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default CovidCreate;

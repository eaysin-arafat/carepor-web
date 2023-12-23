import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultModal from "@/components/core/modal/DefaultModal";
// import CovidForm from "@/components/covid/CovidForm";
import { Option } from "@/components/core/form-elements/MultiSelect";
import { covidModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { RtkStatusEnum } from "@/enum/rtk";
import { useCreateCovidMutation } from "@/features/covid/covid-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { covidValidator } from "@/validation-models/covid-validator";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CovidForm from "../forms/CovidForm";

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
  dateFirstPositive: "",
  dateHospitalized: "",

  notificationDate: new Date(dayjs().format("YYYY-MM-DD")).toISOString(),
  icuAdmissionDate: "", // this field can be disabled isICUAdmitted != "1" /NO/false
  // icuAdmissionDate: new Date(dayjs().format("YYYY-MM-DD")).toISOString(),

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
  const dispatch = useDispatch();
  // modal state
  const { addModal } = useSelector((state: RootState) => state.modal);
  // Base Data Hook
  const { Covid } = EnumEncounterType;
  const [baseDataCreate] = useBaseDataCreate(Covid);

  // RTK mutation
  const [createCovidRecord, { status, isSuccess, isError, isLoading }] =
    useCreateCovidMutation();

  //Form states
  const [covidData, setCovidData] = useState(initialCovidData);
  const [errorMsg, setErrorMsg] = useState<CovidErrorType>({});
  // Multi selection states
  const [symptomScreeningList, setSymptomScreeningList] = useState<Option[]>(
    []
  );
  const [exposureRisksList, setExposureRisksList] = useState<Option[]>([]);
  const [covidComorbidityList, setCovidComorbidityList] = useState<Option[]>(
    []
  );

  // onChange handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name == "oxygenSaturation") {
      if (+value > 100 || !/^\d{0,3}$/.test(value)) {
        return false;
      } else {
        setCovidData((prev) => ({ ...prev, [name]: value }));
        setErrorMsg((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (name == "isICUAdmitted") {
      let icuAdmissionDate = value == "true" ? new Date().toISOString() : "";
      setCovidData((prev) => ({ ...prev, [name]: value, icuAdmissionDate }));
      setErrorMsg((prev) => ({ ...prev, [name]: "", icuAdmissionDate: "" }));
      return;
    }
    if (name == "isPatientHospitalized") {
      let dateHospitalized = value == "true" ? new Date().toISOString() : "";
      setCovidData((prev) => ({ ...prev, [name]: value, dateHospitalized }));
      setErrorMsg((prev) => ({ ...prev, [name]: "", dateHospitalized: "" }));
      return;
    }
    setCovidData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));

    if (name === "anyInternationalTravel" && value != "true") {
      setCovidData((prev) => ({ ...prev, receivedVentilatorySupport: "" }));
      setErrorMsg((prev) => ({ ...prev, receivedVentilatorySupport: "" }));
    }
  };
  // onChange handler / Date field
  const handleDateChange = (name: string, value: string) => {
    setCovidData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));
  };

  // Modal closer
  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { errors, isValid } = covidValidator(covidData);
    if (!isValid) {
      setErrorMsg(errors);
      return;
    }
    const bollConverter = {
      isICUAdmitted: covidData?.isICUAdmitted == "true",
      isOnOxygen: covidData?.isOnOxygen == "true",
      receivedVentilatorySupport:
        covidData?.receivedVentilatorySupport == "true",
      receivedBPSupport: covidData?.receivedBPSupport == "true",
      anyInternationalTravel: covidData?.anyInternationalTravel == "true",
      isClientHealthCareWorker: covidData?.isClientHealthCareWorker == "true",
      hadCovidExposure: covidData?.hadCovidExposure == "true",
      hasPneumonia: covidData?.hasPneumonia == "true",
      isARDS: covidData?.isARDS == "true",
      isPatientHospitalized: covidData?.isPatientHospitalized == "true",
    };

    const payload = {
      ...baseDataCreate,
      ...covidData,
      ...bollConverter,
      covidSymptomScreeningList: symptomScreeningList?.map((item) => item.oid),
      covidComobidityList: covidComorbidityList?.map((item) => item.oid),
      exposureRisksList: exposureRisksList?.map((item) => item.oid),
    };
    createCovidRecord(payload);
    console.log("covidData", payload);
  };

  // Request status message
  useEffect(() => {
    if (isSuccess && status === RtkStatusEnum.fulfilled) {
      setCovidData(initialCovidData);
      setErrorMsg(null);
      setCovidComorbidityList([]);
      setExposureRisksList([]);
      setSymptomScreeningList([]);
      toast.dismiss();
      dispatch(closeAddModal());
      toast.success("Vaccine record create successful");
    }
    if (isError && status === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Vaccine record created failed");
    }
  }, [status]);

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
              setSymptomScreeningList={setSymptomScreeningList}
              setExposureRisksList={setExposureRisksList}
              setCovidComorbidityList={setCovidComorbidityList}
              symptomScreeningList={symptomScreeningList}
              covidComorbidityList={covidComorbidityList}
              exposureRisksList={exposureRisksList}
            />
            <div className="flex justify-center mt-8">
              <CancelAndAddButton
                disableBoth={isLoading}
                toggler={closeModal}
              />
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default CovidCreate;

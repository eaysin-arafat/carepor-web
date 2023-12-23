import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DefaultModal from "@/components/core/modal/DefaultModal";
// import CovidForm from "@/components/covid/CovidForm";
import { Option } from "@/components/core/form-elements/MultiSelect";
import { covidModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { RtkStatusEnum } from "@/enum/rtk";
import { useUpdateCovidMutation } from "@/features/covid/covid-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import useBaseDataEdit from "@/hooks/useBaseDataEdit";
import { TypeCovid, TypeCovidError } from "@/types/module-types/covid";
import { covidValidator } from "@/validation-models/covid-validator";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import CovidForm from "../forms/CovidForm";
// import { TypeCovidError } from "@/types/covid";

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

const CovidEdit = () => {
  const dispatch = useDispatch();
  // modal state
  // { data: TypeCovidRecord; modalId: string }
  const { data: prevData, modalId } = useSelector(
    (state: RootState) => state.modal.editModal
  );
  // Base Data Hook
  const { Covid } = EnumEncounterType;
  const [baseDataEdit] = useBaseDataEdit(Covid);

  // RTK mutation
  const [updateCovidRecord, { status, isSuccess, isError, isLoading }] =
    useUpdateCovidMutation();

  //Form states
  const [covidData, setCovidData] = useState<TypeCovid>(prevData);
  const [errorMsg, setErrorMsg] = useState<TypeCovidError>({});
  // Multi selection states
  const [symptomScreeningList, setSymptomScreeningList] = useState<Option[]>(
    prevData?.mergeCovidSymptomScreenings
    // []
  );
  const [exposureRisksList, setExposureRisksList] = useState<Option[]>(
    prevData?.mergeExposureRisks
    // []
  );
  const [covidComorbidityList, setCovidComorbidityList] = useState<Option[]>(
    prevData?.mergeCovidComorbidities
    // []
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
    dispatch(closeEditModal());
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
      ...baseDataEdit,
      ...covidData,
      ...bollConverter,
      covidSymptomScreeningList: symptomScreeningList?.map((item) => item.oid),
      covidComobidityList: covidComorbidityList?.map((item) => item.oid),
      exposureRisksList: exposureRisksList?.map((item) => item.oid),
    };
    updateCovidRecord({ key: prevData.interactionId, body: payload });
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
      dispatch(closeEditModal());
      toast.success("Covid record Update successful");
    }
    if (isError && status === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Covid record Update failed");
    }
  }, [status]);

  useEffect(() => {
    if (prevData) {
      const setEditform = {
        isICUAdmitted: prevData?.isICUAdmitted ? "true" : "false",
        isOnOxygen: prevData?.isOnOxygen ? "true" : "false",
        receivedVentilatorySupport: prevData?.receivedVentilatorySupport
          ? "true"
          : "false",
        receivedBPSupport: prevData?.receivedBPSupport ? "true" : "false",
        anyInternationalTravel: prevData?.anyInternationalTravel
          ? "true"
          : "false",
        isClientHealthCareWorker: prevData?.isClientHealthCareWorker
          ? "true"
          : "false",
        hadCovidExposure: prevData?.hadCovidExposure ? "true" : "false",
        hasPneumonia: prevData?.hasPneumonia ? "true" : "false",
        isARDS: prevData?.isARDS ? "true" : "false",
        isPatientHospitalized: prevData?.isPatientHospitalized
          ? "true"
          : "false",
      };
      setCovidData((prev) => ({ ...prev, ...setEditform }));
    }
  }, [prevData]);

  return (
    <div>
      {modalId === covidModalTypes.covidEditModal && (
        <DefaultModal title="Covid Update" toggler={closeModal} size="7xl">
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
                submitBtnText="Update"
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

export default CovidEdit;

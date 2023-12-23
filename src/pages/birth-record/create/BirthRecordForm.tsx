import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import CountryCode from "@/components/core/form-elements/CountryCode";
import Input from "@/components/core/form-elements/Input";
import PhoneNumber from "@/components/core/form-elements/PhoneNumber";
import { renderObjEnumOptions } from "@/components/core/form-elements/RenderSelectOptions";
import Select from "@/components/core/form-elements/Select";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { EnumEncounterType } from "@/enum/encounter-type";
import {
  EnumBoolYesNo,
  EnumInformantRelationship,
  EnumOrigin,
} from "@/enum/enumerators";
import { RtkStatusEnum } from "@/enum/rtk";
import {
  useCreateBirthRecordMutation,
  useUpdateBirthRecordMutation,
} from "@/features/birth-record/birth-record-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useBaseDataEdit from "@/hooks/useBaseDataEdit";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import {
  TypeBirthRecord,
  TypeBirthRecordFormError,
} from "@/types/module-types/birth-records";
import { birthRecordValidator } from "@/validation-models/birth-record-validator";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ReferenceNotes from "./ReferenceNotes";

// form for create an update/edit
function BirthRecordForm({ toggler }) {
  const [accordion, setAccordion] = useState(false);

  const dispatch = useDispatch();
  // if prevData is null from performing as create form otherwise preform update
  const { data: prevRecord }: { data: TypeBirthRecord } = useSelector(
    (state: RootState) => state.modal.addModal
  );

  // hooks for baseData
  const { BirthRecords } = EnumEncounterType;
  const [baseDataCreate] = useBaseDataCreate(BirthRecords);
  const [baseDataEdit] = useBaseDataEdit(BirthRecords);

  // Rtk mutations / create
  const [createBirthRecord, { status: createStatus, error: createError }] =
    useCreateBirthRecordMutation();
  // Rtk mutations / update
  const [updateBirthRecord, { status: updateStatus }] =
    useUpdateBirthRecordMutation();

  // Initial State
  const initialState = {
    isBirthRecordGiven: "",
    isUnderFiveCardGiven: "",
    underFiveCardNumber: "",
    origin: "",
    informantFirstName: "",
    informantSurname: "",
    informantNickname: "",
    informantRelationship: "",
    informantOtherRelationship: "",
    informantCity: "",
    informantStreetNo: "",
    informantPOBox: "",
    informantLandmark: "",
    informantLandlineCountryCode: "+260",
    informantLandline: "",
    informantCellphoneCountryCode: "+260",
    informantCellphone: "",
  };

  // form state
  const [formState, setFormState] = useState<TypeBirthRecord>(initialState);
  const [inputError, setInputError] = useState<TypeBirthRecordFormError | null>(
    null
  );
  // Input change handler
  const handleInputChange = (e: OnchangeEventType) => {
    const { name, value } = e.target;
    if (name == "isUnderFiveCardGiven") {
      setFormState((prev) => ({ ...prev, [name]: value }));
      setInputError((prev) => ({ ...prev, [name]: "" }));
      if (value == "false") {
        setFormState((prev) => ({ ...prev, underFiveCardNumber: "" }));
      }
      return;
    }
    if (name == "informantRelationship") {
      setFormState((prev) => ({ ...prev, [name]: value }));
      setInputError((prev) => ({ ...prev, [name]: "" }));
      if (value != "13") {
        setFormState((prev) => ({ ...prev, informantOtherRelationship: "" }));
      }
      return;
    }
    // if (name == "informantStreetNo") {
    //   if (value.length > 30) {
    //     setInputError((prev) => ({ ...prev, [name]: "Max 30 characters" }));
    //   } else {
    //     setFormState((prev) => ({ ...prev, [name]: value }));
    //     setInputError((prev) => ({ ...prev, [name]: "" }));
    //   }
    //   return;
    // }

    setFormState((prev) => ({ ...prev, [name]: value }));
    setInputError && setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  // Form submit handler
  const handleSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();

    const { isValid, errors: validationError } = birthRecordValidator({
      ...formState,
    });

    // If from data is on valid set form error
    if (!isValid) {
      setInputError(validationError);
      return false;
    }

    if (prevRecord) {
      // if previous record is alliable submit as PUT request
      const updateData = {
        ...prevRecord,
        ...baseDataEdit,
        ...formState,
      };
      updateBirthRecord({ body: updateData, key: updateData?.interactionId });
    } else {
      // if previous record is not alliable submit as POST request
      const submitData = {
        ...baseDataCreate,
        ...formState,
      };
      createBirthRecord(submitData);
    }
  };

  // Create Request status message
  useEffect(() => {
    if (createStatus === RtkStatusEnum.fulfilled) {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("Birth Record created successfully");
    }
    if (createStatus === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Birth Record created failed");
      console.log(createError);
    }
  }, [createStatus]);

  // Update Request status message
  useEffect(() => {
    if (updateStatus === RtkStatusEnum.fulfilled) {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("Birth Record update successfully");
    }
    if (updateStatus === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Birth Record update failed");
      console.log(createError);
    }
  }, [updateStatus]);

  // If PrevRecord is already available
  // set prevRecord to form data
  useEffect(() => {
    if (prevRecord) {
      const dataSet = {
        isBirthRecordGiven: prevRecord?.isBirthRecordGiven,
        isUnderFiveCardGiven: prevRecord?.isUnderFiveCardGiven,
        underFiveCardNumber: prevRecord?.underFiveCardNumber,
        origin: prevRecord?.origin,
        informantFirstName: prevRecord?.informantFirstName,
        informantSurname: prevRecord?.informantSurname,
        informantNickname: prevRecord?.informantNickname,
        informantRelationship: prevRecord?.informantRelationship,
        informantOtherRelationship: prevRecord?.informantOtherRelationship,
        informantCity: prevRecord?.informantCity,
        informantStreetNo: prevRecord?.informantStreetNo,
        informantPOBox: prevRecord?.informantPOBox,
        informantLandmark: prevRecord?.informantLandmark,
        informantLandlineCountryCode: prevRecord?.informantLandlineCountryCode,
        informantLandline: prevRecord?.informantLandline,
        informantCellphoneCountryCode:
          prevRecord?.informantCellphoneCountryCode,
        informantCellphone: prevRecord?.informantCellphone,
      };
      setFormState((prev) => ({ ...prev, ...dataSet }));
    }
  }, [prevRecord]);

  return (
    <DefaultModal size="7xl" title="Birth Record" toggler={toggler}>
      <form onSubmit={handleSubmit}>
        <h1 className="text-md font-medium mb-2">Particulars :</h1>
        <div className="flex gap-5">
          <Select
            label="Is Birth Record Given?"
            required
            onChange={handleInputChange}
            name="isBirthRecordGiven"
            value={`${formState.isBirthRecordGiven}`}
            errMsg={inputError?.isBirthRecordGiven}
          >
            {renderObjEnumOptions(EnumBoolYesNo)}
          </Select>

          <Select
            label="Origin"
            required
            onChange={handleInputChange}
            name="origin"
            value={formState.origin}
            errMsg={inputError?.origin}
          >
            {renderObjEnumOptions(EnumOrigin)}
          </Select>
        </div>
        <div className="flex gap-5 mt-5">
          <Select
            label="Is Under Five Card Given?"
            required
            onChange={handleInputChange}
            name="isUnderFiveCardGiven"
            value={`${formState.isUnderFiveCardGiven}`}
            errMsg={inputError?.isUnderFiveCardGiven}
          >
            {renderObjEnumOptions(EnumBoolYesNo)}
          </Select>
          <Input
            label="Under Five Card Number"
            disabled={formState.isUnderFiveCardGiven == "true" ? false : true}
            onChange={handleInputChange}
            name="underFiveCardNumber"
            value={formState?.underFiveCardNumber}
            errMsg={inputError?.underFiveCardNumber}
          />
        </div>
        {/* Reference Notes accordion */}
        <ReferenceNotes accordion={accordion} setAccordion={setAccordion} />

        <h1 className="text-md font-medium mb-2 mt-5">Informant Details :</h1>
        <div className="flex gap-5">
          {/* Name Inputs */}
          <Input
            label="First Name"
            required
            onChange={handleInputChange}
            name="informantFirstName"
            value={formState.informantFirstName}
            errMsg={inputError?.informantFirstName}
          />

          <Input
            label="Surname"
            required
            onChange={handleInputChange}
            name="informantSurname"
            value={formState.informantSurname}
            errMsg={inputError?.informantSurname}
          />
          <Input
            label="Nickname"
            onChange={handleInputChange}
            name="informantNickname"
            value={formState.informantNickname}
            errMsg={inputError?.informantNickname}
          />
        </div>

        <div className="flex gap-5 mt-5">
          {/* Cellphone Number */}
          <CountryCode
            label="Code"
            name="informantCellphoneCountryCode"
            value={formState.informantCellphoneCountryCode}
            onChange={handleInputChange}
            errMsg={inputError?.informantCellphoneCountryCode}
            required
            resetCellPhone={() => {
              setFormState((p) => ({ ...p, informantCellphone: "" }));
              setInputError((p) => ({ ...p, informantCellphone: "" }));
            }}
          />

          <PhoneNumber
            name="informantCellphone"
            label="Cellphone Number"
            value={formState.informantCellphone}
            onChange={handleInputChange}
            countryCode={formState.informantCellphoneCountryCode}
            errMsg={inputError?.informantCellphone}
          />
        </div>

        <div className="flex gap-5 mt-5">
          {/* Landline Number */}
          <CountryCode
            label="Code"
            name="informantLandlineCountryCode"
            value={formState.informantLandlineCountryCode}
            onChange={handleInputChange}
            errMsg={inputError?.informantLandlineCountryCode}
            resetCellPhone={() => {
              setFormState((p) => ({ ...p, informantLandline: "" }));
              setInputError((p) => ({ ...p, informantLandline: "" }));
            }}
          />
          <PhoneNumber
            name="informantLandline"
            label="Landline Number"
            value={formState.informantLandline}
            onChange={handleInputChange}
            countryCode={formState.informantLandlineCountryCode}
            errMsg={inputError?.informantLandline}
          />
        </div>

        <div className="flex gap-5 mt-5">
          {/* Relationship to Child */}
          <Select
            label="Relationship to Child"
            onChange={handleInputChange}
            name="informantRelationship"
            value={formState.informantRelationship}
            errMsg={inputError?.informantRelationship}
          >
            {renderObjEnumOptions(EnumInformantRelationship)}
          </Select>
          {/* Other Relationship */}
          <Input
            label="Other Relationship"
            disabled={formState.informantRelationship === "13" ? false : true}
            onChange={handleInputChange}
            name="informantOtherRelationship"
            value={formState.informantOtherRelationship}
            errMsg={inputError?.informantOtherRelationship}
          />
        </div>

        <div className="flex gap-5 mt-5">
          <Input
            label="City/Town/Village"
            onChange={handleInputChange}
            name="informantCity"
            value={formState.informantCity}
            errMsg={inputError?.informantCity}
          />
          <Input
            label="Cmpd Street No."
            onChange={handleInputChange}
            name="informantStreetNo"
            value={formState?.informantStreetNo}
            errMsg={inputError?.informantStreetNo}
          />
        </div>

        <div className="flex gap-5 mt-5">
          <Input
            label="PO Box, Pvt Bag"
            onChange={handleInputChange}
            name="informantPOBox"
            value={formState.informantPOBox}
            errMsg={inputError?.informantPOBox}
          />
          <Input
            label="Landmark"
            onChange={handleInputChange}
            name="informantLandmark"
            value={formState.informantLandmark}
            errMsg={inputError?.informantLandmark}
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton
            submitBtnText={!prevRecord ? "Save" : "Update"}
            toggler={toggler}
          />
        </div>
      </form>
    </DefaultModal>
  );
}

export default BirthRecordForm;

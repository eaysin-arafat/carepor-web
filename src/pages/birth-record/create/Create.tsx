import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import {
  RenderCountryCode,
  renderObjEnumOptions,
} from "@/components/core/form-elements/RenderSelectOptions";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import {
  EnumBoolYesNo,
  EnumInformantRelationship,
  EnumOrigin,
} from "@/enum/enumerators";
import { useReadCountriesQuery } from "@/features/country/country-api";
import { OnchangeEventType } from "@/types/htmlEvents";
import { useState } from "react";
import ReferenceNotes from "./ReferenceNotes";

function BirthRecordCreate({ toggler }) {
  const [accordion, setAccordion] = useState(false);
  // const dispatcher = useDispatch();
  // const { BirthRecords } = EnumEncounterType;
  // const [baseDataCreate] = useBaseDataCreate(BirthRecords);
  // const [baseDataEdit] = useEditBaseData(BirthRecords);

  // Country Enums
  const { data: countries } = useReadCountriesQuery(undefined);

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
    informantLandlineCountryCode: "",
    informantLandline: "",
    informantCellphoneCountryCode: "",
    informantCellphone: "",
  };

  // const { input, setInput, handleInputChange } = {}; // useInput(initialState);

  const [formState, setFormState] = useState(initialState);
  const [inputError, setInputError] = useState(initialState);
  const handleInputChange = (e: OnchangeEventType) => {
    const { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
    setInputError && setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  // const { getBirthRecordLoading } = useSelector((state) => state.birthRecord);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const { isValid, errors: validationError } = birthRecordValidator({
  //     ...input,
  //   });

  //   // If from data is on valid set form error
  //   if (!isValid) {
  //     setInputError(validationError);
  //     return false;
  //   }
  //   // dispatcher(addBirthRecord({ ...input, ...baseData })).then((res) => {
  //   //   if (res.meta.requestStatus === "fulfilled") {
  //   //     toast.dismiss();
  //   //     toast.success("Add Successful");
  //   //     setInput(initialState);
  //   //     modalCloser("birth_record_add_modal");
  //   //     setDataReloader((prev) => prev + 1);
  //   //   } else {
  //   //     if (res.meta.requestStatus === "rejected") {
  //   //       toast.dismiss();
  //   //       toast.error("Add Failed");
  //   //     }
  //   //   }
  //   // });
  // };

  // useEffect(() => {
  //   setInputError({});
  // }, [input]);

  // useEffect(() => {
  //   if (input.isUnderFiveCardGiven === "true") {
  //     setInput({ ...input });
  //   } else {
  //     setInput({ ...input, underFiveCardNumber: "" });
  //   }

  //   if (input.informantRelationship === "13") {
  //     setInput({ ...input });
  //   } else {
  //     setInput({ ...input, informantOtherRelationship: "" });
  //   }
  // }, [input.informantRelationship, input.isUnderFiveCardGiven]);

  return (
    <DefaultOpenModal title="Birth Record" isShow={true} toggler={toggler}>
      <form>
        <h1 className="text-md font-medium mb-2">Particulars :</h1>
        <div className="flex gap-5">
          <Select
            label="Is Birth Record Given?"
            required
            onChange={handleInputChange}
            name="isBirthRecordGiven"
            value={formState.isBirthRecordGiven}
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
            value={formState.isUnderFiveCardGiven}
            errMsg={inputError?.isUnderFiveCardGiven}
          >
            {renderObjEnumOptions(EnumBoolYesNo)}
          </Select>
          <Input
            label="Under Five Card Number"
            disabled={formState.isUnderFiveCardGiven == "true" ? false : true}
            onChange={handleInputChange}
            name="underFiveCardNumber"
            value={inputError?.underFiveCardNumber}
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
          />
        </div>

        <div className="flex gap-5 mt-5">
          {/* Cellphone Number */}
          <Select
            label="Code"
            onChange={handleInputChange}
            name="informantCellphoneCountryCode"
            value={formState.informantCellphoneCountryCode}
          >
            <RenderCountryCode countries={countries} />
          </Select>
          <Input
            label="Cellphone Number"
            onChange={handleInputChange}
            name="informantCellphone"
            value={formState.informantCellphone}
          />
        </div>

        <div className="flex gap-5 mt-5">
          {/* Landline Number */}
          <Select
            label="Code"
            onChange={handleInputChange}
            name="informantLandlineCountryCode"
            value={formState.informantLandlineCountryCode}
          >
            <RenderCountryCode countries={countries} />
          </Select>
          <Input
            label="Landline Number"
            onChange={handleInputChange}
            name="informantLandline"
            value={formState.informantLandline}
          />
        </div>

        <div className="flex gap-5 mt-5">
          {/* Relationship to Child */}
          <Select
            label="Relationship to Child"
            required
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
          />
        </div>

        <div className="flex gap-5 mt-5">
          <Input
            label="City/Town/Village"
            onChange={handleInputChange}
            name="informantCity"
            value={formState.informantCity}
          />
          <Input
            label="Cmpd Street No."
            onChange={handleInputChange}
            name="informantStreetNo"
            value={formState.informantStreetNo}
          />
        </div>

        <div className="flex gap-5 mt-5">
          <Input
            label="PO Box, Pvt Bag"
            onChange={handleInputChange}
            name="informantPOBox"
            value={formState.informantPOBox}
          />
          <Input
            label="Landmark"
            onChange={handleInputChange}
            name="informantLandmark"
            value={formState.informantLandmark}
          />
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
}

export default BirthRecordCreate;

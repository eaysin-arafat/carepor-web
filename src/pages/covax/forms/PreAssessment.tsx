import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Input from "@/components/core/form-elements/Input";
import { renderObjEnumOptions } from "@/components/core/form-elements/RenderSelectOptions";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { covaxModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import {
  EnumReasonClientRefusedForVaccination,
  EnumYesNo,
} from "@/enum/enumerators";
import { RtkStatusEnum } from "@/enum/rtk";
import {
  useCreateCovaxMutation,
  useUpdateCovaxMutation,
} from "@/features/covax/covax-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useBaseDataEdit from "@/hooks/useBaseDataEdit";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import {
  TypeCovax,
  TypeCovaxForm,
  TypeCovaxFormError,
} from "@/types/module-types/covax";
import { covaxValidator } from "@/validation-models/covax-validator";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

// Pre Assessment
const CovaxCreate = () => {
  const dispatch = useDispatch();
  const { Covax } = EnumEncounterType;

  // baseData hooks
  const [baseData] = useBaseDataCreate(Covax);
  const [baseDataEdit] = useBaseDataEdit(Covax);
  // Modal/Form data from redux slice
  const { data: prevCovax, modalId }: { modalId: string; data: TypeCovax } =
    useSelector((state: RootState) => state.modal.addModal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  // Rtk Post request
  const [createCovax, { status: createStatus }] = useCreateCovaxMutation();
  // Rtk Put request
  const [updateCovax, { status: updateStatus }] = useUpdateCovaxMutation();

  // initial state
  const initialState = {
    covaxNumber: "",
    doesClientGetVaccinatedToday: "",
    reasonClientRefusedForVaccination: "",
    otherReasonClientRefusedForVaccination: "",
    otherComorbidities: "",
    wasCovaxOffered: "",

    isPregnantOrLactating: false,
    hasCancer: false,
    hasDiabetes: false,
    hasHeartDisease: false,
    hasHyperTension: false,
    hasHIV: false,
  };

  // Form data state
  const [formState, setFormState] = useState<TypeCovaxForm>(initialState);
  const [inputError, setInputError] = useState<TypeCovaxFormError | null>(null);

  // onChange handler
  const handleInputChange = (e: OnchangeEventType) => {
    const { name, value, checked, type } = e.target;

    if (type == "checkbox") {
      setFormState((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    if (name == "doesClientGetVaccinatedToday" && value != "2") {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
        reasonClientRefusedForVaccination: "",
        otherReasonClientRefusedForVaccination: "",
      }));
      setInputError((prev) => ({
        ...prev,
        [name]: "",
        otherReasonClientRefusedForVaccination: "",
        reasonClientRefusedForVaccination: "",
      }));
      return;
    }
    if (name == "reasonClientRefusedForVaccination" && value != "3") {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
        otherReasonClientRefusedForVaccination: "",
      }));
      setInputError((prev) => ({
        ...prev,
        [name]: "",
        otherReasonClientRefusedForVaccination: "",
      }));
      return;
    }

    setFormState((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  // handle submit event
  const handleCovaxFormSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();

    const { errors, isValid } = covaxValidator(formState);

    if (!isValid) {
      setInputError(errors);
      return;
    }

    if (prevCovax) {
      // update data
      const updateData = {
        interactionId: prevCovax?.interactionId,
        ...baseDataEdit,
        ...formState,
        doesClientGetVaccinatedToday:
          formState.doesClientGetVaccinatedToday == "1",
        wasCovaxOffered: formState.wasCovaxOffered == "1",
      };
      updateCovax({ body: updateData, key: prevCovax?.interactionId });
    } else {
      // create a new record
      const submitData = {
        ...baseData,
        ...formState,
        doesClientGetVaccinatedToday:
          formState.doesClientGetVaccinatedToday == "1",
        wasCovaxOffered: formState.wasCovaxOffered == "1",
      };
      createCovax(submitData);
    }
  };

  // create status message
  useEffect(() => {
    if (createStatus === RtkStatusEnum.fulfilled) {
      setFormState(initialState);
      setInputError(null);
      toast.dismiss();
      dispatch(closeAddModal());
      toast.success("Pre-Assessment create successful");
    }
    if (createStatus === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Pre-Assessment created failed");
    }
  }, [createStatus]);
  // update status message
  useEffect(() => {
    if (updateStatus === RtkStatusEnum.fulfilled) {
      toast.dismiss();
      setFormState(initialState);
      setInputError(null);
      dispatch(closeAddModal());
      toast.success("Pre-Assessment update successful");
    }
    if (updateStatus === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Pre-Assessment update failed");
    }
  }, [updateStatus]);

  // If prevCovax is not null set form data as edit type
  useEffect(() => {
    if (prevCovax) {
      //@ts-ignore
      setFormState(prevCovax);
      setFormState((prev) => ({
        ...prev,
        doesClientGetVaccinatedToday: prevCovax?.doesClientGetVaccinatedToday
          ? "1"
          : "2",
      }));
    }
  }, [prevCovax]);

  console.log(formState);

  return (
    <div>
      {modalId === covaxModalTypes.covaxCreateModal && (
        <DefaultModal title="Pre-Assessment" toggler={closeModal} size="7xl">
          <form onSubmit={handleCovaxFormSubmit} action="">
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                label=" Covax Number"
                name="covaxNumber"
                value={formState.covaxNumber}
                errMsg={inputError?.covaxNumber}
                onChange={handleInputChange}
                required
              />
              <Select
                label="Was client offered COVAX?"
                required
                name="wasCovaxOffered"
                value={formState.wasCovaxOffered}
                errMsg={inputError?.wasCovaxOffered}
                onChange={handleInputChange}
              >
                {renderObjEnumOptions(EnumYesNo)}
              </Select>
              <Select
                label="Does Client Want To Get Vaccinated Today?"
                required
                name="doesClientGetVaccinatedToday"
                value={`${formState.doesClientGetVaccinatedToday}`}
                errMsg={inputError?.doesClientGetVaccinatedToday}
                onChange={handleInputChange}
              >
                {renderObjEnumOptions(EnumYesNo)}
              </Select>
              <Select
                label="Reason Client Doesn't Want To Get Vaccination"
                name="reasonClientRefusedForVaccination"
                value={`${formState.reasonClientRefusedForVaccination}`}
                errMsg={inputError?.reasonClientRefusedForVaccination}
                onChange={handleInputChange}
                disabled={formState.doesClientGetVaccinatedToday != "2"}
              >
                {renderObjEnumOptions(EnumReasonClientRefusedForVaccination)}
              </Select>

              <div className="col-span-full">
                <Textarea
                  label=" Other Reason"
                  name="otherReasonClientRefusedForVaccination"
                  value={formState.otherReasonClientRefusedForVaccination}
                  errMsg={inputError?.otherReasonClientRefusedForVaccination}
                  onChange={handleInputChange}
                  disabled={formState.reasonClientRefusedForVaccination != "3"}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
              <div className="col-span-full">
                <h2 className="text-xl font-medium text-secondaryColor">
                  Comorbidities :
                </h2>
              </div>
              <Checkbox
                name="isPregnantOrLactating"
                checked={formState?.isPregnantOrLactating}
                onChange={handleInputChange}
                label="Pregnant/Lactating"
              />
              <Checkbox
                name="hasCancer"
                checked={formState?.hasCancer}
                onChange={handleInputChange}
                label="Cancer"
              />
              <Checkbox
                name="hasDiabetes"
                checked={formState?.hasDiabetes}
                onChange={handleInputChange}
                label="Diabetes"
              />
              <Checkbox
                name="hasHeartDisease"
                checked={formState?.hasHeartDisease}
                onChange={handleInputChange}
                label="Heart Disease"
              />

              <Checkbox
                name="hasHyperTension"
                checked={formState?.hasHyperTension}
                onChange={handleInputChange}
                label="Hyper Tension"
              />
              <Checkbox
                name="hasHIV"
                checked={formState?.hasHIV}
                onChange={handleInputChange}
                label="HIV"
              />
            </div>
            <div className="mt-8">
              <Textarea
                name="otherComorbidities"
                value={formState.otherComorbidities}
                errMsg={inputError?.otherComorbidities}
                label=" Other Comorbidities (If the above Comorbidities are not selected, then write Other Comorbidities in this field.)"
                onChange={handleInputChange}
                placeholder="Other Comorbidities"
              />
            </div>
            <div className="flex justify-center mt-5">
              <CancelAndAddButton
                submitBtnText={!prevCovax ? "Save" : "Update"}
              />
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default CovaxCreate;

import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import DateInput from "@/components/core/form-elements/DatePicker";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { covaxModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { RtkStatusEnum } from "@/enum/rtk";
import {
  useCreateAdverseEffectMutation,
  useUpdateAdverseEffectMutation,
} from "@/features/covax/covax-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useBaseDataEdit from "@/hooks/useBaseDataEdit";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import {
  TypeAdverseForm,
  TypeAdverseFormError,
  TypeImmunizationVaccine,
} from "@/types/module-types/covax";
import { adverseValidator } from "@/validation-models/adverse-validator";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AdverseEffectCreate = () => {
  const dispatch = useDispatch();

  // base Data Hooks
  const { Covax } = EnumEncounterType;
  const [baseDataCreate] = useBaseDataCreate(Covax);
  const [baseDataEdit] = useBaseDataEdit(Covax);

  // Modal and data states
  const { addModal } = useSelector((state: RootState) => state.modal);
  const { data: prevVaccine = null }: { data: TypeImmunizationVaccine } =
    addModal;

  const prevAadverseEvent =
    Array.isArray(prevVaccine?.adverseEvents) &&
    prevVaccine?.adverseEvents.length > 0
      ? prevVaccine.adverseEvents[0]
      : null;

  // Rtk Mutations
  // Create adverse / POST
  const [
    createAdverse,
    {
      status: createStatus,
      isSuccess: isCreateSuccess,
      isError: isCreateFailed,
    },
  ] = useCreateAdverseEffectMutation();
  // Update adverse / PUT
  const [
    updateAdverse,
    { status: updateStatus, isSuccess: isEditSuccess, isError: isEditFailed },
  ] = useUpdateAdverseEffectMutation();

  // Form data state
  const initialState = {
    aefiDate: new Date().toISOString(),
    otherAEFI: "",
    // CheckBoxType
    swelling: false,
    joint: false,
    malaise: false,
    bodyAches: false,
    fever: false,
    allergicReaction: false,
    otherAdverseEvent: false,
  };
  const [formState, setFormState] = useState<TypeAdverseForm>(initialState);
  const [inputError, setInputError] = useState<TypeAdverseFormError | null>(
    null
  );

  console.log(prevVaccine);
  console.log(prevAadverseEvent);

  // onChange handler
  const handleInputChange = (e: OnchangeEventType) => {
    const { name, value, checked, type } = e.target;
    if (type == "checkbox") {
      setFormState((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  // handle Submit
  const handleSubmitAdverseForm = (e: FormSubmitEventType) => {
    e.preventDefault();

    const { isValid, errors } = adverseValidator(formState);
    if (!isValid) {
      setInputError(errors);
      return;
    }

    const immunizationId = prevVaccine?.interactionId;
    if (prevAadverseEvent) {
      // update and data configuration
      const interactionId = prevAadverseEvent?.interactionId;
      // const immunizationId = prevAadverseEvent?.immunizationId;
      const updateData = {
        // interactionId,
        // immunizationId,
        ...prevAadverseEvent,
        ...baseDataEdit,
        ...formState,
      };
      if (prevAadverseEvent?.interactionId) {
        updateAdverse({ body: updateData, key: interactionId });
      } else {
        console.log("Reference missing");
      }
    } else {
      const createData = {
        ...baseDataCreate,
        ...formState,
        immunizationId,
      };
      createAdverse(createData);
    }
  };

  useEffect(() => {
    if (prevAadverseEvent) {
      setFormState(prevAadverseEvent);
    }
  }, [prevAadverseEvent, prevVaccine]);

  // Request status message
  // create status message
  useEffect(() => {
    if (isCreateSuccess && createStatus === RtkStatusEnum.fulfilled) {
      setFormState(initialState);
      setInputError(null);
      toast.dismiss();
      dispatch(closeAddModal());
      toast.success("Vaccine record create successful");
    }
    if (isCreateFailed && createStatus === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Vaccine record created failed");
    }
  }, [createStatus]);
  // update status message
  useEffect(() => {
    if (isEditSuccess && updateStatus === RtkStatusEnum.fulfilled) {
      toast.dismiss();
      setFormState(initialState);
      setInputError(null);
      dispatch(closeAddModal());
      toast.success("Vaccine record update successful");
    }
    if (isEditFailed && updateStatus === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Vaccine record update failed");
    }
  }, [updateStatus]);

  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      {addModal?.modalId === covaxModalTypes.adverseEffectCreate && (
        <DefaultModal title="Vaccination" toggler={closeModal} size="7xl">
          <form onSubmit={handleSubmitAdverseForm} action="">
            <div className="grid gap-5 mb-5">
              <DateInput
                selected={new Date(formState.aefiDate)}
                onChange={(date) => {
                  setFormState((prev) => ({
                    ...prev,
                    aefiDate: new Date(date).toISOString(),
                  }));
                  setInputError((prev) => ({ ...prev, aefiDate: "" }));
                }}
                label="AEFI Date"
                errMsg={inputError?.aefiDate}
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Checkbox
                name="swelling"
                checked={formState.swelling}
                onChange={handleInputChange}
                label="Swelling /pain at injection site"
              />
              <Checkbox
                name="joint"
                checked={formState.joint}
                onChange={handleInputChange}
                label="Joint"
              />
              <Checkbox
                name="malaise"
                checked={formState.malaise}
                onChange={handleInputChange}
                label="Malaise/Fatigue"
              />
              <Checkbox
                name="bodyAches"
                checked={formState.bodyAches}
                onChange={handleInputChange}
                label="Body Aches"
              />
              <Checkbox
                name="fever"
                checked={formState.fever}
                onChange={handleInputChange}
                label="Fever"
              />
              <Checkbox
                name="allergicReaction"
                checked={formState.allergicReaction}
                onChange={handleInputChange}
                label="Allergic Reaction"
              />
              <Checkbox
                name="otherAdverseEvent"
                checked={formState.otherAdverseEvent}
                onChange={handleInputChange}
                label="Other Adverse Event"
              />
              <div className="col-span-full mt-2">
                <Textarea
                  name="otherAEFI"
                  onChange={handleInputChange}
                  value={formState.otherAEFI}
                  label="Other AEFI"
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <CancelAndAddButton
                submitBtnText={prevAadverseEvent ? "Update" : "Save"}
                toggler={closeModal}
              />
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default AdverseEffectCreate;

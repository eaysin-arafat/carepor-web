import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import { renderOptions } from "@/components/core/form-elements/RenderSelectOptions";
import Select from "@/components/core/form-elements/Select";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { covaxModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { RtkStatusEnum } from "@/enum/rtk";
import {
  useCreateVaccineMutation,
  useUpdateVaccineMutation,
} from "@/features/covax/covax-api";
import {
  useReadVaccineDosesQuery,
  useReadVaccineTypesQuery,
  useReadVaccinesQuery,
} from "@/features/covax/vaccine-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import useBaseDataEdit from "@/hooks/useBaseDataEdit";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import {
  TypeImmunizationVaccine,
  TypeVaccineForm,
} from "@/types/module-types/covax";
import { ImmunizationHistoryValidator } from "@/validation-models/immunization-history";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Vaccinate = () => {
  const dispatch = useDispatch();

  // base Data hooks
  const { Covax } = EnumEncounterType;
  const [baseDataCreate] = useBaseDataCreate(Covax);
  const [baseDataEdit] = useBaseDataEdit(Covax);

  // vaccine enums
  const { data: vaccineTypes } = useReadVaccineTypesQuery(undefined);
  const { data: vaccines } = useReadVaccinesQuery(undefined);
  const { data: vaccineDoses } = useReadVaccineDosesQuery(undefined);
  // modal and form data
  const { addModal } = useSelector((state: RootState) => state.modal);
  const { data: prevVaccine = null }: { data: TypeImmunizationVaccine } =
    addModal;

  //
  const [
    createVaccinate,
    {
      status: createStatus,
      isSuccess: isCreateSuccess,
      isError: isCreateFailed,
    },
  ] = useCreateVaccineMutation();
  const [
    updateVaccinate,
    { status: updateStatus, isSuccess: isEditSuccess, isError: isEditFailed },
  ] = useUpdateVaccineMutation();

  // form state
  const initialState = {
    vaccineTypeId: "",
    vaccineId: "",
    doseId: "",
    batchNumber: "",
    dateGiven: new Date().toISOString(),
  };
  const [formState, setFormState] = useState<TypeVaccineForm>(initialState);
  const [inputError, setInputError] = useState<TypeVaccineForm>(null);

  // input change handler
  const handleInputChange = (e: OnchangeEventType) => {
    const { value, name } = e.target;
    if (name == "vaccineTypeId") {
      let reset = { vaccineId: "", doseId: "" }; // reset
      setFormState((prev) => ({ ...prev, [name]: value, ...reset }));
      setInputError((prev) => ({ ...prev, [name]: "", ...reset }));
      return;
    }
    if (name == "vaccineId") {
      let reset = { doseId: "" }; // reset
      setFormState((prev) => ({ ...prev, [name]: value, ...reset }));
      setInputError((prev) => ({ ...prev, [name]: "", ...reset }));
      return;
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  // handle submit event
  const handleFormSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();
    // validate
    const { errors, isValid } = ImmunizationHistoryValidator(formState);
    if (!isValid) {
      setInputError(errors);
      return;
    }
    delete formState.vaccineId;
    delete formState.vaccineTypeId;

    if (prevVaccine) {
      const updateData = {
        interactionId: prevVaccine?.interactionId,
        ...baseDataEdit,
        ...formState,
        doseId: +formState.doseId,
      };
      if (prevVaccine?.interactionId) {
        updateVaccinate({ body: updateData, key: prevVaccine?.interactionId });
      } else {
        console.log("Reference missing");
      }
    } else {
      const createData = {
        ...baseDataCreate,
        ...formState,
        doseId: +formState.doseId,
      };
      createVaccinate(createData);
    }
  };

  // modal closer function
  const closeModal = () => {
    dispatch(closeAddModal());
  };

  // vaccine options filter
  const filterVaccines = Array.isArray(vaccines)
    ? vaccines.filter((vac) => vac.vaccineTypeId == +formState.vaccineTypeId)
    : [];
  const filterVaccineDoses = Array.isArray(vaccineDoses)
    ? vaccineDoses.filter((dose) => dose.vaccineId == +formState.vaccineId)
    : [];

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

  useEffect(() => {
    if (prevVaccine) {
      const doseId = prevVaccine?.doseId?.toString();
      const vaccineId = prevVaccine?.vaccineDose?.vaccine?.oid?.toString();
      const vaccineTypeId: string =
        prevVaccine?.vaccineDose?.vaccine?.vaccineTypeId?.toString();
      const dataSet = {
        vaccineTypeId,
        vaccineId,
        doseId,
        batchNumber: prevVaccine?.batchNumber,
        dateGiven: prevVaccine?.dateGiven,
      };
      setFormState((prev) => ({
        ...prev,
        ...dataSet,
      }));
    }
  }, [prevVaccine]);

  return (
    <div>
      {addModal?.modalId === covaxModalTypes.vaccinateCreateModal && (
        <DefaultModal title="Vaccination" toggler={closeModal} size="7xl">
          <form onSubmit={handleFormSubmit} action="">
            <div className="grid gap-5">
              <Select
                required
                name="vaccineTypeId"
                value={formState.vaccineTypeId}
                errMsg={inputError?.vaccineTypeId}
                label="Vaccine Types"
                onChange={handleInputChange}
              >
                {renderOptions(vaccineTypes)}
              </Select>
              <Select
                label="Vaccine"
                required
                name="vaccineId"
                value={formState.vaccineId}
                errMsg={inputError?.vaccineId}
                onChange={handleInputChange}
              >
                {renderOptions(filterVaccines)}
              </Select>
              <Select
                label="Vaccine Dose"
                name="doseId"
                value={formState.doseId}
                errMsg={inputError?.doseId}
                onChange={handleInputChange}
              >
                {renderOptions(filterVaccineDoses)}
              </Select>
              <Input
                label="Covax Number"
                name="batchNumber"
                value={formState.batchNumber}
                errMsg={inputError?.batchNumber}
                onChange={handleInputChange}
              />
              <DateInput
                max={new Date()}
                onChange={(date) => {
                  setFormState((prev) => ({
                    ...prev,
                    dateGiven: new Date(date).toISOString(),
                  }));
                  setInputError((prev) => ({
                    ...prev,
                    dateGiven: "",
                  }));
                }}
                label="Covax Number"
                selected={new Date(formState.dateGiven)}
              />
            </div>
            <div className="flex justify-center mt-5">
              <CancelAndAddButton
                submitBtnText={!prevVaccine ? "Save" : "Update"}
                toggler={closeModal}
              />
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default Vaccinate;

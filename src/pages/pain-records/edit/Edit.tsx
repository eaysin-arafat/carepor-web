import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Radio from "@/components/core/form-elements/Radio";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import { EnumEncounterType } from "@/enum/encounter-type";
import { EnumPainRecords } from "@/enum/enumerators";
import { closeEditModal } from "@/features/modal/modal-slice";
import { useUpdatePainRecordMutation } from "@/features/pain-record/pain-record-api";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const EditPainRecord = ({ toggler }) => {
  const { editModal } = useSelector((state: RootState) => state.modal);
  const [selectRecord, setSelectRecord] = useState<string>(
    editModal?.data?.painScaleId
  );

  const baseData = useBaseModel({});
  const client = useClient();
  const encounter = useEncounter(EnumEncounterType.MedicalEncounterIPD);
  const dispatch = useDispatch();

  const [updatePainRecord, { isLoading, isSuccess, status, isError, error }] =
    useUpdatePainRecordMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...editModal?.data,
      ...baseData,
      ...encounter,
      painScales: true,
      painScaleId: selectRecord,
      clientId: client?.oid,
    };

    updatePainRecord({ key: editModal?.data?.interactionId, body: payload });
  };

  // handle side effect
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("Pain Record updated Successfully");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string"
          ? error.data
          : "Error updating pain record"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  const renderPainRecords = () => {
    return Object.keys(EnumPainRecords).map((key) => (
      <li key={key}>
        <Radio
          name="painCreate"
          checked={selectRecord == key}
          onChange={() => setSelectRecord(key)}
          label={key + "-" + EnumPainRecords[key]}
        />
      </li>
    ));
  };

  return (
    <DefaultOpenModal title="Pain Scaling Tool" isShow={true} toggler={toggler}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  gap-6">
          <ul>{renderPainRecords()}</ul>
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />

        {/* BUTTONS */}
        <CancelAndAddButton
          toggler={toggler}
          disableSubmit={!selectRecord}
          disableBoth={isLoading || status === "pending"}
        />
      </form>
    </DefaultOpenModal>
  );
};

export default EditPainRecord;

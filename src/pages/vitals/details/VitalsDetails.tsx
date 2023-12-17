import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { vitalModalTypes } from "@/constants/modal-types";
import { closeViewModal, openEditModal } from "@/features/modal/modal-slice";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const VitalsDetails = () => {
  const { viewModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeViewModal());
  };

  const editHandler = () => {
    closeModal();
    dispatch(
      openEditModal({
        modalId: vitalModalTypes.editVital,
        data: viewModal?.data,
      })
    );
  };
  const titleClass = "xs:min-w-[200px] md:min-w-[250px] max-w-[300px]";
  return (
    <DefaultModal title="Vital Details" toggler={closeModal}>
      <Card className="bg-whiteBgColor !shadow-light border border-borderColor">
        <div className="md:flex justify-between gap-5 mb-4 relative">
          <h2>
            <span className="font-semibold">Date : &nbsp; </span>12-Dec-2023
          </h2>
          <h2>
            <span className="font-semibold">Facility : &nbsp; </span>Bauleni
            Mini Hospital
          </h2>
          <h2 className="me-20">
            <span className="font-semibold">Clinician : &nbsp; </span>System
            Admin
          </h2>
          <button
            onClick={editHandler}
            className="absolute right-0 top-0 flex gap-1 items-center text-primaryColor"
          >
            <MdOutlineEdit /> Edit
          </button>
        </div>
        <div className="">
          <DataRow
            title="Weight (kg)"
            data={viewModal?.data?.weight}
            titleClass={titleClass}
          />
          <DataRow
            title="Height (cm)"
            data={viewModal?.data?.height}
            titleClass={titleClass}
          />
          <DataRow
            title="BMI Score"
            data={viewModal?.data?.bmi}
            titleClass={titleClass}
          />
          <DataRow
            title="Temperature (c)"
            data={viewModal?.data?.temperature}
            titleClass={titleClass}
          />
          <DataRow
            title="Systolic"
            data={viewModal?.data?.systolic}
            titleClass={titleClass}
          />
          <DataRow
            title="Diastolic"
            data={viewModal?.data?.diastolic}
            titleClass={titleClass}
          />
          <DataRow
            title="Pulse Rate (bpm)"
            data={viewModal?.data?.pulseRate}
            titleClass={titleClass}
          />
          <DataRow
            title="Respiratory Rate (bpm)"
            data={viewModal?.data?.respiratoryRate}
            titleClass={titleClass}
          />
          <DataRow
            title="Oxygen Saturation (%)"
            data={viewModal?.data?.oxygenSaturation}
            titleClass={titleClass}
          />
          <DataRow
            title="MUAC"
            data={viewModal?.data?.muac}
            titleClass={titleClass}
          />
          <DataRow
            title="MUAC Score"
            data={viewModal?.data?.muacScore}
            titleClass={titleClass}
          />
          <DataRow
            title="Abdominal Circumference (cm)"
            data={viewModal?.data?.abdominalCircumference}
            titleClass={titleClass}
          />
          <DataRow
            title="Head Circumference (cm)"
            data={viewModal?.data?.headCircumference}
            titleClass={titleClass}
          />
          <DataRow
            title="HC Score"
            data={viewModal?.data?.hcScore}
            titleClass={titleClass}
          />
        </div>
      </Card>
      <div className="flex justify-center mt-4">
        <button
          onClick={closeModal}
          className="mb-5 bg-whiteBgColor hover:bg-lightGrayColor hover: border-2 border-borderColor  px-6 py-3 rounded-full flex gap-2 text-center"
        >
          Cancel
        </button>
      </div>
    </DefaultModal>
  );
};

export default VitalsDetails;

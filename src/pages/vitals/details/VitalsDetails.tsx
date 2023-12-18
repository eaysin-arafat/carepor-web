import { RootState } from "@/app/store";
import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { vitalModalTypes } from "@/constants/modal-types";
import { closeViewModal, openEditModal } from "@/features/modal/modal-slice";
import useClientAge from "@/hooks/useClientAge";
import {
  msgBasedOnBmi,
  oxygenSaturationMessage,
  pulseRateMessage,
  respiratoryRateMessage,
  systolicBpMessage,
  temperatureMessage,
} from "@/library/vital";
import { cn } from "@/utilities/cn";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const vaitalBP = {
  1: "Too High",
  2: "Too Low",
  3: "Unknown",
};

const VitalsDetails = () => {
  const { viewModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const { ageInMonths } = useClientAge();

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

  const bmiMsg = msgBasedOnBmi(viewModal?.data?.bmi);
  const temperatureMsg = temperatureMessage(viewModal?.data?.temperature);
  const systolicMsg = systolicBpMessage(viewModal?.data?.systolic, ageInMonths);
  const diastolicMsg = systolicBpMessage(
    viewModal?.data?.diastolic,
    ageInMonths
  );
  const pulseRateMsg = pulseRateMessage(
    viewModal?.data?.pulseRate,
    ageInMonths
  );

  const respiratoryRateMsg = respiratoryRateMessage(
    viewModal?.data?.respiratoryRate,
    ageInMonths
  );

  const oxygenSaturationMsg = oxygenSaturationMessage(
    viewModal?.data?.oxygenSaturation
  );

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
            data={viewModal?.data?.bmi + " ( " + bmiMsg + " )"}
            dataClass={cn("text-green-500", {
              "text-red-500": !bmiMsg?.includes("Normal"),
            })}
            titleClass={titleClass}
          />
          <DataRow
            title="Temperature (c)"
            data={viewModal?.data?.temperature + " ( " + temperatureMsg + " )"}
            dataClass={cn("text-green-500", {
              "text-red-500": !temperatureMsg?.includes("Normal"),
            })}
            titleClass={titleClass}
          />
          <DataRow
            title="Systolic"
            data={
              viewModal?.data?.systolic === -1
                ? vaitalBP[viewModal?.data?.systolicIfUnrecordable]
                : viewModal?.data.systolic + " ( " + systolicMsg + " )"
            }
            dataClass={cn("", {
              "text-green-500":
                viewModal?.data?.systolic !== -1 &&
                systolicMsg?.includes("Normal"),
              "text-red-500":
                viewModal?.data?.systolic !== -1 &&
                !systolicMsg?.includes("Normal"),
            })}
            titleClass={titleClass}
          />
          <DataRow
            title="Diastolic"
            data={
              viewModal?.data?.diastolic === -1
                ? vaitalBP[viewModal?.data?.diastolicIfUnrecordable]
                : viewModal?.data.diastolic + " ( " + diastolicMsg + " )"
            }
            dataClass={cn("", {
              "text-green-500":
                viewModal?.data?.diastolic !== -1 &&
                diastolicMsg?.includes("Normal"),
              "text-red-500":
                viewModal?.data?.diastolic !== -1 &&
                !diastolicMsg?.includes("Normal"),
            })}
            titleClass={titleClass}
          />
          <DataRow
            title="Pulse Rate (bpm)"
            data={viewModal?.data?.pulseRate + " ( " + pulseRateMsg + " )"}
            dataClass={cn("text-green-500", {
              "text-red-500": !pulseRateMsg?.includes("Normal"),
            })}
            titleClass={titleClass}
          />
          <DataRow
            title="Respiratory Rate (bpm)"
            data={
              viewModal?.data?.respiratoryRate +
              " ( " +
              respiratoryRateMsg +
              " )"
            }
            dataClass={cn("text-green-500", {
              "text-red-500": !respiratoryRateMsg?.includes("Normal"),
            })}
            titleClass={titleClass}
          />
          <DataRow
            title="Oxygen Saturation (%)"
            data={
              viewModal?.data?.oxygenSaturation +
              " ( " +
              oxygenSaturationMsg +
              " )"
            }
            dataClass={cn("text-green-500", {
              "text-red-500": !oxygenSaturationMsg?.includes("Normal"),
            })}
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

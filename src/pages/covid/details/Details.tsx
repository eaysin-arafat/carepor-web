import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { closeAddModal } from "@/features/modal/modal-slice";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

const CovidDetails = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      <DefaultModal title="Covid" toggler={closeModal} size="5xl">
        <div className="mt-2 border border-borderColor p-4 rounded-lg">
          <div className="md:flex justify-between relative">
            <p className="text-sm">
              <span className="font-semibold">Date : &nbsp; </span>30-Nov-2023
            </p>
            <p className="text-xs">
              <span className="font-semibold">Facility : &nbsp; </span>Bauleni
              Mini Hospital
            </p>
            <p className="text-xs me-20">
              <span className="font-semibold">Clinician : &nbsp; </span>System
              Admin
            </p>
            <div className="md:flex justify-end  absolute right-0 top-2 md:top-0 ">
              <button className="flex items-center gap-1 text-sm text-primaryColor">
                {" "}
                <MdOutlineModeEditOutline /> Edit
              </button>
            </div>
          </div>
          <div className="mt-5">
            <DataRow
              title="Source of Alert"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date of Notification"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Covid Symptoms
            </div>
            <DataRow
              title="Symptom Screen"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Symptom Screen"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Exposure Risk
            </div>
            <DataRow
              title="Exposure Risk"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Exposure Risk"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Case Report
            </div>
            <DataRow
              title="ICU Admission"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date of ICU Admission"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="On Oxygen?"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Oxygen Saturation"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Received Ventilatory Support"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Received BP Support"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date First Positive"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Recent International Travel"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Recent International Travel Destination Name"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Health Care Worker"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Covid Exposure"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Mental Status on Admission"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />

            <div className="border-y border-borderColor py-2 font-medium text-secondaryColor mt-4 mb-1">
              Clinical Assessment
            </div>
            <DataRow
              title="Pneumonia"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="ARDS"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Patient Hospitalized?"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Date of Hospitalised"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Co-morbid Conditions"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Co-morbid Conditions"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
            <DataRow
              title="Other Respiratory Illness"
              data="Data"
              titleClass="xs:min-w-[180px] sm:min-w-[250px]"
            />
          </div>
        </div>
      </DefaultModal>
    </div>
  );
};

export default CovidDetails;

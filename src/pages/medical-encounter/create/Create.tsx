import { RootState } from "@/app/store";
import HTSStatus from "@/assets/icons/HTSStatus";
import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import FormHeading from "@/components/core/form-heading/FormHeading";
import FormSubHeader from "@/components/core/form-subheader/FormSubHeader";
import DataSummaryList from "@/components/shared/data-summary/DataSummaryList";
import Header from "@/components/shared/header/Header";
import ModuleStepping from "@/components/shared/multi-step/ModuleStepping";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import { medicalEncounterModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import CreateAllergy from "@/pages/allergies/create/Create";
import CreateChiefComplaints from "@/pages/chief-complaints/create/Create";
import CreatePastMedicalHistory from "@/pages/past-medical-histories/create/Create";
import CreateReviewOfSystems from "@/pages/review-of-systems/create/Create";
import CreateTbConstitutionalSymptom from "@/pages/tb-constitutional-symptoms/create/Create";
import { cn } from "@/utilities/cn";
import React from "react";
import { ArrowLeft, Check, ChevronRight, Edit2, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

const CreateSubHeader = () => {
  return (
    <div className="grid grid-cols-3 items-center w-full px-5 py-4">
      <button>
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-[#1E0E62] text-xl font-medium text-center">
        Create New Medical Encounter
      </h1>
      <div></div>
    </div>
  );
};

const PastRecordCard = () => {
  return (
    <div className="border my-2.5 p-2.5 text-sm rounded animate__animated animate__fadeInLeft">
      <div className="flex flex-col gap-1">
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Encounter Date :
          </span>
          <span className="inline-block">29-Nov-2023</span>
        </p>
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Chief Complaints :
          </span>{" "}
          <span className="inline-block">heart is not working well</span>
        </p>
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Facility :
          </span>{" "}
          <span className="inline-block">Bauleni Mini Hospital</span>
        </p>
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Clinician :
          </span>
          <span className="inline-block">John Wick</span>
        </p>
      </div>
      <div className="flex w-full justify-end mt-4">
        <button className="flex gap-2 items-center ">
          <span className="inline-block text-[#1890FF] text-xs">
            View Full Encounter
          </span>
          <span className="inline-block">
            <ChevronRight size={14} color="#1890FF" />
          </span>
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({
  title = "title",
  Icon = <HTSStatus size={16} color="#1890FF" />,
}) => {
  return (
    <div className="space-y-1 animate__animated animate__fadeInRight">
      <h1 className="flex items-center gap-2 font-medium font-poppins">
        <span className="inline-block rounded bg-gray-100">{Icon}</span>
        <span className="inline-block">{title}</span>
      </h1>
      <div className="text-xs">
        Test Date: &nbsp;{" "}
        <span className="font-semibold inline-block">14-Nov-2023</span> Test
        Date: &nbsp;{" "}
        <span className="font-semibold inline-block">14-Nov-2023 </span>
        Test Date: &nbsp;
        <span className="font-semibold inline-block"> 14-Nov-2023</span>
      </div>
    </div>
  );
};

const StepButton = ({
  isComplete = false,
  isActive = false,
  text = "text",
}) => {
  return (
    <button
      className={cn("flex items-center justify-center gap-1 text-sm py-3.5", {
        "border-b-[3px] border-b-[#1890FF]": isActive,
      })}
    >
      {isComplete && (
        <span className="inline-block bg-[#1890FF] rounded-full p-[2px]">
          <Check size={10} color="white" />
        </span>
      )}
      <span
        className={cn("inline-block capitalize", {
          "text-[#1890FF]": isActive,
          "text-black": !isActive,
        })}
      >
        {text}
      </span>
    </button>
  );
};

const Stepping = () => {
  return (
    <div className="text-center box_shadow_2 text-[#03045E] font-semibold font-poppins">
      <div className="flex justify-evenly items-center">
        <StepButton isComplete text="Complaint" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton isActive text="Paediatric" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton text="Examination & Diagnosis" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton text="Treatment Plan" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton text="Treatment Plan" />
      </div>
    </div>
  );
};

const ReviewOfSystemCardItem = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
      <div>
        <p className="font-poppins flex gap-2">
          <span className="font-semibold whitespace-nowrap">
            Physical System :
          </span>
          <span> Respiratory system </span>
        </p>
        <p className="font-poppins flex gap-2">
          <span className="font-semibold">Note :</span>
          <span> heart is not working well</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Trash2 size={16} color="red" className="cursor-pointer" />
        <button className="flex items-center gap-1 text-[#1890FF]">
          <Edit2 size={16} color="#1890FF" />
          <p className="text-[#1890FF]">Edit</p>
        </button>
      </div>
    </div>
  );
};

const AllergiesCardItem = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 px-2 py-2 rounded gap-2">
      <div>
        <p className="text-sm">
          <b>&nbsp;Allergy Name : &nbsp;</b> Drug Allergy{" "}
          <b> &nbsp;Drug Type : &nbsp; </b> NSAIDS &nbsp;
          <b>Severity Name : &nbsp;</b> NSAIDS
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Trash2 size={16} color="red" className="cursor-pointer" />
        <button className="flex items-center gap-1 text-[#1890FF]">
          <Edit2 size={16} color="#1890FF" />
          <p className="text-[#1890FF]">Edit</p>
        </button>
      </div>
    </div>
  );
};

const CreateMedicalEncounter = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const { addModal } = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const handleChiefComplaints = () => {
    dispatch(
      openAddModal({
        modalId: medicalEncounterModalTypes.addPresentingComplaint,
        data: null,
      })
    );
  };

  const handleTbConstitutionalSymptom = () => {
    dispatch(
      openAddModal({
        modalId: medicalEncounterModalTypes.addTbConstitutionalSymptom,
        data: null,
      })
    );
  };

  const handlePastMedicalHistory = () => {
    dispatch(
      openAddModal({
        modalId: medicalEncounterModalTypes.addPastMedicalHistory,
        data: null,
      })
    );
  };

  const handleReviewOfSystems = () => {
    dispatch(
      openAddModal({
        modalId: medicalEncounterModalTypes.addReviewOfSystem,
        data: null,
      })
    );
  };

  const handleAllergies = () => {
    dispatch(
      openAddModal({
        modalId: medicalEncounterModalTypes.addAllergies,
        data: null,
      })
    );
  };
  return (
    <div>
      <Header />
      <FormSubHeader />
      <ClientDetailsCard />
      <div className="grid grid-cols-12 gap-4 mt-3 px-5">
        <PastRecordList />
        <div className="col-span-7">
          <ModuleStepping />
          <div className="box_shadow_2 mt-5 flex flex-col gap-4 px-4 py-3">
            {/* <Accordion title="Present Complaints" modalHandler={toggleModal}>
              <div className="space-y-4">
                <Textarea label="Presenting Complaint" />
                <Textarea label="Presenting Complaint" />
              </div>
            </Accordion>
            <Accordion
              title="Serostatus and Disclosure"
              modalHandler={toggleModal}
            >
              <div className="">
                <SelectContainer isOne />
              </div>
            </Accordion>
            <Accordion title="TB Symptoms" modalHandler={toggleModal}>
              <div className="">
                <SelectContainer isOne={false} />
              </div>
            </Accordion>
            <Accordion
              title="Constitutional Symptoms "
              modalHandler={toggleModal}
            >
              <div className="">
                <SelectContainer>
                  <select className="py-1 rounded w-2/5 inline-block mb-5">
                    <option value="1">Constitutional Symptoms</option>
                    <option value="2">Constitutional Symptoms</option>
                  </select>
                </SelectContainer>
              </div>
            </Accordion>
            <Accordion title="Review of Systems" modalHandler={toggleModal}>
              <div className="">
                <div className="flex gap-2">
                  <Select label="Review of Systems" className="py-1 rounded" />
                  <Input label="Review of Systems" className="py-1 rounded" />
                  <div className="flex items-end">
                    <SubmitButton
                      title="Add System"
                      icon={<PlusCircle size={14} />}
                      className="py-1 text-base w-[fit-content] whitespace-nowrap gap-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <ReviewOfSystemCardItem />
                  <ReviewOfSystemCardItem />
                  <ReviewOfSystemCardItem />
                  <ReviewOfSystemCardItem />
                </div>
              </div>
            </Accordion>
            <Accordion title="Past Medical History" modalHandler={toggleModal}>
              <div className="space-y-4">
                <Textarea label="Drug History" />
                <Textarea label="Admission History" />
                <Textarea label="Surgical History" />
              </div>
            </Accordion>
            <Accordion title="Allergies" modalHandler={toggleModal}>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Family Medical History"
                    className="py-1 rounded"
                  />
                  <Select
                    label="Family Medical History"
                    className="py-1 rounded"
                  />
                  <Select
                    label="Family Medical History"
                    className="py-1 rounded"
                  />
                  <Select
                    label="Family Medical History"
                    className="py-1 rounded"
                  />
                  <div className="col-span-2">
                    <Textarea
                      label="Family Medical History"
                      className="py-1 rounded"
                    />
                  </div>
                </div>
                <div className="my-5">
                  <SubmitButton
                    title="Add Allergy"
                    icon={<PlusCircle size={14} />}
                    className="py-1 text-base w-[fit-content] whitespace-nowrap gap-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <AllergiesCardItem />
                  <AllergiesCardItem />
                  <AllergiesCardItem />
                  <AllergiesCardItem />
                </div>
              </div>
            </Accordion> */}
            {/* <Accordion
              title="Family & Social History"
              modalHandler={toggleModal}
            >
              <div className="space-y-4">
                <Textarea label="Family Medical History" />
                <Textarea label="Family Medical History" />
              </div>
            </Accordion> */}

            {/* Presenting complaints */}
            <FormHeading
              title="Present Complaints"
              modalHandler={handleChiefComplaints}
            />
            {addModal?.modalId ===
              medicalEncounterModalTypes.addPresentingComplaint && (
              <CreateChiefComplaints toggler={closeModal} />
            )}

            {/* TB constitutional symptoms */}
            <FormHeading
              title="TB & Constitutional Symptoms"
              modalHandler={handleTbConstitutionalSymptom}
            />
            {addModal?.modalId ===
              medicalEncounterModalTypes.addTbConstitutionalSymptom && (
              <CreateTbConstitutionalSymptom toggler={closeModal} />
            )}

            {/* REVIEW of SYSTEM */}
            <FormHeading
              title="Review of Systems"
              modalHandler={handleReviewOfSystems}
            />
            {addModal?.modalId ===
              medicalEncounterModalTypes.addReviewOfSystem && (
              <CreateReviewOfSystems toggler={closeModal} />
            )}

            {/* PAST MEDICAL HISTORY */}
            <FormHeading
              title="Past Medical History"
              modalHandler={handlePastMedicalHistory}
            />
            {addModal?.modalId ===
              medicalEncounterModalTypes.addPastMedicalHistory && (
              <CreatePastMedicalHistory toggler={closeModal} />
            )}

            <FormHeading
              title="Chronic / Non Chronic Conditions"
              modalHandler={toggleModal}
            />

            <FormHeading title="Allergies" modalHandler={handleAllergies} />
            {addModal?.modalId === medicalEncounterModalTypes.addAllergies && (
              <CreateAllergy toggler={closeModal} />
            )}
            <FormHeading
              title="Family & Social History"
              modalHandler={toggleModal}
            />
          </div>
        </div>
        <DataSummaryList />
      </div>
    </div>
  );
};

export default CreateMedicalEncounter;

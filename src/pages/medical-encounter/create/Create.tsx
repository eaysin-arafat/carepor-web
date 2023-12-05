import Diagnosis from "@/assets/icons/Diagnosis";
import HTSStatus from "@/assets/icons/HTSStatus";
import HeartBit from "@/assets/icons/HeartBit";
import LabOrder from "@/assets/icons/Laborder";
import Medication from "@/assets/icons/Medication";
import Accordion from "@/components/core/accordion/Accordion";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import SelectContainer from "@/components/core/selectable-container/SelectContainer";
import Header from "@/components/shared/header/Header";
import { cn } from "@/utilities/cn";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Edit2,
  PlusCircle,
  Trash2,
} from "react-feather";

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
  return (
    <div>
      <Header />
      <CreateSubHeader />
      <ClientDetailsCard />
      <div className="grid grid-cols-12 gap-4 mt-3 px-5">
        <div className="col-span-3">
          <div className="box_shadow_2">
            <h1 className="text-center text-[#03045E] font-semibold font-poppins py-2.5 border-b border-b-[#1890FF80]">
              Past Encounters
            </h1>
            <div className="px-5 py-2">
              <PastRecordCard />
              <PastRecordCard />
              <PastRecordCard />
              <PastRecordCard />
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <Stepping />
          <div className="box_shadow_2 mt-5 flex flex-col gap-4 px-4 py-3">
            <Accordion title="Present Complaints">
              <div className="space-y-4">
                <Textarea label="Presenting Complaint" />
                <Textarea label="Presenting Complaint" />
              </div>
            </Accordion>
            <Accordion title="Serostatus and Disclosure">
              <div className="">
                <SelectContainer />
              </div>
            </Accordion>
            <Accordion title="TB Symptoms">
              <div className="">
                <SelectContainer />
              </div>
            </Accordion>
            <Accordion title="Constitutional Symptoms ">
              <div className="">
                <SelectContainer>
                  <select className="py-1 rounded w-2/5 inline-block mb-5">
                    <option value="1">Constitutional Symptoms</option>
                    <option value="2">Constitutional Symptoms</option>
                  </select>
                </SelectContainer>
              </div>
            </Accordion>
            <Accordion title="Review of Systems">
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
            <Accordion title="Past Medical History">
              <div className="space-y-4">
                <Textarea label="Drug History" />
                <Textarea label="Admission History" />
                <Textarea label="Surgical History" />
              </div>
            </Accordion>
            <Accordion title="Allergies">
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
            </Accordion>
            <Accordion title="Family & Social History">
              <div className="space-y-4">
                <Textarea label="Family Medical History" />
                <Textarea label="Family Medical History" />
              </div>
            </Accordion>
          </div>
        </div>
        <div className="col-span-2 col-start-11">
          <div className="box_shadow_2 pb-4">
            <h1 className="text-center text-[#03045E] font-semibold font-poppins py-2.5 border-b border-b-[#1890FF80]">
              Data Summary
            </h1>
            <div className="flex flex-col gap-5 px-5 py-2">
              <SidebarItem
                title="HTS Status"
                Icon={<HTSStatus size={16} color="#1890FF" />}
              />
              <SidebarItem
                title="Medications"
                Icon={<Medication size={16} color="#1890FF" />}
              />
              <SidebarItem
                title="Lab Orders"
                Icon={<LabOrder size={20} color="#1890FF" />}
              />
              <SidebarItem
                title="Vitals"
                Icon={<HeartBit size={18} color="#1890FF" />}
              />
              <SidebarItem
                title="Diagnoses"
                Icon={<Diagnosis size={18} color="#1890FF" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMedicalEncounter;

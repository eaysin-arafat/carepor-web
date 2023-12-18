import MultiSelect from "@/components/core/form-elements/MultiSelect";
import { Option } from "@/components/core/form-elements/MultipleSelect";
import DataRow from "@/components/core/table/DataRow";
import { covaxModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import React from "react";
import { PlusCircle } from "react-feather";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import AdverseEffectCreate from "../create/AdverseEffect";
import CovaxCreate from "../create/CovaxCreate";
import VaccinateCreate from "../create/VaccinateCreate";

const CovaxIndex = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
  const dispatch = useDispatch();
  const handleAddCovid = () => {
    dispatch(
      openAddModal({
        modalId: covaxModalTypes.covaxCreateModal,
        data: null,
      })
    );
  };

  const handleAddVaccinate = () => {
    dispatch(
      openAddModal({
        modalId: covaxModalTypes.vaccinateCreateModal,
        data: null,
      })
    );
  };

  const handleAdverseEffect = () => {
    dispatch(
      openAddModal({
        modalId: covaxModalTypes.adverseEffectCreate,
        data: null,
      })
    );
  };

  return (
    <div>
      {/* Covax Modal*/}
      <CovaxCreate />
      <VaccinateCreate />
      <AdverseEffectCreate />

      <div className="flex justify-between items-center">
        <h2 className="heading_2">Covax</h2>
        <button onClick={handleAddCovid} className="main_btn px-5 gap-2">
          <PlusCircle className="" /> New Record
        </button>
      </div>
      <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
        <div className="md:flex justify-between relative">
          <p className="text-sm">
            <span className="font-semibold">Date : &nbsp; </span>30-Nov-2023
          </p>
          <p className="text-sm">
            <span className="font-semibold">Facility : &nbsp; </span>Bauleni
            Mini Hospital
          </p>
          <p className="text-sm me-20">
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
            title="Covax Number"
            data="Data"
            titleClass="xs:min-w-[180px] sm:min-w-[270px]"
          />
          <DataRow
            title="Was Client Offered COVAX?"
            data="Data"
            titleClass="xs:min-w-[180px] sm:min-w-[270px]"
          />
          <DataRow
            title="Does Client Get Vaccinated Today"
            data="Data"
            titleClass="xs:min-w-[180px] sm:min-w-[270px]"
          />
          <DataRow
            title="Reason Client Doesn't Want To Get Vaccination"
            data="Data"
            titleClass="xs:min-w-[180px] sm:min-w-[270px]"
          />
          <DataRow
            title="Other Reason"
            data="Data"
            titleClass="xs:min-w-[180px] sm:min-w-[270px]"
          />
          <DataRow
            title="Comorbidities"
            data="Data"
            titleClass="xs:min-w-[180px] sm:min-w-[270px]"
          />
          <DataRow
            title="Other Comorbidities"
            data="Data"
            titleClass="xs:min-w-[180px] sm:min-w-[270px]"
          />
          <button
            onClick={handleAddVaccinate}
            className="bg-primaryColor py-3 px-5 rounded-lg text-whiteColor hover:bg-primaryHoverColor mt-4"
          >
            Vaccinate
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3 mt-5">
        {/* Vaccine  */}
        <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium text-secondaryColor">
              COVAX Dose 2
            </h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-1 text-sm text-primaryColor">
                {" "}
                <MdOutlineModeEditOutline /> Edit
              </button>
            </div>
          </div>
          <DataRow
            title="Dose"
            data="Data"
            titleClass="xs:min-w-[130px] sm:min-w-[150px]"
          />
          <DataRow
            title="Date of vaccination"
            data="Data"
            titleClass="xs:min-w-[130px] sm:min-w-[150px]"
          />
          <DataRow
            title="Batch Number"
            data="Data"
            titleClass="xs:min-w-[130px] sm:min-w-[150px]"
          />
        </div>

        {/* Adverse Event  */}
        <div className="mt-2 bg-whiteBgColor border border-borderColor p-4 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-xl font-medium text-secondaryColor">
              Adverse Event
            </h2>
            <div className="flex gap-3">
              <button
                onClick={handleAdverseEffect}
                className="flex items-center gap-1 text-sm text-primaryColor"
              >
                {" "}
                <PlusCircle className="h-4 w-4" /> Add
              </button>
              <button className="flex items-center gap-1 text-sm text-primaryColor">
                {" "}
                <MdOutlineModeEditOutline /> Edit
              </button>
            </div>
          </div>
          <DataRow
            title="Dose"
            data="Data"
            titleClass="xs:min-w-[130px] sm:min-w-[150px]"
          />
          <DataRow
            title="Date of vaccination"
            data="Data"
            titleClass="xs:min-w-[130px] sm:min-w-[150px]"
          />
          <DataRow
            title="Batch Number"
            data="Data"
            titleClass="xs:min-w-[130px] sm:min-w-[150px]"
          />
        </div>
      </div>
      <div className="mt-5">
        <MultiSelect
          options={demoOptions?.slice() || []}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
      <div className="mt-10"></div>
    </div>
  );
};

export default CovaxIndex;

const demoOptions = [
  {
    oid: 1,
    description: "Indeterminate HIV test",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 2,
    description: "HIV negative pregnant mother",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 3,
    description: "Breastfeeding mother",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 4,
    description: "HIV negative with STIs",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 5,
    description: "HIV negative with TB",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 6,
    description: "Discordant sexual partner",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
];

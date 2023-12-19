import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import SearchableSelect from "@/components/core/form-elements/SearchableSelect";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "react-feather";

function DeathRecordCreate({ toggler }) {
  const [accordion, setAccordion] = useState(false);

  return (
    <DefaultOpenModal title="Death Record" isShow={true} toggler={toggler}>
      <div className="border border-borderColor mt-1 rounded">
        <button
          type="button"
          onClick={() => setAccordion(!accordion)}
          className="py-4 px-5 flex justify-between w-full bg-lightBlueColor"
        >
          Reference Notes
          {!accordion && <ChevronDown />}
          {accordion && <ChevronUp />}
        </button>
        {accordion && (
          <div className="border-t border-t-bodyColor p-3">
            <div className="mb-5">
              <b>Note 1 : </b>
              <p>
                The Informant should be a relative present at the death, or in
                attendance at the last illness of the deceased, and in default
                thereof the next person from the following list: a relative
                living in the district where the deceased died a person present
                at the death the occupier or an inmate of the house or the
                person in charge of the hospital or institution where the death
                occurred the undertaker.
              </p>
            </div>
            <div className="mb-5">
              <b>Note 2 : </b>
              <p>
                The Medical certificate showing the cause of death must be
                attached to this form.
              </p>
            </div>
            <div className="mb-5">
              <b>Note 3 : </b>
              <p>
                The Informant should be asked to complete Vital Statistics Card.
                The information is required for purely statistical purpose.
              </p>
            </div>
            <div className="mb-5">
              <b>Note 4 : </b>
              <p>
                If the deceased was a member of the Zambia National Provident
                Fund please quote his/her Social Security Number as this will
                assist the Fund in the payment of benefits.
              </p>
            </div>
          </div>
        )}
      </div>

      <form>
        <div className=" shadow border p-5 rounded">
          <h1 className="text-md font-medium border-b-borderColor  border-b mb-5 pb-1">
            Deceased :
          </h1>
          <div className="flex gap-5">
            <DateInput
              label="Date of Death"
              onChange={function (date: Date): void {
                console.log(date);
              }}
            ></DateInput>
            <Input label="Age (Years at Death)" />
          </div>
          <div className="flex gap-5 mt-5">
            <Select label="Province of Death"></Select>
            <Select label="District of Death"></Select>
            <Select label="Where Death Occurred"></Select>
          </div>
        </div>
        <div className=" p-5 rounded border mt-5 shadow">
          <h1 className="text-md font-medium border-b-borderColor border-b mb-2 pb-1">
            Main Cause of Death :
          </h1>
          <div className="flex gap-5">
            <SearchableSelect label="Province of Death"></SearchableSelect>
            <SearchableSelect label="District of Death"></SearchableSelect>
          </div>
          <div className="flex gap-5 mt-5">
            <SearchableSelect label="Province of Death"></SearchableSelect>
            <SearchableSelect label="District of Death"></SearchableSelect>
          </div>
        </div>

        <div className="border p-5 rounded mt-5 shadow">
          <h1 className="text-md font-medium border-b-borderColor mb-2 border-b pb-1">
            Contributing Cause of Death :
          </h1>
          <div className="flex gap-5">
            <SearchableSelect label="Province of Death"></SearchableSelect>
            <SearchableSelect label="District of Death"></SearchableSelect>
          </div>
          <div className="flex gap-5 mt-5">
            <SearchableSelect label="Province of Death"></SearchableSelect>
            <SearchableSelect label="District of Death"></SearchableSelect>
          </div>
          <button
            type="button"
            className="px-3 py-1 rounded bg-buttonBg text-white mt-2 ml-auto flex items-center"
          >
            <Plus size={15} /> Add
          </button>

          <div className="border border-borderColor bg-whiteBgColor p-5 rounded mt-2">
            <div className="grid grid-cols-4 border-b pb-1">
              <p className="text-sm">Anatomic Axis</p>
              <p className="text-sm">Pathology Axis </p>
              <p className="text-sm">ICPC2 Description</p>
              <p className="text-sm"> ICD-11 Diagnosis</p>
            </div>

            <div className="grid grid-cols-4 border-b py-2">
              <p className="text-xs">Anatomic Axis</p>
              <p className="text-xs">Anatomic Axis</p>
              <p className="text-xs">Anatomic Axis</p>
              <p className="text-xs">Anatomic Axis</p>
            </div>
          </div>
        </div>
        <div className="border p-5 rounded mt-5 shadow mb-4">
          <h1 className="text-md font-medium border-b-borderColor  border-b mb-5 pb-1">
            Informant Details :
          </h1>
          <div className="flex gap-5">
            <Input label="First Name" />
            <Input label="Surname" />
            <Input label="Nickname" />
          </div>

          <div className="grid grid-cols-6 gap-5 mt-5">
            <div className="col-span-1">
              <Select label="Code" />
            </div>
            <div className="col-span-2">
              <Input label="Cellphone Number" />
            </div>
            <div className="col-span-1">
              <Select label="Code" />
            </div>
            <div className="col-span-2">
              <Input label="Landline Number" />
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <Select label="Relationship" />
            <Input label="Other Relationship" />
          </div>

          <div className="flex gap-5 mt-5">
            <Input label="City/Town/Village" />
            <Input label="Cmpd Street No." />
          </div>

          <div className="flex gap-5 mt-5">
            <Input label="PO Box,Pvt bag" />
            <Input label="Landmark" />
          </div>
        </div>

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
}

export default DeathRecordCreate;

import React from "react";
import Checkbox from "../core/form-elements/Checkbox";
// import CustomNrc from "../form-elements/CustomNrc";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import FormSection from "../core/form-layouts/FormSection";

type Props = {};

function GuardianDetails({}: Props) {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  console.log(handler);

  return (
    <>
      <FormSection
        titleText="Parents or Guardian Details"
        noteText="If the client's age is below 18 years, please provide the information of either parents or guardian."
      >
        <>
          {/* Mother Details  */}
          <h1 className="text-xl font-semibold text-secondaryColor mb-2">
            Mother :
          </h1>
          <div className="grid md:grid-cols-6 gap-5">
            <div className="col-span-6 md:col-span-3">
              <Input label="First Name" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="Surname" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="NRC" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="NAPSA Number" />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="Nationality" />
            </div>
            <div className="col-span-6 md:col-span-3 flex items-center -mt-9">
              <Checkbox label="Mother Deceased" marginTop={"mt-14"} />
            </div>
          </div>

          {/* Father Details  */}
          <h1 className="text-xl font-semibold text-secondaryColor mb-2 mt-10">
            Father :
          </h1>
          <div className="grid md:grid-cols-6 gap-5">
            <div className="col-span-6 md:col-span-3">
              <Input label="First Name" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="Surname" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="NRC" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="NAPSA Number" />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="Nationality" />
            </div>
            <div className="col-span-6 md:col-span-3 flex items-center -mt-5">
              <Checkbox label="Father Deceased" marginTop={"mt-10"} />
            </div>
          </div>

          {/* Guardian   Details  */}
          <h1 className="text-xl font-semibold text-secondaryColor mb-2 mt-10">
            Guardian :
          </h1>
          <div className="grid md:grid-cols-6 gap-5">
            <div className="col-span-6 md:col-span-3">
              <Input label="First Name" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="Surname" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="NRC" required />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="NAPSA Number" />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input label="Nationality" />
            </div>
            <div className="col-span-6  md:col-span-3 flex items-center">
              <Select label="Relationship">
                <option value="">Select</option>
              </Select>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default GuardianDetails;

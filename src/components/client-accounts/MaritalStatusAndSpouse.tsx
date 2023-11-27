import React from "react";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import FormSection from "../core/form-layouts/FormSection";

type Props = {};

function MaritalStatusAndSpouse({}: Props) {
  
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  console.log(handler);

  return (
    <>
      <FormSection titleText="Marital Status & Spouse Details">
        <>
          {/* Marital Status & Spouse Details */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="col-span-2 flex items-center">
              <Select label="Marital Status">
                <option value="">Select</option>
              </Select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input label="Spouse First Name" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input numberOnly label="Spouse Surname" />
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default MaritalStatusAndSpouse;

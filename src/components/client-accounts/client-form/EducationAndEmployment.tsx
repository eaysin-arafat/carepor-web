import React from "react";
import Select from "../../core/form-elements/Select";
import FormSection from "../../core/form-layouts/FormSection";

type Props = {};

function EducationAndEmployment({}: Props) {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  console.log(handler);

  return (
    <>
      <FormSection titleText="Education & Employment">
        <>
          {/* Marital Status & Spouse Details */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="">
              <Select
                label="Highest Level of Education"
                name="educationLevelId"
                // value={educationAndEmployment?.educationLevelId}
              >
                <option value="">Select</option>
              </Select>
            </div>
            <div className="">
              <Select
                label="Occupation"
                name="occupationId"
                // value={educationAndEmployment?.occupationId}
              >
                <option value="">Select</option>
              </Select>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default EducationAndEmployment;

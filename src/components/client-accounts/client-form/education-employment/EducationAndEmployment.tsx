import {
  ClientEducationAndEmploymentErrorType,
  ClientEducationAndEmploymentType,
} from "@/types/clientFormTypes";
import React from "react";
import Select from "../../../core/form-elements/Select";
import FormSection from "../../../core/form-layouts/FormSection";
import RenderSelectOptions from "@/components/core/form-elements/RenderSelectOptions";
import { useReadEducationLevelsQuery } from "@/features/education-level/education-level-api";
import { useReadOccupationsQuery } from "@/features/occupation/occupation-api";

type Props = {
  educationAndEmployment: ClientEducationAndEmploymentType;
  educationAndEmploymentError: ClientEducationAndEmploymentErrorType;
  handleEducationAndEmploymentChange: (e: React.ChangeEvent) => void;
};

function EducationAndEmployment({
  educationAndEmployment,
  educationAndEmploymentError,
  handleEducationAndEmploymentChange,
}: Props) {
  const { data: educations } = useReadEducationLevelsQuery(undefined);
  const { data: occupations } = useReadOccupationsQuery(undefined);

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
                value={educationAndEmployment.educationLevelId}
                onChange={handleEducationAndEmploymentChange}
                errMsg={educationAndEmploymentError?.educationLevelId}
              >
                <RenderSelectOptions options={educations} />
              </Select>
            </div>
            <div className="">
              <Select
                label="Occupation"
                name="occupationId"
                value={educationAndEmployment.occupationId}
                onChange={handleEducationAndEmploymentChange}
                errMsg={educationAndEmploymentError?.occupationId}
              >
                <RenderSelectOptions options={occupations} />
              </Select>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default EducationAndEmployment;

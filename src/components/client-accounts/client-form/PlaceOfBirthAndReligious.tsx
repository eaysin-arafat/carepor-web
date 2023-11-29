import React from "react";
import Input from "../../core/form-elements/Input";
import Select from "../../core/form-elements/Select";
import FormSection from "../../core/form-layouts/FormSection";

type Props = {};

function PlaceOfBirthAndReligious({}: Props) {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  console.log(handler);

  return (
    <>
      <FormSection titleText="Place of Birth & Religious Denomination">
        <>
          {/* Marital Status & Spouse Details */}
          <div className="grid md:grid-cols-2 gap-5 mt-2">
            <div className="flex items-center">
              <Select
                label="Home Language"
                required
                // value={placeOfBirthAndReligion.homeLanguageId}
                // errMsg={inputError?.homeLanguageId}
                // error={inputError?.homeLanguageId}
                name="homeLanguageId"
              >
                <option value="">Select</option>
              </Select>
            </div>
            <div className="flex items-center">
              <Select
                label="Is Client Born In Zambia"
                required
                name="isZambianBorn"
                // value={placeOfBirthAndReligion.isZambianBorn}
                // errMsg={inputError?.isZambianBorn}
                // error={inputError?.isZambianBorn}
              >
                <option value="">--Select--</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Select>
            </div>
            <div className="flex items-center">
              <Select
                label="Province of Birth"
                required
                // errMsg={inputError?.provinceId}
                // error={inputError?.provinceId}
                // value={placeOfBirthAndReligion?.provinceId}
                name="provinceId"
              >
                <option value="">Select</option>
              </Select>
            </div>
            <div className="flex items-center">
              <Select
                label="District of Birth"
                required
                // errMsg={inputError?.districtId}
                // error={inputError?.districtId}
                // value={placeOfBirthAndReligion.districtId}
                name="districtId"
              >
                <option value="">Select</option>
              </Select>
            </div>
            <div className="flex items-center">
              <Input
                required
                label="Place of Birth"
                name="birthPlace"
                // value={placeOfBirthAndReligion.birthPlace}
                // errMsg={inputError?.birthPlace}
                // error={inputError?.birthPlace}
              />
            </div>
            <div className="flex items-center">
              <Select
                label="Religious Denomination"
                name="religion"
                // value={placeOfBirthAndReligion.religion}
                // errMsg={inputError?.religion}
                // error={inputError?.religion}
              >
                <option value="0">--Select--</option>
                <option value="1">Christian</option>
                <option value="2">Muslim</option>
                <option value="3">Hindu</option>
                <option value="4">Buddhist</option>
                <option value="5">Jewish</option>
                <option value="6">None</option>
              </Select>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default PlaceOfBirthAndReligious;

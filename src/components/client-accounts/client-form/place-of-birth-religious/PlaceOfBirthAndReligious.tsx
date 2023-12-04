import RenderSelectOptions, {
  RenderLanguageOptions,
} from "@/components/core/form-elements/RenderSelectOptions";
import { religionsEnums } from "@/enum/clients";
import {
  ClientPlaceOfBirthAndReligionErrorType,
  ClientPlaceOfBirthAndReligionType,
} from "@/types/clientTypes";
import React from "react";
import Input from "../../../core/form-elements/Input";
import Select from "../../../core/form-elements/Select";
import FormSection from "../../../core/form-layouts/FormSection";

type Props = {
  placeOfBirthAndReligion: ClientPlaceOfBirthAndReligionType;
  placeOfBirthAndReligionError: ClientPlaceOfBirthAndReligionErrorType;
  handlePlaceOfBirthAndReligionChange: (e: React.ChangeEvent) => void;
  province: { oid: string; description: string }[];
  district: { oid: string; description: string; provinceId: string }[];
};

function PlaceOfBirthAndReligious({
  placeOfBirthAndReligion,
  placeOfBirthAndReligionError,
  handlePlaceOfBirthAndReligionChange,
  province,
  district,
}: Props) {
  return (
    <>
      <FormSection titleText="Place of Birth & Religious Denomination">
        <>
          {/* Marital Status & Spouse Details */}
          <div className="grid md:grid-cols-2 gap-5 mt-2">
            <div className="flex items-center">
              <Select
                label="Home Language"
                name="homeLanguageId"
                value={placeOfBirthAndReligion.homeLanguageId}
                onChange={handlePlaceOfBirthAndReligionChange}
                errMsg={placeOfBirthAndReligionError?.homeLanguageId}
                required
              >
                <RenderLanguageOptions />
              </Select>
            </div>
            <div className="flex items-center">
              <Select
                label="Is Client Born In Zambia"
                name="isZambianBorn"
                onChange={handlePlaceOfBirthAndReligionChange}
                value={placeOfBirthAndReligion.isZambianBorn}
                errMsg={placeOfBirthAndReligionError?.isZambianBorn}
                required
              >
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Select>
            </div>
            <div className="flex items-center">
              <Select
                label="Province of Birth"
                name="provinceId"
                onChange={handlePlaceOfBirthAndReligionChange}
                value={placeOfBirthAndReligion.provinceId}
                errMsg={placeOfBirthAndReligionError?.provinceId}
                // server key name ==  provinceId
                disabled={placeOfBirthAndReligion.isZambianBorn != "1"}
                required={placeOfBirthAndReligion.isZambianBorn == "1"}
              >
                <RenderSelectOptions options={province} />
              </Select>
            </div>
            <div className="flex items-center">
              <Select
                label="District of Birth"
                name="districtId"
                // server key name == districtId
                value={placeOfBirthAndReligion?.districtId}
                onChange={handlePlaceOfBirthAndReligionChange}
                errMsg={placeOfBirthAndReligionError?.districtId}
                disabled={placeOfBirthAndReligion.isZambianBorn != "1"}
                required={placeOfBirthAndReligion.isZambianBorn == "1"}
              >
                {/*  */}
                <RenderSelectOptions
                  options={district?.filter(
                    (dist) =>
                      dist.provinceId == placeOfBirthAndReligion.provinceId
                  )}
                />
              </Select>
            </div>
            <div className="flex items-center">
              <Input
                label="Place of Birth"
                name="birthPlace"
                onChange={handlePlaceOfBirthAndReligionChange}
                value={placeOfBirthAndReligion.birthPlace}
                errMsg={placeOfBirthAndReligionError?.birthPlace}
                disabled={placeOfBirthAndReligion.isZambianBorn == "1"}
                required={placeOfBirthAndReligion.isZambianBorn != "1"}
              />
            </div>
            <div className="flex items-center">
              <Select
                label="Religious Denomination"
                name="religion"
                value={placeOfBirthAndReligion.religion}
                onChange={handlePlaceOfBirthAndReligionChange}
                errMsg={placeOfBirthAndReligionError?.religion}
              >
                <RenderSelectOptions
                  options={Object.keys(religionsEnums).map((key) => ({
                    oid: key,
                    description: religionsEnums[key],
                  }))}
                />
              </Select>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default PlaceOfBirthAndReligious;

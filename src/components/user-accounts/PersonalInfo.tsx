import { ErrorsType, PersonalInfoType } from "@/types/user-accounts";
import React, { useEffect } from "react";
import Checkbox from "../core/form-elements/Checkbox";
import CustomNrc from "../core/form-elements/CustomNrc";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import FormSection from "../core/form-layouts/FormSection";

interface Props {
  personalInfo: PersonalInfoType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  noNrc: boolean;
  handleNoNRC: () => void;
  handleNrcChange: (e: string) => void;
  nrc: string;
  errors?: ErrorsType;
  isNrcValid?: boolean;
  editMode?: boolean;
}

function PersonalInfo({
  handleChange,
  personalInfo,
  noNrc,
  handleNoNRC,
  handleNrcChange,
  nrc,
  errors,
  isNrcValid,
  editMode = false,
}: Props) {
  // const nrcRef = React.createRef<HTMLInputElement>();
  const nrcRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nrcRef.current) {
      nrcRef.current.value = nrc;
    }
  }, [noNrc, nrcRef]);

  useEffect(() => {
    if (nrc && nrcRef.current) {
      nrcRef.current.value = nrc;
    }
  }, []);

  console.log("nrcRef", nrcRef);

  return (
    <>
      <FormSection titleText="Personal Information">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Input
            label="First Name"
            value={personalInfo.firstName}
            onChange={handleChange}
            name="firstName"
            required
            errMsg={errors.firstName}
          />
          <Input
            label="Surname"
            value={personalInfo.surname}
            onChange={handleChange}
            name="surname"
            required
            errMsg={errors.surname}
          />
          <DateInput
            label="Date of birth"
            selected={personalInfo.dob ? new Date(personalInfo.dob) : null}
            onChange={(date: Date) =>
              handleChange({
                target: { name: "dob", value: date.toISOString() },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            required
            errMsg={errors.dob}
          />
          <Select
            label="Sex"
            value={personalInfo.sex}
            name="sex"
            onChange={handleChange}
            required
            errMsg={errors.sex}
          >
            <option value="1">Male</option>
            <option value="2">Female</option>
          </Select>
          <div className="col-span-1 md:col-span-2">
            <Input
              label="Designation"
              value={personalInfo.designation}
              name="designation"
              onChange={handleChange}
              required
              errMsg={errors.designation}
            />
          </div>
          <CustomNrc
            label="NRC"
            {...(editMode && { state: nrc })}
            name="nrc"
            onChange={(e) => handleNrcChange(e.target.value)}
            disabled={noNrc}
            required
            errMsg={errors.nrc || (!isNrcValid ? "NRC already exists" : "")}
            ref={nrcRef}
          />
          <div className="col-span-1 flex items-center mt-5">
            <Checkbox
              label="I do not have NRC"
              onChange={handleNoNRC}
              checked={noNrc}
            />
          </div>
        </div>
      </FormSection>
    </>
  );
}

export default PersonalInfo;

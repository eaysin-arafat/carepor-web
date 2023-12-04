import DateInput from "@/components/core/form-elements/DatePicker";
import { RenderCountryOptions } from "@/components/core/form-elements/RenderSelectOptions";
import {
  ClientPersonalInfoErrorType,
  ClientPersonalInfoType,
} from "@/types/clientTypes";
import { getAgeMessage } from "@/utilities/date";
import Checkbox from "../../../core/form-elements/Checkbox";
import DatePicker from "../../../core/form-elements/CustomDatePicker";
import CustomNrc from "../../../core/form-elements/CustomNrc";
import Input from "../../../core/form-elements/Input";
import Select from "../../../core/form-elements/Select";
import SectionWrapper from "../../../core/form-layouts/SectionWrapper";

type Props = {
  personalInfo: ClientPersonalInfoType;
  personalInfoError: ClientPersonalInfoErrorType;
  handlePersonalInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  alreadyExists: string;
};

function ClientPersonalInfo({
  personalInfo,
  handlePersonalInfoChange,
  personalInfoError,
  alreadyExists,
}: Props) {
  return (
    <>
      <SectionWrapper title="Personal Information">
        <div className="grid md:grid-cols-6 gap-5">
          <div className="col-span-6 md:col-span-3">
            <Input
              label="First Name"
              name={"firstName"}
              value={personalInfo.firstName}
              onChange={handlePersonalInfoChange}
              errMsg={personalInfoError?.firstName}
              required
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <Input
              label="Surname"
              name={"surname"}
              value={personalInfo.surname}
              onChange={handlePersonalInfoChange}
              errMsg={personalInfoError?.surname}
              required
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <DateInput
              label="Date of birth"
              selected={personalInfo?.dob ? new Date(personalInfo?.dob) : null}
              onChange={(date: Date) =>
                handlePersonalInfoChange({
                  target: { name: "dob", value: date.toISOString() },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              required
              errMsg={personalInfoError?.dob}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Select
              label="Sex"
              name="sex"
              value={personalInfo.sex}
              onChange={handlePersonalInfoChange}
              errMsg={personalInfoError?.sex}
              required
            >
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Select>
          </div>
          <div className="col-span-6 flex justify-start items-center gap-2">
            <div className="flex items-center justify-between ">
              <Checkbox
                label="Date of birth is estimated"
                name="isDOBEstimated"
                checked={personalInfo.isDOBEstimated}
                onChange={handlePersonalInfoChange}
              />
            </div>
            {/* SHOW CLIENT AGE */}
            {personalInfo?.dob && (
              <div className=" font-semibold ">
                Age:
                <span
                  className={` ${
                    getAgeMessage(personalInfo?.dob)?.error
                      ? "text-red-500"
                      : ""
                  } `}
                >
                  {" "}
                  {getAgeMessage(personalInfo?.dob)?.ageMessage}
                </span>
              </div>
            )}
          </div>
          <div className="col-span-6 md:col-span-3">
            <CustomNrc
              label="NRC"
              name="nrc"
              state={personalInfo.nrc}
              onChange={handlePersonalInfoChange}
              errMsg={alreadyExists || personalInfoError?.nrc}
              required={!personalInfo.noNRC}
              disabled={personalInfo.noNRC}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Select
              label="Country"
              name="countryId"
              value={personalInfo.countryId}
              onChange={handlePersonalInfoChange}
              errMsg={personalInfoError?.countryId}
              required
            >
              <RenderCountryOptions />
            </Select>
          </div>
          <div className="col-span-6 flex items-center">
            <Checkbox
              label="Client does not have NRC"
              name="noNRC"
              checked={personalInfo.noNRC}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input
              label="NAPSA Number"
              name="napsaNumber"
              value={personalInfo.napsaNumber}
              onChange={handlePersonalInfoChange}
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input
              label="UnderFive Card Number"
              name="underFiveCardNumber"
              value={personalInfo.underFiveCardNumber}
              onChange={handlePersonalInfoChange}
              disabled={false} // will update disable as client not age more than 5 years old
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <DatePicker
              label="Registration Date"
              name="registrationDate"
              value={personalInfo.registrationDate}
              onChange={handlePersonalInfoChange}
              errMsg={personalInfoError?.registrationDate}
              required
            />
          </div>
          {/* Test */}
        </div>
      </SectionWrapper>
    </>
  );
}

export default ClientPersonalInfo;

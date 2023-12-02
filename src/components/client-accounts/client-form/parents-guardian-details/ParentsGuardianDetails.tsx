import {
  ClientParentsOrGuardiansErrorType,
  ClientParentsOrGuardiansType,
} from "@/types/clientFormTypes";
import Checkbox from "../../../core/form-elements/Checkbox";
// import CustomNrc from "../form-elements/CustomNrc";
import CustomNrc from "@/components/core/form-elements/CustomNrc";
import RenderSelectOptions, {
  RenderCountryOptions,
} from "@/components/core/form-elements/RenderSelectOptions";
import { relationshipsEnums } from "@/enum/clients";
import Input from "../../../core/form-elements/Input";
import Select from "../../../core/form-elements/Select";
import FormSection from "../../../core/form-layouts/FormSection";

type Props = {
  parentsOrGuardians: ClientParentsOrGuardiansType;
  parentsOrGuardiansError: ClientParentsOrGuardiansErrorType;
  handleParentsGuardianDetailsChange: (e: React.ChangeEvent) => void;
  // guardianSECError: ParentORGuardianSECError;
};

function ParentsGuardianDetails({
  parentsOrGuardians,
  parentsOrGuardiansError,
  handleParentsGuardianDetailsChange,
}: // guardianSECError,
Props) {
  // useEffect(() => {
  //   if (guardianSECError?.isParentsOrGuardianFormError) {
  //     setFormErrMsg(
  //       "Please complete at last one section of mother, father or guardian."
  //     );
  //   } else {
  //     setFormErrMsg("");
  //   }
  // }, [guardianSECError?.isParentsOrGuardianFormError]);

  return (
    <>
      <FormSection
        titleText="Parents or Guardian Details"
        noteText="If the client's age is below 18 years, please provide the information of either parents or guardian."
        sectionErrorMsg={parentsOrGuardiansError?.parentsOrGuardianFormError}
      >
        <>
          {/* Mother Details  */}
          <h1 className="text-xl font-semibold text-secondaryColor mb-2">
            Mother :
          </h1>
          {parentsOrGuardiansError?.mothersDataIncomplete && (
            <span
              className={`text-sm mb-3 text-red-500 block md:w-[80%] w-[90%] leading-4 $`}
            >
              Please complete mothers details.
            </span>
          )}

          <div className="grid md:grid-cols-6 gap-5">
            <div className="col-span-6 md:col-span-3">
              <Input
                label="First Name"
                name="mothersFirstName"
                value={parentsOrGuardians.mothersFirstName}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.mothersFirstName}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input
                label="Surname"
                name="mothersSurname"
                value={parentsOrGuardians.mothersSurname}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.mothersSurname}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <CustomNrc
                label="NRC"
                name="mothersNRC"
                state={parentsOrGuardians.mothersNRC}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.mothersNRC}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input
                label="NAPSA Number"
                name="motherNAPSANumber"
                value={parentsOrGuardians.motherNAPSANumber}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.motherNAPSANumber}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Select
                label="Nationality"
                name="motherNationality"
                value={parentsOrGuardians.motherNationality}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.motherNationality}
              >
                <RenderCountryOptions />
              </Select>
            </div>
            <div className="col-span-6 md:col-span-3 flex items-center -mt-9">
              <Checkbox
                label="Mother Deceased"
                name="isMotherDeceased"
                checked={parentsOrGuardians.isMotherDeceased}
                onChange={handleParentsGuardianDetailsChange}
                marginTop={"mt-14"}
              />
            </div>
          </div>

          {/* Father Details  */}
          <h1 className="text-xl font-semibold text-secondaryColor mb-2 mt-10">
            Father :
          </h1>
          {parentsOrGuardiansError?.fathersDataIncomplete && (
            <span
              className={`text-sm mb-3 text-red-500 block md:w-[80%] w-[90%] leading-4 $`}
            >
              Please complete fathers details.
            </span>
          )}
          <div className="grid md:grid-cols-6 gap-5">
            <div className="col-span-6 md:col-span-3">
              <Input
                label="First Name"
                name="fathersFirstName"
                value={parentsOrGuardians.fathersFirstName}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.fathersFirstName}
                required
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input
                label="Surname"
                name="fathersSurname"
                value={parentsOrGuardians.fathersSurname}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.fathersSurname}
                required
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <CustomNrc
                label="NRC"
                name="fathersNRC"
                state={parentsOrGuardians.fathersNRC}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.fathersNRC}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input
                label="NAPSA Number"
                name="fatherNAPSANumber"
                value={parentsOrGuardians.fatherNAPSANumber}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.fatherNAPSANumber}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Select
                label="Nationality"
                name="fatherNationality"
                value={parentsOrGuardians.fatherNationality}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.fatherNationality}
              >
                <RenderCountryOptions />
              </Select>
            </div>
            <div className="col-span-6 md:col-span-3 flex items-center -mt-5">
              <Checkbox
                label="Father Deceased"
                name="isFatherDeceased"
                checked={parentsOrGuardians.isFatherDeceased}
                onChange={handleParentsGuardianDetailsChange}
                marginTop={"mt-10"}
              />
            </div>
          </div>

          {/* Guardian   Details  */}
          <h1 className="text-xl font-semibold text-secondaryColor mb-2 mt-10">
            Guardian :
          </h1>
          {parentsOrGuardiansError?.guardianDataIncomplete && (
            <span
              className={`text-sm mb-3 text-red-500 block md:w-[80%] w-[90%] leading-4 $`}
            >
              Please complete guardian details.
            </span>
          )}
          <div className="grid md:grid-cols-6 gap-5">
            <div className="col-span-6 md:col-span-3">
              <Input
                label="First Name"
                name="guardiansFirstName"
                value={parentsOrGuardians.guardiansFirstName}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.guardiansFirstName}
                required
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input
                label="Surname"
                name="guardiansSurname"
                value={parentsOrGuardians.guardiansSurname}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.guardiansSurname}
                required
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <CustomNrc
                label="NRC"
                name="guardiansNRC"
                state={parentsOrGuardians.guardiansNRC}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.guardiansNRC}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Input
                label="NAPSA Number"
                name="guardianNAPSANumber"
                value={parentsOrGuardians.guardianNAPSANumber}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.guardianNAPSANumber}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Select
                label="Nationality"
                name="guardianNationality"
                value={parentsOrGuardians.guardianNationality}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.guardianNationality}
              >
                <RenderCountryOptions />
              </Select>
            </div>
            <div className="col-span-6  md:col-span-3 flex items-center">
              <Select
                label="Relationship"
                name="guardianRelationship"
                value={parentsOrGuardians.guardianRelationship}
                onChange={handleParentsGuardianDetailsChange}
                errMsg={parentsOrGuardiansError?.guardianRelationship}
              >
                <RenderSelectOptions
                  options={Object.keys(relationshipsEnums).map((key) => ({
                    oid: key,
                    description: relationshipsEnums[key],
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

export default ParentsGuardianDetails;

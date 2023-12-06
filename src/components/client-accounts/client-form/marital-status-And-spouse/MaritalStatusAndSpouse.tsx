import RenderSelectOptions from "@/components/core/form-elements/RenderSelectOptions";
import { maritalStatusEnums } from "@/enum/clients";
import {
  ClientMaritalStatusAndSpouseErrorType,
  ClientMaritalStatusAndSpouseType,
} from "@/types/clientTypes";
import Input from "../../../core/form-elements/Input";
import Select from "../../../core/form-elements/Select";
import FormSection from "../../../core/form-layouts/FormSection";

type Props = {
  maritalStatusAndSpouse: ClientMaritalStatusAndSpouseType;
  maritalStatusAndSpouseError: ClientMaritalStatusAndSpouseErrorType;
  handleMaritalStatusAndSpouseChange: (e: React.ChangeEvent) => void;
};

function MaritalStatusAndSpouse({
  maritalStatusAndSpouse,
  maritalStatusAndSpouseError,
  handleMaritalStatusAndSpouseChange,
}: Props) {
  return (
    <>
      <FormSection titleText="Marital Status & Spouse Details">
        <>
          {/* Marital Status & Spouse Details */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="col-span-2 flex items-center">
              <Select
                label="Marital Status"
                name="maritalStatus"
                required
                value={maritalStatusAndSpouse.maritalStatus}
                onChange={handleMaritalStatusAndSpouseChange}
                errMsg={maritalStatusAndSpouseError?.maritalStatus}
              >
                <RenderSelectOptions
                  options={Object.keys(maritalStatusEnums).map((key) => ({
                    oid: key,
                    description: maritalStatusEnums[key],
                  }))}
                />
              </Select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                label="Spouse First Name"
                name="spousesLegalName"
                value={maritalStatusAndSpouse.spousesLegalName}
                onChange={handleMaritalStatusAndSpouseChange}
                errMsg={maritalStatusAndSpouseError?.spousesLegalName}
                disabled={maritalStatusAndSpouse.maritalStatus != "2"}
                required={maritalStatusAndSpouse.maritalStatus == "2"}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                label="Spouse Surname"
                name="spousesSurname"
                value={maritalStatusAndSpouse.spousesSurname}
                onChange={handleMaritalStatusAndSpouseChange}
                errMsg={maritalStatusAndSpouseError?.spousesSurname}
                disabled={maritalStatusAndSpouse.maritalStatus != "2"}
                required={maritalStatusAndSpouse.maritalStatus == "2"}
              />
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default MaritalStatusAndSpouse;

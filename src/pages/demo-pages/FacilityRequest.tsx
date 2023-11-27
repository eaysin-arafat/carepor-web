import Button from "@/components/form-elements/Button";
import Select from "@/components/form-elements/Select";
import FormLayout from "@/components/form-elements/form-layouts/FormLayout";

type Props = {};

const FacilityRequest = ({}: Props) => {
  return (
    <div>
      <FormLayout
        mainTitle="Request Facility Login"
        note="Please select a Facility to send login request."
      >
        <form action="" className="mt-5">
          <div className="flex flex-col gap-5">
            <Select label="Province" required>
              <option value="">Select</option>
              <option value="">Select 1</option>
              <option value="">Select 2</option>
            </Select>
            <Select label="District" required>
              <option value="">Select</option>
              <option value="">Select 1</option>
              <option value="">Select 2</option>
            </Select>
            <Select label="Facility" required>
              <option value="">Select</option>
              <option value="">Select 1</option>
              <option value="">Select 2</option>
            </Select>
          </div>
          <div className="mt-5">
            <Button type="submit" title="Submit Request" />
          </div>
          <div className="mt-5">
            <Button type="outline" title="Cancel" />
          </div>
        </form>
      </FormLayout>
    </div>
  );
};

export default FacilityRequest;

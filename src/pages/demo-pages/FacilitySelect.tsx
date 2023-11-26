import Select from "@/components/form-elements/Select";
import FormLayout from "../../components/form-elements/form-layouts/FormLayout";
import Button from "@/components/form-elements/Button";

type Props = {};

const SelectFacility = ({}: Props) => {
  return (
    <>
      <FormLayout
        mainTitle="Select Facility"
        note="Please select a facility to enter."
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
          <div className="text-right mt-3">
            <p className="text-grayColor text-xs">
              Send Facility Access Request
            </p>
          </div>
          <div className="mt-5">
            <Button type="submit" title="Enter" />
          </div>
          <div className=" text-center mt-2">
            <button className="text-primaryColor px-3 py-2">Logout</button>
          </div>
        </form>
      </FormLayout>
    </>
  );
};

export default SelectFacility;

import Input from "@/components/form-elements/Input";

import Button from "@/components/form-elements/Button";
import Select from "@/components/form-elements/Select";
import FormLayout from "@/components/form-elements/form-layouts/FormLayout";

function RecoveryRequest() {
  return (
    <>
      <FormLayout mainTitle="Login Recovery Request">
        <form action="">
          <div className="grid gap-5">
            <Input label="Username" />
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-1">
                <Select label="Code">
                  <option value="">Select</option>
                  <option value="">+880</option>
                  <option value="">+981</option>
                </Select>
              </div>
              <div className="col-span-3">
                <Input label="Cellphone" />
              </div>
            </div>
            <div className="mt-5">
              <Button type="button" title="Submit" />
            </div>
          </div>
        </form>
      </FormLayout>
    </>
  );
}

export default RecoveryRequest;

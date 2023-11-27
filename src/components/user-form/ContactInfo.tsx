import Input from "../form-elements/Input";
import Textarea from "../form-elements/Textarea";
import FormSection from "../form-elements/form-layouts/FormSection";

type Props = {};

function ContactInfo({}: Props) {
  return (
    <>
      <FormSection titleText="Contact Information">
        <>
          <div className="">
            <Textarea
              required
              className="w-[100%]"
              label="Contact Address"
              placeholder="Add Address"
              max={500}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-4">
            <Input required label="Code" placeholder="Add Code" />
            <div>
              <Input required label="Cellphone" placeholder="Phone" />
              <p className="">Note: Cellphone must be unique.</p>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default ContactInfo;

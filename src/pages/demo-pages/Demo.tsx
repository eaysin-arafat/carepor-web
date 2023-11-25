import Input from "@/components/form-elements/Input";
import Button from "@/components/form-elements/button";
import Password from "@/components/form-elements/password";
import Select from "@/components/form-elements/select";
import Textarea from "@/components/form-elements/textarea";

type Props = {};

const Demo = (props: Props) => {
  return (
    <>
      <Input name="Name" label="Your Name" numberOnly={true} />
      <Textarea label="Textarea" />
      <Password label="Password" value="adas" />
      <Select label="Label Select">
        <option value="">Select</option>
        <option value="">Select</option>
        <option value="">Select</option>
      </Select>
      <br />
      <Button type="link" title="Button" />
    </>
  );
};

export default Demo;

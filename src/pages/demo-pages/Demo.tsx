import Button from "@/components/form-elements/Button";
import Checkbox from "@/components/form-elements/Checkbox";
import Input from "@/components/form-elements/Input";
import Password from "@/components/form-elements/password";
import Radio from "@/components/form-elements/Radio";
import Select from "@/components/form-elements/Select";
import Textarea from "@/components/form-elements/Textarea";

type Props = {};

const Demo = ({}: Props) => {
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
      <Button type="button" title="Button" />
      <Checkbox label="Checkbox"/>
      <Radio label="Radio" name="1" value="radio1"/>
      <Radio label="Radio" name="1" value="radio2"/>
    </>
  );
};

export default Demo;

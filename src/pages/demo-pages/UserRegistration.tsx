import Input from "@/components/form-elements/Input";
import FormLayout from "../../components/form-elements/form-layouts/FormLayout";
import FormSection from "../../components/form-elements/form-layouts/FormSection";

type Props = {};

function UserRegistration({}: Props) {
  return (
    <FormLayout
      emergencyAccess
      className="!min-w-[950px] "
      subTitle="Patient Profile Registration"
    >
      <form action="" className="my-5">
        {/* Parents or Guardian Details" */}
        <FormSection
          titleText="Parents or Guardian Details"
          titleBorder
          noteText="If the Client’s age is below 18 yaers, please provide the information of wither parents or guardian."
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <Input label="name" />
            <Input label="name" />
          </div>
        </FormSection>
      </form>
    </FormLayout>
  );
}

export default UserRegistration;

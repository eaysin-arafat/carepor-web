import AdmissionForm from "@/components/admissions/AdmissionForm";
import Button from "@/components/core/buttons/Button";
import FormLayout from "@/components/core/form-layouts/FormLayout";

type Props = {};

function CreateAdmission({}: Props) {
  return (
    <>
      <FormLayout emergencyAccess subTitle="New Patient Admission">
        <form action="" className="my-5">
          <AdmissionForm />
          <div className="grid grid-cols-2 gap-5 mt-4">
            <Button type="submit" title="Save & Admit" />
            <Button type="outline" title="Cancel" />
          </div>
        </form>
      </FormLayout>
    </>
  );
}

export default CreateAdmission;

import AdmissionForm from "@/components/admissions/AdmissionForm";
import Button from "@/components/core/buttons/Button";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";

type Props = {};

function CreateAdmission({}: Props) {
  return (
    <>
      <FormWrapper
        emergencyAccess
        title="New Patient Admission"
        titleClass="text-center"
        maxWidth="max-w-[570px]"
        contentCenter
        noBackground
      >
        <form action="" className="my-5">
          <AdmissionForm />
          <div className="grid grid-cols-2 gap-5 mt-4">
            <Button type="submit" title="Save & Admit" />
            <Button type="outline" title="Cancel" />
          </div>
        </form>
      </FormWrapper>
    </>
  );
}

export default CreateAdmission;
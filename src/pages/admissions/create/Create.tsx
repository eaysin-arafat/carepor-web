import AdmissionForm from "@/components/admissions/AdmissionForm";
import Button from "@/components/core/buttons/Button";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";

type Props = {};

function CreateAdmission({}: Props) {
  return (
    <>
      <div className="max-w-[570px] mx-auto my-auto mt-32">
      <FormWrapper
        emergencyAccess
        title="New Patient Admission"
        titleClass="text-center"
      >
        <form action="" className="my-5">
          <AdmissionForm />
          <div className="grid grid-cols-2 gap-5 mt-4">
            <Button type="submit" title="Save & Admit" />
            <Button type="outline" title="Cancel" />
          </div>
        </form>
      </FormWrapper>
      </div>
    </>
  );
}

export default CreateAdmission;
// import AdmissionForm from "@/components/admissions/AdmissionForm";
// import Button from "@/components/core/buttons/Button";
// import FormLayout from "@/components/core/form-layouts/FormLayout";

// type Props = {};

// function CreateAdmission({}: Props) {
//   return (
//     <>
//       <FormLayout emergencyAccess subTitle="New Patient Admission">
//         <form action="" className="my-5">
//           <AdmissionForm />
//           <div className="grid grid-cols-2 gap-5 mt-4">
//             <Button type="submit" title="Save & Admit" />
//             <Button type="outline" title="Cancel" />
//           </div>
//         </form>
//       </FormLayout>
//     </>
//   );
// }

// export default CreateAdmission;

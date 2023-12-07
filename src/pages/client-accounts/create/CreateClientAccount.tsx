import Container from "@/components/core/container/Container";
import MultiStepping from "@/components/shared/multi-step/MultiStepping";
import ClientForm from "../../../components/client-accounts/client-form/index/ClientForm";
import useCreateClientAccount from "../../../components/client-accounts/client-form/index/useClientAccount";

function CreateClientAccount() {
  const clientCreateManager = useCreateClientAccount(undefined, undefined);
  const { formStepState } = clientCreateManager;
  // form step state and handler
  const { stepTitle, stateCount } = formStepState;

  return (
    <>
      <h2 className="heading_2 text-center mt-8">
        Client Profile Registration
      </h2>
      <p className="text-center mt-2 pb-2">
        Fields marked by <span className="text-dangerColor">*</span> are
        mandatory
      </p>
      <Container className="max-w-[1069px] bg-whiteBgColor mt-5 rounded-xl mb-5">
        <>
          <div className="">
            <MultiStepping stepCount={stateCount} stepTitle={stepTitle} />{" "}
          </div>
          <div className="max-w-[894px] mx-auto py-5">
            <ClientForm
              clientManager={clientCreateManager}
              isEditForm={false}
            />
          </div>
        </>
      </Container>
    </>
  );
}

export default CreateClientAccount;

// import FormWrapper from "@/components/core/form-layouts/FormWrapper";
// import MultiStepComponent from "@/components/shared/multi-step/multiStep";
// import ClientForm from "../../../components/client-accounts/client-form/index/ClientForm";
// import useCreateClientAccount from "../../../components/client-accounts/client-form/index/useClientAccount";

// function CreateClientAccount() {
//   const clientCreateManager = useCreateClientAccount(undefined, undefined);
//   const { formStepState } = clientCreateManager;
//   // form step state and handler
//   const { stepTitle, stateCount } = formStepState;

//   return (
//     <>
//       <div className="max-w-[1022px] mx-auto ">
//         <MultiStepComponent active={stateCount} title={stepTitle} />
//       </div>
//       <div className="my-8">
//         <FormWrapper
//           isAppNameHide
//           title="Client Profile Registration"
//           titleClass="text-center"
//           maxWidth="max-w-[1022px]"
//           noBackground
//           className="rounded-lg"
//           childrenMaxWidth="w-full"
//         >
//           <ClientForm clientManager={clientCreateManager} isEditForm={false} />
//         </FormWrapper>
//       </div>
//     </>
//   );
// }

// export default CreateClientAccount;

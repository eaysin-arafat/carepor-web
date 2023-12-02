import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import ClientForm from "../../../components/client-accounts/client-form/index/ClientForm";
import useCreateClientAccount from "../../../components/client-accounts/client-form/index/useClientAccount";

function CreateClientAccount() {
  const clientCreateManager = useCreateClientAccount(undefined, undefined);
  const { formStepState } = clientCreateManager;
  // form step state and handler
  const { stepTitle, stateCount } = formStepState;

  return (
    <>
      <div className="max-w-[1022px] mx-auto ">
        <MultiStepComponent active={stateCount} title={stepTitle} />
      </div>
      <div className="my-8">
        <FormWrapper
          title="Client Profile Registration"
          titleClass="text-center"
          maxWidth="max-w-[1022px]"
          noBackground
        >
          <ClientForm clientManager={clientCreateManager} isEditForm={false} />
        </FormWrapper>
      </div>
    </>
  );
}

export default CreateClientAccount;

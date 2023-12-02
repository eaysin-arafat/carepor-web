import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import { useParams } from "react-router-dom";
import ClientForm from "../../../components/client-accounts/client-form/index/ClientForm";
import useClientAccount from "../../../components/client-accounts/client-form/index/useClientAccount";
import { useReadClientByKeyQuery } from "@/features/client/client-api";

function ClientAccountEdit() {
  const params = useParams();
  const editClientId = params.id;
  const ClientByKeyQuery = useReadClientByKeyQuery(editClientId, {
    skip: !editClientId,
    refetchOnMountOrArgChange: true,
  });

  const {
    data: editClient,
    isSuccess,
    isError,
    error,
    status,
  } = ClientByKeyQuery;
  const clientEditManager = useClientAccount(ClientByKeyQuery, true);

  const { formStepState } = clientEditManager;
  // form step state and handler
  const { stepTitle, stateCount } = formStepState;

  return (
    <>
      <div className="max-w-[1022px] mx-auto ">
        <MultiStepComponent active={stateCount} title={stepTitle} />
      </div>
      <div className="my-8">
        <FormWrapper
          title="Client Profile Edit"
          titleClass="text-center"
          maxWidth="max-w-[1022px]"
          noBackground
        >
          <ClientForm clientManager={clientEditManager} isEditForm={true} />
        </FormWrapper>
      </div>
    </>
  );
}

export default ClientAccountEdit;

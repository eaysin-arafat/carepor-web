import Container from "@/components/core/container/Container";
import MultiStepping from "@/components/shared/multi-step/MultiStepping";
import { useReadClientByKeyQuery } from "@/features/client/client-api";
import { useParams } from "react-router-dom";
import ClientForm from "../../../components/client-accounts/client-form/index/ClientForm";
import useClientAccount from "../../../components/client-accounts/client-form/index/useClientAccount";

function ClientAccountEdit() {
  const params = useParams();
  const editClientId = params.id;
  const ClientByKeyQuery = useReadClientByKeyQuery(editClientId, {
    skip: !editClientId,
    refetchOnMountOrArgChange: true,
  });

  const { isSuccess, isError } = ClientByKeyQuery;
  const clientEditManager = useClientAccount(ClientByKeyQuery, true);

  const { formStepState } = clientEditManager;
  // form step state and handler
  const { stepTitle, stateCount } = formStepState;

  return (
    <div className="px-2">
      <h2 className="heading_2 text-center mt-8">Client Profile Edit</h2>
      <p className="text-center mt-2 pb-2">
        Fields marked by <span className="text-dangerColor">*</span> are
        mandatory
      </p>
      <Container className="max-w-[1069px] bg-whiteBgColor mt-5 rounded-xl mb-5">
        <>
          <div className="">
            <MultiStepping stepCount={stateCount} stepTitle={stepTitle} />
          </div>
          <div className="max-w-[894px] mx-auto py-5 px-2">
            {isSuccess && (
              <ClientForm clientManager={clientEditManager} isEditForm={true} />
            )}
            {isError && <div>There was an error.</div>}
          </div>
        </>
      </Container>
    </div>
  );
}

export default ClientAccountEdit;

//! Old Stepping
// import FormWrapper from "@/components/core/form-layouts/FormWrapper";
// import MultiStepComponent from "@/components/shared/multi-step/multiStep";
// import { useReadClientByKeyQuery } from "@/features/client/client-api";
// import { useParams } from "react-router-dom";
// import ClientForm from "../../../components/client-accounts/client-form/index/ClientForm";
// import useClientAccount from "../../../components/client-accounts/client-form/index/useClientAccount";

// function ClientAccountEdit() {
//   const params = useParams();
//   const editClientId = params.id;
//   const ClientByKeyQuery = useReadClientByKeyQuery(editClientId, {
//     skip: !editClientId,
//     refetchOnMountOrArgChange: true,
//   });

//   const { isSuccess, isError } = ClientByKeyQuery;
//   const clientEditManager = useClientAccount(ClientByKeyQuery, true);

//   const { formStepState } = clientEditManager;
//   // form step state and handler
//   const { stepTitle, stateCount } = formStepState;

//   return (
//     <>
//       <div className="max-w-[1022px] mx-auto ">
//         <MultiStepComponent active={stateCount} title={stepTitle} />
//       </div>
//       <div className="my-8">
//         <FormWrapper
//           title="Client Profile Edit"
//           titleClass="text-center"
//           maxWidth="max-w-[1022px]"
//           noBackground
//           isAppNameHide
//           className="rounded-lg"
//           childrenMaxWidth="w-full"
//         >
//           {/* {isLoading && <div>Loading...</div>} */}
//           {isSuccess && (
//             <ClientForm clientManager={clientEditManager} isEditForm={true} />
//           )}
//           {isError && <div>There was an error.</div>}
//         </FormWrapper>
//       </div>
//     </>
//   );
// }

// export default ClientAccountEdit;

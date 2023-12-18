import BackButton from "@/components/core/buttons/BackButton";
import LinkButton from "@/components/core/buttons/LinkButton";
import NextButton from "@/components/core/buttons/NextButton";
import Container from "@/components/core/container/Container";
import MultiStepping from "@/components/shared/multi-step/MultiStepping";
import ContactInfo from "@/components/user-accounts/ContactInfo";
import PersonalInfo from "@/components/user-accounts/PersonalInfo";
import { URLClientSearch } from "@/routers/client";
import useEditUserAccounts from "./useEdit";

function EditUserAccount() {
  const {
    contactInfo,
    countries,
    disabledBackButton,
    errors,
    handleBack,
    handleCellphoneChange,
    handleChangeCellphoneAndCode,
    handleContactInfoChange,
    handleNext,
    handleNrcChange,
    handlePersonalInfoChange,
    handleSetNoNRC,
    handleSubmit,
    isCellphoneValid,
    isNRCValid,
    noNRC,
    nrc,
    personalInfo,
    stateCount,
    stepTitle,
  } = useEditUserAccounts();

  // console.log("nrc", contactInfo);

  return (
    <div className="mx-2">
      <h2 className="heading_2 text-center mt-8">User Profile Edit</h2>
      <p className="text-center mt-2 pb-2">
        Fields marked by <span className="text-dangerColor">*</span> are
        mandatory
      </p>
      <Container className="max-w-[1069px] bg-whiteBgColor mt-5 rounded-xl mb-5">
        <>
          <div className="">
            <MultiStepping stepCount={stateCount} stepTitle={stepTitle} />
          </div>
          <div className="max-w-[894px] mx-auto py-10">
            <form action="" className="mx-2" onSubmit={handleSubmit}>
              {stateCount === 1 && (
                <PersonalInfo
                  handleChange={handlePersonalInfoChange}
                  handleNoNRC={handleSetNoNRC}
                  handleNrcChange={handleNrcChange}
                  noNrc={noNRC}
                  nrc={nrc}
                  personalInfo={personalInfo}
                  errors={errors}
                  isNrcValid={isNRCValid}
                  editMode={true}
                  key="personal-info-edit-user"
                />
              )}
              {stateCount === 2 && (
                <ContactInfo
                  contactInfo={contactInfo}
                  countries={countries}
                  handleCellphoneChange={handleCellphoneChange}
                  handleChangeCellphoneAndCode={handleChangeCellphoneAndCode}
                  handleChange={handleContactInfoChange}
                  errors={errors}
                  isCellphoneValid={isCellphoneValid}
                  key="contact-info-edit-user"
                  editMode={true}
                />
              )}

              <div className="flex flex-wrap gap-5 mt-5 mx-2 justify-between">
                <LinkButton
                  title="Cancel"
                  link={URLClientSearch()}
                  className="order-last xs:order-first"
                />
                <div className="flex gap-5 justify-end">
                  <BackButton
                    disabled={disabledBackButton}
                    title="Back"
                    type="button"
                    onClick={handleBack}
                    className=""
                  />
                  {stateCount === 2 && (
                    <NextButton
                      title="Submit"
                      type="submit"
                      onClick={handleNext}
                      className=""
                    />
                  )}
                  {stateCount !== 2 && (
                    <NextButton
                      title="Next"
                      type="button"
                      onClick={handleNext}
                      className=""
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </>
      </Container>
    </div>
  );
}

export default EditUserAccount;

//! Old Stepping
// import BackButton from "@/components/core/buttons/BackButton";
// import LinkButton from "@/components/core/buttons/LinkButton";
// import NextButton from "@/components/core/buttons/NextButton";
// import FormWrapper from "@/components/core/form-layouts/FormWrapper";
// import MultiStepComponent from "@/components/shared/multi-step/multiStep";
// import ContactInfo from "@/components/user-accounts/ContactInfo";
// import PersonalInfo from "@/components/user-accounts/PersonalInfo";
// import { URLClientSearch } from "@/routers/client";
// import useEditUserAccounts from "./useEdit";

// function EditUserAccount() {
//   const {
//     contactInfo,
//     countries,
//     disabledBackButton,
//     errors,
//     handleBack,
//     handleCellphoneChange,
//     handleChangeCellphoneAndCode,
//     handleContactInfoChange,
//     handleNext,
//     handleNrcChange,
//     handlePersonalInfoChange,
//     handleSetNoNRC,
//     handleSubmit,
//     isCellphoneValid,
//     isLoading,
//     isNRCValid,
//     noNRC,
//     nrc,
//     personalInfo,
//     stateCount,
//     stepTitle,
//   } = useEditUserAccounts();

//   console.log("nrc", contactInfo);

//   return (
//     <>
//       <div className="max-w-[700px] mx-auto ">
//         <MultiStepComponent active={stateCount} title={stepTitle} />
//       </div>
//       <div className="my-8">
//         <FormWrapper
//           title="User Profile Edit"
//           titleClass="text-center"
//           maxWidth="max-w-[1022px]"
//           noBackground
//           isAppNameHide
//           className="rounded-lg"
//           childrenMaxWidth="w-full"
//         >
//           <>
//             <form action="" className="my-5" onSubmit={handleSubmit}>
//               {stateCount === 1 && (
//                 <PersonalInfo
//                   handleChange={handlePersonalInfoChange}
//                   handleNoNRC={handleSetNoNRC}
//                   handleNrcChange={handleNrcChange}
//                   noNrc={noNRC}
//                   nrc={nrc}
//                   personalInfo={personalInfo}
//                   errors={errors}
//                   isNrcValid={isNRCValid}
//                   editMode={true}
//                   key="personal-info-edit-user"
//                 />
//               )}
//               {stateCount === 2 && (
//                 <ContactInfo
//                   contactInfo={contactInfo}
//                   countries={countries}
//                   handleCellphoneChange={handleCellphoneChange}
//                   handleChangeCellphoneAndCode={handleChangeCellphoneAndCode}
//                   handleChange={handleContactInfoChange}
//                   errors={errors}
//                   isCellphoneValid={isCellphoneValid}
//                   key="contact-info-edit-user"
//                   editMode={true}
//                 />
//               )}

//               <div className="flex gap-5 mt-5 justify-between">
//                 <LinkButton title="Cancel" link={URLClientSearch()} />
//                 <div className="flex gap-5 justify-end">
//                   <BackButton
//                     disabled={disabledBackButton}
//                     title="Back"
//                     type="button"
//                     onClick={handleBack}
//                     className="w-40"
//                   />
//                   {stateCount === 2 && (
//                     <NextButton
//                       title="Submit"
//                       type="submit"
//                       onClick={handleNext}
//                       className=""
//                     />
//                   )}
//                   {stateCount !== 2 && (
//                     <NextButton
//                       title="Next"
//                       type="button"
//                       onClick={handleNext}
//                       className="w-40"
//                     />
//                   )}
//                 </div>
//               </div>
//             </form>
//           </>
//         </FormWrapper>
//       </div>
//     </>
//   );
// }

// export default EditUserAccount;

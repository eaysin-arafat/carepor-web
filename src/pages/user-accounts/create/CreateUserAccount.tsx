import BackButton from "@/components/core/buttons/BackButton";
import LinkButton from "@/components/core/buttons/LinkButton";
import NextButton from "@/components/core/buttons/NextButton";
import Container from "@/components/core/container/Container";
import MultiStepping from "@/components/shared/multi-step/MultiStepping";
import ContactInfo from "@/components/user-accounts/ContactInfo";
import LoginInfo from "@/components/user-accounts/LoginInfo";
import PersonalInfo from "@/components/user-accounts/PersonalInfo";
import { URLUserLogin } from "@/routers/public";
import useUserRegistration from "./useCreate";

function CreateUserAccount() {
  const {
    contactInfo,
    countries,
    errors,
    handleCellphoneChange,
    handleChangeCellphoneAndCode,
    handleContactInfoChange,
    handleLoginInfoChange,
    handleNrcChange,
    handlePersonalInfoChange,
    handleSubmit,
    handleUsernameChange,
    isCellphoneValid,
    isNRCValid,
    isUsernameValid,
    loginInfo,
    noNRC,
    nrc,
    personalInfo,
    username,
    handleSetNoNRC,
    disabledBackButton,
    handleBack,
    handleNext,
    stateCount,
    stepTitle,
  } = useUserRegistration();

  return (
    <>
      <h2 className="heading_2 text-center mt-8">
        User Profile Registration
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
          <div className="max-w-[894px] mx-auto py-10">
            <form action="" onSubmit={handleSubmit}>
              {stateCount === 1 && (
                <PersonalInfo
                  personalInfo={personalInfo}
                  handleChange={handlePersonalInfoChange}
                  noNrc={noNRC}
                  handleNoNRC={handleSetNoNRC}
                  handleNrcChange={handleNrcChange}
                  nrc={nrc}
                  errors={errors}
                  isNrcValid={isNRCValid}
                />
              )}
              {stateCount === 2 && (
                <ContactInfo
                  contactInfo={contactInfo}
                  handleChange={handleContactInfoChange}
                  errors={errors}
                  countries={countries}
                  handleCellphoneChange={handleCellphoneChange}
                  handleChangeCellphoneAndCode={handleChangeCellphoneAndCode}
                  isCellphoneValid={isCellphoneValid}
                />
              )}
              {stateCount === 3 && (
                <LoginInfo
                  loginInfo={loginInfo}
                  handleChange={handleLoginInfoChange}
                  errors={errors}
                  username={username}
                  handleUsernameChange={handleUsernameChange}
                  isUsernameValid={isUsernameValid}
                />
              )}

              <div className="flex flex-wrap gap-5 mt-5 justify-between">
                <LinkButton
                  title="Cancel"
                  link={URLUserLogin()}
                  className="order-last xs:order-first"
                />
                <div className="flex gap-5 justify-end">
                  <BackButton
                    disabled={disabledBackButton}
                    title="Back"
                    type="button"
                    onClick={handleBack}
                    className="w-40"
                  />
                  {stateCount === 3 && (
                    <NextButton title="Submit" type="submit" className="" />
                  )}

                  {stateCount !== 3 && (
                    <NextButton
                      title="Next"
                      type="button"
                      onClick={handleNext}
                      className="w-40"
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </>
      </Container>
    </>
  );
}

export default CreateUserAccount;

// const StepButton = ({
//   isComplete = false,
//   isActive = false,
//   text = "text",
// }) => {
//   return (
//     <button
//       className={cn("flex items-center justify-center gap-1 text-sm py-5", {
//         "border-b-[3px] border-b-[#1890FF]": isActive,
//       })}
//     >
//       {isComplete && (
//         <span className="inline-block bg-[#1890FF] rounded-full p-[2px]">
//           <Check size={12} color="white" />
//         </span>
//       )}
//       <p
//         className={cn("inline-block capitalize text-base", {
//           "text-[#1890FF]": isActive,
//           "text-black": !isActive,
//         })}
//         dangerouslySetInnerHTML={{ __html: text }}
//       />
//     </button>
//   );
// };

// const Stepping = ({ stateCount , stepTitle }) => {
//   const steps = [
//     { text: "Personal Information", index: 1 },
//     { text: "Contact Information", index: 2 },
//     { text: "Login Information", index: 3 },
//   ];

//   return (
//     <div className="text-center  shadow-light text-[#03045E] font-semibold font-poppins">
//       <div className="flex justify-evenly items-center">
//         {stepTitle.map((step, index) => (
//           <React.Fragment key={index}>
//             {index > 0 && (
//               <div>
//                 <ChevronRight size={18} />
//               </div>
//             )}
//             <StepButton
//               isComplete={index < stateCount - 1}
//               isActive={index === stateCount - 1}
//               text={step}
//             />
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// import BackButton from "@/components/core/buttons/BackButton";
// import LinkButton from "@/components/core/buttons/LinkButton";
// import NextButton from "@/components/core/buttons/NextButton";
// import FormWrapper from "@/components/core/form-layouts/FormWrapper";
// import MultiStepComponent from "@/components/shared/multi-step/multiStep";
// import ContactInfo from "@/components/user-accounts/ContactInfo";
// import LoginInfo from "@/components/user-accounts/LoginInfo";
// import PersonalInfo from "@/components/user-accounts/PersonalInfo";
// import { URLUserLogin } from "@/routers/public";
// import useUserRegistration from "./useCreate";

// function CreateUserAccount() {
//   const {
//     contactInfo,
//     countries,
//     errors,
//     handleCellphoneChange,
//     handleChangeCellphoneAndCode,
//     handleContactInfoChange,
//     handleLoginInfoChange,
//     handleNrcChange,
//     handlePersonalInfoChange,
//     handleSubmit,
//     handleUsernameChange,
//     isCellphoneValid,
//     isNRCValid,
//     isUsernameValid,
//     loginInfo,
//     noNRC,
//     nrc,
//     personalInfo,
//     username,
//     handleSetNoNRC,
//     disabledBackButton,
//     handleBack,
//     handleNext,
//     stateCount,
//     stepTitle,
//   } = useUserRegistration();

//   return (
//     <>
//       <div className="max-w-[700px] mx-auto ">
//         <MultiStepComponent active={stateCount} title={stepTitle} />
//       </div>
//       <div className="my-8">
//         <FormWrapper
//           title="User Profile Registration"
//           titleClass="text-center !mt-4"
//           maxWidth="max-w-[1022px]"
//           noBackground
//           className="rounded-lg"
//           childrenMaxWidth="w-full"
//         >
//           <>
//             <form action="" className="my-5" onSubmit={handleSubmit}>
//               {stateCount === 1 && (
//                 <PersonalInfo
//                   personalInfo={personalInfo}
//                   handleChange={handlePersonalInfoChange}
//                   noNrc={noNRC}
//                   handleNoNRC={handleSetNoNRC}
//                   handleNrcChange={handleNrcChange}
//                   nrc={nrc}
//                   errors={errors}
//                   isNrcValid={isNRCValid}
//                 />
//               )}
//               {stateCount === 2 && (
//                 <ContactInfo
//                   contactInfo={contactInfo}
//                   handleChange={handleContactInfoChange}
//                   errors={errors}
//                   countries={countries}
//                   handleCellphoneChange={handleCellphoneChange}
//                   handleChangeCellphoneAndCode={handleChangeCellphoneAndCode}
//                   isCellphoneValid={isCellphoneValid}
//                 />
//               )}
//               {stateCount === 3 && (
//                 <LoginInfo
//                   loginInfo={loginInfo}
//                   handleChange={handleLoginInfoChange}
//                   errors={errors}
//                   username={username}
//                   handleUsernameChange={handleUsernameChange}
//                   isUsernameValid={isUsernameValid}
//                 />
//               )}

//               <div className="flex gap-5 mt-5 justify-between">
//                 <LinkButton title="Cancel" link={URLUserLogin()} />
//                 <div className="flex gap-5 justify-end">
//                   <BackButton
//                     disabled={disabledBackButton}
//                     title="Back"
//                     type="button"
//                     onClick={handleBack}
//                     className="w-40"
//                   />
//                   {stateCount === 3 && (
//                     <NextButton title="Submit" type="submit" className="" />
//                   )}

//                   {stateCount !== 3 && (
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

// export default CreateUserAccount;

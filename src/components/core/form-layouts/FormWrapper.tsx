import AppName from "../app-name/AppName";
import EmergencyAccess from "../emergency-access/EmergencyAccess";
import AppLogo from "../logo/logo";
// import Title from "../titles/Title";
import Title from "../titles/Titles";

type Props = {
  title?: string;
  subTitle?: string;
  titleNote?: string;
  paragraph?: string;
  titleClass?: string;
  children: JSX.Element;
  loginForm?: boolean;
  signUpForm?: boolean;
  emergencyAccess?: boolean;
  className?: string; //
  changePasswordForm?: boolean;
  layoutCenter?: boolean;
};

function FormWrapper({
  title,
  subTitle,
  titleNote,
  paragraph,
  titleClass = "570px",
  children,
  emergencyAccess,
  className = " ",
}: Props) {
  return (
    <div className="">
      <div
        className={`p-2 md:p-5 bg-whiteColor rounded-md md:shadow-lg mx-auto ${className}`}
      >
        {/* logo */}
        <AppLogo type="rounded" marginTop="mt-[-88px]" />

        {/* App name component */}
        <AppName />
        <div className="">
          {title && <Title type="h2" title={title} className={titleClass} />}
          {subTitle && <Title type="h3" title={subTitle} />}
          {titleNote && <Title type="span" title={titleNote} />}
          {paragraph && <Title type="p" title={paragraph} />}
        </div>
        <div>{children}</div>

        <LoginSignUpChangePasswordForm />
      </div>
      {emergencyAccess && <EmergencyAccess />}
    </div>
  );
}

export default FormWrapper;

type LoginSignUpChangePasswordFormProps = {
  signUpForm?: boolean;
  loginForm?: boolean;
  changePasswordForm?: boolean;
};
const LoginSignUpChangePasswordForm = ({
  signUpForm,
  loginForm,
  changePasswordForm,
}: LoginSignUpChangePasswordFormProps) => {
  return (
    <>
      {changePasswordForm ||
        signUpForm ||
        (loginForm && (
          <div className="border-t border-gray-200 mb[-10px]">
            <div className=" text-base">
              <div className="pt-5 flex justify-center gap-2">
                <div className="text-grayColor">
                  {" "}
                  {loginForm && "Don’t have an account?"}
                  {signUpForm && "Already have an account?"}
                  {changePasswordForm && "Remember password?"}
                </div>
                <div className="leading-[26px] text-dodgerblue">
                  <a className="text-primaryColor" href="#">
                    {loginForm && "Sign up"}
                    {signUpForm && "Log in"}
                    {changePasswordForm && "Sign up"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

import { cn } from "@/utilities/cn";
import AppName from "../app-name/AppName";
import EmergencyAccess from "../emergency-access/EmergencyAccess";
import AppLogo from "../logo/logo";
// import Title from "../titles/Title";
import Title from "../titles/Titles";
import BodyBackground from "../body-background/BodyBackground";

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
  maxWidth?: string;
  contentCenter?: boolean;
  noBackground?: boolean;
};

function FormWrapper({
  title,
  subTitle,
  titleNote,
  paragraph,
  titleClass = "",
  children,
  emergencyAccess,
  className = " ",
  maxWidth = "max-w-[570px]",
  contentCenter,
  noBackground
}: Props) {
  return (
    <BodyBackground noBackground={noBackground}>
    <div
      className={cn("mx-auto ", maxWidth, {
        "flex items-center justify-center h-screen": contentCenter,
      })}
    >
      {/* <div className="flex items-center justify-center h-screen"> */}
      <div className={cn(" w-full ", maxWidth)}>
        <div className="bg-transparent pt-[88px]">
          <div
            className={`p-2 md:p-5 bg-whiteColor rounded-md md:shadow-lg mx-auto ${className}`}
          >
            {/* logo */}
            <AppLogo type="rounded" marginTop="mt-[-88px]" />

            {/* App name component */}
            <AppName />
            <div className="">
              {title && (
                <Title type="h2" title={title} className={cn(titleClass)} />
              )}
              {subTitle && <Title type="h3" title={subTitle} />}
              {titleNote && (
                <Title
                  type="span"
                  title={titleNote}
                  className={cn(titleClass)}
                />
              )}
              {paragraph && <Title type="p" title={paragraph} />}
            </div>
            <div>{children}</div>

            <LoginSignUpChangePasswordForm />
          </div>
        </div>
        {emergencyAccess && <EmergencyAccess />}
      </div>
    </div>
    </BodyBackground>
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

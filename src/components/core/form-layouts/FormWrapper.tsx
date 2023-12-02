import { cn } from "@/utilities/cn";
import AppName from "../app-name/AppName";
import EmergencyAccess from "../emergency-access/EmergencyAccess";
import AppLogo from "../logo/logo";
// import Title from "../titles/Title";
import { URLUserAccountCreate, URLUserLogin } from "@/routers/public";
import BodyBackground from "../body-background/BodyBackground";
import Title from "../titles/Titles";
import { FormFooterLink } from "./FormFooterLink";

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
  noBackground,
  signUpForm,
  loginForm,
  changePasswordForm,
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
              className={cn(
                `p-2 md:p-10 md:pb-5 bg-whiteBgColor rounded-md md:shadow-lg mx-auto `,
                className
              )}
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
                    className={cn("flex justify-center ", titleClass)}
                  />
                )}
                {paragraph && <Title type="p" title={paragraph} />}
              </div>
              <div>{children}</div>

              {loginForm && (
                <FormFooterLink
                  btnText="Sign up"
                  link={URLUserAccountCreate()}
                  question="Don’t have an account?"
                />
              )}
              {signUpForm && (
                <FormFooterLink
                  btnText="Log in"
                  link={URLUserLogin()}
                  question="Already have an account?"
                />
              )}
              {changePasswordForm && (
                <FormFooterLink
                  btnText="Log in"
                  link={URLUserLogin()}
                  question="Remember password?"
                />
              )}

              {/* <LoginSignUpChangePasswordForm /> */}
            </div>
          </div>
          {emergencyAccess && <EmergencyAccess />}
        </div>
      </div>
    </BodyBackground>
  );
}

export default FormWrapper;

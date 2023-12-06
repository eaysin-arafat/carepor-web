import { cn } from "@/utilities/cn";
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
  appTitle?: boolean;
  paragraph?: string;
  titleClass?: string;
  children: React.ReactNode;
  loginForm?: boolean;
  signUpForm?: boolean;
  emergencyAccess?: boolean;
  className?: string; //
  childrenMaxWidth?: string; //
  changePasswordForm?: boolean;
  maxWidth?: string;
  contentCenter?: boolean;
  noBackground?: boolean;
  isAppNameHide?: boolean;
};

function FormWrapper({
  title,
  subTitle,
  appTitle,
  titleNote,
  paragraph,
  titleClass = "",
  childrenMaxWidth = "max-w-[380px]",
  children,
  emergencyAccess,
  className = " ",
  maxWidth = "max-w-[810px]",
  contentCenter,
  noBackground,
  signUpForm,
  loginForm,
  changePasswordForm,
  isAppNameHide,
}: Props) {
  return (
    <BodyBackground noBackground={noBackground}>
      {/* <div className="z-20 relative">
        <ThemeSwitcher />
      </div> */}
      <div
        className={cn("mx-auto ", maxWidth, {
          "flex items-center justify-center h-screen": contentCenter,
        })}
      >
        {/* <div className="flex items-center justify-center h-screen"> */}
        <div className={cn(" w-full xs:px-5", maxWidth)}>
          <div className="bg-transparent pt-[88px]">
            <div
              className={cn(
                `p-5 md:p-10 md:bg-whiteBgColor rounded-[47px] md:box_shadow mx-auto `,
                className
              )}
            >
              {/* logo */}
              <AppLogo type="rounded" marginTop="mt-[-100px]" />

              {/* App name component */}
              {/* <AppName /> */}
              {!isAppNameHide && (
                <p className="text-center text-[30px] md:text-[45px] mt-6 font-poppins">
                  <span className="text-[#15ac12]">Smart</span>
                  <span className="text-primaryColor">Care</span>{" "}
                  <span className="text-primaryColor font-bold">PRO</span>
                </p>
              )}

              <div className="">
                {appTitle && (
                  <div
                    className={cn(
                      "text-sm mt-6 text-center text-secondaryColor"
                    )}
                  >
                    Ministry of Health SmartCare
                  </div>
                )}
                {title && (
                  <div
                    className={cn(
                      "heading_2 text-4xl mt-5 font-normal text-secondaryColor",
                      titleClass
                    )}
                  >
                    {title}
                  </div>
                )}
                {subTitle && <Title type="h3" title={subTitle} />}
                {titleNote && (
                  <Title
                    type="span"
                    title={titleNote}
                    className={cn("flex justify-center mt-2", titleClass)}
                  />
                )}
                {paragraph && <Title type="p" title={paragraph} />}
              </div>

              <div className={cn(" mx-auto ", childrenMaxWidth)}>
                {children}
              </div>

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
          {/* {loginForm && (
            <p className="max-w-[380px] md:max-w-full mx-auto text-center mt-10 leading-7 text-black md:text-white dark:text-white text-[16px] font-normal ">
              Powered by the institute of health measurement Southerner Africs
            </p>
          )} */}
        </div>
      </div>
    </BodyBackground>
  );
}

export default FormWrapper;

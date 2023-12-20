import { cn } from "@/utilities/cn";
import EmergencyAccess from "../emergency-access/EmergencyAccess";
import AppLogo from "../logo/logo";
// import Title from "../titles/Title";
import useWindowWidth from "@/hooks/useWindow";
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
  maxWidth = "max-w-[650px]",
  contentCenter,
  noBackground,
  signUpForm,
  loginForm,
  changePasswordForm,
  isAppNameHide,
}: Props) {
  const w1400 = useWindowWidth(1400);
  return (
    <BodyBackground noBackground={noBackground}>
      <div
        className={cn("mx-auto mt-10 xs:mt-auto  ", {
          "flex items-center justify-center": contentCenter,
        })}
      >
        {/* <div className="flex items-center justify-center h-screen"> */}
        <div className={cn(" w-full xs:px-5 ")}>
          <div className="bg-transparent pt-[88px]">
            <div
              className={cn(
                `warapperBox p-5 md:p-10 md:bg-whiteBgColor rounded-[47px] md:box_shadow mx-auto`,
                className
              )}
            >
              {/* logo */}
              <AppLogo
                type="rounded"
                marginTop={w1400 ? "mt-[-90px]" : "mt-[-100px]"}
              />

              {/* App name component */}
              {/* <AppName /> */}
              {!isAppNameHide && (
                <p className="logoText text-center text-[25px] xs:text-[30px] md:text-[45px] mt-4 md:mt-6 font-poppins">
                  <span className="text-[#15ac12]">Smart</span>
                  <span className="text-logoColor">Care</span>{" "}
                  <span className="text-logoColor font-bold">PRO</span>
                </p>
              )}

              <div className="">
                {appTitle && (
                  <div
                    className={cn(
                      "appTitle text-sm mt-6 text-center text-secondaryColor"
                    )}
                  >
                    A Ministry of Health SmartCare System
                  </div>
                )}
                {title && (
                  <div
                    className={cn(
                      "heading_2 text-md md:text-1xl text-center mt-5 font-normal text-secondaryColor",
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
        </div>
      </div>
    </BodyBackground>
  );
}

export default FormWrapper;

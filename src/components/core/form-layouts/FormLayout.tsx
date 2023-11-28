import { userAccountCreate, userLogin } from "@/routers/user-accounts";
import AppName from "../app-name/AppName";
import BodyBackground from "../body-background/BodyBackground";
import AppLogo from "../logo/logo";
import Title from "../titles/Title";
import { FormFooterLink } from "./FormFooterLink";

type Props = {
  mainTitle?: string;
  subTitle?: string;
  note?: string;
  // maxWidth?: string;
  children: JSX.Element;
  loginForm?: boolean;
  signUpForm?: boolean;
  emergencyAccess?: boolean;
  className?: string; //
  changePasswordForm?: boolean;
  layoutCenter?: boolean;
};

function FormLayout({
  mainTitle,
  subTitle,
  note,
  // maxWidth = "570px",
  children,
  signUpForm,
  loginForm,
  changePasswordForm,
  emergencyAccess,
  className = " ",
  layoutCenter,
}: Props) {
  return (
    <BodyBackground>
      <div className="w-full">
        <div
          className={`w-full ${
            layoutCenter && "flex justify-center  items-center h-[100vh]"
          }`}
        >
          <div className=" flex w-full justify-center items-center mt-[200px] md:mt-[100px]">
            <div className={` w-[100%] mb-5`}>
              <div
                className={`bg-white  bg-colors-white md:shadow-lg rounded-[10px] w-full mx-auto px-5 sm:px-10 py-5 transition-all ease-out ${className}`}
              >
                {/* logo */}
                <AppLogo type={"rounded"} marginTop="mt-[-88px]" />

                {/* App name component */}
                <AppName />

                {/* Title */}
                <div className="">
                  <div>{mainTitle && <Title titleText={mainTitle} />}</div>
                  <div>
                    {subTitle && (
                      <Title
                        type="subtitle"
                        titleText={subTitle || "subTitle"}
                      />
                    )}
                  </div>
                  <div>
                    {note && (
                      <Title type="titleNote" titleText={note || "Note"} />
                    )}
                  </div>
                </div>
                {/* Children */}
                <div>{children}</div>

                {/* Layout Footer */}
                {loginForm && (
                  <FormFooterLink
                    btnText="Sign up"
                    link={userAccountCreate()}
                    question="Don’t have an account?"
                  />
                )}
                {signUpForm && (
                  <FormFooterLink
                    btnText="Log in"
                    link={userLogin()}
                    question="Already have an account?"
                  />
                )}
                {changePasswordForm && (
                  <FormFooterLink
                    btnText="Log in"
                    link={userLogin()}
                    question="Remember password?"
                  />
                )}
              </div>
              {emergencyAccess && (
                <div className=" h-6 text-base flex justify-center">
                  <div className=" mt-5">
                    <div className="  text-dodgerblue">
                      Emergency Access &nbsp;
                      <a
                        href="tel:(844) 569-8628"
                        className=" text-primaryColor cursor-pointer"
                      >
                        Call: (844) 569-8628
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BodyBackground>
  );
}

export default FormLayout;

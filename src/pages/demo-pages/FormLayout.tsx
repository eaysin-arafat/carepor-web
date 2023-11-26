import AppName from "@/components/ui/app-name/AppName";
import AppLogo from "@/components/ui/logo/logo";
import Title from "@/components/ui/titles/Title";
import BodyBackground from "./BodyBackground";

type Props = {
  mainTitle?: string;
  subTitle?: string;
  note?: string;
  children: JSX.Element;
  loginForm?: boolean;
  signUpForm?: boolean;
  emergencyAccess?: boolean;
  className?: string; //
  width?: number;
};

function FormLayout({
  mainTitle,
  subTitle,
  note,
  children,
  signUpForm,
  loginForm,
  emergencyAccess,
  className = " ",
  width = 600,
}: Props) {
  return (
    <BodyBackground>
      <div>
        <div className="w-full flex justify-center mt-[88px]">
          <div className={`m-auto  w-[${width}px] ${className}`}>
            <div
              className={`bg-white bg-colors-white md:shadow-lg rounded-[10px] px-16 py-6 ${className}`}
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
                    <Title type="subtitle" titleText={subTitle || "subTitle"} />
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
                <div className="border-t border-gray-200 mb[-10px]">
                  <div className=" text-base">
                    <div className="pt-5 flex justify-center gap-2">
                      <div className="text-grayColor">
                        Don’t have an account?
                      </div>
                      <div className="leading-[26px] text-dodgerblue">
                        <a className="text-primaryColor" href="#">
                          Sign up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {signUpForm && (
                <div className="border-t border-gray-200 mb[-10px]">
                  <div className=" text-base">
                    <div className="pt-5 flex justify-center gap-2">
                      <div className="text-grayColor">
                        Already have an account?
                      </div>
                      <div className="leading-[26px] text-dodgerblue">
                        <a className="text-primaryColor" href="#">
                          Log in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
    </BodyBackground>
  );
}

export default FormLayout;

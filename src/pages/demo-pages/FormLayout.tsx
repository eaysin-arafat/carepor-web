import AppName from "@/components/ui/app-name/AppName";
import AppLogo from "@/components/ui/logo/logo";
import Title from "@/components/ui/titles/Title";
import BodyBackground from "./BodyBackground";

type Props = {
  mainTitle: string;
  subTitle?: string;
  note?: string;
  children: JSX.Element;
  loginForm?: boolean;
  signUpForm?: boolean;
  emergencyAccess?: boolean;
};

function FormLayout({
  mainTitle,
  subTitle,
  note,
  children,
  signUpForm,
  loginForm,
  emergencyAccess,
}: Props) {
  return (
    <BodyBackground>
      {/* ^^ background  */}
      {/* form wrapper */}
      <div>
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div className="m-auto  w-[600px]    ">
            <div className="bg-white bg-colors-white md:shadow-lg shadow-[0px_0px_25px_rgba(0,_0,_0,_0.05)]f rounded-[10px] px-16 py-6 ">
              {/* logo */}
              <AppLogo type={"rounded"} marginTop="mt-[-110px]" />

              {/* App name component */}
              <AppName />

              {/* Title */}
              <div className="">
                <div>
                  <Title titleText={mainTitle || "mainTitle"} />
                </div>
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
              <div className="border-t border-gray-200 mb[-10px]">
                {loginForm && (
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
                )}
                {signUpForm && (
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
                )}
              </div>
            </div>
            {emergencyAccess && (
              <div className=" h-6 text-base flex justify-center">
                <div className=" mt-5">
                  <div className="  text-dodgerblue">
                    Emergency Access Call:{" "}
                    <a
                      href="tel:(844) 569-8628"
                      className=" text-primaryColor cursor-pointer"
                    >
                      (844) 569-8628
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

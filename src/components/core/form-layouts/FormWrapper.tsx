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
  signUpForm,
  loginForm,
  changePasswordForm,
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

        {loginForm && <LoginForm />}
        {signUpForm && <SignUpForm />}
        {changePasswordForm && <ChangePasswordForm />}    
      </div>
      {emergencyAccess && <EmergencyAccess />}
    </div>
  );
}

export default FormWrapper;

const LoginForm = () => {
  return (
    <div className="border-t border-gray-200 mb[-10px]">
      <div className=" text-base">
        <div className="pt-5 flex justify-center gap-2">
          <div className="text-grayColor">Don’t have an account?</div>
          <div className="leading-[26px] text-dodgerblue">
            <a className="text-primaryColor" href="#">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUpForm = () => {
  return (
    <div className="border-t border-gray-200 mb[-10px]">
      <div className=" text-base">
        <div className="pt-5 flex justify-center gap-2">
          <div className="text-grayColor">Already have an account?</div>
          <div className="leading-[26px] text-dodgerblue">
            <a className="text-primaryColor" href="#">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChangePasswordForm = () => {
  return (
    <div className="border-t border-gray-200 mb[-10px]">
      <div className=" text-base">
        <div className="pt-5 flex justify-center gap-2">
          <div className="text-grayColor">Remember password?</div>
          <div className="leading-[26px] text-dodgerblue">
            <a className="text-primaryColor" href="#">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

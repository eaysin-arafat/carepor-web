import AppName from "@/components/ui/app-name/AppName";
import AppLogo from "@/components/ui/logo/logo";
import Title from "@/components/ui/titles/Title";

type Props = {};

function HomePage({}: Props) {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/img/backgroundImg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" bg-whitesmoke-100 w-full h-[100vh] overflow-hidden  text-left text-sm text-black font-poppins"
    >
      {/* ^^ background  */}

      {/* form wrapper */}
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="m-auto  w-[600px] px-16 py-6  bg-white  bottom-[5.24%]  rounded-[10px] bg-colors-white shadow-[0px_0px_25px_rgba(0,_0,_0,_0.05)]">
          {/* logo */}
          <AppLogo type={"rounded"} marginTop="mt-[-110px]" />
          <AppName />
          {/* Title */}
          <div className="">
            <Title titleText="Select Facility" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

function Test({}: Props) {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[100vh] overflow-hidden cursor-pointer text-left text-sm text-black font-poppins">
      <img
        className="absolute bottom-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[1000px] object-cover"
        alt=""
        src="/assets/img/backgroundImg.png"
      />
      <div className="absolute h-[76.3%] w-[39.58%] top-[11.8%] right-[30.21%] bottom-[11.9%] left-[30.21%]">
        <div className="absolute h-[84.4%] w-full top-[10.35%] right-[0%] bottom-[5.24%] left-[0%] rounded-[10px] bg-colors-white shadow-[0px_0px_25px_rgba(0,_0,_0,_0.05)]" />
        <div className="absolute top-[226px] left-[calc(50%_-_188px)] w-[375px] h-20">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[125%]">Your Email</div>
            <div className="rounded-81xl bg-colors-white box-border w-[375px] flex flex-row items-center justify-start py-[18px] px-4 gap-[10px] text-base text-gray-100 border-[2px] border-solid border-whitesmoke-200">
              <div className="relative leading-[125%]">Enter your email</div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/assets/img/backgroundImg.png"
              />
            </div>
            <div className="relative text-smi leading-[125%] font-medium font-inter text-crimson hidden">
              Error
            </div>
          </div>
        </div>
        <div className="absolute top-[426px] left-[calc(50%_-_188px)] w-[375px] h-20">
          <div className="absolute top-[-100px] left-[calc(50%_-_187.5px)] w-[375px] h-20">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[125%]">Create Password</div>
              <div className="rounded-81xl bg-colors-white box-border w-[375px] flex flex-row items-center justify-start py-[18px] px-4 gap-[10px] text-base text-gray-100 border-[2px] border-solid border-whitesmoke-200">
                <div className="relative leading-[125%] flex items-end w-[305px] shrink-0">
                  Must be 8 characters
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon1.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icon2.svg"
                />
              </div>
              <div className="relative text-smi leading-[125%] font-medium font-inter text-crimson hidden">
                Error
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_187.5px)] w-[375px] h-20">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[125%]">Confirm Password</div>
              <div className="rounded-81xl bg-colors-white box-border w-[375px] flex flex-row items-center justify-start py-[18px] px-4 gap-[10px] text-base text-gray-100 border-[2px] border-solid border-whitesmoke-200">
                <div className="relative leading-[125%] flex items-end w-[305px] shrink-0">
                  Must be 8 characters
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icon3.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon4.svg"
                />
              </div>
              <div className="relative text-smi leading-[125%] font-medium font-inter text-crimson hidden">
                Error
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[64.56%] top-[calc(50%_+_264.5px)] right-[17.63%] left-[17.81%] h-[52.4px] text-base text-gray-200">
          <div className="absolute w-[66.3%] top-[calc(50%_-_0.2px)] right-[18.89%] left-[14.81%] h-[26.4px]">
            <div className="absolute top-[calc(50%_-_12.8px)] left-[0%] leading-[26px]">{`Don’t have an account? `}</div>
            <div className="absolute top-[calc(50%_-_13.2px)] left-[80.74%] leading-[26px] text-dodgerblue">
              Log in
            </div>
          </div>
          <img
            className="absolute h-[3.82%] w-[100.27%] top-[0.95%] right-[-0.14%] bottom-[95.23%] left-[-0.14%] max-w-full overflow-hidden max-h-full mix-blend-normal"
            alt=""
            src="/line.svg"
          />
        </div>
        <div className="absolute h-[7.86%] w-[65.79%] top-[71.56%] right-[17.19%] bottom-[20.58%] left-[17.02%] text-center text-[18px] text-colors-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-dodgerblue" />
          <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_33.5px)] leading-[26px] font-medium">
            Sign up
          </div>
        </div>
        <div className="absolute w-[23.51%] top-[calc(50%_-_255.5px)] right-[38.25%] left-[38.25%] h-[76px] text-center text-[36px] text-colors-heading">
          <div className="absolute top-[calc(50%_-_14px)] left-[0%] tracking-[-0.4px] leading-[52px] font-medium">
            Sign up
          </div>
          <div className="absolute w-[60.45%] top-[calc(50%_-_38px)] left-[22.39%] text-base tracking-[-0.4px] leading-[52px] font-black text-seagreen inline-block h-[21px]">
            CarePRO
          </div>
        </div>
        <div className="absolute top-[0px] left-[222px] w-[126px] h-[126px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-colors-white box-border w-[126px] h-[126px] border-[4px] border-solid border-gray-300" />
          <img
            className="absolute top-[25px] left-[30px] w-[65px] h-[75px] object-cover"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <div className="absolute top-[739px] left-[117px] w-[336px] h-6 text-base">
          <div className="absolute top-[0px] left-[0px]">Emergency Access</div>
          <div className="absolute top-[0px] left-[169px] text-dodgerblue">
            Call: (844) 569-8628
          </div>
          <div className="absolute top-[3px] left-[160px] bg-gainsboro w-px h-[19px]" />
        </div>
      </div>
    </div>
  );
}

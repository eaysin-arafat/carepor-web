import React from "react";

type Props = {
  marginTop?: string;
  type?: "rounded" | "";
};

function AppLogo({ marginTop, type }: Props) {
  switch (type) {
    case "rounded":
      return (
        <div>
          <div className="text-center mx-auto">
            <div className="flex justify-center ">
              <div
                className={`${
                  marginTop ? marginTop : ""
                } w-[126px] h-[126px] border-4 border-gray-200 bg-white rounded-full flex justify-center items-center`}
              >
                <img
                  className="w-[65px] h-[75px]"
                  alt=""
                  src="/assets/img/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      );
      break;

    default:
      break;
  }
}

export default AppLogo;

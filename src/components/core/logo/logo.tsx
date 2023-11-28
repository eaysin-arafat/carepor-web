type Props = {
  marginTop?: string;
  type?: "rounded" | "";
  className?: string;
};

/**
 *
 * @param Type rounded
 * @param marginTop you can pass any class here
 * @param className this className only apply in image tag
 * @returns
 */

function AppLogo({ marginTop, type, className }: Props) {
  switch (type) {
    case "rounded":
      return (
        <div>
          <div className="text-center mx-auto">
            <div className="flex justify-center ">
              <div
                className={`${
                  marginTop ? marginTop : ""
                } w-[126px] h-[126px] border-4 border-borderColor bg-whiteColor rounded-full flex justify-center items-center`}
              >
                <img
                  className={`${className} w-[65px] h-[75px]`}
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

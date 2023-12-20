import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";

type Props = {
  marginTop?: string;
  type: "rounded" | "normal";
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
  const w1400 = useWindowWidth(1400);
  switch (type) {
    case "rounded":
      return (
        <div>
          <div className="text-center mx-auto">
            <div className="flex justify-center ">
              <div
                className={cn(
                  "w-[126px] h-[126px] border-4 border-borderColor bg-whiteBgColor dark:bg-black md:bg-whiteBgColor dark:md:bg-whiteBgColor rounded-full flex justify-center items-center",
                  marginTop,
                  {
                    "w-[90px] h-[90px]": w1400,
                  }
                )}
              >
                <img
                  className={cn("w-[65px] h-[75px]", className, {
                    "w-[50px] h-[50px]": w1400,
                  })}
                  alt=""
                  src="/assets/img/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      );

    case "normal":
      return (
        <div>
          <div className="text-center mx-auto">
            <div className="flex justify-center ">
              <div
                className={cn(
                  "w-[110px] h-[110px] flex justify-center items-center"
                )}
              >
                <img
                  className={cn("", className)}
                  alt=""
                  src="/assets/img/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      break;
  }
}

export default AppLogo;

import { cn } from "@/utilities/cn";

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
                className={cn(
                  "w-[126px] h-[126px] border-4 border-borderColor bg-whiteBgColor dark:bg-black md:bg-whiteBgColor dark:md:bg-whiteBgColor rounded-full flex justify-center items-center",
                  marginTop
                )}
              >
                <img
                  className={cn("w-[65px] h-[75px]", className)}
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

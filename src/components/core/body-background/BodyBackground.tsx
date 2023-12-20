// import ThemeSwitcher from "../theme/theme-switcher";

import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import ThemeSwitcher from "../theme/theme-switcher";

type Props = {
  children: JSX.Element;
  noBackground?: boolean;
};

function BodyBackground({ children, noBackground }: Props) {
  const w768 = useWindowWidth(768);
  return (
    <div
      className={`${
        noBackground
          ? " bg-bodyColor "
          : "background_image dark:bg-black md:bg-[url('/assets/img/Carepro_Background.jpg')] bg-cover bg-center "
      } w-full overflow-auto h-screen text-left text-sm text-black font-poppins`}
    >
      <div className="z-20 absolute top-2 lg:right-10 xs:top-5 xs:right-5">
        <ThemeSwitcher />
      </div>
      <div
        className={cn("relative z-10 align-middle mt-16 max-w-[700px] m-auto", {
          "mt-5": w768,
        })}
      >
        {children}
      </div>
      {!noBackground && (
        <div className="fixed inset-0 md:bg-overlayColor opacity-80 h-[100%]"></div>
      )}
    </div>
  );
}

export default BodyBackground;

// type Props = {
//   children: JSX.Element;
//   noBackground?: boolean;
// };

// function BodyBackground({ children, noBackground }: Props) {
//   return (
//     <div
//       className={`${
//         noBackground
//           ? ""
//           : "md:bg-[url('/assets/img/Carepro_Background.jpg')] bg-cover bg-center h-screen "
//       } relative w-full overflow-auto text-left text-sm text-black font-poppins`}
//     >
//       {children}
//     </div>
//   );
// }

// export default BodyBackground;

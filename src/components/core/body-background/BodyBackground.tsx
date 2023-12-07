// import ThemeSwitcher from "../theme/theme-switcher";

import ThemeSwitcher from "../theme/theme-switcher";

type Props = {
  children: JSX.Element;
  noBackground?: boolean;
};

function BodyBackground({ children, noBackground }: Props) {
  return (
    <div
      className={`${
        noBackground
          ? " bg-bodyColor "
          : "background_image dark:bg-black md:bg-[url('/assets/img/Carepro_Background.jpg')] bg-cover bg-center relative "
      } w-full overflow-auto text-left text-sm text-black font-poppins`}
    >
      <div className="z-20 absolute top-2 right-2 xs:top-5 xs:right-5">
        <ThemeSwitcher />
      </div>
      <div className="relative z-10 ">{children}</div>
      {!noBackground && (
        <div className="fixed inset-0 md:bg-blue-500 dark:bg-black opacity-80 dark:opacity-80 h-[100%]"></div>
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

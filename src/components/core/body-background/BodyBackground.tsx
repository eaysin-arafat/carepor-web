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
          ? ""
          : "bg-whiteBgColor md:bg-[url('/assets/img/Carepro_Background.jpg')] bg-cover bg-center h-screen relative "
      } w-full overflow-auto text-left text-sm text-black font-poppins`}
    >
      <div className="z-20 absolute top-5 right-5">
        <ThemeSwitcher />
      </div>
      <div className="relative z-10">{children}</div>
      {!noBackground && (
        <div className="absolute inset-0 md:bg-blue-500 dark:bg-black opacity-80 dark:opacity-80"></div>
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

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
          : "md:bg-[url('/assets/img/carepro-bg.png')] bg-cover bg-center h-screen "
      } w-full overflow-auto text-left text-sm text-black font-poppins`}
    >
      {children}
    </div>
  );
}

export default BodyBackground;

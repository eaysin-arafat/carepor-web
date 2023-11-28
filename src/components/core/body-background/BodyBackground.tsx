type Props = {
  children: JSX.Element;
  noBackground?: boolean
};

function BodyBackground({ children , noBackground }: Props) {
  return (
    <div className={`${noBackground ? "" : "md:bg-[url('/assets/img/backgroundImg.png')]" } w-full h-screen overflow-auto text-left text-sm text-black font-poppins`}>
      {children}
    </div>
  );
}

export default BodyBackground;

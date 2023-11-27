type Props = {
  children: JSX.Element;
};

function BodyBackground({ children }: Props) {
  //   return children;
  return (
    <div
      style={{
        backgroundImage: "url(/assets/img/backgroundImg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" bg-whitesmoke-100 w-full h-[100vh] overflow-auto text-left text-sm text-black font-poppins"
    >
      {children}
    </div>
  );
}

export default BodyBackground;

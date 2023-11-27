type Props = {
  children: JSX.Element;
};

function BodyBackground({ children }: Props) {
  return (
    <div className="md:bg-[url('/assets/img/backgroundImg.png')] w-full h-screen overflow-auto text-left text-sm text-black font-poppins">
      {children}
    </div>
  );
}

export default BodyBackground;

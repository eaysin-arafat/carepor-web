type Props = {};

function EmergencyAccess({}: Props) {
  return (
    <>
      <div className=" h-6 text-base flex justify-center">
        <div className=" mt-5">
          <div className="  text-dodgerblue">
            Emergency Access &nbsp;
            <a
              href="tel:(844) 569-8628"
              className=" text-primaryColor cursor-pointer"
            >
              Call: (844) 569-8628
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmergencyAccess;

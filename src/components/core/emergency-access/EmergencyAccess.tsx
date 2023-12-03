type Props = {};

function EmergencyAccess({}: Props) {
  return (
    <div className="pb-5">
      <div className=" h-6 text-base flex justify-center">
        <div className=" my-5">
          <div className="  text-dodgerblue dark:text-white/60">
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
    </div>
  );
}

export default EmergencyAccess;

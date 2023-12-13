import SimplePatientDetails from "@/components/client-accounts/cards/SimplePatientDetails";
import Container from "@/components/core/container/Container";
import { Link } from "react-router-dom";

type ServicePoint = {
  imgSrc: string;
  title: string;
  link: string;
};

const ServicePoints = () => {
  return (
    <div className="mx-3">
      <Container className="max-w-[1345px] bg-whiteBgColor my-8 rounded-lg px-5 shadow-light">
        <div className="py-8 pb-1">
          <div className="border rounded-lg border-primaryColor xl:mx-8">
            <SimplePatientDetails
              withoutAction
              className="bg-whiteBgColor shadow-none sm:!border !border-primaryColor"
            />
          </div>
          <div className="max-w-[1072px] mx-auto my-10 ">
            <h2 className="heading_2 mb-7">Select Service for the Patient</h2>
            <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:justify-between gap-9 ">
              {servicePointsArray.map(
                (servicePoint: ServicePoint, index: number) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5 justify-between "
                  >
                    <Link to={servicePoint?.link}>
                      <div className={parantDiv_Style}>
                        <img
                          src={servicePoint?.imgSrc}
                          alt=""
                          className={image_Style}
                        />
                        <p className={text_Style}>{servicePoint?.title}</p>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePoints;

const parantDiv_Style =
  "flex flex-col rounded-lg justify-center items-center gap-5 border border-primaryColor p-5 h-[150px] w-[141px] hover:bg-primaryColor group transition-all duration-300 ";
const image_Style = "group-hover:svg_white transition-all duration-300";
const text_Style =
  "group-hover:text-whiteColor text-black dark:text-primaryColor transition-all duration-300 font-medium text-center";

const servicePointsArray: ServicePoint[] = [
  {
    imgSrc: "assets/svg/service-point/OPD.svg",
    title: "Me (OPD)",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Vital.svg",
    title: "Vital",
    link: "/vitals",
  },
  {
    imgSrc: "assets/svg/service-point/PEP.svg",
    title: "PEP",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/PREP.svg",
    title: "PrEP",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/TB Service.svg",
    title: "TB Service",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Pain Scaling.svg",
    title: "Pain Scaling",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Investigation.svg",
    title: "Investigation",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Surgery.svg",
    title: "Surgery",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Referrals.svg",
    title: "Referrals",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Covax.svg",
    title: "Covax",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Covid.svg",
    title: "Covid",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Birth Records.svg",
    title: "Birth Records",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Death Record.svg",
    title: "Death Record",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Pharmasy.svg",
    title: "Pharmacy",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/ART.svg",
    title: "ART",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Antenatal.svg",
    title: "Antenatal",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Labour.svg",
    title: "Labour",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Postnatal.svg",
    title: "Postnatal",
    link: "#",
  },
  {
    imgSrc: "assets/svg/service-point/Family Plan.svg",
    title: "Family Plan",
    link: "#",
  },
];

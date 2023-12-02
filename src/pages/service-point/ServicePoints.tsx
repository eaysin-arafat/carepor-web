import Container from "@/components/core/container/Container";
import ServicePointBox from "@/components/service-point/ServicePointBox";

const ServicePoints = () => {
  return (
    <div>
      <Container className="max-w-[1375px]">
        <div className="my-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center sm:justify-between gap-9 mx-8">
            {servicePointsArray.map((servicePoint: any, index: number) => (
              <ServicePointBox item={servicePoint} key={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePoints;

const servicePointsArray = [
  { imgSrc: "/public/assets/svg/service-point/OPD.svg", title: "Me (OPD)" },
  { imgSrc: "/public/assets/svg/service-point/Vital.svg", title: "Vital" },
  { imgSrc: "/public/assets/svg/service-point/PEP.svg", title: "PEP" },
  { imgSrc: "/public/assets/svg/service-point/PREP.svg", title: "PrEP" },
  {
    imgSrc: "/public/assets/svg/service-point/TB Service.svg",
    title: "TB Service",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Pain Scaling.svg",
    title: "Pain Scaling",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Investigation.svg",
    title: "Investigation",
  },
  { imgSrc: "/public/assets/svg/service-point/Surgery.svg", title: "Surgery" },
  {
    imgSrc: "/public/assets/svg/service-point/Referrals.svg",
    title: "Referrals",
  },
  { imgSrc: "/public/assets/svg/service-point/Covax.svg", title: "Covax" },
  { imgSrc: "/public/assets/svg/service-point/Covid.svg", title: "Covid" },
  {
    imgSrc: "/public/assets/svg/service-point/Birth Records.svg",
    title: "Birth Records",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Death Record.svg",
    title: "Death Record",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Pharmasy.svg",
    title: "Pharmacy",
  },
  { imgSrc: "/public/assets/svg/service-point/ART.svg", title: "ART" },
  {
    imgSrc: "/public/assets/svg/service-point/Antenatal.svg",
    title: "Antenatal",
  },
  { imgSrc: "/public/assets/svg/service-point/Labour.svg", title: "Labour" },
  {
    imgSrc: "/public/assets/svg/service-point/Postnatal.svg",
    title: "Postnatal",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Family Plan.svg",
    title: "Family Plan",
  },
];

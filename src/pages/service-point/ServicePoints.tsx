import Container from "@/components/core/container/Container";
import { cn } from "@/utilities/cn";
import { Calendar } from "react-feather";
import { Link } from "react-router-dom";

const ServicePoints = () => {
  return (
    <div className="mx-3">
      <Container className="max-w-[1345px] bg-whiteBgColor my-8 rounded-lg px-5 shadow-light">
        <div className="py-8 pb-1">
          <div className="border rounded-lg border-primaryColor xl:mx-8">
            <ClientDetailsCard
              withoutAction
              className="bg-whiteBgColor shadow-none sm:!border !border-primaryColor"
            />
          </div>
          <div className="max-w-[1072px] mx-auto my-10 ">
          <h2 className="heading_2 mb-7">Select Service for the Patient</h2>
            <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:justify-between gap-9 ">
              {servicePointsArray.map((servicePoint: any, index: number) => (
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
              ))}
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

const servicePointsArray = [
  {
    imgSrc: "/public/assets/svg/service-point/OPD.svg",
    title: "Me (OPD)",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Vital.svg",
    title: "Vital",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/PEP.svg",
    title: "PEP",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/PREP.svg",
    title: "PrEP",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/TB Service.svg",
    title: "TB Service",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Pain Scaling.svg",
    title: "Pain Scaling",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Investigation.svg",
    title: "Investigation",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Surgery.svg",
    title: "Surgery",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Referrals.svg",
    title: "Referrals",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Covax.svg",
    title: "Covax",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Covid.svg",
    title: "Covid",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Birth Records.svg",
    title: "Birth Records",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Death Record.svg",
    title: "Death Record",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Pharmasy.svg",
    title: "Pharmacy",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/ART.svg",
    title: "ART",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Antenatal.svg",
    title: "Antenatal",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Labour.svg",
    title: "Labour",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Postnatal.svg",
    title: "Postnatal",
    link: "#",
  },
  {
    imgSrc: "/public/assets/svg/service-point/Family Plan.svg",
    title: "Family Plan",
    link: "#",
  },
];

interface Props {
  className?: string;
  withoutAction?: boolean;
}

const ClientDetailsCard = ({ className }: Props) => {
  return (
    <div>
      <div
        className={cn(
          "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 bg-lightBlueColor gap-2 py-6 justify-between shadow-md rounded-lg border sm:border-none !border-primaryColor dark:!border-blue-900 p-5",
          className
        )}
      >
        <div className="col-span-2 flex items-center">
          <h1 className="text-xl font-medium font-poppins text-secondaryColor w-[80%]">
            Chukwuebuka Nwachinemelu
          </h1>
          <div className="w-[20%] sm:border-s  h-12"></div>
        </div>
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <Item
          title="Date of Birth"
          data="3-Jan-1991"
          icon={<Calendar size={18} />}
        />
        <div className="col-span-2">
          <Item
            title="Date of Birth"
            data="3-Jan-1991 sdfghjk fdghjkl dfghjk, thjkm, dfghjnm "
            icon={<Calendar size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

type CardProps = {
  title: string;
  data: string;
  icon: React.ReactNode;
};

const Item = ({ title, data, icon }: CardProps) => {
  return (
    <div className="flex flex-col font-poppins my-[6px]">
      <div className="text-xs font-semibold text-secondaryColor">{title}</div>
      <div className="flex gap-x-2 items-start mt-1.5">
        <span className="text-secondaryColor">{icon}</span>
        <span className="dark:text-grayColor text-secondaryColor text-xs ">
          {data}
        </span>
      </div>
    </div>
  );
};

// import Container from "@/components/core/container/Container";
// import ServicePointBox from "@/components/service-point/ServicePointBox";

// const ServicePoints = () => {
//   return (
//     <div>
//       <Container className="max-w-[1375px]">
//         <div className="my-10">
//           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center sm:justify-between gap-9 mx-8">
//             {servicePointsArray.map((servicePoint: any, index: number) => (
//               <ServicePointBox item={servicePoint} key={index} />
//             ))}
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default ServicePoints;

// const servicePointsArray = [
//   { imgSrc: "/public/assets/svg/service-point/OPD.svg", title: "Me (OPD)" },
//   { imgSrc: "/public/assets/svg/service-point/Vital.svg", title: "Vital" },
//   { imgSrc: "/public/assets/svg/service-point/PEP.svg", title: "PEP" },
//   { imgSrc: "/public/assets/svg/service-point/PREP.svg", title: "PrEP" },
//   {
//     imgSrc: "/public/assets/svg/service-point/TB Service.svg",
//     title: "TB Service",
//   },
//   {
//     imgSrc: "/public/assets/svg/service-point/Pain Scaling.svg",
//     title: "Pain Scaling",
//   },
//   {
//     imgSrc: "/public/assets/svg/service-point/Investigation.svg",
//     title: "Investigation",
//   },
//   { imgSrc: "/public/assets/svg/service-point/Surgery.svg", title: "Surgery" },
//   {
//     imgSrc: "/public/assets/svg/service-point/Referrals.svg",
//     title: "Referrals",
//   },
//   { imgSrc: "/public/assets/svg/service-point/Covax.svg", title: "Covax" },
//   { imgSrc: "/public/assets/svg/service-point/Covid.svg", title: "Covid" },
//   {
//     imgSrc: "/public/assets/svg/service-point/Birth Records.svg",
//     title: "Birth Records",
//   },
//   {
//     imgSrc: "/public/assets/svg/service-point/Death Record.svg",
//     title: "Death Record",
//   },
//   {
//     imgSrc: "/public/assets/svg/service-point/Pharmasy.svg",
//     title: "Pharmacy",
//   },
//   { imgSrc: "/public/assets/svg/service-point/ART.svg", title: "ART" },
//   {
//     imgSrc: "/public/assets/svg/service-point/Antenatal.svg",
//     title: "Antenatal",
//   },
//   { imgSrc: "/public/assets/svg/service-point/Labour.svg", title: "Labour" },
//   {
//     imgSrc: "/public/assets/svg/service-point/Postnatal.svg",
//     title: "Postnatal",
//   },
//   {
//     imgSrc: "/public/assets/svg/service-point/Family Plan.svg",
//     title: "Family Plan",
//   },
// ];

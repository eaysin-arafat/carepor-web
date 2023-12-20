import {
  URLCovax,
  URLCovid,
  URLDeathRecord,
  URLHts,
  URLInvestigation,
  URLOPD,
  URLSurgery,
  URLVitals,
} from "@/routers/module-link";
type ServicePoint = {
  imgSrc: string;
  title: string;
  link: string;
};

export const useServicePointArray = ({
  clientId,
}: {
  clientId?: string;
}): ServicePoint[] => {
  console.log(clientId);

  return [
    {
      imgSrc: "assets/svg/service-point/OPD.svg",
      title: "Me (OPD)",
      link: URLOPD(),
    },
    {
      imgSrc: "assets/svg/service-point/Vital.svg",
      title: "Vital",
      link: URLVitals(),
    },
    {
      imgSrc: "assets/svg/service-point/Vital.svg",
      title: "HTS",
      link: URLHts(),
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
      link: URLInvestigation(),
    },
    {
      imgSrc: "assets/svg/service-point/Surgery.svg",
      title: "Surgery",
      link: URLSurgery(),
    },
    {
      imgSrc: "assets/svg/service-point/Referrals.svg",
      title: "Referrals",
      link: "#",
    },
    {
      imgSrc: "assets/svg/service-point/Covax.svg",
      title: "Covax",
      link: URLCovax(),
    },
    {
      imgSrc: "assets/svg/service-point/Covid.svg",
      title: "Covid",
      link: URLCovid(),
    },
    {
      imgSrc: "assets/svg/service-point/Birth Records.svg",
      title: "Birth Records",
      link: "#",
    },
    {
      imgSrc: "assets/svg/service-point/Death Record.svg",
      title: "Death Record",
      link: URLDeathRecord(),
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
};

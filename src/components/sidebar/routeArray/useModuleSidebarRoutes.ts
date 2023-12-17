import {
  URLDashboard,
  URLHts,
  URLIPDHistory,
  URLInvestigation,
  URLOPD,
  URLSurgery,
  URLVitals,
} from "@/routers/module-link";

type SidebarItem = {
  id?: number;
  title?: string;
  link?: string;
  icon?: React.ReactNode | null;
  children: React.ReactNode[] | null;
};

type Props = {
  clientId?: string;
};

const useModuleSidebarRoutes = ({ clientId }: Props): SidebarItem[] => {
  console.log(clientId);
  return [
    {
      id: 1,
      title: "Dashboard",
      link: URLDashboard(),
      icon: "",
      children: null,
    },
    {
      id: 2,
      title: "Vital",
      link: URLVitals(),
      icon: "/assets/svg/sidebar/vital.svg",
      children: null,
    },
    {
      id: 3,
      title: "HTS",
      link: URLHts(),
      icon: "/assets/svg/sidebar/hts.svg",
      children: null,
    },
    {
      id: 4,
      title: "Encounter (OPD)",
      icon: "/assets/svg/sidebar/opd.svg",
      link: URLOPD(),
      children: null,
      // children: [
      //   {
      //     id: 1,
      //     title: "HTS",

      //     link: "#",
      //     icon: "",
      //   },
      //   {
      //     id: 2,
      //     title: "HTS",

      //     link: "#",
      //     icon: "",
      //   },
      //   {
      //     id: 3,
      //     title: "HTS",

      //     link: "#",
      //     icon: "",
      //   },
      // ],
    },
    {
      id: 5,
      title: "PEP",
      link: "#",
      icon: "/assets/svg/sidebar/pep.svg",
      children: null,
    },
    {
      id: 6,
      title: "PrEP",
      link: "#",
      icon: "/assets/svg/sidebar/prep.svg",
      children: null,
    },
    {
      id: 7,
      title: "TB Service",
      link: "#",
      icon: "/assets/svg/sidebar/tv.svg",
      children: null,
      // children: [
      //   {
      //     id: 1,
      //     title: "PEP",

      //     link: "#",
      //     icon: "",
      //   },
      //   {
      //     id: 1,
      //     title: "PrEP",

      //     link: "#",
      //     icon: "",
      //   },
      //   {
      //     id: 1,
      //     title: "TB Service",

      //     link: "#",
      //     icon: "",
      //   },
      // ],
    },
    {
      id: 8,
      title: "Medical Encounter (IPD)",
      link: URLIPDHistory(),
      icon: "/assets/svg/sidebar/opd.svg",
      children: null,
    },
    {
      id: 9,
      title: "VMMC Service",
      link: "#",
      icon: "/assets/svg/sidebar/vmmc.svg",
      children: null,
    },
    {
      id: 9,
      title: "Under 5",
      link: "#",
      icon: "/assets/svg/sidebar/setting.svg",
      children: null,
    },
    {
      id: 10,
      title: "Pain Scaling Tool",
      link: "#",
      icon: "/assets/svg/sidebar/pain.svg",
      children: null,
    },
    {
      id: 11,
      title: "Admissions",

      link: "#",
      icon: "/assets/svg/sidebar/admissions.svg",
      children: null,
    },
    {
      id: 12,
      title: "Investigation",
      link: URLInvestigation(),
      icon: "/assets/svg/sidebar/investigation.svg",
      children: null,
    },
    {
      id: 13,
      title: "Surgery",

      link: URLSurgery(),
      icon: "/assets/svg/sidebar/surgery.svg",
      children: null,
    },
    {
      id: 14,
      title: "Referrals",
      link: "#",
      icon: "/assets/svg/sidebar/referrals.svg",
      children: null,
    },
    {
      id: 15,
      title: "Covax",
      link: "/covax",
      icon: "/assets/svg/sidebar/covax.svg",
      children: null,
    },
    {
      id: 16,
      title: "Covid",
      link: "/covid",
      icon: "/assets/svg/sidebar/covid.svg",
      children: null,
    },
    {
      id: 17,
      title: "Birth Record",
      link: "#",
      icon: "/assets/svg/sidebar/birthrecord.svg",
      children: null,
    },
    {
      id: 18,
      title: "Death Record",
      link: "#",
      icon: "/assets/svg/sidebar/deathrecord.svg",
      children: null,
    },
    {
      id: 19,
      title: "Pharmacy",
      link: "#",
      icon: "/assets/svg/sidebar/pharmacy.svg",
      children: null,
    },
    {
      id: 20,
      title: "ART (Pediatric)",
      link: "#",
      icon: "/assets/svg/sidebar/artpad.svg",
      children: null,
    },
    {
      id: 21,
      title: "Postnatal (PNC)",
      link: "#",
      icon: "/assets/svg/sidebar/postnatal.svg",
      children: null,
    },
    {
      id: 22,
      title: "Family Planning",
      link: "#",
      icon: "/assets/svg/sidebar/family-planing.svg",
      children: null,
    },
  ];
};

export default useModuleSidebarRoutes;

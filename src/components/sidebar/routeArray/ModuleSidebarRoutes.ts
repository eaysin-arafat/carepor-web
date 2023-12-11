const ModuleSidebarRoutes = [
  {
    id: 1,
    title: "Dashboard",

    link: "/dashboard",
    icon: "",
  },
  {
    id: 2,
    title: "Vital",

    link: "/vitals",
    icon: "/assets/svg/sidebar/vital.svg",
  },
  {
    id: 3,
    title: "HTS",

    link: "#",
    icon: "/assets/svg/sidebar/hts.svg",
  },
  {
    id: 4,
    title: "Encounter (OPD)",
    icon: "/assets/svg/sidebar/opd.svg",
    link: "#",
    children: [
      {
        id: 1,
        title: "HTS",

        link: "#",
        icon: "",
      },
      {
        id: 2,
        title: "HTS",

        link: "#",
        icon: "",
      },
      {
        id: 3,
        title: "HTS",

        link: "#",
        icon: "",
      },
    ],
  },
  {
    id: 5,
    title: "PEP",

    link: "#",
    icon: "/assets/svg/sidebar/pep.svg",
  },
  {
    id: 6,
    title: "PrEP",
    link: "#",
    icon: "/assets/svg/sidebar/prep.svg",
  },
  {
    id: 7,
    title: "TB Service",

    link: "#",
    icon: "/assets/svg/sidebar/tv.svg",
    children: [
      {
        id: 1,
        title: "PEP",

        link: "#",
        icon: "",
      },
      {
        id: 1,
        title: "PrEP",

        link: "#",
        icon: "",
      },
      {
        id: 1,
        title: "TB Service",

        link: "#",
        icon: "",
      },
    ],
  },
  {
    id: 8,
    title: "VMMC Service",

    link: "#",
    icon: "/assets/svg/sidebar/vmmc.svg",
  },
  {
    id: 9,
    title: "Under 5",

    link: "#",
    icon: "/assets/svg/sidebar/setting.svg",
  },
  {
    id: 10,
    title: "Pain Scaling Tool",

    link: "#",
    icon: "/assets/svg/sidebar/pain.svg",
  },
  {
    id: 11,
    title: "Admissions",

    link: "/admissions",
    icon: "/assets/svg/sidebar/admissions.svg",
  },
  {
    id: 12,
    title: "Investigation",

    link: "/investigation",
    icon: "/assets/svg/sidebar/investigation.svg",
  },
  {
    id: 13,
    title: "Surgery",

    link: "#",
    icon: "/assets/svg/sidebar/surgery.svg",
  },
  {
    id: 14,
    title: "Referrals",
    link: "#",
    icon: "/assets/svg/sidebar/referrals.svg",
  },
  {
    id: 15,
    title: "Covax",

    link: "#",
    icon: "/assets/svg/sidebar/covax.svg",
  },
  {
    id: 16,
    title: "Covid",

    link: "#",
    icon: "/assets/svg/sidebar/covid.svg",
  },
  {
    id: 17,
    title: "Birth Record",

    link: "#",
    icon: "/assets/svg/sidebar/birthrecord.svg",
  },
  {
    id: 18,
    title: "Death Record",

    link: "#",
    icon: "/assets/svg/sidebar/deathrecord.svg",
  },
  {
    id: 19,
    title: "Pharmacy",

    link: "#",
    icon: "/assets/svg/sidebar/pharmacy.svg",
  },
  {
    id: 20,
    title: "ART (Pediatric)",

    link: "#",
    icon: "/assets/svg/sidebar/artpad.svg",
  },
  {
    id: 21,
    title: "Postnatal (PNC)",

    link: "#",
    icon: "/assets/svg/sidebar/postnatal.svg",
  },
  {
    id: 22,
    title: "Family Planning",
    link: "#",
    icon: "/assets/svg/sidebar/family-planing.svg",
  },
];

export default ModuleSidebarRoutes;

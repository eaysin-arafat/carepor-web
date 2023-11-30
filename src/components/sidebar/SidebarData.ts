const SidebarList = [
  {
    id: 1,
    title: "Dashboard",

    link: "/",
    icon: "",
  },
  {
    id: 2,
    title: "Vital",

    link: "/",
    icon: "/public/assets/svg/sidebar/vital.svg",
  },
  {
    id: 3,
    title: "HTS",

    link: "/",
    icon: "/public/assets/svg/sidebar/hts.svg",
  },
  {
    id: 4,
    title: "Encounter (OPD)",
    icon: "/public/assets/svg/sidebar/opd.svg",
    link: "/",
    children: [
      {
        id: 1,
        title: "HTS",

        link: "/",
        icon: "",
      },
      {
        id: 2,
        title: "HTS",

        link: "/",
        icon: "",
      },
      {
        id: 3,
        title: "HTS",

        link: "/",
        icon: "",
      },
    ],
  },
  {
    id: 5,
    title: "PEP",

    link: "/",
    icon: "/public/assets/svg/sidebar/pep.svg",
  },
  {
    id: 6,
    title: "PrEP",
    link: "/",
    icon: "/public/assets/svg/sidebar/prep.svg",
  },
  {
    id: 7,
    title: "TB Service",

    link: "/",
    icon: "/public/assets/svg/sidebar/tv.svg",
    children: [
      {
        id: 1,
        title: "PEP",

        link: "/",
        icon: "",
      },
      {
        id: 1,
        title: "PrEP",

        link: "/",
        icon: "",
      },
      {
        id: 1,
        title: "TB Service",

        link: "/",
        icon: "",
      },
    ],
  },
  {
    id: 8,
    title: "VMMC Service",

    link: "/",
    icon: "/public/assets/svg/sidebar/vmmc.svg",
  },
  {
    id: 9,
    title: "Under 5",

    link: "/",
    icon: "/public/assets/svg/sidebar/setting.svg",
  },
  {
    id: 10,
    title: "Pain Scaling Tool",

    link: "/",
    icon: "/public/assets/svg/sidebar/pain.svg",
  },
  {
    id: 11,
    title: "Investigation",

    link: "/",
    icon: "/public/assets/svg/sidebar/investigation.svg",
  },
  {
    id: 12,
    title: "Surgery",

    link: "/",
    icon: "/public/assets/svg/sidebar/surgery.svg",
  },
  {
    id: 13,
    title: "Referrals",
    link: "/",
    icon: "/public/assets/svg/sidebar/referrals.svg",
  },
  {
    id: 14,
    title: "Covax",

    link: "/",
    icon: "/public/assets/svg/sidebar/covax.svg",
  },
  {
    id: 15,
    title: "Covid",

    link: "/",
    icon: "/public/assets/svg/sidebar/covid.svg",
  },
  {
    id: 16,
    title: "Birth Record",

    link: "/",
    icon: "/public/assets/svg/sidebar/birthrecord.svg",
  },
  {
    id: 17,
    title: "Death Record",

    link: "/",
    icon: "/public/assets/svg/sidebar/deathrecord.svg",
  },
  {
    id: 18,
    title: "Pharmacy",

    link: "/",
    icon: "/public/assets/svg/sidebar/pharmacy.svg",
  },
  {
    id: 19,
    title: "ART (Pediatric)",

    link: "/",
    icon: "/public/assets/svg/sidebar/artpad.svg",
  },
  {
    id: 20,
    title: "Postnatal (PNC)",

    link: "/",
    icon: "/public/assets/svg/sidebar/postnatal.svg",
  },
  {
    id: 22,
    title: "Family Planning",
    link: "/",
    icon: "/public/assets/svg/sidebar/family-planing.svg",
  },
];

export default SidebarList;

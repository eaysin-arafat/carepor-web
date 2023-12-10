import HTSStatus from "@/assets/icons/HTSStatus";
import PepIcon from "@/assets/icons/Pep";
import PrepIcon from "@/assets/icons/Prep";
import TbIcon from "@/assets/icons/Tb";
import Vitals from "@/assets/icons/Vitals";
import { FaNotesMedical } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";

type Props = {
  label: string;
  color?: string;
};

function Icons({ label, color }: Props) {
  const size = 26;

  if (label === "Vital") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "HTS") {
    return <PiTestTubeFill color={color} size={size} />;
  }
  if (label === "Encounter (OPD)") {
    return <FaNotesMedical color={color} size={size} />;
  }
  if (label === "PEP") {
    return <PepIcon color={color} size={size} />;
  }
  if (label === "PrEP") {
    return <PrepIcon color={color} size={size} />;
  }
  if (label === "TB Service") {
    return <TbIcon color={color} size={size} />;
  }
  if (label === "VMMC Service") {
    return <HTSStatus color={color} size={size} />;
  }
  if (label === "Under 5") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Pain Scaling Tool") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Investigation") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Surgery") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Referrals") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Covax") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Covid") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Birth Record") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Death Record") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Pharmacy") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "ART (Pediatric)") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "ART (Adult)") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Postnatal (PNC)") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Family Planning") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Under") {
    return <Vitals color={color} size={size} />;
  }
  if (label === "Under") {
    return <Vitals color={color} size={size} />;
  }
}

export default Icons;

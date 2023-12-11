import { Client } from "@/interface/clients";
import { URLServicePoint } from "@/routers/client";
import { cookieManager } from "@/utilities/cookie-manager";
import { useNavigate } from "react-router-dom";

const usePatientCard = (client: Client) => {
  const navigate = useNavigate();

  // handle attend to patient
  const handleAttendToPatient = () => {
    cookieManager.saveCookie("client", JSON.stringify(client), {});
    navigate(URLServicePoint());
  };

  return { handleAttendToPatient };
};

export default usePatientCard;

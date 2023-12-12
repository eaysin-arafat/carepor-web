import { useCreateOPDVisitMutation } from "@/features/opd-visit/opd-visit-api";
import { useNavigate } from "react-router-dom";
import { cookieManager } from "./cookie-manager";

const opdVisitSession = ({
  clientId,
  navigateTo,
}: {
  clientId: string;
  navigateTo: string;
}) => {
  const navigate = useNavigate();

  const [createOPDVisit] = useCreateOPDVisitMutation();

  createOPDVisit(clientId)
    .unwrap()
    .then((res) => {
      cookieManager.saveCookie("client", JSON.stringify(clientId), {});
      cookieManager.saveCookie("opdVisitSession", JSON.stringify(res), {});
      navigate(navigateTo);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

export default opdVisitSession;

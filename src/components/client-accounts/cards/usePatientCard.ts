import { Client } from "@/interface/clients";
import { URLServicePoint } from "@/routers/client";
import useOpdVisitSession from "@/utilities/opdVisitSession";

const usePatientCard = (client: Client) => {
  // handle attend to patient
  const handleAttendToPatient = () => {
    useOpdVisitSession({
      clientId: client?.oid,
      navigateTo: URLServicePoint(),
    });
  };

  return { handleAttendToPatient };
};

export default usePatientCard;

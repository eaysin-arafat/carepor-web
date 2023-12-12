import { Client } from "@/interface/clients";

export const clientAddress = (client: Client) => {
  const household = client?.householdNumber
    ? "H#" + client?.householdNumber + ", "
    : "";
  const road = client?.road ? "R#" + client?.road + ", " : "";
  const area = client?.area ? client?.area + ", " : "";
  const town = client?.townName ? client?.townName + ", " : "";
  const landmarks = client?.landmarks ? client?.landmarks + ", " : "";
  return household + road + area + town + landmarks;
};

import PatientCard from "@/components/client-accounts/cards/PatientCard";
import SelectRadio from "@/components/core/form-elements/SelectRadio";

import { Client } from "@/interface/clients";
import { useState } from "react";

type Props = {};

const client: Client = {
  oid: "ec6c61bf-32e4-4235-ce8b-08dbe4c5c412",
  firstName: "Amir",
  surname: "Hamza",
  sex: 1,
  dob: "2004-11-17T18:00:00",
  isDOBEstimated: false,
  nrc: "987654/32/1",
  noNRC: false,
  napsaNumber: "",
  underFiveCardNumber: "",
  nupn: "2306-21230P-00110-2",
  registrationDate: "2023-11-14T03:56:00",
  fathersNRC: "",
  fatherNAPSANumber: "",
  isFatherDeceased: false,
  mothersNRC: "",
  motherNAPSANumber: "",
  isMotherDeceased: false,
  guardiansNRC: "",
  guardianNAPSANumber: "",
  maritalStatus: 1,
  cellphoneCountryCode: "260",
  cellphone: "222222222",
  otherCellphoneCountryCode: "0000",
  otherCellphone: "00000000000",
  noCellphone: false,
  landlineCountryCode: "0000",
  householdNumber: "",
  road: "",
  area: "",
  landmarks: "",
  isZambianBorn: false,
  birthPlace: "dwdwfe",
  townName: "",
  religion: 2,
  isDeceased: false,
  isOnART: false,
  isAdmitted: false,
  countryId: 37,
  homeLanguageId: 13,
  createdIn: 1,
  dateCreated: "2023-11-14T09:57:00",
  createdBy: "a9c9c9c9-2fd5-48a1-87e0-2257778f22fe",
  isDeleted: false,
  isSynced: false,
  hivStatus: 0,
  districtId: 0,
  educationLevelId: 0,
  occupationId: 0,
};

function AssignServiceQueue({}: Props) {
  const [service, setService] = useState("");

  console.log({ service });

  return (
    <>
      <PatientCard client={client} />
      <div>
        <p>Select Service Point for the Patient</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <SelectRadio
          counter
          title="Surgery"
          count="5"
          handler={(e: any) => setService(e.target.value)}
          value="s"
          classNmae=""
          name={""}
        />
        <SelectRadio
          counter
          title="Vital"
          count="5"
          handler={(e: any) => setService(e.target.value)}
          value="s"
          classNmae=""
          name={""}
        />
        <SelectRadio
          counter
          title="HTS"
          count="5"
          handler={(e: any) => setService(e.target.value)}
          value="s"
          classNmae=""
          name={""}
        />
        <SelectRadio
          counter
          title="Room"
          count="5"
          handler={(e: any) => setService(e.target.value)}
          value="s"
          classNmae=""
          name={""}
        />
      </div>
      <div className="mt-8">
        <SelectRadio
          title="Surgery"
          count="5"
          handler={(e: any) => setService(e.target.value)}
          value="s"
          classNmae="bg-primaryColor text-white"
          name={""}
        />
      </div>
    </>
  );
}

export default AssignServiceQueue;

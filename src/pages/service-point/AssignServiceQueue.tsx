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
  const [urgency, setUrgency] = useState("");

  console.log({ service });

  const array = [
    {
      id: 1,
      name: service,
      title: "OPD",
      value: "OPD",
    },
    {
      id: 2,
      name: service,
      title: "Vital",
      value: "Vital",
    },
    {
      id: 3,
      name: service,
      title: "PEP",
      value: "PEP",
    },
    {
      id: 4,
      name: service,
      title: "PrEP",
      value: "PrEP",
    },
    {
      id: 5,
      name: service,
      title: "TB Service",
      value: "TB Service",
    },
  ];

  return (
    <>
      <div className="border p-5 w-[1340px] rounded m-auto mt-5">
        <PatientCard client={client} />
        <div>
          <p className="heading_3 font-medium">
            Select Service Point for the Patient
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {array.map((item, index) => (
            <SelectRadio
              key={index}
              counter
              title={item.title}
              count="5"
              handler={(e: any) => setService(e.target.value)}
              value={item.value}
              classNmae={service === item.value && "bg-primaryColor text-white"}
              name={item.name}
            />
          ))}
        </div>
        <div className="mt-5">
          <p className="heading_3 font-medium">Select Urgency</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {array.map((item, index) => (
            <SelectRadio
              key={index}
              title={item.title}
              handler={(e: any) => setUrgency(e.target.value)}
              value={item.value}
              classNmae={urgency === item.value && "bg-primaryColor text-white"}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AssignServiceQueue;

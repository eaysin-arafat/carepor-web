import { relationshipsEnums } from "@/enum/clients";
import { Client } from "@/interface/clients";
import { cookieManager } from "@/utilities/cookie-manager";
import React from "react";
import Card from "../core/card/Card";
import DataRow from "../core/table/DataRow";
import useClientData from "./useClientData";

const FamilyHistory: React.FC = () => {
  const client: Client | null = cookieManager.parseCookie("client") || null;
  const { clientObj, handleClientEdit, getCountryName } = useClientData({
    client,
  });
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card
          title="Mother Details"
          className="bg-whiteColor shadow-none border md:px-5 mt-5"
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(2)}
        >
          <div className="md:grid">
            <DataRow title="First Name" data={clientObj?.mothersFirstName} />
            <DataRow title="Last Name" data={clientObj?.mothersSurname} />
            <DataRow title="NRC" data={clientObj?.mothersNRC} />
            <DataRow title="NAPSA Number" data={clientObj?.motherNAPSANumber} />
            <DataRow
              title="Nationality"
              data={getCountryName(clientObj?.motherNationality)}
            />
          </div>
        </Card>
        <Card
          title="Father Details"
          className="bg-whiteColor shadow-none border md:px-5 mt-5"
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(2)}
        >
          <div className="md:grid">
            <DataRow title="First Name" data={clientObj?.fathersFirstName} />
            <DataRow title="Last Name" data={clientObj?.fathersSurname} />
            <DataRow title="NRC" data={clientObj?.fathersNRC} />
            <DataRow title="NAPSA Number" data={clientObj?.fatherNAPSANumber} />
            <DataRow
              title="Nationality"
              data={getCountryName(clientObj?.fatherNationality)}
            />
          </div>
        </Card>
        <Card
          title="Guardian Details"
          className="bg-whiteColor shadow-none border md:px-5 mt-5"
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(2)}
        >
          <div className="md:grid">
            <DataRow title="First Name" data={clientObj?.guardiansFirstName} />
            <DataRow title="Last Name" data={clientObj?.guardiansSurname} />
            <DataRow title="NRC " data={clientObj?.guardiansNRC} />
            <DataRow
              title="NAPSA Number"
              data={clientObj?.guardianNAPSANumber}
            />
            <DataRow
              title="Nationality"
              data={getCountryName(clientObj?.guardianNationality)}
            />
            <DataRow
              title="Relationship with Gaurdian"
              data={
                clientObj?.guardianRelationship &&
                relationshipsEnums[clientObj?.guardianRelationship]
              }
            />
          </div>
        </Card>
      </div>
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-5">
      <DashboardCard title="Service Queue" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
    </div> */}
    </>
  );
};

export default FamilyHistory;

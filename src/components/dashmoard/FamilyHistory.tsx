import { relationshipsEnums } from "@/enum/clients";
import useClientDetails from "@/pages/client-accounts/details/useClientDetails";
import React from "react";
import Card from "../core/card/Card";
import DataRow from "../core/table/DataRow";

const FamilyHistory: React.FC = () => {
  const {
    clientObj,
    handleClientEdit,
    getCountryName,
    // getHomeLanguagesName,
    // getOccupationsName,
    // getEducationLevelName,
    // districtName,
    // isError,
    // isLoading,
    // isSuccess,
    // link with mother
    // isOverFive,
    // isLinked,
  } = useClientDetails();
  return (
    <>
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 gap-5">
      <DashboardCard title="Service Queue" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
    </div> */}
      <Card
        title="Parents Guardian Details"
        className="bg-whiteColor shadow-none border md:px-5 mt-5"
        titleClass="text-secondaryColor pt-6"
        edit
        editHandler={() => handleClientEdit(2)}
      >
        <div className="md:grid md:grid-cols-2">
          <h2 className="heading_1 text-2xl text-start col-span-2 mb-5">
            Mother
          </h2>
          <DataRow title="First Name" data={clientObj?.mothersFirstName} />
          <DataRow title="Last Name" data={clientObj?.mothersSurname} />
          <DataRow title="NRC" data={clientObj?.mothersNRC} />
          <DataRow title="NAPSA Number" data={clientObj?.motherNAPSANumber} />
          <DataRow
            title="Nationality"
            data={getCountryName(clientObj?.motherNationality)}
          />

          <div className="border-b col-span-2 my-5" />
          <h2 className="heading_1 text-2xl text-start col-span-2 mb-5">
            Father
          </h2>
          <DataRow title="First Name" data={clientObj?.fathersFirstName} />
          <DataRow title="Last Name" data={clientObj?.fathersSurname} />
          <DataRow title="NRC" data={clientObj?.fathersNRC} />
          <DataRow title="NAPSA Number" data={clientObj?.fatherNAPSANumber} />
          <DataRow
            title="Nationality"
            data={getCountryName(clientObj?.fatherNationality)}
          />

          <div className="border-b col-span-2 my-5" />
          <h2 className="heading_1 text-2xl text-start col-span-2 mb-5">
            Guardian
          </h2>
          <DataRow title="First Name" data={clientObj?.guardiansFirstName} />
          <DataRow title="Last Name" data={clientObj?.guardiansSurname} />
          <DataRow title="NRC " data={clientObj?.guardiansNRC} />
          <DataRow title="NAPSA Number" data={clientObj?.guardianNAPSANumber} />
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
    </>
  );
};

export default FamilyHistory;

import { religionsEnums } from "@/enum/clients";
import useClientDetails from "@/pages/client-accounts/details/useClientDetails";
import { DateFunc } from "@/utilities/date";
import React from "react";
import Card from "../core/card/Card";
import DataRow from "../core/table/DataRow";

const Demographics: React.FC = () => {
  const {
    clientObj,
    handleClientEdit,
    getCountryName,
    getHomeLanguagesName,
    getOccupationsName,
    getEducationLevelName,
    districtName,
  } = useClientDetails();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5">
        <Card
          title="Basic Info"
          className="bg-whiteColor shadow-none border md:px-5"
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(1)}
        >
          <DataRow title="First Name" data={clientObj?.firstName} />
          <DataRow title="Last Name" data={clientObj?.surname} />
          <DataRow
            title="Sex"
            data={clientObj?.sex == "1" ? "Male" : "Female"}
          />
          <DataRow
            title="Date of Birth"
            data={clientObj?.dob ? DateFunc.formatDate(clientObj?.dob) : ""}
          />
          <DataRow
            title="Country"
            data={getCountryName(clientObj?.countryId)}
          />
          <DataRow title="NRC" data={clientObj?.nrc} />
          <DataRow title="NUPN" data={clientObj?.nupn} />
          <DataRow title="NSPA Number" data={clientObj?.napsaNumber} />
          <DataRow
            title="Registered on "
            data={
              clientObj?.registrationDate
                ? DateFunc.formatDate(clientObj?.registrationDate)
                : ""
            }
          />
        </Card>
        <Card
          title="Contact Information"
          className="bg-whiteColor shadow-none border md:px-5 "
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(1)}
        >
          <DataRow
            title="Cellphone Number"
            data={
              clientObj?.cellphone && clientObj?.cellphone != "00000000000"
                ? clientObj?.cellphoneCountryCode + " " + clientObj?.cellphone
                : ""
            }
          />
          <DataRow
            title="Other Cellphone Number"
            data={
              clientObj?.otherCellphone &&
              clientObj?.otherCellphone != "00000000000"
                ? clientObj?.otherCellphoneCountryCode +
                  " " +
                  clientObj?.otherCellphone
                : ""
            }
          />
          <DataRow
            title="Landline Number"
            data={
              clientObj?.landline && clientObj?.landline != "00000000000"
                ? clientObj?.landlineCountryCode + " " + clientObj?.landline
                : ""
            }
          />
          <DataRow title="Email" data={clientObj?.email} />
          <DataRow
            title="Country of Origin"
            data={clientObj?.isZambianBorn ? "Zambia" : "Others"}
          />
          <DataRow title="House Number" data={clientObj?.householdNumber} />
          <DataRow title="Road" data={clientObj?.road} />
          <DataRow title="Area" data={clientObj?.area} />
          <DataRow title="Town" data={clientObj?.townName} />
          <DataRow title="Landmarks & Direction" data={clientObj?.landmarks} />
        </Card>
        <Card   
          title="Martial Status / Spouse Details"
          className="bg-whiteColor shadow-none border md:px-5"
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(3)}
        >
          <DataRow
            title="Martial Status "
            data={
              clientObj?.maritalStatus &&
              religionsEnums[clientObj?.maritalStatus]
            }
          />
          <DataRow
            title="Spouse Legal Name"
            data={clientObj?.spousesLegalName}
          />
          <DataRow title="Last Name" data={clientObj?.spousesSurname} />
        </Card>
        <Card
          title="Place of Birth & Religious Denomination"
          className="bg-whiteColor shadow-none border md:px-5 "
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(3)}
        >
          <DataRow
            title="Home Language"
            data={getHomeLanguagesName(clientObj?.homeLanguageId)}
          />
          <DataRow title="District of Birth" data={districtName} />
          <DataRow title="Place of Birth" data={clientObj?.birthPlace} />
          <DataRow
            title="Religion"
            data={clientObj?.religion && religionsEnums[clientObj?.religion]}
          />
        </Card>
        <Card
          title="Education & Employment"
          className="bg-whiteColor shadow-none border md:px-5"
          titleClass="text-secondaryColor pt-6 text-xl"
          edit
          editHandler={() => handleClientEdit(3)}
        >
          <DataRow
            title="Highest Level of Education "
            data={
              clientObj?.educationLevelId
                ? getEducationLevelName(clientObj?.educationLevelId)
                : ""
            }
          />

          <DataRow
            title="Occupation"
            data={
              clientObj?.occupationId
                ? getOccupationsName(clientObj?.occupationId)
                : ""
            }
          />
        </Card>
      </div>
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
      <DashboardCard title="Service Queue" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
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

export default Demographics;

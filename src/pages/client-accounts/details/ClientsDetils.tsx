import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import DataRow from "@/components/core/table/DataRow";
import { BiArrowBack } from "react-icons/bi";
// import { Link } from "react-router-dom";
import LinkButton from "@/components/core/buttons/LinkButton";
import { relationshipsEnums, religionsEnums } from "@/enum/clients";
import { URLClientSearch, URLLinkWithMother } from "@/routers/client";
import { cn } from "@/utilities/cn";
import { DateFunc } from "@/utilities/date";
import { Link } from "react-router-dom";
import useClientDetails from "./useClientDetails";

type Props = {};

const ClientDetails = ({}: Props) => {
  const {
    clientObj,
    handleClientEdit,
    getCountryName,
    getHomeLanguagesName,
    getOccupationsName,
    getEducationLevelName,
    districtName,
    isError,
    isLoading,
    isSuccess,
    // link with mother
    isOverFive,
    isLinked,
  } = useClientDetails();

  return (
    <div className="mt-5">
      <Container className="max-w-[1024px] mb-10">
        <div className="mx-3">
          <Link to={URLClientSearch()} className="go_back">
            <BiArrowBack />
            <p> Back</p>
          </Link>
          <div className="text-center heading_2 text-secondaryColor mb-3">
            Client Profile Details
          </div>
          {isLoading && <div>Loading...</div>}
          {isSuccess && !isError && (
            <>
              <Card
                title="Basic Info"
                className="bg-whiteColor shadow-none border md:px-5"
                titleClass="text-secondaryColor pt-6"
                edit
                editHandler={() => handleClientEdit(1)}
              >
                <div className="md:grid md:grid-cols-2">
                  <DataRow title="First Name" data={clientObj?.firstName} />
                  <DataRow title="Last Name" data={clientObj?.surname} />
                  <DataRow
                    title="Sex"
                    data={clientObj?.sex == 1 ? "Male" : "Female"}
                  />
                  <DataRow
                    title="Date of Birth"
                    data={
                      clientObj?.dob ? DateFunc.formatDate(clientObj?.dob) : ""
                    }
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
                </div>
                <></>
              </Card>

              <Card
                title="Contact Information"
                className="bg-whiteColor shadow-none border md:px-5 my-5"
                titleClass="text-secondaryColor pt-6"
                edit
                editHandler={() => handleClientEdit(1)}
              >
                <DataRow
                  title="Cellphone Number"
                  data={
                    clientObj?.cellphone &&
                    clientObj?.cellphone != "00000000000"
                      ? clientObj?.cellphoneCountryCode +
                        " " +
                        clientObj?.cellphone
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
                      ? clientObj?.landlineCountryCode +
                        " " +
                        clientObj?.landline
                      : ""
                  }
                />
                <DataRow title="Email" data={clientObj?.email} />
                <DataRow
                  title="Country of Origin"
                  data={clientObj?.isZambianBorn ? "Zambia" : "Others"}
                />
                <DataRow
                  title="House Number"
                  data={clientObj?.householdNumber}
                />
                <DataRow title="Road" data={clientObj?.road} />
                <DataRow title="Area" data={clientObj?.area} />
                <DataRow title="Town" data={clientObj?.townName} />
                <DataRow
                  title="Landmarks & Direction"
                  data={clientObj?.landmarks}
                />
              </Card>

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
                  <DataRow
                    title="First Name"
                    data={clientObj?.mothersFirstName}
                  />
                  <DataRow title="Last Name" data={clientObj?.mothersSurname} />
                  <DataRow title="NRC" data={clientObj?.mothersNRC} />
                  <DataRow
                    title="NAPSA Number"
                    data={clientObj?.motherNAPSANumber}
                  />
                  <DataRow
                    title="Nationality"
                    data={getCountryName(clientObj?.motherNationality)}
                  />

                  <div className="border-b col-span-2 my-5" />
                  <h2 className="heading_1 text-2xl text-start col-span-2 mb-5">
                    Father
                  </h2>
                  <DataRow
                    title="First Name"
                    data={clientObj?.fathersFirstName}
                  />
                  <DataRow title="Last Name" data={clientObj?.fathersSurname} />
                  <DataRow title="NRC" data={clientObj?.fathersNRC} />
                  <DataRow
                    title="NAPSA Number"
                    data={clientObj?.fatherNAPSANumber}
                  />
                  <DataRow
                    title="Nationality"
                    data={getCountryName(clientObj?.fatherNationality)}
                  />

                  <div className="border-b col-span-2 my-5" />
                  <h2 className="heading_1 text-2xl text-start col-span-2 mb-5">
                    Guardian
                  </h2>
                  <DataRow
                    title="First Name"
                    data={clientObj?.guardiansFirstName}
                  />
                  <DataRow
                    title="Last Name"
                    data={clientObj?.guardiansSurname}
                  />
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

              <Card
                title="Martial Status / Spouse Details"
                className="bg-whiteColor shadow-none border md:px-5 mt-5"
                titleClass="text-secondaryColor pt-6"
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
                className="bg-whiteColor shadow-none border md:px-5 mt-5"
                titleClass="text-secondaryColor pt-6"
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
                  data={
                    clientObj?.religion && religionsEnums[clientObj?.religion]
                  }
                />
              </Card>
              <Card
                title="Education & Employment"
                className="bg-whiteColor shadow-none border md:px-5 mt-5"
                titleClass="text-secondaryColor pt-6"
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
              <div className="mt-5 flex justify-center w-full">
                <div
                  className={cn(
                    `grid grid-cols-1 md:grid-cols-${
                      isOverFive ? "1" : "2"
                    } gap-4 `
                  )}
                >
                  <LinkButton
                    link={URLClientSearch()}
                    title="Finish"
                    className="w-[220px] px-3 md:px-4 md:py-3 py-2 text-md md:text-lg !bg-whiteBgColor dark:text-white"
                  />
                  {!isOverFive && !isLinked && (
                    <LinkButton
                      link={URLLinkWithMother({
                        id: clientObj.oid,
                      })}
                      title="Link With Mother"
                      className="w-[220px] px-3 md:px-4 md:py-3 py-2 text-md md:text-lg "
                    />
                  )}
                  {!isOverFive && isLinked && (
                    <LinkButton
                      link={URLLinkWithMother({
                        id: clientObj.oid,
                      })}
                      title="Unlink With Mother"
                      className="w-[220px] px-3 md:px-4 md:py-3 py-2 text-md md:text-lg !bg-dangerColor text-whiteColor dark:text-white"
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ClientDetails;

import Section from "@/components/core/card/Section";
import Container from "@/components/core/container/Container";
import DataRow from "@/components/core/table/DataRow";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const DeathRecordDetails = () => {
  const navigate = useNavigate();
  return (
    <Container className="max-w-[1000px]">
      <div className=" my-5">
        <h2 className="heading_2 text-center mb-5">Death Record</h2>
        <div className="bg-whiteBgColor rounded-lg p-5 mx-2">
          <div className="flex justify-between">
            <h2 className="text-secondaryColor text-lg lg:text-xl font-medium">
              Death Records
            </h2>
            <button className="flex gap-1 items-center text-primaryColor">
              <MdOutlineModeEditOutline /> Edit
            </button>
          </div>
          <Section title="Deceased">
            <DataRow
              title="Date of Death"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"formattedDate"}
            />
            <DataRow
              title="Age (Years at Death)"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.ageOfDeceased"}
            />
            <DataRow
              title="Provinve of Death"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantCity"}
            />
            <DataRow
              title="District of Death"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantCity"}
            />
            <DataRow
              title="Where Death Occured"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.whereDeathOccured"}
            />
          </Section>
          <Section title="Informant Details">
            <DataRow
              title="First Name"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantFirstName"}
            />
            <DataRow
              title="Surname"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantSurname"}
            />
            <DataRow
              title="Nickname"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantNickname"}
            />
            <DataRow
              title="Cellphone Number"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantCellphone"}
            />
            <DataRow
              title="Landline Number"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={
                "deathRecord?.informantLandlineCountryCode" +
                " " +
                "deathRecord?.informantLandline"
              }
            />
            <DataRow
              title="Relationship"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantRelationship"}
            />
            <DataRow
              title="Other Relationship"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantOtherRelationship"}
            />
            <DataRow
              title="City/ Town/ Village"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantCity"}
            />
            <DataRow
              title="Cmpd Street No."
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantStreetNo"}
            />
            <DataRow
              title="PO Box, Pvt Bag"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantPOBox"}
            />
            <DataRow
              title="Landmark"
              titleClass="xs:min-w-[165px] md:min-w-[200px] 2xl:min-w-[245px]"
              data={"deathRecord?.informantLandmark"}
            />
          </Section>
        </div>
        <div className=" flex gap-1 mt-5 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="transparent_btn bg-whiteBgColor"
          >
            <RxCrossCircled className="mr-2" /> Close
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DeathRecordDetails;

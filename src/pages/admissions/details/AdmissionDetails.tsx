import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import DataRow from "@/components/core/table/DataRow";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const AdmissionDetails = ({}: Props) => {
  return (
    <div className="mt-5">
      <Container className="max-w-[1024px]">
        <div className="mx-3">
          <Link to="/client-search" className="go_back">
            <BiArrowBack />
            <p> Back</p>
          </Link>
          <div className="text-center heading_2 text-secondaryColor mb-3">
          Admission Details
          </div>
          <Card
            // title="Basic Info"
            className="bg-whiteColor shadow-none border md:px-5"
            titleClass="text-secondaryColor"
            // edit
          >
            <div className="">
              <DataRow title="Admission Date " data="02-12-2023" />
              <DataRow title="Department" data="Data" />
              <DataRow title="Firm/Unit " data="Data" />
              <DataRow title="Ward" data="Data" />
              <DataRow title="Bed " data="Data" />
              <DataRow title="Admission Note " data="Data" />
              <DataRow title="Discharge Date " data="Data" />
              <DataRow title="Discharge Note " data="Data" />
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default AdmissionDetails;
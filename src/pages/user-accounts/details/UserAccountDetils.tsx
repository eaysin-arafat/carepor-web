import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import DataRow from "@/components/core/table/DataRow";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const UserAccountDetails = ({}: Props) => {
  return (
    <div className="mt-5">
      <Container className="max-w-[1024px]">
        <div className="mx-3">
          <button className="go_back">
            <BiArrowBack />
            <p> Back</p>
          </button>
          <div className="text-center heading_2 text-secondaryColor mb-3">
            Patient Profile
          </div>
          <Card
            title="Basic Info"
            className="bg-whiteColor shadow-none border md:px-5"
            titleClass="text-secondaryColor"
            edit
          >
            <div className="md:grid md:grid-cols-2">
              <DataRow title="First Name " data="Amir" />
              <DataRow title="Last Name " data="Hamza" />
              <DataRow title="NRC " data="22222/22/2" />
              <DataRow title="Registered on " data="02-12-2023" />
              <DataRow title="Date of Birth " data="02-12-2023" />
              <DataRow title="Sex " data="Male" />
              <DataRow title="Country " data="Zambia" />
            </div>
          </Card>

          <Card
            title="Parents Guardian Details"
            className="bg-whiteColor shadow-none border md:px-5 mt-5"
            titleClass="text-secondaryColor"
            edit
          >
            <div className="md:grid md:grid-cols-2">
              <h2 className="heading_1 text-2xl text-start col-span-2 mb-5">
                Mother
              </h2>
              <DataRow title="First Name " data="Amir" />
              <DataRow title="Last Name " data="Hamza" />
              <DataRow title="NRC " data="22222/22/2" />
              <DataRow title="Registered on " data="02-12-2023" />
              <DataRow title="Date of Birth " data="02-12-2023" />
              <DataRow title="Sex " data="Male" />
              <DataRow title="Country " data="Zambia" />
              <div className="border-b col-span-2 my-5" />
              <h2 className="heading_1 text-2xl text-start col-span-2 mb-5">
                Father
              </h2>
              <DataRow title="First Name " data="Amir" />
              <DataRow title="Last Name " data="Hamza" />
              <DataRow title="NRC " data="22222/22/2" />
              <DataRow title="Registered on " data="02-12-2023" />
              <DataRow title="Date of Birth " data="02-12-2023" />
              <DataRow title="Sex " data="Male" />
              <DataRow title="Country " data="Zambia" />
            </div>
          </Card>

          <Card
            title="Martial Status / Spouse Details"
            className="bg-whiteColor shadow-none border md:px-5 mt-5"
            titleClass="text-secondaryColor"
            edit
          >
              <DataRow title="Martial Status " data="Single" />
              <DataRow title="Spouse Legal  Name  " data="Amir" />
              <DataRow title="Last Name " data="Hamza" />
              <DataRow title="NRC " data="22222/22/2" />
          </Card>

          <Card
            title="Contact Information"
            className="bg-whiteColor shadow-none border md:px-5 my-5"
            titleClass="text-secondaryColor"
            edit
          >
              <DataRow title="Cellphone " data="01756386529" />
              <DataRow title="Other Cellphone  " data="" />
              <DataRow title="Land Line Number " data="" />
              <DataRow title="Country of Origin " data="Zambia" />
              <DataRow title="House Number " data="House Number" />
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default UserAccountDetails;
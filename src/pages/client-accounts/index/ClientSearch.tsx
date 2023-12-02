import React from "react";

import IsPatientFound from "@/components/client-accounts/cards/IsPatientFound";
import PatientCard from "@/components/client-accounts/cards/PatientCard";
import CellPhoneSearch from "@/components/client-accounts/clients-search/CellPhoneSearch";
import FullNameSearch from "@/components/client-accounts/clients-search/FullNameSearch";
import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import CustomNrc from "@/components/core/form-elements/CustomNrc";
import Input from "@/components/core/form-elements/Input";
import Table from "@/components/core/table/Table";
import TableData from "@/components/core/table/TableData";
import TableHead from "@/components/core/table/TableHead";
import { cn } from "@/utilities/cn";

const ClientSearch = () => {
  const [search, setSearch] = React.useState("nrc");

  const handleNrc = () => {
    setSearch("nrc");
  };

  const handleNupn = () => {
    setSearch("nupn");
  };

  const handleCellPhone = () => {
    setSearch("cellPhone");
  };

  const handleName = () => {
    setSearch("name");
  };

  return (
    <>
      <div className=" mx-5 xl:mx-auto">
        <Container>
          <>
            <div className="md:flex justify-between mt-10 mb-3">
              <h2 className="text-2xl font-semibold text-secondaryColor ">
                Welcome Amir Hamza
              </h2>
              <h2 className="text-textColor ">Wednesday, November 29, 2023</h2>
            </div>
            <div className="relative bg-lightBlueColor w-full p-5 rounded-lg shadow  transition-all ease-out">
              <h2 className="heading_2 text-center font-semibold text-secondaryColor text-2xl md:text-4xl pb-2">
                Search or Add New Patient
              </h2>
              <div className="flex flex-wrap justify-center gap-5 mt-5">
                <button
                  onClick={handleNrc}
                  className={cn(defaultButtonCss, {
                    "bg-primaryColor text-whiteColor": search === "nrc",
                  })}
                >
                  NRC
                </button>
                <button
                  onClick={handleNupn}
                  className={cn(defaultButtonCss, {
                    "bg-primaryColor text-whiteColor": search === "nupn",
                  })}
                >
                  NUPN
                </button>
                <button
                  onClick={handleCellPhone}
                  className={cn(defaultButtonCss, {
                    "bg-primaryColor text-whiteColor": search === "cellPhone",
                  })}
                >
                  Cell Phone
                </button>
                <button
                  onClick={handleName}
                  className={cn(defaultButtonCss, {
                    "bg-primaryColor text-whiteColor transition-all ease-in-out":
                      search === "name",
                  })}
                >
                  Full Name
                </button>
              </div>
              <form action="" className="w-full flex justify-center gap-5 mt-5">
                <div className="w-full max-w-[620px] pb-9">
                  {search === "nrc" && (
                    <CustomNrc
                      label=""
                      placeholder="Search By NRC"
                      onChange={() => {}}
                      className="border-gray-300 focus:border-gray-300"
                    />
                  )}
                  {search === "nupn" && (
                    <Input
                      label=""
                      placeholder="Search By NUPN"
                      onChange={() => {}}
                      className="border-gray-300 focus:border-gray-300"
                    />
                  )}
                  {search === "cellPhone" && <CellPhoneSearch />}
                  {search === "name" && <FullNameSearch />}
                </div>
                <div className="absolute -bottom-6">
                  <button
                    type="submit"
                    className="main_btn w-40 flex justify-center gap-2"
                  >
                    <img src="/assets/icons/search.svg" alt="search" />
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* No Patient Found Card */}
            <IsPatientFound
              title="Did you find the patient?"
              buttonTitle="Add New Patient"
            />

            {/* Patient Card */}
            <PatientCard />

            {/* Dashboard  */}
            <div className="mt-20">
              <div className="grid lg:grid-cols-2 gap-5 grid-r mb-5">
                <div className="grid gap-5 h-fit">
                  <Card
                    title="Pharmacy Queue"
                    image="assets/icons/home.svg"
                    titleClass="heading_3 text-secondaryColor"
                    view="View All"
                  >
                    <Table>
                      <TableHead
                        tableHead={["PATIENT NAME", "DOB", "PRESCRIPTION DATE"]}
                      />
                      {data.slice(0, 3).map((item: any) => {
                        return (
                          <div className="rounded-lg">
                            <TableData
                              gridCol={3}
                              tableData={[item.name, item.date, item.date]}
                            />
                          </div>
                        );
                      })}
                    </Table>
                  </Card>
                  <Card
                    title="Surgery Queue"
                    image="/public/assets/icons/surgery-queue.svg"
                    titleClass="heading_3 text-secondaryColor"
                    view="View All"
                  >
                    <Table>
                      <TableHead gridCol={2} action tableHead={["TYPE"]} />
                      {data.slice(0, 2).map((item: any) => {
                        return (
                          <div className="rounded-lg">
                            <TableData
                              gridCol={2}
                              preview
                              tableData={[`${item.name}`]}
                              // tableData={[item.name + "<Badge icon={2} />"]}
                            />
                          </div>
                        );
                      })}
                    </Table>
                  </Card>
                  <Card
                    title="Reports"
                    image="/public/assets/icons/reports.svg"
                    titleClass="heading_3 text-secondaryColor"
                    view="View All"
                  >
                    <Table>
                      <TableHead
                        result
                        gridCol={4}
                        tableHead={["PATIENT NAME", "Sex", "Test"]}
                      />
                      {data.slice(0, 3).map((item: any) => {
                        return (
                          <div className="rounded-lg">
                            <TableData
                              gridCol={4}
                              result="Normal"
                              tableData={[item.name, item.date, item.date]}
                            />
                          </div>
                        );
                      })}
                    </Table>
                  </Card>
                </div>
                <div className="grid gap-5 h-fit">
                  <Card
                    title="Lab Orders"
                    image="/public/assets/icons/lab-orders.svg"
                    titleClass="heading_3 text-secondaryColor"
                    view="View All"
                  >
                    <Table>
                      <TableHead
                        action
                        gridCol={4}
                        tableHead={["PATIENT NAME", "Test", "Date"]}
                      />
                      {data.slice(0, 3).map((item: any) => {
                        return (
                          <div className="rounded-lg">
                            <TableData
                              gridCol={4}
                              preview
                              tableData={[item.name, item.date, item.date]}
                            />
                          </div>
                        );
                      })}
                    </Table>
                  </Card>
                  <Card
                    title="Referrals"
                    image="/public/assets/icons/referrals.svg"
                    titleClass="heading_3 text-secondaryColor"
                    view="View All"
                  >
                    <Table>
                      <TableHead
                        gridCol={4}
                        action
                        tableHead={["PATIENT NAME", "Sex", "Added"]}
                      />
                      {data.slice(0, 7).map((item: any) => {
                        return (
                          <div className="rounded-lg">
                            <TableData
                              gridCol={4}
                              preview
                              tableData={[item.name, item.date, item.date]}
                            />
                          </div>
                        );
                      })}
                    </Table>
                  </Card>
                </div>
              </div>
            </div>
          </>
        </Container>
      </div>
    </>
  );
};

export default ClientSearch;

const defaultButtonCss =
  " w-[138px] text-primaryColor hover:bg-primaryHoverColor  hover:text-whiteColor bg-whiteColor border-2 border-primaryColor py-1.5 rounded-full transition-all ease-in-out duration-500 min-w-[84px]";

const data = [
  {
    id: 1,
    name: "Amir Hamza",
    date: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "John Doe",
    date: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "Amir Hamza",
    date: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "Amir Hamza",
    date: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "Amir Hamza",
    date: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "Amir Hamza",
    date: "25 Nov, 2023",
  },
  {
    id: 1,
    name: "Amir Hamza",
    date: "25 Nov, 2023",
  },
];

// Note client search for responsive
{/* <div className="relative bg-lightBlueColor w-full p-5 rounded-lg shadow  transition-all ease-out">
  <h2 className="heading_2 text-center font-semibold text-secondaryColor text-4xl pb-2">
    Search or Add New Patient
  </h2>
  <div className="flex justify-center gap-5 mt-5">
    <button
      onClick={handleNrc}
      className={cn(defaultButtonCss, {
        "bg-primaryColor text-whiteColor": search === "nrc",
      })}
    >
      NRC
    </button>
    <button
      onClick={handleNupn}
      className={cn(defaultButtonCss, {
        "bg-primaryColor text-whiteColor": search === "nupn",
      })}
    >
      NUPN
    </button>
    <button
      onClick={handleCellPhone}
      className={cn(defaultButtonCss, {
        "bg-primaryColor text-whiteColor": search === "cellPhone",
      })}
    >
      Cell Phone
    </button>
    <button
      onClick={handleName}
      className={cn(defaultButtonCss, {
        "bg-primaryColor text-whiteColor transition-all ease-in-out":
          search === "name",
      })}
    >
      Full Name
    </button>
  </div>
  <form action="" className="w-full flex justify-center gap-5 mt-5">
    <div className="w-full max-w-[620px] pb-9">
      {search === "nrc" && (
        <CustomNrc
          label=""
          placeholder="Search By NRC"
          onChange={() => {}}
          className="border-gray-300 focus:border-gray-300"
        />
      )}
      {search === "nupn" && (
        <Input
          label=""
          placeholder="Search By NUPN"
          onChange={() => {}}
          className="border-gray-300 focus:border-gray-300"
        />
      )}
      {search === "cellPhone" && <CellPhoneSearch />}
      {search === "name" && <FullNameSearch />}
    </div>
    <div className="absolute -bottom-6">
      <button type="submit" className="main_btn w-40 flex justify-center gap-2">
        <img src="/assets/icons/search.svg" alt="search" />
        Search
      </button>
    </div>
  </form>
</div>; */
}

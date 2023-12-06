/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/app/store";
import IsPatientFound from "@/components/client-accounts/cards/IsPatientFound";
import PatientCard from "@/components/client-accounts/cards/PatientCard";
import CellPhoneSearch from "@/components/client-accounts/clients-search/CellPhoneSearch";
import FullNameSearch from "@/components/client-accounts/clients-search/FullNameSearch";
import NrcSearch from "@/components/client-accounts/clients-search/NrcSearch";
import NUPNSearch from "@/components/client-accounts/clients-search/NupnSearch";
import TabButton from "@/components/client-accounts/clients-search/TabButton";
import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import Table from "@/components/core/table/Table";
import TableData from "@/components/core/table/TableData";
import TableHead from "@/components/core/table/TableHead";
import { Client } from "@/interface/clients";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import useClientSearch from "./useClientSearch";

const ClientSearch = () => {
  const { user } = useSelector((state: RootState) => state.authentication);
  const {
    cellphoneSearch,
    handleCellphoneSearchChange,
    handleDateClear,
    handleNameSearchChange,
    handleNrcChange,
    handleNupnChange,
    handleSearchClick,
    handleSearchTabChange,
    nameSearchState,
    nrc,
    nupn,
    search,
    searchClients,
    showRegister,
  } = useClientSearch();

  return (
    <>
      <div className=" mx-5 xl:mx-auto">
        <Container>
          <>
            <div className="md:flex justify-between mt-10 mb-3">
              <h2 className="text-2xl font-semibold text-secondaryColor ">
                Welcome {user?.firstName} {user?.surname}
              </h2>
              <h2 className="text-textColor ">
                {format(new Date(), "EEEE, MMMM dd, yyyy")}
              </h2>
            </div>
            <div className="relative bg-lightBlueColor w-full p-5 rounded-lg shadow  transition-all ease-out">
              <h2 className="heading_2 text-center font-semibold text-secondaryColor text-2xl md:text-4xl pb-2">
                Search or Add New Patient
              </h2>
              <TabButton
                handleSearchTabChange={handleSearchTabChange}
                search={search}
              />
              <form
                action=""
                className="w-full flex justify-center gap-5 mt-5"
                onSubmit={handleSearchClick}
              >
                <div className="w-full max-w-[620px] pb-9">
                  {search === "nrc" && (
                    <NrcSearch handleNrcChange={handleNrcChange} nrc={nrc} />
                  )}
                  {search === "nupn" && (
                    <NUPNSearch
                      handleNupnChange={handleNupnChange}
                      nupn={nupn}
                    />
                  )}
                  {search === "cellPhone" && (
                    <CellPhoneSearch
                      handleCellphoneSearchChange={handleCellphoneSearchChange}
                      cellphoneSearch={cellphoneSearch}
                    />
                  )}
                  {search === "name" && (
                    <FullNameSearch
                      handleNameSearchChange={handleNameSearchChange}
                      nameSearchState={nameSearchState}
                      handleDateClear={handleDateClear}
                    />
                  )}
                </div>
                <div className="absolute -bottom-6">
                  <button
                    type="submit"
                    className="main_btn w-40 flex justify-center gap-2 py-3"
                  >
                    <img src="/assets/icons/search.svg" alt="search" />
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Patient Card */}
            <div className="mt-14">
              {searchClients.length > 0 &&
                searchClients.map((client: Client) => {
                  return <PatientCard client={client} />;
                })}

              {/* No Patient Found Card */}
              {showRegister && (
                <IsPatientFound
                  title="No Patient Found"
                  buttonTitle="Add New Patient"
                />
              )}
            </div>

            {/* Work on later */}

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
                          <div className="rounded-lg ">
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
{
  /* <div className="relative bg-lightBlueColor w-full p-5 rounded-lg shadow  transition-all ease-out">
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

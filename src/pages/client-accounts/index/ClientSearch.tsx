/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/app/store";
import IsPatientFound from "@/components/client-accounts/cards/IsPatientFound";
import PatientCard from "@/components/client-accounts/cards/PatientCard";
import CellPhoneSearch from "@/components/client-accounts/clients-search/CellPhoneSearch";
import FullNameSearch from "@/components/client-accounts/clients-search/FullNameSearch";
import NrcSearch from "@/components/client-accounts/clients-search/NrcSearch";
import NUPNSearch from "@/components/client-accounts/clients-search/NupnSearch";
import TabButton from "@/components/client-accounts/clients-search/TabButton";
import Container from "@/components/core/container/Container";
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
                <div className="w-full max-w-[610px] pb-9">
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
                    className="main_btn !bg-logoColor2 hover:!bg-logoColor2Hover text-lg w-40 flex justify-center items-center font gap-2 py-3"
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
                searchClients.map((client: Client, index) => {
                  return <PatientCard client={client} key={index} />;
                })}

              {/* No Patient Found Card */}
              {showRegister && (
                <IsPatientFound
                  title="No Patient Found"
                  buttonTitle="Add New Patient"
                />
              )}
            </div>
          </>
        </Container>
      </div>
    </>
  );
};

export default ClientSearch;

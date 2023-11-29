import React from "react";

import CellPhoneSearch from "@/components/client-accounts/clients-search/CellPhoneSearch";
import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import CustomNrc from "@/components/core/form-elements/CustomNrc";
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
      <div className="">
        <Container>
          <>
            <div className="flex justify-between mt-10">
              <h2 className="">Welcome Amir Hamza</h2>
              <h2 className="">Wednesday, November 29, 2023</h2>
            </div>
            <div className="relative bg-lightBlueColor w-full p-5 rounded-md shadow  transition-all ease-out">
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
                    "bg-primaryColor text-whiteColor": search === "name",
                  })}
                >
                  Full Name
                </button>
              </div>
              <form action="" className="w-full flex justify-center gap-5 mt-5">
                <div className="w-full max-w-[600px] pb-7">
                  {search === "nrc" && (
                    <CustomNrc
                      label=""
                      placeholder="Search By NRC"
                      onChange={() => {}}
                      className="border-gray-300 focus:border-gray-300"
                    />
                  )}
                  {search === "nupn" && (
                    <CustomNrc
                      label=""
                      placeholder="Search By NRC"
                      onChange={() => {}}
                      className="border-gray-300 focus:border-gray-300"
                    />
                  )}
                  {search === "cellPhone" && <CellPhoneSearch />}
                </div>
                <div className="flex justify-center absolute -bottom-6">
                  <button type="submit" className="main_btn w-40">
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Dashboard  */}
            <div className="mt-20">
              <div className="grid grid-cols-2 gap-5">
                <Card title="Pharmacy Queue" image="assets/icons/home.svg" >
                  Content
                </Card>
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
  " w-[138px] text-primaryColor bg-whiteColor border-2 border-primaryColor py-1 rounded-full";

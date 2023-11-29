// import React from 'react'

import NrcSearch from "@/components/client-accounts/clients-search/Nrc";
import Container from "@/components/core/container/Container";

const ClientSearch = () => {
  return (
    <>
      <div className="">
        <Container>
          <>
            <div className="flex justify-between">
              <h2 className="heading_3 font-medium text-blackColor">
                Welcome Amir Hamza
              </h2>
              <h2 className="heading_5">Wednesday, November 29, 2023</h2>
            </div>
            <div className="bg-lightBlueColor w-full p-5 rounded-md shadow ">
              <h2 className="heading_2 text-center">
                Search or Add New Patient
              </h2>
              <div className="flex justify-center gap-5 mt-5">
                <button className={` ${defaultButton} bg-primaryColor `}>
                  NRC
                </button>
                <button className={` ${defaultButton} `}>NUPN</button>
                <button className={` ${defaultButton} `}>Cell Phone</button>
                <button className={` ${defaultButton} `}>Full Name</button>
              </div>
              <div className="flex justify-center gap-5 mt-5">
                <div className="w-full max-w-[600px]">
                  <NrcSearch></NrcSearch>
                </div>
              </div>
            </div>
            <div className=""></div>
          </>
        </Container>
      </div>
    </>
  );
};

export default ClientSearch;

const defaultButton =
  " w-[138px] text-primaryColor bg-whiteColor border-2 border-primaryColor py-1 rounded-full";

import VitalsCreateForm from "@/components/vitals/VitalsCreateForm";
import { vitalModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { openAddModal } from "@/features/modal/modal-slice";
import { Vital, useReadVitalByClientQuery } from "@/features/vital/vital-api";
import useWindowWidth from "@/hooks/useWindow";
import { Client } from "@/interface/clients";
import { cookieManager } from "@/utilities/cookie-manager";
import { format } from "date-fns";
import { FiPlusCircle } from "react-icons/fi";
// import React from "react";
import { useDispatch } from "react-redux";

function Vitals() {
  const dispatch = useDispatch();
  const w1100 = useWindowWidth(1100);

  const client = cookieManager.parseCookie<Client>("client");

  const { data: vitals } = useReadVitalByClientQuery(client?.oid, {
    skip: !client?.oid,
    refetchOnMountOrArgChange: true,
  });

  console.log("vitals", vitals);

  const handleAddVitalModal = () => {
    dispatch(
      openAddModal({
        modalId: vitalModalTypes.addVital,
        data: null,
      })
    );
  };

  const handleEncounterFilter = (vital: Vital) => {
    return vital.encounterType === EnumEncounterType.Vital;
  };

  return (
    <div className={`${w1100 ? "mt-12" : ""}`}>
      <VitalsCreateForm />

      <div className=" font-poppins">
        <div className="">
          <div className="">
            <div className="md:flex justify-between items-center">
              <h2 className="heading_2">Vitals & Anthropometry</h2>
              <div className="flex gap-4 mt-3">
                <button className="transparent_btn py-1 px-4 sm:px-7 text-sm sm:text-base bg-whiteBgColor border-primaryColor hover:text-whiteColor hover:bg-primaryColor ">
                  Last 5 Encounters
                </button>
                <button
                  onClick={handleAddVitalModal}
                  className="main_btn py-2 px-5 gap-1 inline-flex md:hidden"
                >
                  <FiPlusCircle className="" /> Add Vital
                </button>
              </div>
            </div>
            <div className="bg-whiteBgColor flex p-5 mt-5 rounded-lg text-xs md:text-sm justify-between">
              <ul className=" w-[250px] flex flex-col gap-1.5">
                <li className="mb-3 font-medium">Vitals</li>
                <li className="mb-3">Height</li>
                <li className="mb-3">Weight</li>
                <li className="mb-3">BMI Percentile</li>
                <li className="mb-3">BP</li>
                <li className="mb-3">Temperature</li>
                <li className="mb-3">Pulse</li>
                <li className="mb-3">Respiratory Rate</li>
                <li className="mb-3">O2 Saturation</li>
                <li className="mb-3">Pain</li>
                <li className="mb-3">Head Circumference</li>
              </ul>
              <div className=" overflow-x-auto w-full">
                <div className="flex gap-3">
                  {vitals
                    ?.filter(handleEncounterFilter)
                    ?.map((vital, index) => (
                      <ul
                        className={`min-w-[140px] flex flex-col gap-1.5 rounded p-2 text-grayColor text-black text-center ${
                          index % 2 === 0 ? "bg-slate-100" : ""
                        }`}
                      >
                        <li className="mb-3 font-medium text-textColor">
                          {format(new Date(vital?.vitalsDate), "dd-MMM-yyyy")}
                        </li>
                        <li className="mb-3 text-black border-b">
                          {vital?.height}
                        </li>
                        <li className="mb-3 text-black">{vital?.weight}</li>
                        <li className="mb-3 text-black">{vital?.bmi}</li>
                        <li className="mb-3 text-black">
                          {vital?.temperature}
                        </li>
                        <li className="mb-3 text-black">{vital?.pulseRate}</li>
                        <li className="mb-3 text-black">
                          {vital?.respiratoryRate}
                        </li>
                        <li className="mb-3 text-black">{vital?.systolic}</li>
                        <li className="mb-3 text-black">{vital?.diastolic}</li>
                        <li className="mb-3 text-black">{vital?.diastolic}</li>
                        <li className="mb-3 text-black">{vital?.diastolic}</li>
                      </ul>
                    ))}
                  {/* <ul className="min-w-[140px] border border-lightGrayColor rounded p-2 text-grayColor">
                    <li className="mb-3 font-medium text-textColor">
                      12/5/2023 7:58 PM
                    </li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                  </ul>
                  <ul className="min-w-[140px] border border-lightGrayColor rounded p-2 text-grayColor">
                    <li className="mb-3 font-medium text-textColor">
                      12/5/2023 7:58 PM
                    </li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                    <li className="mb-3">67 in</li>
                  </ul> */}
                </div>
              </div>
              <div className="md:w-[260px] 2xl:w-[200px] hidden md:block">
                <button
                  onClick={handleAddVitalModal}
                  className="main_btn py-2 px-3 gap-1 inline-flex"
                >
                  <FiPlusCircle className="" /> Add Vital
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vitals;

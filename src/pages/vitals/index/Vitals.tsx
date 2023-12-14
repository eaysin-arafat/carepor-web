import { vitalModalTypes } from "@/constants/modal-types";
import { format } from "date-fns";
import { FiEye, FiPlusCircle } from "react-icons/fi";
// import React from "react";
import { bloodPressureStatus } from "@/utilities/blood-pressure-status";
import { cn } from "@/utilities/cn";
import VitalsCreateForm from "../create/Create";
import useVitals from "./useVitals";
import VitalsDetails from "../details/VitalsDetails";

function Vitals() {
  const {
    addModal,
    handleAddVitalModal,
    handleViewVitalModal,
    handleEncounterFilter,
    w1100,
    vitals,
  } = useVitals();

  return (
    <div className={`${w1100 ? "mt-12" : ""}`}>
      <div className=" font-poppins">
        <div className="">
          <div className="">
            <div className="md:flex justify-between items-center">
              <h2 className="heading_2">Vitals & Anthropometry</h2>
              <div className="flex gap-4 mt-3">
                <button
                  onClick={handleAddVitalModal}
                  className="main_btn py-2 px-5 gap-1 inline-flex"
                >
                  <FiPlusCircle className="" /> Add Vital
                </button>
              </div>
            </div>
            <div className="bg-whiteBgColor flex p-5 mt-5 rounded-lg text-xs md:text-sm justify-between">
              <ul className=" w-[250px] flex flex-col gap-1.5 py-2">
                <li className="mb-3 font-medium">Vitals</li>
                <li className="mb-3">Vital Time</li>
                <li className="mb-3">Height</li>
                <li className="mb-3">Weight</li>
                <li className="mb-3">BMI</li>
                <li className="mb-3">Temperature (c)</li>
                <li className="mb-3">Blood Pressure (mmHg)</li>
              </ul>
              <div className=" overflow-x-auto w-full">
                <div className="flex gap-3">
                  {vitals
                    ?.filter(handleEncounterFilter)
                    ?.map((vital, index) => {
                      const bloodPressure = bloodPressureStatus(
                        vital?.systolic,
                        vital?.diastolic
                      );

                      return (
                        <ul
                          key={vital?.oid}
                          className={`min-w-[140px] flex flex-col gap-1.5 rounded p-2 text-grayColor text-black text-center group ${
                            index % 2 === 0 ? "bg-slate-100" : ""
                          }`}
                        >
                          <li className="mb-3 font-medium text-textColor">
                            {format(new Date(vital?.vitalsDate), "dd-MMM-yyyy")}
                          </li>
                          <li className="mb-3 text-textColor">
                            {format(new Date(vital?.vitalsDate), "hh:mm a")}
                          </li>
                          <li className="mb-3 text-black">{vital?.height}</li>
                          <li className="mb-3 text-black">{vital?.weight}</li>
                          <li className="mb-3 text-black">{vital?.bmi}</li>
                          <li className="mb-3 text-black">
                            {vital?.temperature}
                          </li>
                          <li
                            className={cn("mb-3 text-black", {
                              "text-red-600": !bloodPressure.includes("Normal"),
                            })}
                          >
                            {vital?.systolic != -1 && vital?.diastolic != -1 ? (
                              `${vital?.systolic}/${vital?.diastolic} `
                            ) : (
                              <span className="text-black">Unrecordable</span>
                            )}
                            {/* {vital?.systolic != -1 && vital?.diastolic != -1 ? (
                              `${vital?.systolic}/${vital?.diastolic} - ${bloodPressure}`
                            ) : (
                              <span className="text-black">Unrecordable</span>
                            )} */}
                          </li>
                          <li className="mb-3 text-black flex justify-center  opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={handleViewVitalModal}
                              className="flex gap-1 items-center border border-primaryColor hover:bg-lightBlueColor px-2 py-1 rounded text-primaryColor"
                            >
                              <FiEye className="text-primaryColor" />
                              Details
                            </button>
                          </li>
                        </ul>
                      );
                    })}
                </div>
              </div>
              {/* <div className="md:w-[260px] 2xl:w-[200px] hidden md:block">
                <button
                  onClick={handleAddVitalModal}
                  className="main_btn py-2 px-3 gap-1 inline-flex"
                >
                  <FiPlusCircle className="" /> Add Vital
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* CREATE VITAL MODAL */}
        {addModal?.isOpen && addModal?.modalId === vitalModalTypes.addVital && (
          <VitalsCreateForm />
        )}
        {/* VIEW VITAL MODAL */}
        {addModal?.isOpen && addModal?.modalId === vitalModalTypes.viewVital && (
          <VitalsDetails />
        )}
      </div>
    </div>
  );
}

export default Vitals;

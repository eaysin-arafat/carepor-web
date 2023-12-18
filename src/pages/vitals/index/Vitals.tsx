import { vitalModalTypes } from "@/constants/modal-types";
import { format } from "date-fns";
import { FiEye, FiPlusCircle } from "react-icons/fi";
// import React from "react";
import useClientAge from "@/hooks/useClientAge";
import {
  msgBasedOnBmi,
  pulseRateMessage,
  respiratoryRateMessage,
  temperatureMessage,
} from "@/library/vital";
import { bloodPressureStatus } from "@/utilities/blood-pressure-status";
import { cn } from "@/utilities/cn";
import { Loader } from "react-feather";
import VitalsCreateForm from "../create/Create";
import VitalsDetails from "../details/VitalsDetails";
import EditVital from "../edit/Edit";
import useVitals from "./useVitals";

function Vitals() {
  const {
    addModal,
    handleAddVitalModal,
    handleViewVitalModal,
    handleEncounterFilter,
    w1100,
    vitals,
    viewModal,
    editModal,
    isLoading,
    status,
  } = useVitals();

  const { ageInMonths } = useClientAge();

  console.log("vitals", vitals);

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
                <li className="mb-3">Pulse Rate (Bpm)</li>
                <li className="mb-3">Respiratory Rate (Bpm)</li>
              </ul>
              <div className=" overflow-x-auto w-full">
                <div className="flex gap-3">
                  {/* HANDLE LOADING STATE */}
                  {isLoading && status === "pending" && (
                    <div className="flex justify-center items-center w-full h-[400px]">
                      <Loader size={50} className="animate-spin" />
                    </div>
                  )}
                  {vitals
                    ?.filter(handleEncounterFilter)
                    ?.map((vital, index) => {
                      // messages based on data
                      const bloodPressure = bloodPressureStatus(
                        vital?.systolic,
                        vital?.diastolic
                      );
                      const bmiMsg = msgBasedOnBmi(+vital?.bmi);
                      const temperatureMsg = temperatureMessage(
                        vital?.temperature
                      );

                      const pulseRateMsg = pulseRateMessage(
                        vital?.pulseRate,
                        ageInMonths
                      );

                      const respiratoryRateMsg = respiratoryRateMessage(
                        vital?.respiratoryRate,
                        ageInMonths
                      );

                      return (
                        <ul
                          key={vital?.oid}
                          className={`min-w-[140px] flex flex-col gap-1.5 rounded p-2 text-grayColor text-black text-center group ${
                            index % 2 === 0 ? "bg-slate-100" : ""
                          }`}
                        >
                          <li className="mb-3 font-medium text-textColor">
                            {format(
                              new Date(vital?.vitalsDate),
                              "dd-MMM-yyyy"
                            ) || "--"}
                          </li>
                          <li className="mb-3 text-textColor">
                            {format(new Date(vital?.vitalsDate), "hh:mm a") ||
                              "--"}
                          </li>
                          <li className="mb-3 text-black">
                            {vital?.height || "--"}
                          </li>
                          <li className="mb-3 text-black">
                            {vital?.weight || "--"}
                          </li>
                          <li
                            className={cn("mb-3 text-green-600", {
                              "text-red-600": !bmiMsg?.includes("Normal"),
                            })}
                          >
                            {vital?.bmi || "__"}
                          </li>
                          <li
                            className={cn("mb-3 text-green-600", {
                              "text-red-600":
                                !temperatureMsg?.includes("Normal"),
                            })}
                          >
                            {vital?.temperature || "__"}
                          </li>
                          <li
                            className={cn("mb-3 text-green-600", {
                              "text-red-600":
                                !bloodPressure?.includes("Normal"),
                            })}
                          >
                            {vital?.systolic != -1 && vital?.diastolic != -1 ? (
                              `${vital?.systolic}/${vital?.diastolic} `
                            ) : (
                              <span className="text-black">Unrecordable</span>
                            )}
                          </li>
                          <li
                            className={cn("mb-3 text-green-600", {
                              "text-red-600": !pulseRateMsg?.includes("Normal"),
                            })}
                          >
                            {vital?.pulseRate || "__"}
                          </li>
                          <li
                            className={cn("mb-3 text-green-600", {
                              "text-red-600":
                                !respiratoryRateMsg?.includes("Normal"),
                            })}
                          >
                            {vital?.respiratoryRate || "__"}
                          </li>

                          <li className="mb-3 text-black flex justify-center  opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleViewVitalModal(vital)}
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
        {viewModal?.isOpen &&
          viewModal?.modalId === vitalModalTypes.viewVital && <VitalsDetails />}

        {/* EDIT VITAL MODAL */}
        {editModal?.isOpen &&
          editModal?.modalId === vitalModalTypes.editVital && <EditVital />}
      </div>
    </div>
  );
}

export default Vitals;

import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SearchableSelect from "@/components/core/form-elements/SearchableSelect";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { cn } from "@/utilities/cn";
import { useState } from "react";
import { Loader } from "react-feather";
import { BsPlusCircle } from "react-icons/bs";
import DiagnosisPastRecord from "./DiagnosisPastRecord";

const Diagnosis = ({ toggler }) => {
  const [diagnosisSwitcher, setDiagnosisSwitcher] = useState(1);
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <div>
      <form>
        <div className="grid grid-cols-2 mb-5">
          <label
            className={cn(
              " inline-flex cursor-pointer gap-4 justify-center items-center px-5 py-3 text-sm font-medium text-center rounded border-2 border-borderColor",
              { "bg-primaryColor text-whiteColor border-primaryColor": diagnosisSwitcher === 1 }
            )}
          >
            <input
              type="radio"
              name="diagnosis"
              className="hidden"
              value={1}
              onChange={() => setDiagnosisSwitcher(1)}
              checked={diagnosisSwitcher === 1}
            />
            &nbsp; National Treatment Guideline
          </label>
          <label
            className={cn(
              " inline-flex cursor-pointer gap-4 justify-center items-center px-5 py-3 text-sm font-medium text-center rounded border-2 border-borderColor",
              { "bg-primaryColor text-whiteColor border-primaryColor": diagnosisSwitcher === 2 }
            )}
          >
            <input
              type="radio"
              name="diagnosis"
              className="hidden"
              value={2}
              onChange={() => setDiagnosisSwitcher(2)}
              checked={diagnosisSwitcher === 2}
            />{" "}
            &nbsp; ICD 11
          </label>
        </div>
        {diagnosisSwitcher === 1 && (
          <div className="flex flex-col gap-6">
            <div>
              <div className="space-y-4">
                <SearchableSelect required label="NTG Level 1" placeholder="" />
                <SearchableSelect required label="NTG Level 2" placeholder="" />
                <SearchableSelect required label="NTG Level 3" placeholder="" />
              </div>
            </div>
          </div>
        )}
        {diagnosisSwitcher === 2 && (
          <div className="flex flex-col gap-6">
            <div>
              <div className="space-y-4">
                <SearchableSelect required label="ICD 11" placeholder="" />
              </div>
            </div>
          </div>
        )}
        <div className="mt-5">
          <button className="bg-primaryColor py-2 px-3 rounded-md flex items-center gap-1 text-whiteColor">
            {" "}
            <BsPlusCircle className="font-bold text-lg" /> Add
          </button>

          <PastRecordWrapper noHeading className="mt-5">
            {/* <div className="flex gap-5"> */}
            <PastRecordData title="NTG" data={"data?.chiefComplaints"} />
            <PastRecordData title="NTG" data={"data?.chiefComplaints"} />
            {/* </div> */}
          </PastRecordWrapper>
        </div>

        <hr className="my-6" />

        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {(isLoading || status === "pending") && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}
          {data?.map((item, index) => (
            <DiagnosisPastRecord key={index} data={item} />
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
    </div>
  );
};

export default Diagnosis;

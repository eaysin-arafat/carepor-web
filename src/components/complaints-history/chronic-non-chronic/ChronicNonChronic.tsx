import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Checkbox from "@/components/core/form-elements/Checkbox";
import DateInput from "@/components/core/form-elements/DatePicker";
import SearchableSelect from "@/components/core/form-elements/SearchableSelect";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { cn } from "@/utilities/cn";
import { useState } from "react";
import { Loader, PlusCircle } from "react-feather";

const ChronicNonChronic = ({ toggler }) => {
  const isLoading = false;
  const [diagnosisSwitcher, setDiagnosisSwitcher] = useState(1);

  const demoData = [
    {
      chiefComplaints: "Demo chiefComplaints",
      clientId: "a1497272-3783-46f6-922a-08dbd06dc4d8",
      historyOfChiefComplaint: "Demo -",
    },
    {
      chiefComplaints: "Demo chiefComplaints",
      clientId: "a1497272-3783-46f6-922a-08dbd06dc4d8",
      historyOfChiefComplaint: "Demo -",
    },
  ];

  return (
    <div>
      <DefaultModal
        title="Chronic / Non Chronic Conditions"
        toggler={toggler}
        size="6xl"
      >
        <form>
          <div className="flex flex-col gap-6">
            <div>
              <Section>
                <div className="">
                  <div className="grid grid-cols-2 mb-5">
                    <label
                      className={cn(
                        " inline-flex cursor-pointer gap-4 justify-center items-center px-5 py-3 text-sm font-medium text-center rounded border-2 border-borderColor",
                        {
                          "bg-primaryColor text-whiteColor border-primaryColor":
                            diagnosisSwitcher === 1,
                        }
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
                        {
                          "bg-primaryColor text-whiteColor border-primaryColor":
                            diagnosisSwitcher === 2,
                        }
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
                          <SearchableSelect
                            required
                            label="NTG Level 1"
                            placeholder=""
                          />
                          <SearchableSelect
                            required
                            label="NTG Level 2"
                            placeholder=""
                          />
                          <SearchableSelect
                            required
                            label="NTG Level 3"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {diagnosisSwitcher === 2 && (
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="space-y-4">
                          <SearchableSelect
                            required
                            label="ICD 11"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-5">
                  <Select
                    label="Condition"
                    placeholder="Add Condition"
                  ></Select>
                  <DateInput onChange={() => {}} label="Date Diagnosed" />
                  <div className="md:mt-10">
                    <Checkbox label="Still Ongoing" />
                  </div>
                  <DateInput onChange={() => {}} label="Date Resolved" />
                  <Select label="Certainty"></Select>
                  <Textarea label="Comments" className="h-[52px]" />
                </div>
                <div className="my-5">
                  <button className="main_btn px-5 w-fit">
                    <PlusCircle size={20} className="mr-2" /> Add{" "}
                  </button>
                </div>
                <div className="mt-3">
                  <PastRecordWrapper isDeleteAble={true} isEditAble={true}>
                    <PastRecordData title="Type" data={"Data"} />
                    <PastRecordData title="Condition" data={"Data"} />
                    <PastRecordData title="Diagnosed" data={"Data"} />
                    <PastRecordData title="Resolved" data={"Data"} />
                    <PastRecordData title="Certainty" data={"Data"} />
                    <PastRecordData title="NTG" data={"Data"} />
                    <PastRecordData title="ICD" data={"Data"} />
                    <PastRecordData title="Comments" data={"Data"} />
                  </PastRecordWrapper>
                </div>
              </Section>
            </div>
          </div>
          <hr className="my-6" />

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {isLoading && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}

            {demoData?.map((item) => (
              <PastRecordWrapper isDeleteAble={false} isEditAble={true}>
                <PastRecordData
                  title="Treatment Plan"
                  data={item?.chiefComplaints}
                />
              </PastRecordWrapper>
            ))}
          </PastRecordContainers>

          {/* BUTTONS */}
          <div className="mt-5">
            <CancelAndAddButton toggler={toggler} />
          </div>
        </form>
      </DefaultModal>
    </div>
  );
};

export default ChronicNonChronic;

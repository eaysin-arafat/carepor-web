import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Select from "@/components/core/form-elements/Select";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader, PlusCircle } from "react-feather";

const Allergies = ({ toggler }) => {
  const isLoading = false;

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
      <DefaultModal title="Allergies" toggler={toggler} size="6xl">
        <form>
          <div className="flex flex-col gap-6">
            <div>
              <Section>
                <div className="grid md:grid-cols-2 gap-5">
                  <Select label="Allergy Type"></Select>
                  <Select label="Severity"></Select>
                  <div className="col-span-full">
                    <Select label="Drug Type"></Select>
                  </div>
                  <div className="col-span-full">
                    <button className="main_btn px-5 w-fit">
                      <PlusCircle size={20} className="mr-2" /> Add{" "}
                    </button>
                  </div>
                  <div className="col-span-full grid grid-cols-2 gap-3">
                    <PastRecordWrapper isDeleteAble={true} isEditAble={true}>
                      <PastRecordData title="Treatment Plan" data={"Data"} />
                    </PastRecordWrapper>

                    <PastRecordWrapper isDeleteAble={true} isEditAble={true}>
                      <PastRecordData title="Treatment Plan" data={"Data"} />
                    </PastRecordWrapper>
                  </div>
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

export default Allergies;

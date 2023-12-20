import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Select from "@/components/core/form-elements/Select";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";

const ImmunizationHistory = ({ toggler }) => {
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
    <DefaultModal title="General Assessment" toggler={toggler} size="6xl">
      <form>
        <Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
            <Select label="General Condition">
              <option value="1">Good</option>
              <option value="2">Stable</option>
              <option value="3">Critical</option>
            </Select>
            <Select label="Pallor">
              <option value="1">Nil</option>
              <option value="2">Mild</option>
              <option value="3">Moderate</option>
              <option value="4">Severe</option>
            </Select>{" "}
            <Select label="Edema">
              <option value="1">Nil</option>
              <option value="2">1+</option>
              <option value="3">2+</option>
              <option value="4">3+</option>
              <option value="5">4+</option>
            </Select>{" "}
            <Select label="Clubbing">
              <option value="1">Nil</option>
              <option value="2">1+</option>
              <option value="3">2+</option>
              <option value="4">3+</option>
              <option value="5">4+</option>
            </Select>{" "}
            <Select label="Jaundice">
              <option value="1">Present</option>
              <option value="2">Not present</option>
            </Select>{" "}
            <Select label="Cyanosis">
              <option value="1">Present</option>
              <option value="2">Not present</option>
            </Select>{" "}
            {/* <Select label="Glucose">
              <option value="1">Yes</option>
              <option value="2">No</option>
            </Select>
            <Select label="Scoring">
              <option value="1">+ve</option>
              <option value="2">-ve</option>
              <option value="3">Indeterminant</option>
            </Select>
            <Select label="Varicose Vein">
              <option value="1">Present</option>
              <option value="2">Not present</option>
            </Select>
            <Select label="Albumin">
              <option value="1">Nil</option>
              <option value="2">Trace</option>
              <option value="3">+</option>
              <option value="4">++</option>
              <option value="5">+++</option>
              <option value="6">++++</option>
            </Select>
            <div className="col-span-full">
              <Select label="Urine Output">
                <option value="1">Normal</option>
                <option value="2">Abnormal</option>
              </Select>
            </div> */}
          </div>
        </Section>
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
  );
};

export default ImmunizationHistory;

import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const EditGeneralAssessment = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      title="General Assessment"
      isShow={true}
      toggler={toggler}
    >
      <form>
        <div className="space-y-4">
          <Select label="General Condition">
            <option value="1">Good</option>
            <option value="2">Stable</option>
            <option value="3">Critical</option>
          </Select>{" "}
          <div className="mb-2 font-medium">General Assessment :</div>
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
          <Select label="Glucose">
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
          <Select label="Urine Output">
            <option value="1">Normal</option>
            <option value="2">Abnormal</option>
          </Select>
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
            <PastEncounters key={index} data={item} handleEdit={() => {}} />
          ))}
        </PastRecordContainers>
        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
};

export default EditGeneralAssessment;

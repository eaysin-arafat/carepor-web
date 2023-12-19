import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const EditPastMedicalConditions = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      title="Past Medical Condition"
      isShow={true}
      toggler={toggler}
    >
      <form>
        <div className="space-y-4">
          <Select label="Does client have any of the health Conditon to be Screened ?">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>{" "}
          <h3 className="font-bold">
            Medical conditions during past pregnancy or after childbirth(IUCD
            insertion)
          </h3>{" "}
          <Select label="Medical Condition">
            <option value="1">Past ectopic pregnancy</option>
            <option value="2">History of pelvic surgery</option>
            <option value="3">Uterine rupture or perforation</option>
            <option value="4">Severe trauma to the genital tract</option>
            <option value="5">
              Severe antepartum or postpartum haemorrhage
            </option>
            <option value="6">Prolonged rupture of membranes</option>
            <option value="7">Severe pre-eclampsia/eclampsia</option>
            <option value="8">Mild pre-eclampsia</option>
            <option value="9">Puerperal sepsis</option>
          </Select>
          <h3 className="font-bold">STI risk assessment</h3>
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <Select label="STI RiskId">
              <option value="1">Adolescent female</option>
              <option value="2">HIV+</option>
              <option value="3">Frequent change in sexual partners</option>
              <option value="4">
                Informal employment at high-risk for HIV (e.g. sex worker)
              </option>
              <option value="5">Sex with sex worker(s)</option>
              <option value="6">
                Separated from regular sex partners for long periods of time
              </option>
              <option value="7">Unprotected sex</option>
              <option value="8">
                Sex with partner who has recently been diagnosed with or treated
                for an STI
              </option>
              <option value="9">Sex with partner who has STI symptoms</option>
              <option value="10">History of STI in the last year</option>
              <option value="11">No risk factors (STI)</option>
            </Select>{" "}
            <Select label="Increased Risk of STIs">
              <option value="1">YES</option>
              <option value="2">NO</option>
            </Select>
            <Input label="Days Since Last Unprotected Sex Days" />{" "}
          </div>{" "}
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

export default EditPastMedicalConditions;

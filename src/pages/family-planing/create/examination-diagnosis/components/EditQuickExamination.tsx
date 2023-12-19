import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Card, { CardBody } from "@/components/core/card/Card";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const EditQuickExamination = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal
      title="Quick Examination Create"
      isShow={true}
      toggler={toggler}
    >
      <form>
        <Card className="mb-5">
          <CardBody className="dark:bg-black">
            <div className="mb-2 font-medium">Quick Examination </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Hair well spread">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Hair Healthy">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Head Infection">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Thrash">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Dental Disease">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Cervical Glands Enlarged">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Neck Abnormal">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Breast Lumps">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Armpits">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Fibroid Palpable">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Scars">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Masses">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Liver Palpable">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{" "}
                <Select label="Tenderness">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{" "}
            </div>
          </CardBody>
        </Card>{" "}
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

export default EditQuickExamination;

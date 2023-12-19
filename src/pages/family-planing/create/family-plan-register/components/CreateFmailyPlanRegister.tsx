import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";

const CreateFmailyPlanRegister = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  return (
    <DefaultOpenModal title="Family Planning" isShow={true} toggler={toggler}>
      <form>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <Select label="Referred By">
              <option value="1">External Facility</option>
              <option value="2">Community Based Agent</option>
              <option value="3">Other Clinical Department</option>
              <option value="4">Spouse</option>
              <option value="5">Friend</option>
            </Select>
            <Input
              label="Other Referrals"
              placeholder="Enter Other Referrals"
            />{" "}
            <Input
              label="Family Planning Year"
              placeholder="Enter Family Plannin Year"
            />{" "}
          </div>{" "}
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <Select label="Who client stays with?">
              <option value="1">Parents</option>
              <option value="2">Siblings</option>
              <option value="3">Extended Family</option>
              <option value="4">Partner</option>
              <option value="5">Friend(s)</option>
            </Select>{" "}
            <Select label="Communication Consent">
              <option value="1">Yes</option>
              <option value="2">No</option>
            </Select>
            <Select label="Communication Preference">
              <option value="1">SMS</option>
              <option value="2">Voice Call</option>
              <option value="3">Client's email</option>
            </Select>
          </div>{" "}
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <Select label="Patient Type">
              <option value="1">Referral</option>
              <option value="2">Self Referred</option>
              <option value="3">Scheme</option>
              <option value="4">Exempt</option>
            </Select>{" "}
            <Select label="Type Of Alternative Contacts">
              <option value="1">Next of kin</option>
              <option value="2">Parent</option>
              <option value="3">Guardian</option>
              <option value="4">Neighbor</option>
              <option value="5">Sibling</option>
            </Select>
            <Input label="Contact Name" placeholder="Enter Contact Name" />{" "}
          </div>{" "}
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <Input
              label="Contact Phone Number"
              placeholder="Enter Contact Phone Number"
            />{" "}
            <Input
              label="Other Alternative Contacts"
              placeholder="Enter Other Alternative Contacts"
            />{" "}
            <Input
              label="Contact Address"
              placeholder="Enter Contact Address"
            />{" "}
          </div>
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

export default CreateFmailyPlanRegister;

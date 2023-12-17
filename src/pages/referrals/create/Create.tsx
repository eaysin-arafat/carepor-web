import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";

function ReferralsCreate({ toggler }) {
  return (
    <DefaultOpenModal title="Referral" isShow={true} toggler={toggler}>
      <form>
        <div className="grid grid-cols-2 gap-5">
          <Input label="Reason For Referral" />

          <Select label="Referral Type"></Select>
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />
        <h1 className="text-md font-medium mb-2">External Referral :</h1>
        <div className="flex gap-5">
          <Select label="Province"></Select>
          <Select label="District"></Select>
        </div>
        <div className="flex gap-5 mt-5">
          <Select label="Facility"></Select>
          <Input label="Others Facility" />
        </div>
        <div className="flex gap-5 mt-5">
          <Input label="Others Facility Type" />
          <Select label="Referral Service"></Select>
        </div>
        <div className="flex gap-5 mt-5">
          <Textarea label="Additional Comments" />
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
}

export default ReferralsCreate;

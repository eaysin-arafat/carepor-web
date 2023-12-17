import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

function BirthRecordCreate({ toggler }) {
  const [accordion, setAccordion] = useState(true);
  return (
    <DefaultOpenModal title="Birth Record" isShow={true} toggler={toggler}>
      <form>
        <h1 className="text-md font-medium mb-2">Particulars :</h1>
        <div className="flex gap-5">
          <Select label="Is Birth Record Given?"></Select>
          <Select label="Origin"></Select>
        </div>
        <div className="flex gap-5 mt-5">
          <Select label="Is Under Five Card Given?"></Select>
          <Input label="Under Five Card Number" />
        </div>

        <div className="border border-borderColor mt-5 rounded">
          <button
            type="button"
            onClick={() => setAccordion(!accordion)}
            className="py-4 px-5 flex justify-between w-full bg-lightBlueColor"
          >
            Reference Notes
            {!accordion && <ChevronDown />}
            {accordion && <ChevronUp />}
          </button>
          {accordion && (
            <div className="border-t border-t-bodyColor p-3">
              <div className="mb-5">
                <b>Note 1 : </b>
                <p>
                  The Informant should be the father or Mother of the child and
                  only if neither is able to give necessary information is one
                  of the following to give notice the occupier of the house or
                  the person in charge of the hospital or institution where the
                  child was born a person present at birth or the person now
                  having charge of the child.
                </p>
              </div>
              <div className="mb-5">
                <b>Note 2 : </b>
                <p>
                  In terms of section 15 of the Act, the Registrar shall not
                  enter in the Births Register the name of any person as father
                  of an illegitimate child except at the joint request of the
                  mother and the person acknowledging himself in writing in the
                  presence of the Registrar to be the father of the child.
                </p>
              </div>
              <div className="mb-5">
                <b>Note 3 : </b>
                <p>
                  If you are a member of the National Pension Scheme Authority
                  please quote your Social Security Number as this will assist
                  the Fund in the payment of benefits.
                </p>
              </div>
            </div>
          )}
        </div>

        <h1 className="text-md font-medium mb-2 mt-5">Informant Details :</h1>
        <div className="flex gap-5">
          <Input label="First Name" />
          <Input label="Surname" />
          <Input label="Nickname" />
        </div>

        <div className="flex gap-5 mt-5">
          <Select label="Code" />
          <Input label="Cellphone Number" />
        </div>

        <div className="flex gap-5 mt-5">
          <Select label="Code" />
          <Input label="Landline Number" />
        </div>

        <div className="flex gap-5 mt-5">
          <Select label="Relationship to Child" />
          <Input label="Other Relationship" />
        </div>

        <div className="flex gap-5 mt-5">
          <Input label="City/Town/Village" />
          <Input label="Cmpd Street No." />
        </div>

        <div className="flex gap-5 mt-5">
          <Input label="PO Box,Pvt bag" />
          <Input label="Landmark" />
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
}

export default BirthRecordCreate;

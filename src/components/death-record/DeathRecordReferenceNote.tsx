import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

const DeathRecordReferenceNote = () => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="border border-borderColor mt-1 rounded">
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
              The Informant should be a relative present at the death, or in
              attendance at the last illness of the deceased, and in default
              thereof the next person from the following list: a relative living
              in the district where the deceased died a person present at the
              death the occupier or an inmate of the house or the person in
              charge of the hospital or institution where the death occurred the
              undertaker.
            </p>
          </div>
          <div className="mb-5">
            <b>Note 2 : </b>
            <p>
              The Medical certificate showing the cause of death must be
              attached to this form.
            </p>
          </div>
          <div className="mb-5">
            <b>Note 3 : </b>
            <p>
              The Informant should be asked to complete Vital Statistics Card.
              The information is required for purely statistical purpose.
            </p>
          </div>
          <div className="mb-5">
            <b>Note 4 : </b>
            <p>
              If the deceased was a member of the Zambia National Provident Fund
              please quote his/her Social Security Number as this will assist
              the Fund in the payment of benefits.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeathRecordReferenceNote;

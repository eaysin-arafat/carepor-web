import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import MultiSelect, {
  Option,
} from "@/components/core/form-elements/MultiSelect";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import React from "react";
import { Loader } from "react-feather";

const GynAndObs = ({ toggler }) => {
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
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
      <DefaultModal title="Medical Encounter (Gyn & Obs)" toggler={toggler} size="6xl">
        <form>
          <div className="flex flex-col gap-6">
            <div>
              <Section title="Menstrual History">
                <Textarea label="" placeholder="Enter Menstrual History" />
                <p className="text-sm mt-2">
                  <strong>Note : </strong> Please document Menarche, Menopause,
                  Cycle regularity, Cycle duration, Menstrual heaviness.
                </p>
              </Section>
              <Section title="Obstetrics History">
                <div className="grid md:grid-cols-2 gap-5">
                  <DateInput label="LNMP" onChange={() => {}} />
                  <Select label="Are you Pregnent?">
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    <option value="3">Unknown</option>
                  </Select>
                  <Input label="Gestational Age (Weeks)" />{" "}
                  <Input label="EDD" />
                  <div className="col-span-full">
                    <Textarea label="Obstetrics History" />
                  </div>
                  <p className=" col-span-full text-sm mt-2">
                    <strong>Note : </strong>Please document Parity, Gravida,
                    Number of children alive and deseased, Breastfeeding status.
                    If has Breastfeeding child then HIV status of the child.
                  </p>
                </div>
              </Section>
              <Section title="Cervical Cancer History">
                <div className="grid md:grid-cols-2 gap-5">
                  <Select label="Have You Screened for CaCx?">
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    <option value="3">Unknown</option>
                  </Select>
                  <Input label="When last screened?" disabled />
                  <Select label="Result" disabled>
                    <option value=""></option>
                  </Select>{" "}
                  <Select label="Method used" disabled>
                    <option value=""></option>
                  </Select>
                </div>
              </Section>
              <Section title="Contraceptive History">
                <MultiSelect
                  options={demoOptions?.slice() || []}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
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

export default GynAndObs;

const demoOptions = [
  {
    oid: 1,
    description: "Indeterminate HIV test",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 2,
    description: "HIV negative pregnant mother",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 3,
    description: "Breastfeeding mother",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 4,
    description: "HIV negative with STIs",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 5,
    description: "HIV negative with TB",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
  {
    oid: 6,
    description: "Discordant sexual partner",
    createdIn: -1,
    dateCreated: "2023-10-01T00:00:00",
    createdBy: "00000000-0000-0000-0000-000000000000",
    modifiedIn: -1,
    dateModified: "2023-10-01T00:00:00",
    modifiedBy: "00000000-0000-0000-0000-000000000000",
    isDeleted: false,
    isSynced: false,
  },
];

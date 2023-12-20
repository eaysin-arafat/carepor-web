import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import MultiSelect, {
  Option,
} from "@/components/core/form-elements/MultiSelect";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import React from "react";
import { Loader } from "react-feather";

const TBConstitutionalSymptoms = ({ toggler }) => {
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
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);

  return (
    <div>
      <DefaultModal
        title="Medical Encounter IPD (Complaints & Histories)"
        toggler={toggler}
        size="6xl"
      >
        <form>
          <div className="flex flex-col gap-6">
            <div>
              <Section title="TB Symptoms">
                <MultiSelect
                  options={demoOptions?.slice() || []}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </Section>
              <Section title="Constitutional Symptoms">
                <MultiSelect
                  isSelectable
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

export default TBConstitutionalSymptoms;

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

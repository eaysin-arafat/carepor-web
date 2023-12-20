import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import MultiSelect, {
  Option,
} from "@/components/core/form-elements/MultiSelect";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { EnumEncounterType } from "@/enum/encounter-type";
import {
  useReadConstitutionalOptionsQuery,
  useReadConstitutionalSymptomsByOptionQuery,
} from "@/features/constitutional-sysmptom/constitutional-symptom-api";
import { useReadIdentifiedConstitutionalSymptomsByClientQuery } from "@/features/identified-constitutional-symptom/identified-constitutional-symptom-api";
import { useReadIdentifiedTbSymptomByClientIdQuery } from "@/features/identified-tb-symptom/identified-tb-symptom-api";
import { useReadTbSymptomsQuery } from "@/features/tb-symptoms/tb-sysmptoms-api";
import useClient from "@/hooks/useClient";
import { DateFunc } from "@/utilities/date";
import { filterByEncounterTypeAndCombine } from "@/utilities/transformation";
import React, { useMemo } from "react";
import { Loader } from "react-feather";

const TBConstitutionalSymptoms = ({ toggler }) => {
  const [selectedTbSymptoms, setSelectedTbSymptoms] = React.useState<Option[]>(
    []
  );
  const [selectedConstitutionalSymptoms, setSelectedConstitutionalSymptoms] =
    React.useState<Option[]>([]);
  const [constitutionalOptionId, setConstitutionalOptionId] =
    React.useState<string>("");

  const client = useClient();

  const { data: tbSymptoms, isLoading: isTbLoading } =
    useReadTbSymptomsQuery(null);

  const { data: constitutionalOptions, isLoading: isConstitutionalLoading } =
    useReadConstitutionalOptionsQuery(null);
  console.log("constitutionalOptions", constitutionalOptions);

  const { data: constitutionalSymptoms } =
    useReadConstitutionalSymptomsByOptionQuery(constitutionalOptionId, {
      skip: !constitutionalOptionId,
      refetchOnMountOrArgChange: true,
    });

  // identified tb symptoms and constitutional symptoms by client id
  const { data: identifiedTbSymptoms } =
    useReadIdentifiedTbSymptomByClientIdQuery(client?.oid, {
      skip: !client?.oid,
      refetchOnMountOrArgChange: true,
    });
  const { data: identifiedConstitutionalSymptom } =
    useReadIdentifiedConstitutionalSymptomsByClientQuery(client?.oid, {
      skip: !client?.oid,
      refetchOnMountOrArgChange: true,
    });

  // combined identified tb symptoms and constitutional symptoms based on dateCreated,encounterType,createdIn,createdBy
  const combinedIdentifiedTbAndConstitutionalSymptoms = useMemo(
    () =>
      filterByEncounterTypeAndCombine(
        identifiedTbSymptoms?.slice(),
        identifiedConstitutionalSymptom?.slice(),
        EnumEncounterType.MedicalEncounter
      ),
    [identifiedTbSymptoms, identifiedConstitutionalSymptom]
  );

  console.log({ combinedIdentifiedTbAndConstitutionalSymptoms });

  // variables
  const isPastRecordLoading = isTbLoading || isConstitutionalLoading;

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
                  options={tbSymptoms?.slice() || []}
                  selectedOptions={selectedTbSymptoms}
                  setSelectedOptions={setSelectedTbSymptoms}
                />
              </Section>
              <Section title="Constitutional Symptoms">
                <MultiSelect
                  isSelectable={true}
                  selectableOptions={constitutionalOptions?.slice() || []}
                  handleSelectChange={(id: string) =>
                    setConstitutionalOptionId(id)
                  }
                  options={constitutionalSymptoms?.slice() || []}
                  selectedOptions={selectedConstitutionalSymptoms}
                  setSelectedOptions={setSelectedConstitutionalSymptoms}
                />
              </Section>
            </div>
          </div>
          <hr className="my-6" />

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {isPastRecordLoading && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}

            {combinedIdentifiedTbAndConstitutionalSymptoms
              ?.reverse()
              ?.slice(0, 10)
              ?.map((item) => (
                <PastRecordWrapper
                  isDeleteAble={DateFunc?.isBetween24Hours(item?.dateCreated)}
                  isEditAble={false}
                >
                  <PastRecordData
                    title="TB Symptoms"
                    data={item?.tbSymptom?.description}
                  />
                  <PastRecordData
                    title="Constitutional Symptoms"
                    data={item?.constitutionalSymptomType?.description}
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

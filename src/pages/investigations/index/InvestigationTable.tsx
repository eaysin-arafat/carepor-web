import TableBody from "@/components/shared/table/TableBody";
import {
  TypeFacility,
  useReadFacilitiesQuery,
} from "@/features/facility/facility-api";
import {
  TypeMergeInvestigations,
  TypeMergeInvestigationsClient,
} from "@/features/investigation/investigation-api";
import { useReadUserAccountsQuery } from "@/features/user-accounts/user-accounts-api";
import { PriorityColor } from "@/pages/queue/investigations-dashboard/InvestigationsDashboard";
import { TypeUser } from "@/types/user-accounts";
import { DateFunc } from "@/utilities/date";
import findUserData from "@/utilities/find-user-data";
import findFacility from "@/utilities/find-user-data copy";
import React, { Fragment } from "react";
import useInvestigationTable from "./useInvestigationTable";

type Props = {
  investigations: TypeMergeInvestigationsClient[];
};

function InvestigationTable({ investigations }: Props) {
  const { data: users } = useReadUserAccountsQuery(undefined);
  const { data: facilities } = useReadFacilitiesQuery(undefined);

  console.log(facilities);

  const {
    handleAddResult,
    handleEditInvestigation,
    handleViewOrder,
    handleViewResult,
  } = useInvestigationTable();

  return (
    <>
      {/* Data Showing with group */}
      {Array.isArray(investigations) &&
        investigations?.map((encounterInv, ecn_index) => {
          const investigationTypeGrouping = transformArrayToObjectCompositeName(
            encounterInv?.mergeInvestigations
          );

          return (
            <SectionWrapper
              key={ecn_index}
              dateString={encounterInv.dateCreated}
              handleAddResult={() => handleAddResult(encounterInv)}
              handleViewOrder={() => handleViewOrder(encounterInv)}
            >
              {Object.keys(investigationTypeGrouping).map(
                (groupName, groupIndex) => {
                  const groupedItems = investigationTypeGrouping[groupName];
                  const isComposite = groupName !== "SINGLE_INV";
                  return (
                    <Fragment key={groupIndex}>
                      <>
                        {isComposite && (
                          <div className="bg-tableRowSkip px-5 text-sm pt-3 pb-2 font-medium">
                            {groupName}
                          </div>
                        )}
                        {Array.isArray(groupedItems) &&
                          groupedItems?.map(
                            (
                              investigation: TypeMergeInvestigations,
                              item_index
                            ) => {
                              console.log({ sss: investigation });

                              return (
                                <TableBody
                                  key={item_index + "com"}
                                  index={isComposite ? 1 : 0}
                                  isAction
                                  className="border-b"
                                  actionWidth="min-w-[120px]"
                                  btnOutlineHandler={() =>
                                    handleEditInvestigation(investigation)
                                  }
                                  viewResultHandler={() =>
                                    handleViewResult(investigation)
                                  }
                                  btn={{
                                    viewResult:
                                      investigation.isResultReceived &&
                                      "View Result",
                                    btnOutline:
                                      !investigation.isResultReceived &&
                                      DateFunc.isBetween24Hours(
                                        investigation.dateCreated
                                      ) &&
                                      "Edit",
                                  }}
                                  item={showTableData({
                                    investigation,
                                    users,
                                    facilities: facilities,
                                  })}
                                />
                              );
                            }
                          )}
                      </>
                    </Fragment>
                  );
                }
              )}
            </SectionWrapper>
          );
        })}
    </>
  );
}

export default InvestigationTable;

/**
 *
 * @param investigation investigation object
 * @param users all users
 * @param facilities all users
 * @returns
 */
const showTableData = ({
  investigation,
  users = [],
  facilities = [],
}: {
  investigation: TypeMergeInvestigations;
  users: TypeUser[];
  facilities: TypeFacility[];
}) => {
  console.log(investigation);

  return [
    {
      title: DateFunc.formatDate(investigation?.orderDate),
      w: "12%",
    },

    {
      title: (
        <PriorityColor
          p={investigation?.piority}
          key={investigation.interactionId}
        />
      ),
      w: "12%",
    },
    {
      w: "12%",
      title: findFacility(investigation?.createdIn, facilities).facilityName,
    },
    {
      title: findUserData(investigation?.createdBy, users)?.name,
      w: "12%",
    },
    {
      title: investigation?.testNameDetails,
      w: "16%",
    },
    {
      title: investigation?.orderNumber ? investigation?.orderNumber : "-",
      w: "12%",
    },
    {
      title: investigation?.result?.resultNumeric,
      w: "12%",
    },
    //const testUnit = findResult?.measuringUnit?.description;

    {
      title: investigation?.result?.measuringUnit?.description,
      w: "12%",
    },
  ];
};

type WrapperProps = {
  children?: React.ReactNode;
  handleAddResult?: () => void;
  handleViewOrder?: () => void;
  dateString?: string;
};

const SectionWrapper = ({
  children,
  handleAddResult,
  handleViewOrder,
  dateString,
}: WrapperProps) => {
  return (
    <div className="mb-5 ">
      <div className="bg-tableRow flex justify-between border-y-2  gap-2 py-2 relative">
        <h2 className="ps-5 font-semibold ">
          Date : {DateFunc.formatDate(dateString)}
        </h2>
        <div className="min-w-[220px] bg-tableRow flex gap-2 sticky right-0 px-2">
          <button
            onClick={handleAddResult}
            className="border border-primaryColor rounded-full px-3 py-0.5 text-[13px] text-primaryColor bg-primaryColor  hover:bg-primaryHoverColor text-white"
          >
            Add Result
          </button>
          <button
            onClick={handleViewOrder}
            className="border border-primaryColor rounded-full px-3 py-0.5 text-[13px]  bg-lightBlueColor hover:bg-tableHeadColor text-textColor"
          >
            View Order
          </button>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

// show test name
export const renderTestName = (test, subType, type) => {
  return test && subType && type ? `${test} (${subType}, ${type})` : "";
};

// Grouping investigation Investigation with Composite_ name
const transformArrayToObjectCompositeName = (
  data: TypeMergeInvestigations[]
) => {
  return data?.reduce((acc, cur) => {
    const key = `${cur?.compositeName ? cur?.compositeName : "SINGLE_INV"}`;
    if (!acc[key]) {
      acc[key] = [cur];
    } else {
      acc[key].push(cur);
    }
    return acc;
  }, {});
};

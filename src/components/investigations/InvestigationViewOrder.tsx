import { RootState } from "@/app/store";
import { EnumPiority } from "@/enum/enumerators";
import { useReadInvestigationByEncounterQuery } from "@/features/investigation/investigation-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useReadUserAccountsQuery } from "@/features/user-accounts/user-accounts-api";
import { renderTestName } from "@/pages/investigations/index/Investigation";
import {
  TypeInvestigationByClient,
  withCompositeInvestigation,
} from "@/types/module-types/investigation";
import { DateFunc } from "@/utilities/date";
import findUserData from "@/utilities/find-user-data";
import { Table } from "flowbite-react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableLoader from "../core/loader/TableLoader";

const InvestigationViewOrder = () => {
  const { data } = useSelector((state: RootState) => state.modal.addModal);
  const rootInvestigationsObj: TypeInvestigationByClient = data;
  const dispatch = useDispatch();
  const { data: users } = useReadUserAccountsQuery(undefined);
  // RTK Request
  const {
    data: encounterInvestigations,
    isLoading,
    isError,
    isSuccess,
  } = useReadInvestigationByEncounterQuery(rootInvestigationsObj?.encounterID, {
    skip: !rootInvestigationsObj?.encounterID,
  });

  // const encounterInvestigations = rootInvestigationsObj.investigation;
  const investigationsWithComposite =
    rootInvestigationsObj?.investigationWithComposite;
  const investigationsWithOutComposite =
    rootInvestigationsObj?.investigationWithOutComposite;

  // Composite Name Grouping
  const compositeTestGroup =
    (Array.isArray(investigationsWithComposite) &&
      transformArrayToObjectCompositeName(investigationsWithComposite)) ||
    [];

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <>
      <div className="overflow-x-auto mt-5">
        <Table className="min-w-[1100px] text-xs">
          <Table.Head>
            <Table.HeadCell className="min-w-[200px] bg-lightBlueColor text-textColor">
              Test Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Order Date
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Order Number
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Test Order
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Priority
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Qty
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Sample Qty
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Additional Comment
            </Table.HeadCell>
            <Table.HeadCell className="bg-lightBlueColor text-textColor">
              Imaging Test
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {isLoading && !isError && (
              <Table.Cell colSpan={9}>
                {/* <CardLoader /> */}
                <TableLoader />
              </Table.Cell>
            )}

            {/* Show all items in one  */}
            {isSuccess &&
              !isLoading &&
              Array.isArray(encounterInvestigations) &&
              encounterInvestigations?.map((composite, item_index) => {
                return (
                  <Table.Row
                    key={item_index}
                    className={
                      item_index % 2 === 0
                        ? ""
                        : "bg-lightBlueColor text-textColor"
                    }
                  >
                    <Table.Cell>
                      {renderTestName(
                        composite?.test?.title,
                        //@ts-ignore
                        composite?.test?.testSubtype?.description,
                        //@ts-ignore
                        composite?.test?.testSubtype?.testType?.description
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {DateFunc.formatDate(composite?.orderDate)}
                    </Table.Cell>
                    <Table.Cell>{composite?.orderNumber}</Table.Cell>
                    <Table.Cell>{EnumPiority[composite?.piority]}</Table.Cell>
                    <Table.Cell>{composite?.quantity}</Table.Cell>
                    <Table.Cell>
                      {findUserData(composite?.createdBy, users)?.name}
                    </Table.Cell>
                    <Table.Cell>{composite?.sampleQuantity}</Table.Cell>
                    <Table.Cell>{composite?.additionalComment}</Table.Cell>
                    <Table.Cell>{composite?.imagingTestDetails}</Table.Cell>
                  </Table.Row>
                );
              })}
            {/* Hide  */}
            {false &&
              Array.isArray(investigationsWithOutComposite) &&
              investigationsWithOutComposite?.map(
                (withOutComposite, item_index) => {
                  return (
                    <Table.Row
                      key={item_index}
                      className={
                        item_index % 2 === 0
                          ? ""
                          : "bg-lightBlueColor text-textColor"
                      }
                    >
                      <Table.Cell>Sliver</Table.Cell>
                      <Table.Cell>{withOutComposite?.orderDate}</Table.Cell>
                      <Table.Cell>Laptop</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                    </Table.Row>
                  );
                }
              )}

            {/* Hide  */}
            {false &&
              Object.keys(compositeTestGroup).map(
                (compositeNameKey, com_index) => {
                  const compositeItems = compositeTestGroup[compositeNameKey];
                  return (
                    <Fragment key={com_index}>
                      <Table.Row
                        key={"item_index"}
                        className="px-1 h-1 font-semibold  bg-lightBlueColor   text-textColor w-full"
                      >
                        <Table.Cell colSpan={9} width={"100%"}>
                          {compositeNameKey}
                        </Table.Cell>
                      </Table.Row>
                      {Array.isArray(compositeItems) &&
                        compositeItems?.map(
                          (
                            composite: withCompositeInvestigation,
                            item_index
                          ) => {
                            return (
                              <Table.Row
                                key={item_index}
                                className={
                                  item_index % 2 === 0
                                    ? ""
                                    : "bg-lightBlueColor text-textColor"
                                }
                              >
                                <Table.Cell>Amir Hamza</Table.Cell>
                                <Table.Cell>{composite.orderDate}</Table.Cell>
                                <Table.Cell>Laptop</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                              </Table.Row>
                            );
                          }
                        )}
                    </Fragment>
                  );
                }
              )}
          </Table.Body>
        </Table>
        <div className="flex justify-center mt-5">
          <button onClick={closeModal} className="transparent_btn">
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default InvestigationViewOrder;

const transformArrayToObjectCompositeName = (
  data: withCompositeInvestigation[]
) => {
  return data?.reduce((acc, cur) => {
    const key = `${cur?.compositeName}`;
    if (!acc[key]) {
      acc[key] = [cur];
    } else {
      acc[key].push(cur);
    }
    return acc;
  }, {});
};

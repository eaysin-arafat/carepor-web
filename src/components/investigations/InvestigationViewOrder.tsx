import { RootState } from "@/app/store";
import { TypeMergeInvestigations } from "@/features/investigation/investigation-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useClinician from "@/hooks/useClinician";
import { PriorityColor } from "@/pages/queue/investigations-dashboard/InvestigationsDashboard";
import { DateFunc } from "@/utilities/date";
import { Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

const InvestigationViewOrder = () => {
  const { data } = useSelector((state: RootState) => state.modal.addModal);
  const mergedInvestigation: TypeMergeInvestigations[] =
    data?.mergeInvestigations || [];
  const { getUserFullName } = useClinician();

  const dispatch = useDispatch();

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
            {Array.isArray(mergedInvestigation) &&
              mergedInvestigation?.map((investigation, item_index) => {
                return (
                  <Table.Row
                    key={item_index}
                    className={
                      item_index % 2 === 0
                        ? ""
                        : "bg-lightBlueColor text-textColor"
                    }
                  >
                    <Table.Cell>{investigation?.testNameDetails}</Table.Cell>
                    <Table.Cell>
                      {DateFunc.formatDate(investigation?.orderDate)}
                    </Table.Cell>
                    <Table.Cell>{investigation?.orderNumber}</Table.Cell>
                    <Table.Cell>
                      {getUserFullName(
                        investigation?.clinicianId || investigation?.clinicianID
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {
                        <PriorityColor
                          p={investigation?.piority}
                          key={item_index + "p"}
                        />
                      }
                    </Table.Cell>
                    <Table.Cell>{investigation?.quantity}</Table.Cell>
                    <Table.Cell>{investigation?.sampleQuantity}</Table.Cell>
                    <Table.Cell>{investigation?.additionalComment}</Table.Cell>
                    <Table.Cell>{investigation?.imagingTestDetails}</Table.Cell>
                  </Table.Row>
                );
              })}
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

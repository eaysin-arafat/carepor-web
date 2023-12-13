import { closeAddModal } from "@/features/modal/modal-slice";
import { Table } from "flowbite-react";
import { useDispatch } from "react-redux";

const InvestigationViewOrder = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="min-w-[1100px] text-xs">
          <Table.Head>
            <Table.HeadCell className="min-w-[200px]">Test Name</Table.HeadCell>
            <Table.HeadCell>Order Date</Table.HeadCell>
            <Table.HeadCell>Order Name</Table.HeadCell>
            <Table.HeadCell>Test Order</Table.HeadCell>
            <Table.HeadCell>Priority</Table.HeadCell>
            <Table.HeadCell>Qty</Table.HeadCell>
            <Table.HeadCell>Sample Qty</Table.HeadCell>
            <Table.HeadCell>Additional Comment</Table.HeadCell>
            <Table.HeadCell>Imaging Test</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-lightBlueColor text-textColor">
              <Table.Cell>Amir Hamza</Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-lightBlueColor text-textColor">
              <Table.Cell>Amir Hamza</Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
            </Table.Row>
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

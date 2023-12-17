import { Table } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";

const InvestigationTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="min-w-[800px] text-xs">
          <Table.Head>
            <Table.HeadCell>Order Date</Table.HeadCell>
            <Table.HeadCell>Test Type</Table.HeadCell>
            <Table.HeadCell>Sub Type</Table.HeadCell>
            <Table.HeadCell>Test</Table.HeadCell>
            <Table.HeadCell>Priority</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-onlyf">Action</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-lightBlueColor text-textColor">
              <Table.Cell>Order Date</Table.Cell>
              <Table.Cell>Test Type</Table.Cell>
              <Table.Cell>Sub Type</Table.Cell>
              <Table.Cell>$Test</Table.Cell>
              <Table.Cell>$Priority</Table.Cell>
              <Table.Cell className="py-0">
                <a
                  href="#"
                  className="bg-primaryColor flex items-center gap-1 px-1.5 py-2 text-sm text-white rounded w-full"
                >
                  {true && <FiPlusCircle className="text-base" />}
                  Add Result
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default InvestigationTable;

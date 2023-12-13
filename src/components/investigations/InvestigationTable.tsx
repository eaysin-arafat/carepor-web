import { Table } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";

const InvestigationTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="min-w-[650px] text-xs">
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-lightBlueColor text-textColor">
              <Table.Cell>Amir Hamza</Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell className="py-2">
                <a
                  href="#"
                  className="bg-primaryColor flex items-center gap-2 px-4 py-2.5 text-sm text-white rounded w-full"
                >
                  <FiPlusCircle className="text-base" /> 
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

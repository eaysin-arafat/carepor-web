import TableHeader from "@/components/shared/table/TableHeader";

type Props = {};

const InvestigationHeader = (props: Props) => {
  console.log(props);

  return (
    <TableHeader
      className="bg-tableHeadColor text-textColor"
      isAction
      actionWidth="min-w-[120px]"
      title={[
        {
          title: "Order Date",
          w: "12%",
        },
        {
          title: "Priority",
          w: "12%",
        },
        {
          title: "Facility",
          w: "12%",
        },
        {
          title: "Clinician",
          w: "12%",
        },
        {
          title: "Test Name",
          w: "16%",
        },
        {
          title: "Order Number",
          w: "12%",
        },
        {
          title: "Test Result",
          w: "12%",
        },
        {
          title: "Test Unit",
          w: "12%",
        },
      ]}
    />
  );
};

export default InvestigationHeader;

type DataRowProps = {
  title: string;
  value?: string;
};

const DashboardDataRow = ({ title, value }: DataRowProps) => {
  return (
    <div className="mt-5">
      <h2 className="text-black dark:text-white/80  font-medium text-sm capitalize">
        {title}
      </h2>
      <h2 className="text-gray-400 font-medium text-sm dark:text-gray-500 capitalize">
        {value}
      </h2>
    </div>
  );
};

export default DashboardDataRow;

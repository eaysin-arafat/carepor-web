import React from "react";
import { BsHospital } from "react-icons/bs";
import DashboardCard from "./DashboardCard";
import DashboardDataRow from "./DashboardDataRow";

const Demographics: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
      <DashboardCard title="Service Queue" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
      <DashboardCard title="Service Queue" icon={<BsHospital />}>
        <>
          <DashboardDataRow title="title" value="Value" />
          <DashboardDataRow title="title" value="Value" />
        </>
      </DashboardCard>
    </div>
  );
};

export default Demographics;

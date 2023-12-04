import DashboardSummary from "@/components/dashmoard/Summary";
import DashboardTabButton from "@/components/dashmoard/TabButton";
import React from "react";

const Dashboard = () => {
  const [tab, setTab] = React.useState("a");

  const handleTabClick = (tab: string) => {
    console.log(tab);
    setTab(tab);
  };

  return (
    <div className="mt-10 mx-2">
      <div className="flex justify-start mb-10">
        <DashboardTabButton handleSearchTabChange={handleTabClick} tab={tab} />
      </div>
      {tab === "summary" && <DashboardSummary />}
    </div>
  );
};

export default Dashboard;

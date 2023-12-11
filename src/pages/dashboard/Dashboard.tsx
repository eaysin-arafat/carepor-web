import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import Demographics from "@/components/dashboard/Demographics";
import FamilyHistory from "@/components/dashboard/FamilyHistory";
import DashboardSummary from "@/components/dashboard/Summary";
import DashboardTabButton from "@/components/dashboard/TabButton";
import useWindowWidth from "@/hooks/useWindow";
import React from "react";

const Dashboard = () => {
  const [tab, setTab] = React.useState("summary");
  const w1100 = useWindowWidth(1100);

  const handleTabClick = (tab: string) => {
    console.log(tab);
    setTab(tab);
  };

  return (
    <div className={`mx-0 ${w1100 && "mt-12"}`}>
      <>
        <ClientDetailsCard className="pb-[80px] md:pb-[80px] " />
      </>
      <div className="flex justify-start  transform -translate-y-[62px] sm:-translate-y-[69px]">
        <DashboardTabButton handleSearchTabChange={handleTabClick} tab={tab} />
      </div>
      <div className=" -translate-y-[50px] sm:-translate-y-[40px]">
        {tab === "summary" && <DashboardSummary />}
        {tab === "demographics" && <Demographics />}
        {tab === "family" && <FamilyHistory />}
      </div>
    </div>
  );
};

export default Dashboard;

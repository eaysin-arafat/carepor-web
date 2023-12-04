import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import Demographics from "@/components/dashmoard/Demographics";
import FamilyHistory from "@/components/dashmoard/FamilyHistory";
import DashboardSummary from "@/components/dashmoard/Summary";
import DashboardTabButton from "@/components/dashmoard/TabButton";
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
        <ClientDetailsCard className="pb-[80px] md:pb-[90px] " />
      </>
      <div className="flex justify-start ">
        <DashboardTabButton handleSearchTabChange={handleTabClick} tab={tab} />
      </div>
      <div className=" -translate-y-[50px] sm:-translate-y-[50px]">
      {tab === "summary" && <DashboardSummary />}
      {tab === "demographics" && <Demographics />}
      {tab === "family" && <FamilyHistory />}
      </div>
    </div>
  );
};

export default Dashboard;

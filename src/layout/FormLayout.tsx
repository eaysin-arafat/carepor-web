import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import FormSubHeader from "@/components/core/form-subheader/FormSubHeader";
import DataSummaryList from "@/components/shared/data-summary/DataSummaryList";
import Header from "@/components/shared/header/Header";
import useWindowWidth from "@/hooks/useWindow";

type Props = {
  children: JSX.Element;
  latestData: JSX.Element;
};
const FormLayout = ({ children, latestData }: Props) => {
  // * Responsive Hokes
  const w1300 = useWindowWidth(1300);
  const w1000 = useWindowWidth(1000);

  return (
    <div>
      <Header isSidebarOff />
      <FormSubHeader />
      <div className="px-5">
        <ClientDetailsCard />
      </div>

      {w1300 && (
        <div className="mx-5 mt-5">{latestData || "Latest Data Required"}</div>
      )}

      {w1000 && (
        <div className="mx-5 mt-5">
          <DataSummaryList isResponsive />
        </div>
      )}

      <div
        className={`grid ${
          w1300 ? (w1000 ? "grid-cols-6" : "grid-cols-9") : "grid-cols-12"
        } gap-4 mt-3 px-5`}
      >
        {!w1300 && (
          <div className="col-span-3">
            {/* <PastRecordList
              title="Latest Encounter"
              isSubTitleShow
              subTitle="12-Dec-2023"
              isPastEncounter
            /> */}
            {latestData || "Latest Data Required"}
          </div>
        )}
        <div className="col-span-6 mb-5">
          {children || "Children Required!"}
        </div>
        {!w1000 && (
          <div className="col-span-3">
            <DataSummaryList />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormLayout;

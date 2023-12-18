import { Encounter } from "@/features/medical-encounter/medical-encounter-api";
import { DateFunc } from "@/utilities/date";
import Card from "../core/card/Card";
import DataRow from "../core/table/DataRow";
import { MdOutlineModeEditOutline } from "react-icons/md";

const AdmissionDetailsCard = ({ data }: { data: Encounter }) => {
  return (
    <div>
      <div className="mx-3 my-5">
        <Card
          className="bg-whiteColor shadow-none border border-lightGrayColor md:px-5 relative"
          titleClass="text-secondaryColor"
          // edit
        >
          <button className="absolute top-5 right-5 flex items-center gap-1 text-primaryColor "> <MdOutlineModeEditOutline /> Edit</button>
          <div className="mt-7 sm:mt-0">
            <DataRow
              title="Admission Date "
              data={
                data?.ipdAdmissionDate
                  ? DateFunc.toFormatted(data?.ipdAdmissionDate)
                  : ""
              }
            />
            <DataRow
              title="Department"
              data={data?.bed?.ward?.firm?.department?.description}
            />

            <DataRow
              title="Firm/Unit "
              data={data?.bed?.ward?.firm?.description}
            />
            <DataRow title="Ward" data={data?.bed?.ward?.description} />
            <DataRow title="Bed " data={data?.bed?.description} />
            <DataRow title="Admission Note " data={data?.admissionNote} />
            <DataRow
              title="Discharge Date "
              data={
                data?.ipdDischargeDate
                  ? DateFunc.toFormatted(data?.ipdDischargeDate)
                  : ""
              }
            />
            <DataRow title="Discharge Note " data={data?.dischargeNote} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdmissionDetailsCard;

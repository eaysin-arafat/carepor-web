import { Encounter } from "@/features/medical-encounter/medical-encounter-api";
import { DateFunc } from "@/utilities/date";
import Card from "../core/card/Card";
import DataRow from "../core/table/DataRow";

const AdmissionDetailsCard = ({ data }: { data: Encounter }) => {
  return (
    <div>
      <div className="mx-3 my-5">
        <Card
          className="bg-whiteColor shadow-none border border-lightGrayColor md:px-5"
          titleClass="text-secondaryColor"
        >
          <div className="">
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
                data?.ipdAdmissionDate
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

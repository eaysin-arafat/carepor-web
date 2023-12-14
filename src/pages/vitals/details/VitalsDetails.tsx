import Card from "@/components/core/card/Card";
import DataRow from "@/components/core/table/DataRow";
import { useNavigate } from "react-router-dom";

const VitalsDetails = () => {
  const navigate = useNavigate();
  const editHandler = () => {
    alert("hello");
  };
  const titleClass = "xs:min-w-[200px] md:min-w-[250px] max-w-[300px]";
  return (
    <div>
      <Card
        className="bg-whiteBgColor !shadow-light"
        titleBorder="border-b border-borderColor"
        title="Vitals Details"
        editHandler={editHandler}
        edit
      >
        <div className="md:flex justify-between gap-5 mb-4">
          <h2>
            <span className="font-semibold">Date : &nbsp; </span>12-Dec-2023
          </h2>
          <h2>
            <span className="font-semibold">Facility : &nbsp; </span>Bauleni
            Mini Hospital
          </h2>
          <h2>
            <span className="font-semibold">Clinician : &nbsp; </span>System
            Admin
          </h2>
        </div>
        <div className="">
          <DataRow
            title="Source of Client"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow title="Service Point" data="Data" titleClass={titleClass} />
          <DataRow title="Visit Type" data="Data" titleClass={titleClass} />
          <DataRow title="Testing Reason" data="Data" titleClass={titleClass} />
          <DataRow title="Last Test Date" data="Data" titleClass={titleClass} />
          <DataRow
            title="Last Test Result"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Partner's HIV Status"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Consent Obtained"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Patient Counselled"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow title="Test Serial No" data="Data" titleClass={titleClass} />

          <div className="text-secondaryColor text-xl font-medium border-y py-2 mt-4">
            Test & Results
          </div>
          <DataRow
            title="Determine Test Result"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Bioline Test Result"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow title="HIV Type" data="Data" titleClass={titleClass} />
          <DataRow
            title="DNA PCR Collected"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Sample Collection Date"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Client Received Results"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow
            title="Consent to Receive SMS Alerts?"
            data="Consent to Receive SMS Alerts"
            titleClass={titleClass}
          />

          <div className="text-secondaryColor text-xl font-medium border-y py-2 mt-4">
            Post Test Assessment
          </div>
          <DataRow
            title="Client Risk Assesment"
            data="Data"
            titleClass={titleClass}
          />
          <DataRow title="Retest Date" data="Data" titleClass={titleClass} />
        </div>
      </Card>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-5 bg-whiteBgColor hover: border-2 border-borderColor  px-6 py-3 rounded-full flex gap-2 text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default VitalsDetails;

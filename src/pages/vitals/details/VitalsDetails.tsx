import Card from "@/components/core/card/Card";
import DefaultModal from "@/components/core/modal/DefaultModal";
import DataRow from "@/components/core/table/DataRow";
import { closeAddModal } from "@/features/modal/modal-slice";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch } from "react-redux";

const VitalsDetails = () => {
  const dispatch = useDispatch();
  const editHandler = () => {
    alert("hello");
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const titleClass = "xs:min-w-[200px] md:min-w-[250px] max-w-[300px]";
  return (
    <DefaultModal title="Vital Details" toggler={closeModal}>
      <Card className="bg-whiteBgColor !shadow-light border border-borderColor">
        <div className="md:flex justify-between gap-5 mb-4 relative">
          <h2>
            <span className="font-semibold">Date : &nbsp; </span>12-Dec-2023
          </h2>
          <h2>
            <span className="font-semibold">Facility : &nbsp; </span>Bauleni
            Mini Hospital
          </h2>
          <h2 className="me-20">
            <span className="font-semibold">Clinician : &nbsp; </span>System
            Admin
          </h2>
          <button
            onClick={editHandler}
            className="absolute right-0 top-0 flex gap-1 items-center text-primaryColor"
          >
            {" "}
            <MdOutlineEdit /> Edit
          </button>
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
          onClick={closeModal}
          className="mb-5 bg-whiteBgColor hover:bg-lightGrayColor hover: border-2 border-borderColor  px-6 py-3 rounded-full flex gap-2 text-center"
        >
          Cancel
        </button>
      </div>
    </DefaultModal>
  );
};

export default VitalsDetails;

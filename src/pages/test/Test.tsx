import Diagnosis from "@/assets/icons/Diagnosis";
import HTSStatus from "@/assets/icons/HTSStatus";
import LabOrder from "@/assets/icons/Laborder";

function Test() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <div>
              Hello SmartCare PRO
              <HTSStatus />
              <LabOrder color="red" size={100} />
              <Diagnosis color="green" size={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;

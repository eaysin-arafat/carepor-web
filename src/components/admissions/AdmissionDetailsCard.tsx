import Card from "../core/card/Card";
import DataRow from "../core/table/DataRow";

const AdmissionDetailsCard = () => {
  return (
    <div>
      <div className="mx-3 my-5">
        <Card
          className="bg-whiteColor shadow-none border border-lightGrayColor md:px-5"
          titleClass="text-secondaryColor"
          // edit
        >
          <div className="">
            <DataRow title="Admission Date " data="02-12-2023" />
            <DataRow title="Department" data="Data" />
            <DataRow
              title="Firm/Unit "
              data="Data vgsjdkfbsdjk DXSfvsvs sfc fg ststrfgdf hdfghj fghj "
            />
            <DataRow title="Ward" data="Data" />
            <DataRow title="Bed " data="Data" />
            <DataRow title="Admission Note " data="Data" />
            <DataRow title="Discharge Date " data="Data" />
            <DataRow title="Discharge Note " data="Data" />
          </div>
        </Card>
      </div>
      {/* <div className="border border-lightGrayColor p-5 rounded-lg mt-5 mb-10">
        <div className="border-lightGrayColor rounded-lg ">
          <h2 className="text-2xl font-semibold text-secondaryColor text-center mt-4">
            Admission Details
          </h2>
          <div className="bg-lightBlueColor rounded-lg h-fit p-4 mt-3 mb-5">
            <div className="flex flex-wrap gap-4 text-xs">
              <p>
                <span className="font-semibold">Admission Date : </span>
                28-Nov-2023
              </p>
              <p>
                <span className="font-semibold">Department : </span> Bauleni
                Mini Hospital
              </p>
              <p>
                <span className="font-semibold">Firm/Ward : </span> John Wick
              </p>
              <p>
                <span className="font-semibold">Operation Time :</span> John
                Wick
              </p>
              <p>
                <span className="font-semibold">Surgery Type : </span> John Wick{" "}
              </p>
              <p>
                <span className="font-semibold">Department : </span> John Wick
              </p>
              <p>
                <span className="font-semibold"> Bed :</span> John Wick{" "}
              </p>
              <p>
                {" "}
                <span className="font-semibold text-xs">
                  Notes :
                </span> ------{" "}
              </p>
            </div>
            <div className="flex items-center justify-end text-xs gap-2">
              <button className="text-red-500">
                <BsTrash />
              </button>
              <button className="text-primaryColor flex">
                <MdOutlineModeEdit />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdmissionDetailsCard;

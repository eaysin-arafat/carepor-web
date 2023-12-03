import LinkButton from "@/components/core/buttons/LinkButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import DateInput from "@/components/core/form-elements/DatePicker";
import Textarea from "@/components/core/form-elements/textarea";
import DataRow from "@/components/core/table/DataRow";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const AdmissionDischarge = (props: Props) => {
  return (
    <div>
      <div className="mt-5">
        <Container className="max-w-[1300px]">
          <div className="mx-3">
            <Link to="/client-search" className="go_back mb-5">
              <BiArrowBack />
              <p> Back</p>
            </Link>
            <div className="grid gap-5 lg:grid-cols-2">
              <Card className="bg-whiteColor shadow-none border dark:border-gray-500 md:px-5">
                <h2 className="text-2xl font-semibold text-secondaryColor text-center">
                  Discharge Details
                </h2>
                <h2 className="text-sm text-center mt-2">
                  Fields marked by <span className="text-dangerColor">*</span>{" "}
                  are mandatory
                </h2>
                <form action="" className="mt-5">
                  <div className="grid gap-5">
                    <DateInput
                      // name="Admission Date"
                      label="Discharge Date"
                      required
                      onChange={() => {}}
                    />
                    <Textarea label="Discharge Note" max={500} />
                  </div>
                  <div className="flex justify-center gap-5 mt-10 mb-4">
                    <SubmitButton
                      buttonType="submit"
                      title="Save & Discharge"
                      className=" w-52 btn_sm py-3"
                    />
                    <LinkButton
                      title="Cancel"
                      className="w-40 btn_sm py-3 dark:hover:bg-gray-800 dark:border-gray-500"
                    />
                  </div>
                </form>
              </Card>

              <Card className="bg-whiteColor shadow-none border dark:border-gray-500 md:px-5">
                <h2 className="text-2xl font-semibold text-secondaryColor text-center pb-3 mb-4 border-b dark:border-gray-600">
                  Admission Details
                </h2>
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AdmissionDischarge;

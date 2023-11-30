import Checkbox from "../../../core/form-elements/Checkbox";
import DatePicker from "../../../core/form-elements/CustomDatePicker";
import CustomNrc from "../../../core/form-elements/CustomNrc";
import Input from "../../../core/form-elements/Input";
import Select from "../../../core/form-elements/Select";
import SectionWrapper from "../../../core/form-layouts/SectionWrapper";

type Props = {};

function ClientPersonalInfo({}: Props) {
  return (
    <>
      <SectionWrapper title="Personal Information">
        <div className="grid md:grid-cols-6 gap-5">
          <div className="col-span-6 md:col-span-3">
            <Input label="First Name" required />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Input label="Surname" required />
          </div>
          <div className="col-span-6 md:col-span-3">
            <DatePicker
              name="date"
              // value={selectedDate}
              label="Date of birth"
              // onChange={handler}
              required
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Select label="Sex" required>
              <option value="">Select</option>
            </Select>
          </div>
          <div className="col-span-6 flex items-center">
            <Checkbox label="Date of birth is estimated" />
          </div>
          <div className="col-span-6 md:col-span-3">
            <CustomNrc
              label="NRC"
              required
              state="s"
              onChange={(e) => console.log(e.target)}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Select label="Country" required>
              <option value="">Select</option>
            </Select>
          </div>
          <div className="col-span-6 flex items-center">
            <Checkbox label="Client does not have NRC" />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input label="NAPSA Number" />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input label="UnderFive Card Number" />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input label="UnderFive Card Number" required />
          </div>
          <div className=""></div>
        </div>
      </SectionWrapper>
    </>
  );
}

export default ClientPersonalInfo;

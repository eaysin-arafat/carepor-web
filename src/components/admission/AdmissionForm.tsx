import { cookieManager } from "@/utilities/cookie-manager";
import OutlineButton from "../core/buttons/OutlineButton";
import SubmitButton from "../core/buttons/SubmitButton";
import DatePicker from "../core/form-elements/CustomDatePicker";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";

const AdmissionForm = () => {
  // get cookies

  const cookies = cookieManager.parseCookie("facility_token");

  // api hooks
  const { data: departments } =
    (cookies?.facilityId,
    {
      skip: !cookies?.facilityId,
      refetchOnMountOrArgChange: true,
    });

  const { data: firmUnits } = useGetFirmByDepartmentQuery(
    admission.departmentID,
    {
      skip: !admission.departmentID,
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: wards } = useGetWardByFirmQuery(admission.firmID, {
    skip: !admission.firmID,
    refetchOnMountOrArgChange: true,
  });

  const { data: beds } = useGetBedsByWardQuery(admission.wardID, {
    skip: !admission.wardID,
    refetchOnMountOrArgChange: true,
  });

  // handler functions
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAdmission((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  // handle department change
  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;

    setAdmission((prev) => ({ ...prev, [name]: value, firmID: "" }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  // handle firm unit change
  const handleFirmUnitChange = (e) => {
    const { name, value } = e.target;

    setAdmission((prev) => ({ ...prev, [name]: value, wardID: "" }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  // handle ward change
  const handleWardChange = (e) => {
    const { name, value } = e.target;

    setAdmission((prev) => ({ ...prev, [name]: value, bedID: "" }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  // render department options
  const departmentOptions = () => {
    return departments?.map((department) => (
      <option key={department.oid} value={department.oid}>
        {department.description}
      </option>
    ));
  };

  // render firm options
  const renderFirmUnitOptions = () => {
    return firmUnits?.map((firmUnit) => (
      <option key={firmUnit.oid} value={firmUnit.oid}>
        {firmUnit.description}
      </option>
    ));
  };

  // render ward options
  const renderWardOptions = () => {
    return wards?.map((ward) => (
      <option key={ward.oid} value={ward.oid}>
        {ward.description}
      </option>
    ));
  };

  // render bed options
  const renderBedOptions = () => {
    return beds?.map((bed) => (
      <option key={bed.oid} value={bed.oid} disabled={bed?.taken}>
        {bed.description}
      </option>
    ));
  };

  return (
    <form action="" className="mt-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <DatePicker
            name="Admission Date"
            label="Admission Date"
            required
            onChange={() => {}}
          />
        </div>
        <div className="col-span-1">
          <Select label="Department">
            <option value="">Select</option>
            <option value="">Engineer</option>
            <option value="">Printing</option>
          </Select>
        </div>
        <div className="col-span-1">
          <Select label="Firm/Unit">
            <option value="">Select</option>
            <option value="">Engineer</option>
            <option value="">Printing</option>
          </Select>
        </div>
        <div className="col-span-1">
          <Select label="Ward">
            <option value="">Select</option>
            <option value="">001</option>
            <option value="">002</option>
          </Select>
        </div>
        <div className="col-span-1">
          <Select label="Bed">
            <option value="">Select</option>
            <option value="">502</option>
            <option value="">503</option>
          </Select>
        </div>
        <div className="col-span-2">
          <Textarea
            label="Additional Comments"
            placeholder="Additional Components"
            max={500}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
        <SubmitButton buttonType="submit" title="Save & Admit" />
        <OutlineButton title="Cancel" onClick={handleCancelButtonClick} />
      </div>
    </form>
  );
};

export default AdmissionForm;

import { EnumEncounterType } from "@/enum/encounter-type";
import { EnumPiority } from "@/enum/enumerators";
import { useCreateCompositeInvestigationMutation } from "@/features/investigation/investigation-api";
import { useReadCompositeTestsQuery } from "@/features/investigation/investigation-enum-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { OnchangeEventType } from "@/types/htmlEvents";
import { TypeInvestigationForm } from "@/types/module-types/investigation";
import { datePickerToString } from "@/utilities/date";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import { renderObjEnumOptions } from "../core/form-elements/RenderSelectOptions";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";
import { compositeTestValidator } from "./investigation-validations";

const AddCompositeInvestigation = () => {
  const { Investigation } = EnumEncounterType;
  const [baseData] = useBaseDataCreate(Investigation);
  const dispatch = useDispatch();

  // RTK request // add investigation inputs fields
  const { data: compositeTests } = useReadCompositeTestsQuery(undefined);

  // RTK Post request // add composite tests
  const [createCompositeInvestigation, { isError, isSuccess, status }] =
    useCreateCompositeInvestigationMutation();

  const initialState = {
    orderNumber: "", //string
    // sampleCollectionDate:b
    quantity: "", //int
    sampleQuantity: "", // int
    piority: "", // Regular = 1, Urgent = 2, Emergency = 3.
    // imagingTestDetails: "", // string
    additionalComment: "", // string
    // isResultReceived: false, // bool
    testId: "",
    orderDate: "",
  };

  // Error state
  const [input, setInput] = useState<TypeInvestigationForm>(initialState);
  const [inputError, setInputError] = useState<TypeInvestigationForm>(null);
  // Form input hook and state
  const handleInputChange = (e: OnchangeEventType) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  const [orderDate, setOrderDate] = useState(null);

  //
  const handleFormReset = () => {
    setInput(initialState);
    setOrderDate(null);
  };

  const handleCompositeSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...input,
      orderDate: datePickerToString(orderDate),
    };

    const { errors, isValid } = compositeTestValidator(data);

    const submitData = {
      ...baseData,
      ...input,
      isResultReceived: false,
      clinicianId: baseData.createdBy,
      ...data,
    };

    if (!isValid) {
      setInputError(errors);
      return false;
    }

    createCompositeInvestigation(submitData);
  };

  // Side effects for submit request
  useEffect(() => {
    if (isSuccess && status == "fulfilled") {
      toast.dismiss();
      toast.success("Add Successful");
      handleFormReset();
      dispatch(closeAddModal());
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError && status == "rejected") {
      toast.dismiss();
      toast.error("Add Failed");
    }
  }, [isError]);

  // Render Composite tests droupdown
  const renderSelectOptions = () => {
    return compositeTests?.map((item, index) => (
      <option key={index} value={item.oid}>
        {item.description}
      </option>
    ));
  };

  return (
    <form onSubmit={handleCompositeSubmit}>
      <div className="md:flex gap-5 mt-5">
        <div className="md:w-[100%] border border-borderColor px-4 rounded-lg">
          <div className="grid grid-cols-4 gap-5 my-5">
            <div className="col-span-4 md:col-span-2">
              <DateInput
                name="orderDate"
                onChange={(date) => {
                  setOrderDate(date);
                  setInputError((prev) => ({ ...prev, orderDate: "" }));
                }}
                label="Order Date"
                selected={orderDate}
                required
                max={new Date()}
                errMsg={inputError?.orderDate}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Input
                value={input?.orderNumber}
                name={"orderNumber"}
                onChange={handleInputChange}
                label="Order Number"
                errMsg={inputError?.orderNumber}
              />
            </div>
            <div className="col-span-4 md:col-span-2 ">
              <Select
                value={input?.testId}
                label="Test"
                required
                name={"testId"}
                onChange={handleInputChange}
                errMsg={inputError?.testId}
              >
                {renderSelectOptions()}
              </Select>
            </div>
            <div className="col-span-4 md:col-span-2 ">
              <Select
                onChange={handleInputChange}
                name={"piority"}
                value={input?.piority}
                errMsg={inputError?.piority}
                label="Order Priority"
                required
              >
                {renderObjEnumOptions(EnumPiority)}
              </Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Input
                label=" Test Quantity"
                required
                value={input?.quantity}
                name={"quantity"}
                onChange={handleInputChange}
                errMsg={inputError?.quantity}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              {/* <Input label="Sample Quantity" required /> */}
              <Input
                value={input?.sampleQuantity}
                name={"sampleQuantity"}
                onChange={handleInputChange}
                errMsg={inputError?.sampleQuantity}
                label="Sample Quantity"
                required
              />
            </div>
            <div className="col-span-4">
              <Textarea
                onChange={handleInputChange}
                name={"additionalComment"}
                value={input?.additionalComment}
                label=" Additional comments"
                errMsg={inputError?.additionalComment}
              />
            </div>
          </div>

          <div className="mb-5 flex justify-end gap-5">
            <button className="main_btn py-3">Save</button>
          </div>
        </div>
        {/* <div className="md:w-[40%] border border-borderColor px-4 rounded-lg">
          <h2 className="text-center text-xl font-medium my-4">
            Investigations Cart
          </h2>
          <h3 className="font-semibold text-base inline-flex items-center gap-1">
            <BsCalendar /> Order Date :{" "}
            <span className="font-normal text-grayColor">12-12-2023</span>
          </h3>
          <InvestigationCartCard
            dataArray={[]}
            handleDelete={() => {}}
            handleEdit={() => {}}
          />
          <div className="mb-5 flex justify-end gap-5">
            <button className="main_btn py-3">Save</button>
          </div>
        </div> */}
      </div>
    </form>
  );
};

export default AddCompositeInvestigation;

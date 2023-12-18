import { RootState } from "@/app/store";
import { EnumEncounterType } from "@/enum/encounter-type";
import { EnumPiority } from "@/enum/enumerators";
import { useUpdateInvestigationMutation } from "@/features/investigation/investigation-api";
import {
  useReadTestSubTypeQuery,
  useReadTestTypeQuery,
  useReadTestsQuery,
} from "@/features/investigation/investigation-enum-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import { TypeInvestigationForm } from "@/types/module-types/investigation";
import { datePickerToString } from "@/utilities/date";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import {
  renderObjEnumOptions,
  renderOptions,
} from "../core/form-elements/RenderSelectOptions";
import Select from "../core/form-elements/Select";
import CustomSearchable from "../core/form-elements/custom-searchable";
import Textarea from "../core/form-elements/textarea";
import { investigationValidator } from "./investigation-validations";

type Props = {
  //  tests; subTestTypes; testTypes
};
const InvestigationEdit = ({}: Props) => {
  const { data: editData } = useSelector(
    (state: RootState) => state.modal.editModal
  );
  const data: TypeInvestigationForm = editData;
  const { Investigation } = EnumEncounterType;
  const [baseData] = useBaseDataCreate(Investigation);
  let clinicianId = baseData.createdBy;
  const dispatch = useDispatch();

  // // add investigation inputs fields enums
  const { data: testTypes, isSuccess: testTypeSuccess } =
    useReadTestTypeQuery(undefined);
  const { data: subTestTypes, isSuccess: subTypeSuccess } =
    useReadTestSubTypeQuery(undefined);
  const { data: tests, isSuccess: testSuccess } = useReadTestsQuery(undefined);

  // RTK request
  const [updateInvestigation, { isLoading, status }] =
    useUpdateInvestigationMutation();

  // initial form state
  const initialState = {
    // orderDate :"",  // date
    orderNumber: "", //string
    // sampleCollectionDate: "", //date nullable yes
    quantity: "", //int
    sampleQuantity: "", // int
    piority: "", // Regular = 1, Urgent = 2, Emergency = 3.
    imagingTestDetails: "", // string
    additionalComment: "", // string
    // isResultReceived: false, // bool
  };

  // depended non submit select state
  const [testType, setTestType] = useState<string | number>("");
  const [subTestType, setSubTestType] = useState<number | string>("");
  // search input value
  const [testObj, setTestObj] = useState(null);
  // input date value
  const [orderDate, setOrderDate] = useState(null);

  //OTHERS INPUTS STATES AND HANDLER
  const [formData, setFormData] = useState<TypeInvestigationForm>(initialState);
  const handleFormChange = (e: OnchangeEventType) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };
  // Error states
  const [inputError, setInputError] = useState<TypeInvestigationForm | null>(
    null
  );
  //
  // const handleFormReset = () => {
  //   setFormData(initialState);
  //   setTestType("");
  //   setSubTestType("");
  //   setTestObj(null);
  //   setOrderDate(null);
  // };

  // Test select options array manage
  const testSelectOptions = tests
    ?.filter((data) => data.subtypeId == subTestType)
    ?.map((item) => ({
      value: item.oid,
      label: item.title,
    }));

  // handle Investigations Submit to server
  const handleInvestigationsUpdate = (e: FormSubmitEventType) => {
    e.preventDefault();

    const interactionId = data?.interactionID;
    const testId = testObj?.value;

    const submitData = {
      interactionId,
      ...formData,
      ...baseData,
      subTestType,
      testType,
      testId,
      clinicianId,
      orderDate: datePickerToString(orderDate),
    };

    const { errors, isValid } = investigationValidator(submitData);
    if (!isValid) {
      setInputError(errors);
      return false;
    }
    // Rtk Put request
    updateInvestigation({ id: interactionId, body: submitData });
  };

  useEffect(() => {
    if (status == "fulfilled") {
      toast.dismiss();
      toast.success("Update Successful");
      dispatch(closeEditModal());
    }
  }, [status]);
  useEffect(() => {
    if (status == "rejected") {
      toast.dismiss();
      toast.error("Update Failed");
    }
  }, [status]);

  // Test type input change handle
  const handleTestTypeChange = (e: OnchangeEventType) => {
    let value = e.target.value;
    setTestType(value);
    setSubTestType("");
    setTestObj(null);
    if (value == "3") {
      setFormData((prev) => ({ ...prev, sampleQuantity: "" }));
    } else setFormData((prev) => ({ ...prev, imagingTestDetails: "" }));
    setInputError((prev) => ({ ...prev, testType: "" }));
  };

  const filteredSubTestTypes =
    subTestTypes?.filter((data) => data.testTypeId == testType) || [];

  useEffect(() => {
    orderDate && setInputError((prev) => ({ ...prev, orderDate: "" }));
  }, [orderDate]);

  useEffect(() => {
    if (testObj?.value) {
      setInputError((prev) => ({ ...prev, testId: "" }));
    }
  }, [testObj?.value]);

  //
  useEffect(() => {
    setTestType(data?.testTypeId);
  }, [data?.testTypeId]);
  useEffect(() => {
    setSubTestType(data?.testSubtypeId);
  }, [data?.testSubtypeId]);
  useEffect(() => {
    setTestObj({
      value: data?.testID,
      label: data?.testName,
    });
  }, [
    data?.testID,
    data?.testName,
    testSuccess,
    subTypeSuccess,
    testTypeSuccess,
  ]);
  //

  useEffect(() => {
    setFormData({
      orderNumber: `${data?.orderNumber}`,
      quantity: data?.quantity,
      sampleQuantity: data?.sampleQuantity,
      piority: data?.piority,
      imagingTestDetails: data?.imagingTestDetails,
      additionalComment: data?.additionalComment,
    });
  }, [
    data?.orderNumber,
    data?.quantity,
    data?.sampleQuantity,
    data?.piority,
    data?.imagingTestDetails,
    data?.additionalComment,
  ]);
  useEffect(() => {
    if (data?.orderDate) {
      setOrderDate(new Date(data?.orderDate));
    }
  }, [data?.orderDate]);

  return (
    <form onSubmit={handleInvestigationsUpdate}>
      <div className="md:flex gap-5 mt-5">
        <div className="md:w-[100%] border border-borderColor px-4 rounded-lg">
          <div className="grid grid-cols-4 gap-5 my-5">
            <div className="col-span-4 md:col-span-2">
              <Select
                label="Test Type"
                required
                value={testType}
                onChange={handleTestTypeChange}
              >
                {renderOptions(testTypes)}
              </Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              {/* <Select label="Sub Type" required></Select> */}
              <Select
                label="Sub Type"
                required
                value={subTestType}
                onChange={(e) => {
                  setSubTestType(e.target.value);
                  setTestObj(null);
                  setInputError((prev) => ({ ...prev, subTestType: "" }));
                }}
              >
                {
                  // Render sub test types
                  filteredSubTestTypes?.length > 0 &&
                    renderOptions(filteredSubTestTypes)
                }
              </Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              {/* <Select label="Test" required></Select> */}
              <CustomSearchable
                options={testSelectOptions}
                name="testId"
                setSelectedValue={setTestObj}
                selectedValue={testObj}
                className={"w-full"}
                errMsg={inputError?.testId}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <DateInput
                label=" Order Date"
                required
                selected={orderDate}
                name="orderDate"
                max={new Date()}
                onChange={setOrderDate}
                errMsg={inputError?.orderDate}
              />
            </div>
            <div className="col-span-4 md:col-span-2 ">
              {/* <DateInput onChange={() => {}} label="Order Date" required /> */}
              {/* <Select label="Order Priority" required></Select> */}
              <Select
                label="Order Priority"
                required
                value={formData.piority}
                onChange={handleFormChange}
                name={"piority"}
                errMsg={inputError?.piority}
              >
                {renderObjEnumOptions(EnumPiority)}
              </Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              {/* <Input label="Order Number" required /> */}
              <Input
                label=" Order Number"
                value={formData.orderNumber}
                onChange={handleFormChange}
                name={"orderNumber"}
                errMsg={inputError?.orderNumber}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Input
                label=" Test Quantity"
                required
                value={formData.quantity}
                onChange={handleFormChange}
                name={"quantity"}
                errMsg={inputError?.quantity}
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              {/* <Input label="Test Quantity" required /> */}
              <Input
                label=" Sample Quantity"
                required={testType != 3}
                name={"sampleQuantity"}
                disabled={testType == 3}
                value={formData.sampleQuantity}
                onChange={handleFormChange}
                errMsg={inputError?.sampleQuantity}
              />
            </div>

            <div className="col-span-4">
              <Textarea
                // row={2}
                label=" Imaging Test Details (If imaging test selected)"
                value={formData.imagingTestDetails}
                disabled={testType != 3}
                onChange={handleFormChange}
                name={"imagingTestDetails"}
                errMsg={inputError?.imagingTestDetails}
              />
            </div>
            <div className="col-span-4">
              {/* <Textarea label="Comments" required /> */}
              <Textarea
                // row={2}
                label=" Additional comments"
                onChange={handleFormChange}
                name={"additionalComment"}
                value={formData.additionalComment}
                errMsg={inputError?.additionalComment}
              />
            </div>
          </div>
          <div className="mb-5 flex justify-end gap-5">
            <button
              type="button"
              onClick={() => dispatch(closeEditModal())}
              className="transparent_btn "
            >
              Cancel
            </button>
            <button
              disabled={isLoading}
              type="submit"
              className="main_btn py-2 sm:py-3 disabled:bg-slate-400"
            >
              update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InvestigationEdit;

// const createDataArray = ({ item, getTestName }) => {
//   return [
//     {
//       title: "Test",
//       data: getTestName(item?.testId),
//     },
//     {
//       title: "Order Date",
//       data: DateFunc.formatDate(item.orderDate),
//     },
//     {
//       title: "Order Number",
//       data: item.orderNumber,
//     },
//     {
//       title: "Test Quantity",
//       data: item.quantity,
//     },
//     {
//       title: "Sample Quantity",
//       data: item.sampleQuantity,
//     },
//     {
//       title: "Priority",
//       data: EnumPiority[item.piority],
//     },
//     {
//       title: "Imaging Test Detail",
//       data: item.imagingTestDetails,
//     },
//     {
//       title: "Addional Comments",
//       data: item.additionalComment,
//     },
//   ];
// };

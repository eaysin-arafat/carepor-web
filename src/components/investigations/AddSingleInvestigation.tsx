import { EnumEncounterType } from "@/enum/encounter-type";
import { EnumPiority } from "@/enum/enumerators";
import { useCreateInvestigationMutation } from "@/features/investigation/investigation-api";
import {
  useReadTestSubTypeQuery,
  useReadTestTypeQuery,
  useReadTestsQuery,
} from "@/features/investigation/investigation-enum-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import { TypeInvestigationForm } from "@/types/module-types/investigation";
import { DateFunc, datePickerToString } from "@/utilities/date";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsCalendar } from "react-icons/bs";
import { useDispatch } from "react-redux";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import {
  renderObjEnumOptions,
  renderOptions,
} from "../core/form-elements/RenderSelectOptions";
import Select from "../core/form-elements/Select";
import CustomSearchable from "../core/form-elements/custom-searchable";
import Textarea from "../core/form-elements/textarea";
import InvestigationCartCard from "./InvestigationCartCard";
import { investigationValidator } from "./investigation-validations";

const AddSingleInvestigation = ({}) => {
  const { Investigation } = EnumEncounterType;
  const [baseData] = useBaseDataCreate(Investigation);
  let clinicianId = baseData.createdBy;
  const dispatch = useDispatch();

  // add investigation inputs fields enums
  const { data: testTypes } = useReadTestTypeQuery(undefined);
  const { data: subTestTypes } = useReadTestSubTypeQuery(undefined);
  const { data: tests } = useReadTestsQuery(undefined);

  // RTK Post request
  const [createInvestigation, { isSuccess, isLoading, isError, status }] =
    useCreateInvestigationMutation();

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
    isResultReceived: false, // bool
  };

  // depended non submit select state
  const [testType, setTestType] = useState<string | number>("");
  const [subTestType, setSubTestType] = useState<number | string>("");
  // search input value
  const [testObj, setTestObj] = useState(null);
  // input date value
  const [orderDate, setOrderDate] = useState(new Date());

  //OTHERS INPUTS STATES AND HANDLER
  const [formData, setFormData] = useState(initialState);
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
  const handleFormReset = () => {
    setFormData(initialState);
    setTestType("");
    setSubTestType("");
    setTestObj(null);
    setOrderDate(null);
  };

  // Test select options array manage
  const testSelectOptions = tests
    ?.filter((data) => data.subtypeId == subTestType)
    ?.map((item) => ({
      value: item.oid,
      label: item.title,
    }));

  // Investigation items array value
  const [investigations, setInvestigations] = useState([]);

  // handle form data add to cart
  const handleAddInvestigationItemToCart = () => {
    const testId = testObj?.value;

    // if need data check data duplication
    const findDuplicate =
      investigations?.find((item) => item.testId == testId) || {};
    if (Object.keys(findDuplicate)?.length) {
      toast.dismiss();
      return toast.error("This test is already added!");
    }

    const dataForValidation = {
      ...formData,
      testType,
      subTestType,
      testId,
      orderDate,
    };
    // Check data validation
    const { errors, isValid } = investigationValidator(dataForValidation);
    if (!isValid) {
      setInputError(errors as TypeInvestigationForm);
      return false;
    }

    // encounterId: "3d927351-ea80-4a8e-a281-93760ba393db",
    const investigationItemObj = {
      ...formData,
      ...baseData,
      subTestType,
      testType,
      testId: +testId,
      clinicianId,
      quantity: +formData.quantity,
      sampleQuantity: +formData.sampleQuantity,
      orderDate: datePickerToString(orderDate),
    };

    setInvestigations((prev) => [...prev, investigationItemObj]);
    handleFormReset();
  };

  // handle delete investigation item
  const handleDeleteInvestigation = (testId) => {
    const filtered = investigations?.filter((item) => item.testId !== testId);
    setInvestigations(filtered);
    // router?.refresh();
    toast.dismiss();
    toast.error("Test deleted.");
  };

  // handle Edit Form Open
  const handleSetEditData = (data) => {
    const findTests = tests.find((item) => item.oid == data.testId);
    // const findTests = testSelectOptions.find(item => item.oid == data.testId);
    const orderDateConvert = new Date(data.orderDate);
    setFormData({
      orderNumber: data.orderNumber,
      quantity: data.quantity,
      sampleQuantity: data.sampleQuantity,
      piority: data.piority,
      imagingTestDetails: data.imagingTestDetails,
      additionalComment: data.additionalComment,
      isResultReceived: data.isResultReceived,
    });
    setTestType(data.testType);
    renderSubTestTypes();
    setSubTestType(data.subTestType);
    setTestObj({ value: findTests.oid, label: findTests.title });
    setOrderDate(orderDateConvert);
    const filtered = investigations?.filter(
      (item) => item.testId !== data.testId
    );
    setInvestigations(filtered);
  };

  // handle Investigations Submit to server
  const handleInvestigationsSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();

    // check data validation
    if (!investigations?.length) {
      const testId = testObj?.value;
      const dataForValidation = {
        ...formData,
        testType,
        subTestType,
        testId,
        orderDate,
      };
      const { errors, isValid } = investigationValidator({
        ...dataForValidation,
        addButton: "",
      });
      setInputError((prev) => ({
        ...prev,
        addButton: "Please Add Atleast One Test.",
      }));
      if (!isValid) {
        setInputError(errors as TypeInvestigationForm);
      }
      return false;
    }

    // Post
    createInvestigation(investigations);
  };

  useEffect(() => {
    if (isSuccess && status == "fulfilled") {
      toast.dismiss();
      toast.success("Add Successful");
      handleFormReset();
      setInvestigations([]);
      // setIsUpdateSuccess(true);
      dispatch(closeAddModal());
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError && status == "rejected") {
      toast.dismiss();
      toast.error("Add Failed");
    }
  }, [isError]);

  // Test type input change handle
  const handleTestTypeChange = (e) => {
    let value = e.target.value;
    setTestType(value);
    setSubTestType("");
    setTestObj(null);
    if (value == 3) {
      setFormData((prev) => ({ ...prev, sampleQuantity: "" }));
    } else setFormData((prev) => ({ ...prev, imagingTestDetails: "" }));
    setInputError((prev) => ({ ...prev, testType: "" }));
  };

  const getTestName = (id) => {
    const testObject = tests.find((item) => item.oid == id) || null;
    return testObject ? testObject?.title : "";
  };

  const filteredSubTestTypes =
    subTestTypes?.filter((data) => data.testTypeId == testType) || [];
  const renderSubTestTypes = () => {
    return filteredSubTestTypes?.map((item) => (
      <option key={item.oid} value={item.oid}>
        {item.description}
      </option>
    ));
  };

  const resetDateError = () => {
    setInputError((prev) => ({ ...prev, orderDate: "" }));
  };
  useEffect(() => {
    orderDate && resetDateError();
  }, [orderDate]);
  const resetTestIdError = () => {
    setInputError((prev) => ({ ...prev, testId: "" }));
  };
  useEffect(() => {
    if (testObj?.value) {
      resetTestIdError();
    }
  }, [testObj?.value]);

  return (
    <form onSubmit={handleInvestigationsSubmit}>
      <div className="md:flex gap-5 mt-5">
        <div className="md:w-[60%] border border-borderColor px-4 rounded-lg">
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
                placeholder="Test"
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
              onClick={handleAddInvestigationItemToCart}
              className="transparent_btn "
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="md:w-[40%] border border-borderColor px-4 rounded-lg">
          <h2 className="text-center text-xl font-medium my-4">
            Investigations Cart
          </h2>
          <h3 className="font-semibold text-base inline-flex items-center gap-1">
            <BsCalendar />
            Date :{" "}
            <span className="font-normal text-grayColor">
              {DateFunc.formatDate(DateFunc.toDay())}
            </span>
          </h3>
          <div className="h-[550px] overflow-x-auto">
            {investigations?.map((item) => {
              return (
                <InvestigationCartCard
                  dataArray={createDataArray({ item, getTestName })}
                  handleDelete={() => handleDeleteInvestigation(item.testId)}
                  handleEdit={() => handleSetEditData(item)}
                />
              );
            })}
          </div>
          <div className="mb-5 mt-2 flex justify-end gap-5">
            <button
              type="button"
              onClick={() => setInvestigations([])}
              className="transparent_btn "
              disabled={investigations?.length == 0}
            >
              Clear Carts
            </button>
            <button
              disabled={investigations?.length == 0 || isLoading}
              type="submit"
              className="main_btn py-2 sm:py-3 disabled:bg-slate-400"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddSingleInvestigation;

const createDataArray = ({ item, getTestName }) => {
  return [
    {
      title: "Test",
      data: getTestName(item?.testId),
    },
    {
      title: "Order Date",
      data: DateFunc.formatDate(item.orderDate),
    },
    {
      title: "Order Number",
      data: item.orderNumber,
    },
    {
      title: "Test Quantity",
      data: item.quantity,
    },
    {
      title: "Sample Quantity",
      data: item.sampleQuantity,
    },
    {
      title: "Priority",
      data: EnumPiority[item.piority],
    },
    {
      title: "Imaging Test Detail",
      data: item.imagingTestDetails,
    },
    {
      title: "Addional Comments",
      data: item.additionalComment,
    },
  ];
};

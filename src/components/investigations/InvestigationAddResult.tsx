import { RootState } from "@/app/store";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { EnumNormalAbnormal } from "@/enum/enumerators";
import {
  useCreateInvestigationResultMutation,
  useReadInvestigationByEncounterQuery,
} from "@/features/investigation/investigation-api";
import {
  useReadMeasuringUnitsQuery,
  useReadResultOptionsQuery,
} from "@/features/investigation/investigation-enum-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseDataCreate from "@/hooks/useBaseDataCreate";
import { PriorityColor } from "@/pages/queue/investigations-dashboard/InvestigationsDashboard";
import { cn } from "@/utilities/cn";
import { DateFunc, datePickerToString } from "@/utilities/date";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";
import TableLoader from "../core/loader/TableLoader";

type Props = {
  addType?: "module" | "queue" | "encounterId" | "interactionId";
};
const InvestigationAddResult = ({}: Props) => {
  // console.log({ addType });
  const dispatch = useDispatch();

  // const { getClinicianFullName } = useClinician();

  const { data } = useSelector((state: RootState) => state.modal.addModal);
  const [baseData] = useBaseDataCreate();

  // enums from Rtk //#
  const { data: measuringUnits } = useReadMeasuringUnitsQuery(undefined);
  const { data: resultOptions } = useReadResultOptionsQuery(undefined);
  // const { data: tests } = useReadTestsQuery(undefined);

  // Rtk request
  const { data: encounterInvestigations, isLoading } =
    useReadInvestigationByEncounterQuery(data?.encounterId, {
      // skip: !data?.encounterId || addType != "encounterId",
      refetchOnMountOrArgChange: true,
    });
  // Query data //#
  // const { data: singleInvestigation } = useReadInvestigationQuery(
  //   data?.interactionId,
  //   {
  //     skip: !data?.interactionId || addType != "interactionId",
  //   }
  // );

  let investigations = [];
  investigations = Array.isArray(encounterInvestigations)
    ? encounterInvestigations
    : [];

  // if (addType == "module") {
  //   investigations =
  //     (Array.isArray(data?.mergeInvestigations) && data?.mergeInvestigations) ||
  //     [];
  //   // } else if (addType == "queue") {
  //   //   investigations = data && Object.keys(data).length ? [data] : [];
  // } else if (addType == "encounterId") {
  //   investigations = Array.isArray(encounterInvestigations)
  //     ? encounterInvestigations
  //     : [];
  // } else if (addType == "interactionId") {
  //   investigations = singleInvestigation ? [singleInvestigation] : [];
  // }
  // filter result is not received
  const investigationWithoutResult = investigations.filter(
    (d) => !d.isResultReceived
  );

  // form functionality starts here

  // initial state for inputs
  const initialState = {
    resultDescriptive: "",
    resultNumeric: "", // int
    commentOnResult: "",
    isResultNormal: "", // Result Status
    measuringUnitId: "",
    resultOptionId: "",
    results: "",
    // server required value
    // investigationId : currentInvestigation?.interactionId,
  };
  // form cart states
  const [createdResults, setCreatedResults] = useState([]);
  const [currentInvestigation, setCurrentInvestigation] = useState(null); // track for show form
  const [resultDate, setResultDate] = useState(null);
  const [input, setInput] = useState(initialState);
  const [inputError, setInputError] = useState(null);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  console.log({ currentInvestigation });

  // CLOSE RESULT ADD MODAL
  const handleCloseAddResultModal = () => {
    dispatch(closeAddModal());
  };
  // SET RESULT FORM FOR TARGETED INVESTIGATION
  const handleSetResultAddForm = (data) => {
    // check is already item added on result cart
    const findObj = createdResults.find(
      (res) => res.investigationId == data?.interactionId
    );
    if (findObj) {
      toast.error("Already added to cart");
      return;
    }
    //reset previous
    setResultDate("");
    setCurrentInvestigation(null);
    setInput(initialState);

    // alert(JSON.stringify(data));

    // set data and open modal
    // console.log("handleSetResultAddForm");
    setCurrentInvestigation(data);

    // modalOpener("investigation_result_add");
  };
  // CLOSE RESULT FORM
  const handleCancelResultAddForm = () => {
    setCurrentInvestigation(null);
  };
  // CLEAR RESULT CART
  const handleClearCartItems = () => {
    setCreatedResults([]);
  };

  // const isDisableResultButton = (id) => {
  //   const findObj = createdResults.find((res) => res.investigationId == id);
  //   return findObj ? true : false;
  // };

  // DATA FOR SELECT OPTIONS
  const testId = currentInvestigation?.testId;
  const filterResultOptions = Array.isArray(resultOptions)
    ? resultOptions.filter((option) => option.testId == testId)
    : [];
  const filterMeasuringUnits = Array.isArray(measuringUnits)
    ? measuringUnits.filter((unit) => unit.testId == testId)
    : [];

  // HANDLE ADD RESULT TO CART
  const handleAddResultToCart = () => {
    // e.preventDefault();

    if (!resultDate || !input?.isResultNormal) {
      if (!resultDate)
        setInputError((prev) => ({ ...prev, resultDate: "Required" }));
      if (!input.isResultNormal)
        setInputError((prev) => ({ ...prev, isResultNormal: "Required" }));
      return;
    }

    // check duplicate
    // const checkDuplicate = createdResults.find(item => item.investigationId )
    const result_date_convert = datePickerToString(resultDate);

    const data = {
      investigation: currentInvestigation,
      resultDate: result_date_convert,
      ...input,
      investigationId: currentInvestigation?.interactionId,
    };

    setCreatedResults((prev) => [...prev, data]);
    // Empty current investigation form
    setCurrentInvestigation(null);
  };

  //HANDLE DELETE ITEM FORM CART
  const handleDeleteFromCart = (investigationId) => {
    const newResults = createdResults?.filter(
      (data) => data.investigationId !== investigationId
    );
    if (currentInvestigation?.investigationId === investigationId) {
      setCurrentInvestigation(null);
    }

    return setCreatedResults(newResults);
  };

  // handle Edit item from cart
  const [previousData, setPreviousData] = useState(null);

  const handleEditFromCart = (investigationId) => {
    //reset previous
    setResultDate("");
    setCurrentInvestigation(null);
    console.log("handleEditFromCart");
    setInput(initialState);

    // check duplicate
    const findEditObject = createdResults.find(
      (item) => item.investigationId === investigationId
    );

    const prevResultData = {
      resultDate: findEditObject.resultDate,
      resultDescriptive: findEditObject.resultDescriptive,
      resultNumeric: findEditObject.resultNumeric, // int
      commentOnResult: findEditObject.commentOnResult,
      isResultNormal: findEditObject.isResultNormal, // Result Status
      measuringUnitId: findEditObject.measuringUnitId,
      resultOptionId: findEditObject.resultOptionId,
      results: findEditObject.results,
      //
      // investigationId : findEditObject?.interactionId,
      // clinicianId : findEditObject.investigation.clinicianId,
      // testName: findEditObject.investigation?.test?.title,
      // orderDate: findEditObject.investigation?.orderDate,
    };

    setPreviousData(prevResultData);
    setCurrentInvestigation(findEditObject.investigation);
    // const newResults = createdResults?.filter(data => data.investigationId !== investigationId);
    // setCreatedResults(newResults)
    // modalOpener("investigation_result_edit");
  };
  // Rtk // Result submit
  const [createInvestigationResult, { status }] =
    useCreateInvestigationResultMutation();

  // Handle Result Submit
  const handleResultSubmit = () => {
    if (createdResults?.length < 1) {
      toast.dismiss();
      return toast.error("Please add atlast one result!");
    }

    //
    const formatResultArray = createdResults?.map((data) => ({
      ...baseData,
      resultDate: data.resultDate,
      resultDescriptive: data.resultDescriptive,
      resultNumeric: data.resultNumeric, // int
      commentOnResult: data.commentOnResult,
      isResultNormal: data.isResultNormal, // Result Status
      measuringUnitId: data.measuringUnitId,
      resultOptionId: data.resultOptionId,
      results: data.results,
      investigationId: data.investigationId,
    }));

    createInvestigationResult(formatResultArray);
  };

  // handle add result to cart
  const handleUpdateResultToCart = (e) => {
    e.preventDefault();

    if (!resultDate || !input?.isResultNormal) {
      if (!resultDate)
        setInputError((prev) => ({ ...prev, resultDate: "Required" }));
      if (!input.isResultNormal)
        setInputError((prev) => ({ ...prev, isResultNormal: "Required" }));
      return;
    }

    // // check duplicate
    // const checkDuplicate = createdResults.find(item => item.investigationId )

    const result_date_convert = datePickerToString(resultDate);

    const editedData = {
      investigation: currentInvestigation,
      resultDate: result_date_convert,
      ...input,
      investigationId: currentInvestigation?.interactionId,
    };

    const newResultArray = createdResults.map((data) => {
      if (data.investigationId === editedData.investigationId) {
        return editedData;
      } else {
        return data;
      }
    });

    setCreatedResults(newResultArray);
    console.log("handleUpdateResultToCart");
    setCurrentInvestigation(null);
    setPreviousData(null);
    // modalCloser("investigation_result_edit");
  };

  console.log(createdResults);

  // //get measuringUnits name
  // const measuringUnitName = (measuringUnitID) => {
  //   const findObj =
  //     measuringUnits?.find((data) => data.oid == measuringUnitID) || null;
  //   return findObj ? findObj.description : "";
  // };

  // // get resultOptionId name
  // const getResultOptionId = (resultOptionId) => {
  //   const findObj =
  //     resultOptions.find((data) => data.oid == resultOptionId) || null;
  //   return findObj ? findObj.description : "";
  // };

  const testTypeId = currentInvestigation?.test?.testSubtype?.testTypeId;
  // render ResultOptions
  const readerResultOptions = filterResultOptions?.map((option) => {
    return (
      <option key={option.oid} value={option.oid}>
        {option?.description}
      </option>
    );
  });
  // render Measuring Units
  const readerMeasuringUnits = filterMeasuringUnits?.map((option) => {
    return (
      <option key={option.oid} value={option.oid}>
        {option?.description}
      </option>
    );
  });

  // SIDE EFFECTS
  // results submit
  useEffect(() => {
    if (status === "fulfilled") {
      handleClearCartItems();
      toast.dismiss();
      toast.success("Result update successful");
    } else if (status === "rejected") {
      toast.dismiss();
      toast.error("Result update failed");
    }
  }, [status]);

  // ----------------------------------------------------------------
  useEffect(() => {
    setInput({
      resultDescriptive: previousData?.resultDescriptive,
      resultNumeric: previousData?.resultNumeric, // int
      commentOnResult: previousData?.commentOnResult,
      isResultNormal: previousData?.isResultNormal, // Result Status
      measuringUnitId: previousData?.measuringUnitId,
      resultOptionId: previousData?.resultOptionId,
      results: previousData?.results,
    });
  }, [previousData]);

  useEffect(() => {
    const date = previousData?.resultDate
      ? new Date(previousData?.resultDate)
      : "";
    setResultDate(date);
  }, [previousData]);

  return (
    <>
      <div>
        <div className="md:flex gap-5 mt-5 h-[80vh]">
          <div className="md:w-[60%] border border-borderColor px-4 rounded-lg h-full">
            <div className="mt-4">
              {/* <h3 className="font-semibold text-base inline-flex items-center gap-1">
                <BsCalendar /> Order Date :{" "}
                <span className="font-normal text-grayColor">12-12-2023</span>
              </h3> */}
              {/* <p className="text-grayColor mt-2">
                Prescribed by <span>Roger More</span>, at{" "}
                <span>Bauleni Mini Hospital</span> Facility{" "}
              </p> */}
              <h2 className="text-center text-lg font-medium my-4">
                Investigations
              </h2>
            </div>

            {/* INVESTIGATION TABLE */}
            {!currentInvestigation && (
              <div className="mt-4 max-h-[650px] overflow-auto  ">
                {/* <InvestigationTable /> */}
                {/* rebuild */}
                <div className="">
                  <Table className=" " isRounded>
                    {/* 	Test Type	Sub Type	Test	Priority */}
                    <TableHeader
                      isAction
                      className=""
                      actionWidth="w-[132px] text-center"
                      title={[
                        { title: "Order Date", w: "18%" },
                        // { title: "Test Type", w: "20%" },
                        // { title: "Sub Type", w: "20%" },
                        { title: "Test", w: "64%" },
                        { title: "Priority", w: "18%" },
                      ]}
                    />
                    {isLoading && <TableLoader />}
                    {Array.isArray(investigationWithoutResult) &&
                      investigationWithoutResult
                        ?.filter((inv) => !inv?.isResultReceived)
                        ?.map((data, index) => {
                          // check is already item added on result cart then require
                          // disable result button
                          const findDisable =
                            createdResults.find(
                              (res) =>
                                res.investigationId == data?.interactionId
                            ) || null;

                          return (
                            <TableBody
                              key={index}
                              btn={{
                                btn: findDisable ? "" : "Add Result",
                                btnOutline: findDisable ? "Added" : "",
                              }}
                              btnHandler={
                                findDisable
                                  ? null
                                  : () => handleSetResultAddForm(data)
                              }
                              isAction
                              className=""
                              item={[
                                {
                                  title: DateFunc.formatDate(data?.orderDate),
                                  w: "18%",
                                },
                                // { title: data?.testType, w: "18%" },
                                // { title: data?.testSubtype, w: "18%" },
                                // { title: data?.testName, w: "24%" },
                                { title: data?.testNameDetails, w: "64%" },
                                {
                                  title: (
                                    <PriorityColor
                                      p={data?.piority}
                                      key={index + "p"}
                                    />
                                  ),
                                  w: "18%",
                                },
                              ]}
                              index={1}
                              actionWidth="w-[132px]"
                            />
                          );
                        })}
                  </Table>{" "}
                </div>
                <div className="flex justify-end mt-5 ">
                  {/*  */}
                  <button
                    type="button"
                    onClick={handleCloseAddResultModal}
                    className="transparent_btn py-2 px-8"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* FORM SECTION */}
            {currentInvestigation && (
              <div className="mt-4 max-h-[650px] overflow-auto ">
                {/* Investigation details */}
                <div className="bg-lightBlueColor rounded-lg h-fit p-4  mb-5">
                  <div className="grid grid-cols-2 md:grid-cols-2 w-full text-xs">
                    <p className="col-span-2 mt-1">
                      <span className="font-semibold"> Facility : </span>
                      {currentInvestigation?.createdIn}
                    </p>
                    <p className="col-span-2 mt-1">
                      <span className="font-semibold"> Client : </span>
                      {currentInvestigation?.client.firstName +
                        " " +
                        currentInvestigation?.client.surname}
                    </p>
                    <p className="col-span-2 mt-1">
                      <span className="font-semibold"> Test : </span>
                      {currentInvestigation?.testNameDetails}
                    </p>
                  </div>
                </div>
                {/* FORM INPUTS */}
                <div className="grid grid-cols-4 gap-5 my-5 ">
                  <div className="col-span-4">Add Results</div>
                  <div className="col-span-4 md:col-span-2">
                    <DateInput
                      name="resultDate"
                      onChange={(date) => {
                        setResultDate(date);
                        setInputError((prev) => ({ ...prev, resultDate: "" }));
                      }}
                      label={"Result Date"}
                      selected={resultDate}
                      required
                      max={new Date()}
                      min={
                        currentInvestigation?.orderDate
                          ? new Date(currentInvestigation?.orderDate)
                          : null
                      }
                      errMsg={inputError?.resultDate}
                    />
                  </div>
                  {testTypeId == 1 && (
                    <div className="col-span-4 md:col-span-2">
                      {/* Result  */}
                      <Input
                        disabled={testTypeId != 1} //
                        label={"Numeric Result"}
                        name={"resultNumeric"}
                        value={input?.resultNumeric}
                        onChange={handleInputChange}
                        errMsg={inputError?.resultNumeric}
                      />
                    </div>
                  )}
                  {testTypeId == 2 && (
                    <div className="col-span-4 md:col-span-2">
                      {/* Result Options */}
                      <Select
                        disabled={testTypeId != 2} //
                        name="resultOptionId"
                        onChange={handleInputChange}
                        label={"Result Option"}
                        value={input?.resultOptionId}
                        errMsg={inputError?.resultOptionId}
                      >
                        {readerResultOptions}
                      </Select>
                    </div>
                  )}
                  <div className="col-span-4 md:col-span-2">
                    <Select
                      name="isResultNormal"
                      onChange={handleInputChange}
                      value={input?.isResultNormal}
                      label={"Result Status"}
                      required
                      errMsg={inputError?.isResultNormal}
                    >
                      <option value="1">Normal</option>
                      <option value="2">Abnormal</option>
                    </Select>
                  </div>
                  {/* {testTypeId == 1 && ( */}
                  <div className="col-span-4 md:col-span-2">
                    {/* Measuring Unit ID */}
                    <Select
                      disabled={testTypeId != 1} //
                      name="measuringUnitId"
                      label={"Measuring Unit"}
                      onChange={handleInputChange}
                      value={input?.measuringUnitId}
                      errMsg={inputError?.measuringUnitId}
                    >
                      {readerMeasuringUnits}
                    </Select>
                  </div>
                  {/* )} */}
                  <div className="col-span-4">
                    {testTypeId == 3 && (
                      <div className="col-span-6 md:col-span-3">
                        {/* Results / Text type */}
                        <Textarea
                          disabled={testTypeId != 3}
                          name="results"
                          onChange={handleInputChange}
                          label={"Test Result"}
                          value={input?.results}
                          // selected={input?.results}
                          errMsg={inputError?.results}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-span-4">
                    <Textarea
                      name="commentOnResult"
                      onChange={handleInputChange}
                      value={input?.commentOnResult}
                      disabled={input?.isResultNormal != "2"}
                      label={"Comment On Result"}
                      // selected={input?.commentOnResult}
                      errMsg={inputError?.commentOnResult}
                    />
                  </div>
                </div>
                <div className="mb-5 flex justify-end gap-5">
                  <button
                    type="button"
                    onClick={handleCancelResultAddForm}
                    className="transparent_btn py-2 px-8"
                  >
                    Cancel
                  </button>
                  <button
                    // type="submit"
                    onClick={
                      previousData
                        ? handleUpdateResultToCart
                        : handleAddResultToCart
                    }
                    className="transparent_btn py-2 px-8"
                  >
                    {previousData ? "Update Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="md:w-[40%] border w-full text-center border-borderColor px-2 rounded-lg">
            <button
              type="button"
              className="text-center text-lg font-medium mt-4"
            >
              Results Cart
            </button>

            {/* <h3 className="font-semibold text-base inline-flex items-center gap-1">
              <BsCalendar /> Order Date :{" "}
              <span className="font-normal text-grayColor">12-12-2023</span>
            </h3> */}
            {/* <div className="mt-8">
              <InvestigationTable />
            </div> */}
            <div className="max-h-[617px]  overflow-x-auto">
              {Array.isArray(createdResults) &&
                createdResults.map((cart) => {
                  return (
                    <ResultCart
                      cart={cart}
                      editHandler={() =>
                        handleEditFromCart(cart?.investigationId)
                      }
                      deleteHandler={() =>
                        handleDeleteFromCart(cart?.investigationId)
                      }
                    />
                  );
                })}
              {/* <ResultCart /> */}
            </div>
            <div className="my-5 flex justify-end gap-5">
              <button
                type="button"
                onClick={handleClearCartItems}
                className="transparent_btn py-2 px-8"
              >
                Clear Carts
              </button>
              <button
                type="button"
                onClick={handleResultSubmit}
                className="main_btn py-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestigationAddResult;

const ResultCart = ({ cart, editHandler, deleteHandler }) => {
  return (
    <div className="bg-lightBlueColor rounded-lg h-fit p-4 mt-4 mb-5">
      <div className="flex flex-wrap gap-4 text-xs">
        <p>
          <span className="font-semibold">Result Date: </span>
          {DateFunc.formatDate(cart?.resultDate)}
        </p>
        <p>
          <span className="font-semibold">Test Name : </span>
          {cart?.investigation?.testName}
        </p>
        <p>
          <span className="font-semibold">Numeric Result : </span>
          {cart?.resultNumeric}
        </p>
        <p>
          <span className="font-semibold">Measuring Unit :</span>{" "}
          {cart?.measuringUnitId}
        </p>
        <p>
          <span className="font-semibold">Result Descriptive : </span>{" "}
          {cart?.resultDescriptive}
        </p>
        <p>
          <span className="font-semibold">Result : </span> {cart?.results}
        </p>
        <p>
          <span className="font-semibold"> CommentOnResult:</span>{" "}
          {cart?.commentOnResult}
        </p>
        <p>
          <span className="font-semibold"> Result Status :</span>{" "}
          {EnumNormalAbnormal[cart?.isResultNormal]}
        </p>
      </div>
      <div className="flex items-center justify-end text-xs gap-2">
        <button type="button" onClick={deleteHandler} className="text-red-500">
          <BsTrash />
        </button>
        <button
          type="button"
          onClick={editHandler}
          className="text-primaryColor flex"
        >
          <MdOutlineModeEdit />
          Edit
        </button>
      </div>
    </div>
  );
};

type TableProps = {
  children: React.ReactNode;
  className?: string;
  isRounded?: boolean;
};

function Table({ children, className, isRounded }: TableProps) {
  return (
    <div className={`overflow-x-auto ${isRounded ? " rounded-lg" : " "}`}>
      <div className={cn(" w-full ", className)}>{children}</div>
    </div>
  );
}

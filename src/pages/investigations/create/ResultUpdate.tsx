import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import { EnumEncounterType } from "@/enum/encounter-type";
import { RtkStatusEnum } from "@/enum/rtk";
import {
  TypeMergeInvestigations,
  useReadInvestigationQuery,
  useUpdateInvestigationResultMutation,
} from "@/features/investigation/investigation-api";
import {
  useReadMeasuringUnitsQuery,
  useReadResultOptionsQuery,
} from "@/features/investigation/investigation-enum-api";
import useBaseDataEdit from "@/hooks/useBaseDataEdit";
import { OnchangeEventType } from "@/types/htmlEvents";
import { datePickerToString } from "@/utilities/date";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  investigation: TypeMergeInvestigations;
  handleCancelEdit: () => void;
};

function ResultUpdate({ investigation, handleCancelEdit }: Props) {
  const { Investigation } = EnumEncounterType;
  const [baseData] = useBaseDataEdit(Investigation);

  // Rtk
  const { data, isSuccess } = useReadInvestigationQuery(
    investigation?.interactionId,
    {
      skip: !investigation?.interactionId,
      refetchOnMountOrArgChange: true,
    }
  );

  // Previous Result
  const previousData = investigation?.result;
  // Rtk
  const [updateInvestigationResult, { status }] =
    useUpdateInvestigationResultMutation();

  // add investigation inputs fields
  // enums from Rtk //#
  const { data: measuringUnits } = useReadMeasuringUnitsQuery(undefined);
  const { data: resultOptions } = useReadResultOptionsQuery(undefined);

  // // only on development
  // const previousData = investigation?.result;

  const initialState = {
    resultDescriptive: previousData?.resultDescriptive,
    resultNumeric: previousData?.resultNumeric, // int
    commentOnResult: previousData?.commentOnResult,
    isResultNormal: previousData?.isResultNormal, // Result Status
    measuringUnitId: previousData?.measuringUnitId,
    resultOptionId: previousData?.resultOptionId,
    results: previousData?.results,
    // server required value
    investigationId: investigation?.interactionId,
  };

  // // refaren state
  // const investigationId =

  const [input, setInput] = useState(initialState);
  const [inputError, setInputError] = useState(null);
  const [resultDate, setResultDate] = useState(null);
  const handleInputChange = (e: OnchangeEventType) => {
    const { value, name } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  // handle Update result
  const handleUpdateResult = (e) => {
    e.preventDefault();

    if (!resultDate || !input?.isResultNormal) {
      if (!resultDate)
        setInputError((prev) => ({ ...prev, resultDate: "Required" }));
      if (!input.isResultNormal)
        setInputError((prev) => ({ ...prev, isResultNormal: "Required" }));
      return;
    }

    const result_date_convert = datePickerToString(resultDate);
    const editedData = {
      ...baseData,
      // investigation: investigation,
      ...input,
      resultDate: result_date_convert,
      interactionId: investigation?.result?.interactionId,
    };
    updateInvestigationResult({
      key: investigation?.result?.interactionId,
      body: editedData,
    });
  };

  // render measuringUnits
  const readerMeasuringUnits = () => {
    const testId = investigation?.testId;
    return (
      measuringUnits?.length > 0 &&
      measuringUnits
        ?.filter((unit) => unit.testId == testId)
        ?.map((unit) => {
          return (
            <option key={unit.oid} value={unit.oid}>
              {unit?.description}
            </option>
          );
        })
    );
  };
  // render measuringUnits
  const readerResultOptions = () => {
    const testId = investigation?.testId;
    return (
      resultOptions?.length > 0 &&
      resultOptions
        ?.filter((option) => option.testId == testId)
        ?.map((option) => {
          return (
            <option key={option.oid} value={option.oid}>
              {option?.description}
            </option>
          );
        })
    );
  };

  useEffect(() => {
    if (status === RtkStatusEnum.fulfilled) {
      toast.dismiss();
      toast.success("Result Update successfully");
      handleCancelEdit();
    }
    if (status === RtkStatusEnum.rejected) {
      toast.dismiss();
      toast.error("Result Update failed");
    }
  }, [status]);

  console.log(status);

  useEffect(() => {
    if (isSuccess) {
      const prevResult = {
        resultDescriptive: previousData?.resultDescriptive,
        resultNumeric: previousData?.resultNumeric, // int
        commentOnResult: previousData?.commentOnResult,
        isResultNormal: previousData?.isResultNormal, // Result Status
        measuringUnitId: previousData?.measuringUnitId,
        resultOptionId: previousData?.resultOptionId,
        results: previousData?.results,
      };
      setInput((p) => ({ ...p, ...prevResult }));
    }
  }, [isSuccess]);

  useEffect(() => {
    const date = previousData?.resultDate
      ? new Date(previousData?.resultDate)
      : null;
    setResultDate(date);
  }, [previousData]);

  //@ts-ignore
  const testTypeId = data?.test?.testSubtype?.testTypeId;

  return (
    <div className="shadow border pb-4 rounded">
      <Card className="bg-whiteBgColor py-1 shadow-none  border-none text-lg">
        Update
      </Card>
      <form
        onSubmit={handleUpdateResult}
        className="p-6 pb-0 grid grid-cols-1 md:grid-cols-6 gap-6 bg-whiteBgColor"
      >
        <div className="col-span-3 ">
          {/* <div>{JSON.stringify(testTypeId)}</div> */}
          {/* DATE */}
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
              investigation?.orderDate
                ? new Date(investigation?.orderDate)
                : null
            }
            errMsg={inputError?.resultDate}
          />
          {/* 

        selected={orderDate}
        name="orderDate"
        max={new Date()}
        handler={setOrderDate} */}
        </div>
        {testTypeId == 1 && (
          <div className="col-span-3">
            {/* Result  */}
            <Input
              label={"Numeric Result"}
              name={"resultNumeric"}
              value={input?.resultNumeric}
              onChange={handleInputChange}
              errMsg={inputError?.resultNumeric}
            />
          </div>
        )}

        {testTypeId == 2 && (
          <div className="col-span-3">
            {/* Result Options */}
            <Select
              name="resultOptionId"
              onChange={handleInputChange}
              label={"Result Option"}
              value={input?.resultOptionId}
              errMsg={inputError?.resultOptionId}
            >
              {readerResultOptions()}
            </Select>
          </div>
        )}
        <div className="col-span-3">
          {/* Result Status */}
          <Select
            name="isResultNormal"
            onChange={handleInputChange}
            value={input?.isResultNormal}
            label={"Result Status"}
            errMsg={inputError?.isResultNormal}
          >
            <option value="1">Normal</option>
            <option value="2">Abnormal</option>
          </Select>
        </div>

        {testTypeId == 1 && (
          <div className="col-span-3">
            {/* Measuring Unit ID */}
            <Select
              name="measuringUnitId"
              label={"Measuring Unit"}
              onChange={handleInputChange}
              value={input?.measuringUnitId}
              // value={input?.measuringUnitId}
              // selected={input?.measuringUnitId}

              errMsg={inputError?.measuringUnitId}
            >
              {readerMeasuringUnits()}
            </Select>
          </div>
        )}
        <div className="col-span-6 grid grid-cols-1 md:grid-cols-6 gap-6">
          {testTypeId == 3 && (
            <div className="col-span-3">
              {/* Results / Text type */}
              <Textarea
                name="results"
                onChange={handleInputChange}
                label={"Test Result"}
                value={input?.results}
                errMsg={inputError?.results}
              />
            </div>
          )}
          <div className={testTypeId != 3 ? "col-span-6" : "col-span-3"}>
            {/* Comment On Result */}
            <Textarea
              name="commentOnResult"
              onChange={handleInputChange}
              value={input?.commentOnResult}
              disabled={input?.isResultNormal != 2}
              label={"Comment On Result"}
              errMsg={inputError?.commentOnResult}
            />
          </div>{" "}
          <div className="col-span-6 flex justify-center gap-3 mt-8">
            <button
              onClick={handleCancelEdit}
              type="button"
              className="transparent_btn"
            >
              Cancel
            </button>{" "}
            <button type="submit" className="">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResultUpdate;

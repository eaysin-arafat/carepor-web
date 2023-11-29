import CountryCode from "@/components/core/form-elements/CountryCode";
import PhoneNumber from "@/components/core/form-elements/PhoneNumber";

const CellPhoneSearch = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <CountryCode
            label=" "
            resetCellPhone={() => {}}
            className=" border-gray-300 focus:border-gray-300"
          />
        </div>
        <div className="col-span-3">
          <PhoneNumber
            name=""
            label=""
            value=""
            onChange={() => {}}
            countryCode=""
            className=" border-gray-300 focus:border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CellPhoneSearch;

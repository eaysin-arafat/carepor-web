import CountryCode from "@/components/core/form-elements/CountryCode";
import PhoneNumber from "@/components/core/form-elements/PhoneNumber";
import { CellPhoneSearchType } from "@/pages/client-accounts/index/ClientSearch";
import { cn } from "@/utilities/cn";

interface CellPhoneSearchProps {
  handleCellphoneSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cellphoneSearch: CellPhoneSearchType;
}

const CellPhoneSearch = ({
  handleCellphoneSearchChange,
  cellphoneSearch,
}: CellPhoneSearchProps) => {
  return (
    <div className="w-full">
      <div className="custom-input items-center m-0 p-0 mt-[6px] h-[52px] grid grid-cols-6 border-gray-300 focus:border-gray-300">
        <div className="col-span-2">
          <CountryCode
            label=" "
            name="countryCode"
            value={cellphoneSearch?.countryCode}
            resetCellPhone={() => {}}
            onChange={handleCellphoneSearchChange}
            className={cn(
              "border-gray-300 focus:border-gray-300 input_cellphone"
            )}
          />
        </div>
        <div className="col-span-4">
          <PhoneNumber
            name="phoneNumber"
            label=""
            value={cellphoneSearch?.phoneNumber}
            placeholder="Enter Your Cellphone"
            onChange={handleCellphoneSearchChange}
            countryCode=""
            className={cn(
              "border-gray-300 focus:border-gray-300 input_cellphone"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CellPhoneSearch;

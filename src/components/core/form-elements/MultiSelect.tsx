import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export interface Option {
  oid: number;
  description: string;
}

export interface MultipleSelectProps {
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions: (options: Option[]) => void;
}

const MultiSelect = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: MultipleSelectProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((option: Option) =>
    option.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionToggle = (option: Option) => {
    const optionIndex = selectedOptions.findIndex(
      (item) => item.oid === option.oid
    );

    if (optionIndex !== -1) {
      setSelectedOptions([
        ...selectedOptions.slice(0, optionIndex),
        ...selectedOptions.slice(optionIndex + 1),
      ]);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // const handleDropdownToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const closeDropdown = () => {
  //   setIsOpen(false);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       closeDropdown();
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <div
      className="relative inline-block text-left w-full z-10"
      ref={dropdownRef}
    >
      <div className="bg-whiteBgColor rounded-lg p-2">
        <div className="grid gap-2 mb-2">
          <select
            name=""
            id=""
            className="custom-input border border-borderColor "
          >
            <option value="">Please Select</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="custom-input border border-borderColor"
          />
        </div>
        <div className=" grid md:grid-cols-2">
          {filteredOptions.map((option) => (
            <div
              key={option.oid}
              className="px-4 py-2 cursor-pointer hover:bg-lightGrayColor"
              onClick={() => handleOptionToggle(option)}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 mr-2 text-primaryColor border-lightGrayColor focus:ring-primaryColor"
                  checked={selectedOptions.some(
                    (item) => item.oid === option.oid
                  )}
                  onChange={() => {}}
                />
                <span className="text-gray-700">{option.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedOptions.length > 0 && (
        <div className="bg-lightBlueColor border border-borderColor p-4 mt-5 rounded-lg grid xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {selectedOptions.map((option) => (
            <div
              key={option.oid}
              className="bg-lightBlueColor border border-primaryColor rounded-lg py-1 px-2 flex justify-between gap-2 "
            >
              <h2 title={option.description} className="whitespace-nowrap">
                {option.description.length > 17
                  ? option.description.substring(0, 17) + "..."
                  : option.description}
              </h2>
              <button onClick={() => handleOptionToggle(option)}>
                <RxCross2 className="text-dangerColor rounded hover:bg-red-200 text-[20px] p-0.5" />
              </button>
            </div>
          ))}
        </div>
      )}
      {/* <div className="bg-lightBlueColor border border-primaryColor rounded-lg py-1 px-2 mt-5 flex gap-1  w-fit">
        <h2>Hello</h2>
        <button onClick={() => handleOptionToggle(option)}>
          <RxCross2 />
        </button>
      </div> */}
    </div>
  );
};

export default MultiSelect;

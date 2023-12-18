import { useRef, useState } from "react";

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
        <div className=" grid grid-cols-2">
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
        <div className="bg-lightBlueColor border border-borderColor p-2 mt-5 rounded-lg">
          {selectedOptions.map((option) => (
            <div
              key={option.oid}
              className="px-4 py-2 cursor-pointer hover:bg-blue-200 w-fit"
              // onClick={() => handleOptionToggle(option)}
            >
              <div className="flex items-center">
                <input
                  onClick={() => handleOptionToggle(option)}
                  type="checkbox"
                  className="w-5 h-5 mr-2 text-blue-500 border-gray-300 focus:ring-blue-400"
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
      )}
      <div className="bg-lightBlueColor mt-5 ">
        <h2>Hello</h2>
        <button></button>
      </div>
    </div>
  );
};

export default MultiSelect;

import { useEffect, useRef, useState } from "react";

export interface Option {
  oid: number;
  description: string;
}

export interface MultipleSelectProps {
  options: Option[];
  selectedOptions: Option[];
  setSelectedOptions: (options: Option[]) => void;
}

const MultipleSelect = ({
  options,
  selectedOptions,
  setSelectedOptions,
}: MultipleSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left w-full z-10"
      ref={dropdownRef}
    >
      <button
        type="button"
        className="custom-input !w-full"
        onClick={handleDropdownToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Search Client Risk Assessment
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-1 w-full space-y-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-52 overflow-y-auto"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border-b border-gray-200"
          />
          {filteredOptions.map((option) => (
            <div
              key={option.oid}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionToggle(option)}
            >
              <div className="flex items-center">
                <input
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

      {selectedOptions.length > 0 && (
        <div className="bg-lightBlueColor border border-borderColor p-2 mt-5 rounded-lg">
          {selectedOptions.map((option) => (
            <div
              key={option.oid}
              className="px-4 py-2 cursor-pointer hover:bg-blue-200"
              onClick={() => handleOptionToggle(option)}
            >
              <div className="flex items-center">
                <input
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
    </div>
  );
};

export default MultipleSelect;

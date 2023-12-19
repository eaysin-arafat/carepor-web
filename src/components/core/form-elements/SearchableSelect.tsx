import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

interface Option {
  value: number;
  label: string;
}

interface CustomSearchableProps {
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  errMsg?: string;
  label?: string;
  setError?: () => void;
  name?: string;
  selectedValue?: Option | null;
  setSelectedValue?: (data: Option | null) => void;
  options?: Option[];
}

function SearchableSelect({
  errMsg,
  setError,
  required,
  name,
  label,
  selectedValue,
  setSelectedValue,
  options = [],
}: CustomSearchableProps) {
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // if (setError && name) {
    //   setError((prev) => ({ ...prev, [name]: "" }));
    // }
  }, [selectedValue, setError, name]);

  const filterData =
    Array.isArray(options) && options
      ? options.filter((data) =>
          data?.label
            ?.toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        )
      : [];

  const handleSetValue = (data: Option) => {
    if (setSelectedValue) {
      setSelectedValue(data);
    }
    setSearchValue("");
    setShowDropdown(false);
  };

  // const handleResetValue = () => {
  //   setSelectedValue(null);
  //   setSearchValue("");
  //   setShowDropdown(false);
  // };

  const handleDropdownOpen = () => {
    setShowDropdown(true);
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (inputRef && showDropdown) {
      inputRef.current?.focus();
    }
  }, [inputRef, showDropdown]);

  useEffect(() => {
    const outClickHandler = (e: MouseEvent) => {
      if (!searchRef?.current?.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", outClickHandler);

    return () => {
      document.removeEventListener("mousedown", outClickHandler);
    };
  }, [searchRef]);

  useEffect(() => {
    if (setSelectedValue) {
      if (!options?.length) {
        setSelectedValue(null);
      }
    }
  }, [options, setSelectedValue]);

  return (
    <>
      <div className="w-full">
        <div ref={searchRef} className="w-full">
          <div className="flex">
            <div className="input_label mb-2"> {label}</div>
            {required && (
              <span className="-mt-[6px] mx-1 text-dangerColor">*</span>
            )}
          </div>
          <div className={`custom-input px-0 py-1 relative flex`}>
            <div className="w-full">
              <div
                onClick={handleDropdownOpen}
                className={`select-btn ${
                  !showDropdown ? "show" : "hidden"
                } w-full`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      selectedValue?.label
                        ? selectedValue?.label
                        : "text-gray-400"
                    } px-[15px] py-[10px] w-full`}
                  >
                    {selectedValue?.label ? selectedValue?.label : "Search"}
                  </span>
                  <span className="px-[15px] py-[10px]">
                    {" "}
                    <ChevronDown width={30} />{" "}
                  </span>
                </div>
              </div>

              <div className={`content ${showDropdown ? "show" : "hidden"}`}>
                <div className="search">
                  <i className="uil uil-search"></i>
                  <input
                    value={searchValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setSearchValue(e.target.value)
                    }
                    spellCheck={false}
                    type="text"
                    placeholder="Search"
                    ref={inputRef}
                    className="custom-input border-none"
                  />
                </div>
                <div className="relative ">
                  <div className="absolute z-[9999] bg-white w-full border px-[1px] mx-[-1px]">
                    <div className="max-h-[250px] overflow-y-scroll">
                      <ul className="">
                        {/* {
                          <li
                            onClick={handleResetValue}
                            className="options border-t cursor-pointer text-black hover:bg-blue-500 hover:text-white px-[15px] py-[8px] "
                          >
                            {Array.isArray(options) && options.length === 0
                              ? "No options"
                              : filterData.length === 0
                              ? "No match found"
                              : "--Select--"}
                          </li>
                        } */}

                        {filterData.map((data) => {
                          return (
                            <li
                              key={data.value}
                              onClick={() => handleSetValue(data)}
                              className="options border-t cursor-pointer text-black hover:bg-blue-500 hover:text-white px-[15px] py-[8px] "
                            >
                              {data?.label}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {errMsg && (
            <p className="text-sm mt-1" style={{ color: "red" }}>
              {errMsg}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchableSelect;

// const options = [
//   {
//     value: 1,
//     label: "Afghanistan",
//   },
//   {
//     value: 2,
//     label: "Algeria",
//   },
//   {
//     value: 3,
//     label: "Argentina",
//   },
//   {
//     value: 4,
//     label: "Australia",
//   },
//   {
//     value: 5,
//     label: "Bangladesh",
//   },
//   {
//     value: 6,
//     label: "Belgium",
//   },
//   {
//     value: 7,
//     label: "Bhutan",
//   },
//   {
//     value: 8,
//     label: "Brazil",
//   },
//   {
//     value: 9,
//     label: "Canada",
//   },
//   {
//     value: 10,
//     label: "China",
//   },
//   {
//     value: 11,
//     label: "Denmark",
//   },
//   {
//     value: 12,
//     label: "Ethiopia",
//   },
// ];

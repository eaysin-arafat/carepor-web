import { useEffect, useRef, useState } from "react";
import { BiCross } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import inputCss from "./input.module.css";
import { BsCrosshair2 } from "react-icons/bs";
import { FaCircleXmark } from "react-icons/fa6";

export type SearchableInputType = {
  value: string | number;
  label: string;
};

type Props = {
  placeholder?: string;
  disabled?: boolean;
  errMsg?: string | number;
  setError?: React.Dispatch<React.SetStateAction<object>>;
  name?: string;
  className?: string;
  selectedValue: SearchableInputType;
  setSelectedValue: React.Dispatch<React.SetStateAction<SearchableInputType>>;
  options: SearchableInputType[];
};

function CustomSearchable({
  placeholder = "Placeholder",
  // disabled,
  errMsg,
  setError,
  name,
  selectedValue,
  setSelectedValue,
  options = [],
}: Props) {
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (setError && name) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  }, [selectedValue]);

  const filterData =
    Array.isArray(options) && options
      ? options.filter((data) =>
          data?.label
            ?.toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        )
      : [];

  const handleSetValue = (data: SearchableInputType) => {
    if (setSelectedValue) {
      setSelectedValue(data);
    }
    setSearchValue("");
    setShowDropdown(false);
  };

  const handleResetValue = () => {
    setSelectedValue(null);
    setSearchValue("");
    setShowDropdown(false);
  };
  const handleDropdownOpen = () => {
    setShowDropdown(true);
    inputRef.current.focus();
  };

  const handleClear = () => {
    setSelectedValue(null);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (inputRef && showDropdown) {
      inputRef.current.focus();
    }
  }, [showDropdown]);

  useEffect(() => {
    let outClickHandler = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", outClickHandler);

    return () => {
      document.removeEventListener("mousedown", outClickHandler);
    };
  });

  useEffect(() => {
    if (setSelectedValue) {
      if (!options?.length) {
        setSelectedValue(null);
      }
    }
  }, [options, setSelectedValue]);

  return (
    <>
      <div>
        <div className="input_label mb-[6px]">{placeholder}</div>{" "}
        <div ref={searchRef} className="w-full">
          <div
            style={{ borderColor: "var(--border)" }}
            className={inputCss.new_input_wrapper}
          >
            <div className="w-full">
              <div
                onClick={handleDropdownOpen}
                className={`select-btn ${
                  !showDropdown ? "show" : "hidden"
                } w-full`}
              >
                <div className="flex  justify-between items-center">
                  <span
                    className={`${
                      selectedValue?.label
                        ? selectedValue?.label
                        : "text-gray-400"
                    } px-[15px] py-[12px] w-full`}
                  >
                    {selectedValue?.label ? selectedValue?.label : "Search"}
                  </span>
                  {!selectedValue?.label && (
                    <span className="px-[15px] py-[10px]">
                      {" "}
                      <FiSearch width={30} />{" "}
                    </span>
                  )}
                  {selectedValue?.label && (
                    <span onClick={handleClear} className="px-[15px] py-[10px]">
                      {" "}
                      <FaCircleXmark width={30} />{" "}
                    </span>
                  )}
                </div>
              </div>

              {/* with ul li */}
              <div className={`content ${showDropdown ? "show" : "hidden"}`}>
                <div className="search ">
                  <i className="uil uil-search"></i>
                  <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    spellCheck="false"
                    type="text"
                    placeholder="Search"
                    ref={inputRef}
                  />
                </div>
                <div className="relative ">
                  <div className="absolute z-[9999] bg-[var(--white)] w-full border px-[1px] mx-[-1px]">
                    <div className="max-h-[250px] overflow-y-scroll">
                      <ul className="">
                        {
                          <li
                            onClick={handleResetValue}
                            className="options border-t cursor-pointer text-black hover:bg-blue-500 hover:text-white px-[15px] py-[8px] "
                          >
                            {Array.isArray(options) && options.length == 0
                              ? "No options"
                              : filterData.length == 0
                              ? "No match found"
                              : "--Select--"}
                          </li>
                        }

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

export default CustomSearchable;

// data model
// const options = [
//   {
//     value: 1,
//     label: "Afghanistan",
//   },

// ];

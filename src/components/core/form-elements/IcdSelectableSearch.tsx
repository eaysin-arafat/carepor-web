import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Loader } from "react-feather";
import { FiSearch } from "react-icons/fi";

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
  hasMore?: boolean;
  fetchMoreData?: () => void;
  handleSearchChange?: (value: string) => void;
}

const IcdSelectableSearch = ({
  errMsg,
  required,
  label,
  selectedValue,
  setSelectedValue,
  options = [],
  hasMore,
  fetchMoreData,
  handleSearchChange,
}: CustomSearchableProps) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const spinnerRef = useRef<HTMLLIElement>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleSetValue = (data: Option) => {
    if (setSelectedValue) {
      setSelectedValue(data);
    }
    // setSearchValue("");
    setShowDropdown(false);
  };

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

  // useEffect(() => {
  //   if (setSelectedValue) {
  //     if (!options?.length) {
  //       setSelectedValue(null);
  //     }
  //   }
  // }, [options, setSelectedValue]);

  useEffect(() => {
    if (spinnerRef && spinnerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsIntersecting(entry.isIntersecting);
        }
        // { threshold: 1 }
      );
      observer.observe(spinnerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [spinnerRef]);

  useEffect(() => {
    if (isIntersecting && hasMore) {
      fetchMoreData && fetchMoreData();
    }
  }, [isIntersecting, hasMore, fetchMoreData]);

  return (
    <>
      <div>
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
                    <FiSearch width={30} />{" "}
                  </span>
                </div>
              </div>

              <div className={`content ${showDropdown ? "show" : "hidden"}`}>
                <div className="search">
                  <i className="uil uil-search"></i>
                  <input
                    // value={searchValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleSearchChange(e.target.value)
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
                    <div
                      id="scroll_div"
                      className="max-h-[250px] overflow-y-scroll"
                      // style={{ height: 200 }}
                    >
                      <ul>
                        {options?.map((data) => {
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

                        {hasMore && (
                          <li
                            className="flex justify-center items-center"
                            ref={spinnerRef}
                          >
                            <Loader size={10} className="animate-spin" />
                          </li>
                        )}
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
};

export default IcdSelectableSearch;

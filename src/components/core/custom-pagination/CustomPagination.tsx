import { OnchangeEventType } from "@/types/htmlEvents";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPagination from "react-js-pagination";
import Select from "../form-elements/Select";

type Props = {
  activePage: number;
  showInPage?: number[];
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  itemsCountPerPage?: number;
  totalItemsCount: number;
  setItemPerPage: React.Dispatch<React.SetStateAction<number>>;
};

/**
 *
 * @param activePage Number
 * @param setActivePage Function
 * @param setItemPerPage Function
 * @param totalItemCount Number
 * @param itemsCountPerPage Number
 * @param totalItemsCount Function
 * @returns
 */

function CustomPagination({
  activePage = 1,
  setActivePage = () => {},
  itemsCountPerPage = 5,
  totalItemsCount = 10,
  setItemPerPage = () => {},
  showInPage = [10, 20, 50],
}: Props) {
  const handlePageChange = (pageNo: number) => {
    setActivePage(pageNo);
  };

  return (
    <div className=" flex flex-col sm:flex-row mt-5 items-end gap-3 ">
      <div className="flex items-center gap-2">
        <span className="text-[14px] p-1 ">Show </span>
        <Select
          isHideSelect
          value={itemsCountPerPage}
          className="p-1 -mt-[5px] py-[2px] border col-span-1 text-[14px] text-center w-20"
          label=""
          onChange={(e: OnchangeEventType) => setItemPerPage(+e.target.value)}
        >
          {/* {showInPage.map((key) => (
            <option  key={key} value={key}>
              {key}
            </option>
          ))} */}
          {showInPage.map((key) => {
            if (totalItemsCount > key) {
              return (
                <option key={key} value={key}>
                  {key}
                </option>
              );
            }
          })}
        </Select>
      </div>

      <ReactPagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
        innerClass={"flex gap-1 select-none "}
        activeClass={"!bg-primaryColor text-[var(--white)]"}
        itemClass={
          "bg-[var(--gray)] cursor-pointer border w-[30px] h-[30px] text-[14px] text-center rounded flex justify-center items-center"
        }
        firstPageText={<BiLeftArrowAlt />}
        lastPageText={<BiRightArrowAlt />}
        prevPageText={<IoIosArrowBack />}
        nextPageText={<IoIosArrowForward />}
        getPageUrl={() => false}
      />
    </div>
  );
}

export default CustomPagination;

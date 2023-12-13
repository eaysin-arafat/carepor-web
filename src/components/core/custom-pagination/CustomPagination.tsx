import { OnchangeEventType } from "@/types/htmlEvents";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPagination from "react-js-pagination";
import Select from "../form-elements/Select";

type Props = {
  activePage: number;

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
}: Props) {
  const handlePageChange = (pageNo: number) => {
    // console.log(getPageNo);
    setActivePage(pageNo);
  };

  const showInPage = [10, 20, 50, 100];

  return (
    <div className="flex mt-5 items-center gap-3 ">
      <div className="flex items-center gap-2">
        <span className="text-[14px] p-1 ">Show </span>
        <Select
          isHideSelect
          value={itemsCountPerPage}
          className="p-1  col-span-1 text-[14px] text-center w-20"
          label=""
          onChange={(e: OnchangeEventType) => setItemPerPage(+e.target.value)}
        >
          {showInPage.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
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

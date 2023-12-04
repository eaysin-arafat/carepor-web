import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPagination from "react-js-pagination";

type Props = {
  activePage: number;
  setActivePage: (page: number) => void;
  itemsCountPerPage: number;
  totalItemsCount: number;
};

/**
 *
 * @param activePage Number
 * @param setActivePage Function
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
}: Props) {
  const handlePageChange = (getPageNo: number) => {
    // console.log(getPageNo);
    setActivePage(getPageNo);
  };
  return (
    <div className="flex mt-5">
      <ReactPagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        // hideDisabled={true}
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

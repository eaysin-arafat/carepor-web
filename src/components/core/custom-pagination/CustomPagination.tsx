import ReactPaginate from "react-paginate";

type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  limit: number;
  totalItemCount: number;
};

/**
 *
 * @param currentPage Number
 * @param page Number
 * @param totalItemCount Number
 * @param limit Number
 * @param setCurrentPage Function
 * @returns
 */

function CustomPagination({
  currentPage,
  setCurrentPage,
  limit,
  totalItemCount,
}: Props) {
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };
  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={Math.ceil(totalItemCount / limit) || 1}
      breakLabel="..."
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center justify-content-md-end pe-1  mt-1 pagination-without-padding mt-0 mb-1"
    />
  );
}

export default CustomPagination;

import Pagination from "src/components/molecules/Pagination";
import PaginationItemsPerPage from "src/components/molecules/PaginationItemsPerPage";
import PaginationTotalResults from "src/components/molecules/PaginationTotalResults";

type TablePaginationProps = {
  total: number;
  limit: number;
  page: number;
  setCurrentPage: (page: number) => void;
  setCurrentLimit: (limit: number) => void;
};

const TablePagination = (props: TablePaginationProps) => {
  const { total, limit, page, setCurrentPage, setCurrentLimit } = props;

  return (
    <div className="p-6 flex justify-between items-center">
      <PaginationTotalResults limit={limit} total={total} />
      <Pagination
        total={total}
        limit={limit}
        page={page}
        setCurrentPage={setCurrentPage}
      />
      <PaginationItemsPerPage
        setCurrentLimit={setCurrentLimit}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TablePagination;

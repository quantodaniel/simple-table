type PaginationItemsPerPageProps = {
  setCurrentLimit: (limit: number) => void;
  setCurrentPage: (page: number) => void;
};

const PaginationItemsPerPage = (props: PaginationItemsPerPageProps) => {
  const { setCurrentLimit, setCurrentPage } = props;

  return (
    <div className="text-sm flex gap-4 items-center">
      Items per page
      <select
        onChange={(e) => {
          setCurrentPage(0);
          setCurrentLimit(parseInt(e.target.value));
        }}
        className="border border-slate-6 h-9 px-2 rounded-md"
      >
        <option>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  );
};

export default PaginationItemsPerPage;

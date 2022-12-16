type PaginationTotalResultsProps = {
  limit: number;
  total: number;
};

const PaginationTotalResults = (props: PaginationTotalResultsProps) => {
  const { limit, total } = props;

  return (
    <div className="text-slate-6 text-sm">
      Showing {limit} of {total} results
    </div>
  );
};

export default PaginationTotalResults;

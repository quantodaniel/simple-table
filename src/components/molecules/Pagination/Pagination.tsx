import ButtonIcon from "src/components/atoms/ButtonIcon";

type PaginationProps = {
  total: number;
  limit: number;
  page: number;
  setCurrentPage: (page: number) => void;
};

const Pagination = (props: PaginationProps) => {
  const { total, limit, setCurrentPage, page } = props;

  const totalPages = Math.ceil(total / limit);
  const pages = Array.from(Array(totalPages).keys());

  return (
    <div className="flex gap-2 items-center">
      {pages.map((index) => {
        const pageNumber = index + 1;

        return (
          <ButtonIcon
            key={`pagination-${pageNumber}`}
            onClick={() => {
              setCurrentPage(index);
            }}
            active
            variant={index === page ? "primary" : "secondary"}
          >
            <span className="w-3 h-9 flex items-center justify-center">
              {pageNumber}
            </span>
          </ButtonIcon>
        );
      })}
    </div>
  );
};

export default Pagination;

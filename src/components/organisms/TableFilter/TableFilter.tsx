import TableInputFilter from "src/components/molecules/TableInputFilter";

const TableFilter = ({ children }) => {
  return (
    <div className="p-4 border-b border-slate-200 flex gap-4 justify-between">
      <TableInputFilter />
      {children}
    </div>
  );
};

export default TableFilter;

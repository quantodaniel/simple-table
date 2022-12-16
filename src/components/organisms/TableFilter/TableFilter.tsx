import { MdAddCircle } from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";
import TableInputFilter from "src/components/molecules/TableInputFilter";

const TableFilter = () => {
  return (
    <div className="p-4 border-b border-slate-200 flex gap-4 justify-between">
      <TableInputFilter />
      <ButtonIcon variant="primary" startIcon={<MdAddCircle />}>
        Add customer
      </ButtonIcon>
    </div>
  );
};

export default TableFilter;

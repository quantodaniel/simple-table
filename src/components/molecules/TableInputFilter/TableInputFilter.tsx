import { MdSearch, MdTune } from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";

const TableInputFilter = () => {
  return (
    <div className="flex gap-4">
      <div className="relative flex items-center">
        <MdSearch className="h-4 w-4 text-slate-400 absolute ml-3" />
        <input
          className="border border-slate-400 rounded-md h-9 text-sm pl-9 pr-2"
          placeholder="Search..."
        />
      </div>

      <ButtonIcon variant="secondary">
        More filters <MdTune />
      </ButtonIcon>
    </div>
  );
};

export default TableInputFilter;

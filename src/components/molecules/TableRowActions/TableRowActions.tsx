import { MdOutlineMoreHoriz } from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";

type TableRowActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

const TableRowActions = (props: TableRowActionsProps) => {
  return (
    <ButtonIcon variant="secondary">
      <span className="h-9 flex items-center justify-center">
        <MdOutlineMoreHoriz />
      </span>
    </ButtonIcon>
  );
};

export default TableRowActions;

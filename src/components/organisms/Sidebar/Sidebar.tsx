import { useState } from "react";
import {
  MdMenuOpen,
  MdOutlineHome,
  MdOutlineReceipt,
  MdOutlineSell,
  MdOutlineStackedLineChart,
  MdPersonOutline,
} from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const className = open ? "w-[200px]" : "w-[72px] items-start";
  const classNameLabel = open ? "flex w-full" : "hidden";

  return (
    <aside
      className={`bg-white border-r border-slate-200 py-6 flex flex-col justify-between gap-6 h-[calc(100vh-79px)] sticky top-[79px] px-4 ${className}`}
    >
      <div className="flex flex-col gap-6">
        <ButtonIcon startIcon={<MdOutlineHome />} variant="icon">
          <span className={`flex text-start font-normal ${classNameLabel}`}>
            Dashboard
          </span>
        </ButtonIcon>
        <ButtonIcon startIcon={<MdOutlineStackedLineChart />} variant="icon">
          <span className={`flex text-start font-normal ${classNameLabel}`}>
            Real Time
          </span>
        </ButtonIcon>
        <ButtonIcon startIcon={<MdOutlineReceipt />} variant="icon">
          <span className={`flex text-start font-normal ${classNameLabel}`}>
            Receipts
          </span>
        </ButtonIcon>
        <ButtonIcon startIcon={<MdOutlineSell />} variant="icon">
          <span className={`flex text-start font-normal ${classNameLabel}`}>
            Sales
          </span>
        </ButtonIcon>
        <ButtonIcon startIcon={<MdPersonOutline />} variant="icon" active>
          <span className={`flex text-start font-normal ${classNameLabel}`}>
            Profile
          </span>
        </ButtonIcon>
      </div>

      <ButtonIcon
        startIcon={<MdMenuOpen />}
        variant="icon"
        onClick={() => {
          setOpen(!open);
        }}
      />
    </aside>
  );
};

export default Sidebar;

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
  return (
    <aside className="bg-white border-r border-slate-200 py-6 flex flex-col items-center justify-between gap-6 w-[72px] h-[calc(100vh-79px)] sticky top-[79px]">
      <div className="flex flex-col gap-6">
        <ButtonIcon startIcon={<MdOutlineHome />} variant="icon" />
        <ButtonIcon startIcon={<MdOutlineStackedLineChart />} variant="icon" />
        <ButtonIcon startIcon={<MdOutlineReceipt />} variant="icon" />
        <ButtonIcon startIcon={<MdOutlineSell />} variant="icon" />
        <ButtonIcon startIcon={<MdPersonOutline />} variant="icon" active />
      </div>

      <ButtonIcon startIcon={<MdMenuOpen />} variant="icon" />
    </aside>
  );
};

export default Sidebar;

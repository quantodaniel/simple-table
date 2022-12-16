import {
  MdMenuOpen,
  MdOutlineHome,
  MdOutlineReceipt,
  MdOutlineSell,
  MdOutlineStackedLineChart,
  MdPersonOutline,
} from "react-icons/md";
import SidebarLink from "src/components/molecules/SidebarLink";

const Sidebar = () => {
  return (
    <aside className="bg-white border-r border-slate-200 p-6 flex flex-col justify-between gap-6">
      <div className="flex flex-col gap-6">
        <SidebarLink href="#">
          <MdOutlineHome />
        </SidebarLink>

        <SidebarLink href="#">
          <MdOutlineStackedLineChart />
        </SidebarLink>

        <SidebarLink href="#">
          <MdOutlineReceipt />
        </SidebarLink>

        <SidebarLink href="#">
          <MdOutlineSell />
        </SidebarLink>

        <SidebarLink href="#" active>
          <MdPersonOutline />
        </SidebarLink>
      </div>

      <SidebarLink href="#">
        <MdMenuOpen />
      </SidebarLink>
    </aside>
  );
};

export default Sidebar;

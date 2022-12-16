import { MdHelpOutline, MdOutlineSettings } from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";
import Divider from "src/components/atoms/Divider";
import Logo from "src/components/atoms/Logo/Logo";
import NavbarAppMenu from "src/components/molecules/NavbarAppMenu";
import NavbarNotification from "src/components/molecules/NavbarNotification";
import NavbarUserMenu from "src/components/molecules/NavbarUserMenu";

const Navbar = () => {
  return (
    <nav className="bg-white p-6 flex justify-between items-center border-b border-slate-200 sticky top-0 z-50">
      <Logo />
      <div className="flex justify-between items-center gap-4">
        <NavbarNotification />

        <Divider />

        <NavbarUserMenu />

        <Divider />

        <ButtonIcon startIcon={<MdHelpOutline />} />

        <Divider />

        <ButtonIcon startIcon={<MdOutlineSettings />} />

        <Divider />

        <NavbarAppMenu />
      </div>
    </nav>
  );
};

export default Navbar;

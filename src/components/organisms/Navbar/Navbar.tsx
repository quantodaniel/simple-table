import { MdHelpOutline, MdOutlineSettings } from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";
import Divider from "src/components/atoms/Divider";
import Logo from "src/components/atoms/Logo/Logo";
import NavbarAppMenu from "src/components/molecules/NavbarAppMenu";
import NavbarNotification from "src/components/molecules/NavbarNotification";
import NavbarUserMenu from "src/components/molecules/NavbarUserMenu";

const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-sm p-6 flex justify-between items-center">
      <Logo />
      <div className="flex justify-between items-center gap-4">
        <NavbarNotification />

        <Divider />

        <NavbarUserMenu />

        <Divider />

        <ButtonIcon>
          <MdHelpOutline />
        </ButtonIcon>

        <Divider />

        <ButtonIcon>
          <MdOutlineSettings />
        </ButtonIcon>

        <Divider />

        <NavbarAppMenu />
      </div>
    </nav>
  );
};

export default Navbar;

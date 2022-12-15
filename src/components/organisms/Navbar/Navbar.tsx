import Link from "next/link";
import { MdHelpOutline, MdOutlineSettings } from "react-icons/md";
import Divider from "src/components/atoms/Divider";
import Logo from "src/components/atoms/Logo/Logo";
import NavbarAppMenu from "src/components/molecules/NavbarAppMenu";
import NavbarNotification from "src/components/molecules/NavbarNotification";
import NavbarUserMenu from "src/components/molecules/NavbarUserMenu";

const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-sm p-4 flex justify-between items-center">
      <Logo />
      <div className="flex justify-between items-center gap-4">
        <NavbarNotification />

        <Divider />

        <NavbarUserMenu />

        <Divider />

        <Link href="/">
          <MdHelpOutline className="h-5 w-5 text-slate-500" />
        </Link>

        <Divider />

        <Link href="/">
          <MdOutlineSettings className="h-5 w-5 text-slate-500" />
        </Link>

        <Divider />

        <NavbarAppMenu />
      </div>
    </nav>
  );
};

export default Navbar;

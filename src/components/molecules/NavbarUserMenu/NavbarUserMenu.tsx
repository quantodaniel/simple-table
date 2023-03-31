import { MdKeyboardArrowDown } from "react-icons/md";

const NavbarUserMenu = () => {
  return (
    <button className="flex gap-2 items-center">
      my@email.com
      <MdKeyboardArrowDown />
    </button>
  );
};

export default NavbarUserMenu;

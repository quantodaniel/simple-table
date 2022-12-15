import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "src/components/atoms/Button";

const NavbarUserMenu = () => {
  return (
    <Button>
      zuza@materimperium.com
      <MdKeyboardArrowDown className="text-slate-500" />
    </Button>
  );
};

export default NavbarUserMenu;

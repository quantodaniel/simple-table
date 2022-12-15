import { MdOutlineNotifications } from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";

const NavbarNotification = () => {
  return (
    <ButtonIcon hasNotification>
      <MdOutlineNotifications className="h-5 w-5 text-slate-500" />
    </ButtonIcon>
  );
};

export default NavbarNotification;

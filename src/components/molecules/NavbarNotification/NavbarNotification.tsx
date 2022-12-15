import { MdOutlineNotifications } from "react-icons/md";
import ButtonIcon from "src/components/atoms/ButtonIcon";

const NavbarNotification = () => {
  return (
    <ButtonIcon hasNotification>
      <MdOutlineNotifications />
    </ButtonIcon>
  );
};

export default NavbarNotification;

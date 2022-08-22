import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";
import SignUpModal from "./SingUpModal";

const MyAccount: FC = () => {
  return (
    <Menu>
      <MenuButton>My Account</MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem>Log In</MenuItem>
          <MenuItem>{<SignUpModal />}</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default MyAccount;

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Flex>
      <span>OR 1 783,85 € 0,14%</span>
      <span>ARGENT 21,33 € 0,19%</span>
      <span>CONTACT</span>
      <Menu>
        <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
          LANGUES (FRA)
        </MenuButton>
        <MenuList>
          <MenuItem>FRA</MenuItem>
          <MenuItem>ENG</MenuItem>
          <MenuItem>CHF</MenuItem>
          <MenuItem>JP</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
          DEVISES (EUR)
        </MenuButton>
        <MenuList>
          <MenuItem>EUR</MenuItem>
          <MenuItem>USD</MenuItem>
          <MenuItem>CHF</MenuItem>
          <MenuItem>JPY</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;

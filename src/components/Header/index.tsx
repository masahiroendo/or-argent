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
import SpotPrice from "./SpotPrice";

const Header: FC = () => {
  return (
    <Flex>
      <SpotPrice asset={"OR"} price={1783.85} symbol={"€"} openPrice={1780} />
      <SpotPrice asset={"ARGENT"} price={21.25} symbol={"€"} openPrice={22} />
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

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { FC } from "react";
import MyAccount from "./MyAccount";
import SpotPrice from "./SpotPrice";

const Header: FC = () => {
  return (
    <Flex bg="red.100">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        marginStart={{ base: "10px", md: "75px" }}
      >
        <SpotPrice asset={"OR"} price={1783.85} symbol={"€"} openPrice={1780} />
        <SpotPrice asset={"ARGENT"} price={21.25} symbol={"€"} openPrice={22} />
      </Box>
      <Spacer />
      <Box marginEnd={{ base: "10px", md: "75px" }}>
        <MyAccount />
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
          >
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
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
          >
            DEVISES (EUR)
          </MenuButton>
          <MenuList>
            <MenuItem>EUR</MenuItem>
            <MenuItem>USD</MenuItem>
            <MenuItem>CHF</MenuItem>
            <MenuItem>JPY</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;

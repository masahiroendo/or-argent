import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { FC } from "react";

const LanguageSelect: FC = () => {
  const small = useBreakpointValue({ base: true, md: false })
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
      >
        {small ? "FRA" : "LANGUE (FRA)"}
      </MenuButton>
      <MenuList>
        <MenuItem>FRA</MenuItem>
        <MenuItem>ENG</MenuItem>
        <MenuItem>CHF</MenuItem>
        <MenuItem>JP</MenuItem>
      </MenuList>
    </Menu >
  )
}

export default LanguageSelect
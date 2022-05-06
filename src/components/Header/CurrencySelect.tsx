import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue } from "@chakra-ui/react"
import { FC } from "react"

const CurrencySelect: FC = () => {
  const small = useBreakpointValue({ base: true, md: false })
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        rightIcon={<ChevronDownIcon />}
      >
        {small ? "EUR" : "DEVISES (EUR)"}
      </MenuButton>
      <MenuList>
        <MenuItem>EUR</MenuItem>
        <MenuItem>USD</MenuItem>
        <MenuItem>CHF</MenuItem>
        <MenuItem>JPY</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default CurrencySelect
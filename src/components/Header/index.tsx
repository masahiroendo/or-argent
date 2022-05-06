import {
  Box,
  Flex,
  Show,
  Spacer,
} from "@chakra-ui/react";
import { FC } from "react";
import CurrencySelect from "./CurrencySelect";
import LanguageSelect from "./LanguageSelect";
import SpotPrice from "./SpotPrice";

const Header: FC = () => {
  return (
    <Flex bg="grey" paddingX={{ base: '10px', md: '25px', lg: '75px' }}>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
      >
        <SpotPrice asset={"OR"} price={1783.85} symbol={"€"} openPrice={1780} />
        <SpotPrice asset={"ARGENT"} price={21.25} symbol={"€"} openPrice={22} />
      </Box>
      <Spacer />
      <Box >
        <Show above="md">
          Contact
        </Show>
        <LanguageSelect />
        <CurrencySelect />
      </Box>
    </Flex>
  );
};

export default Header;

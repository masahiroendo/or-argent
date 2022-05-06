import { Box } from "@chakra-ui/react";
import { FC } from "react";

type Props = {}

const Footer: FC<Props> = () => {
  return (
    <footer><Box bg="orange.200" p={4}>Pied de nez</Box></footer>
  )
}

export default Footer
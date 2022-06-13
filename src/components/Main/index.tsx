import { FC } from 'react';
import { Center } from '@chakra-ui/react';

type Props = {};

const Main: FC<Props> = () => {
  return (
    <Center h="100vh" bg="blue.100">
      Centered Corpus
    </Center>
  );
};

export default Main;

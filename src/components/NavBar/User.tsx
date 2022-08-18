import { FC, RefObject, useRef } from 'react';
import { Avatar, Collapse, Container, HStack, Portal, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { FiUser } from 'react-icons/fi';

import useAuth from '../../hooks/use-auth';
import SignInForm from './SignInForm';

type UserProps = {
  parentRef: RefObject<HTMLDivElement>;
};

const User: FC<UserProps> = ({ parentRef }) => {
  const { me, signedIn } = useAuth();
  // const ref = useRef<HTMLDivElement>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useOutsideClick({
    ref: parentRef,
    handler: () => {
      onClose();
    },
  });

  if (signedIn) {
    return <Avatar size="sm" name={me.email} />;
  }

  return (
    <>
      <HStack
        cursor="pointer"
        onClick={() => {
          console.log('HStack clicked!');
          isOpen ? onClose() : onOpen();
        }}
        spacing={0}>
        <FiUser size={24} />
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </HStack>
      <Portal containerRef={parentRef}>
        <Collapse in={isOpen} animateOpacity>
          <Container maxW={'480px'}>
            <SignInForm onCloseForm={onClose} />
          </Container>
        </Collapse>
      </Portal>
    </>
  );
};

export default User;

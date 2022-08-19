import { FC, RefObject, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Avatar,
  Button,
  Center,
  CircularProgress,
  Collapse,
  Container,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Spacer,
  Text,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ImSwitch } from 'react-icons/im';
import { FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import useAuth from '../../hooks/use-auth';
import SignInForm from './SignInForm';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/constant';

type UserProps = {
  parentRef: RefObject<HTMLDivElement>;
};

const User: FC<UserProps> = ({ parentRef }) => {
  const { me, signedIn, signOut, processing } = useAuth();
  const pifoRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['translation', 'navbar']);

  const { isOpen, onClose, onOpen } = useDisclosure();

  useOutsideClick({
    ref: parentRef,
    handler: () => {
      onClose();
    },
  });

  const handleSignOut = () => {
    signOut();
  };

  if (signedIn) {
    return (
      <>
        <Menu>
          <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
            <Avatar size="sm" name={me?.email} onClick={signOut} />
          </MenuButton>
          <MenuList>
            <MenuItem as={NavLink} to={ROUTES.PROFILE}>
              Profile
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleSignOut} pr={5}>
              <Text>{t('user.logout', { ns: 'navbar' })}</Text>
              <Spacer />
              <ImSwitch fontSize={21} />
            </MenuItem>
          </MenuList>
        </Menu>
        <AlertDialog isOpen={processing} leastDestructiveRef={pifoRef} onClose={() => {}} isCentered>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogBody>
                <Center py={4} flexDirection="column" gap={4}>
                  <CircularProgress isIndeterminate color="gold.700" />
                  <Text>{`${t('signing-out')}, ${t('please-wait').toLowerCase()}...`}</Text>
                </Center>
              </AlertDialogBody>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  }

  return (
    <>
      <HStack
        cursor="pointer"
        onClick={() => {
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

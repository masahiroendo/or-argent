import { FC, useRef } from 'react';
import {
  Box,
  Collapse,
  Container,
  Hide,
  IconButton,
  Show,
  Stack,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

import NavigationItems from './NavigationItems';
import User from './User';
import GoldLingotIcon from '../icons/GoldLingotIcon';
import { ROUTES } from '../../router/constant';
import Cart from './Cart';

const NavBar: FC = () => {
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: burgerMenuRef,
    handler: () => {
      onClose();
    },
  });
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <header>
      <nav>
        <Container
          display="flex"
          justifyContent={{ md: 'center' }}
          alignItems="center"
          maxW="container.2xl"
          py={2}
          gap={5}>
          <NavLink to={ROUTES.HOME}>
            <GoldLingotIcon w={10} h={10} />
          </NavLink>
          <Show above="md">
            <Box fontSize={{ md: '14px', lg: '16px', xl: '20px' }}>
              <NavigationItems />
            </Box>
          </Show>
          <Stack flex={{ base: 1, md: 0 }} alignItems="center" justify={'flex-end'} direction={'row'} spacing={6}>
            <User parentRef={containerRef} />
            <Cart parentRef={containerRef} />
            <IconButton
              onClick={onToggle}
              display={{ base: 'flex', md: 'none' }}
              icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Stack>
        </Container>
        <Hide above="md">
          <Collapse in={isOpen} animateOpacity ref={burgerMenuRef}>
            <NavigationItems />
          </Collapse>
        </Hide>
        <Box ref={containerRef} />
      </nav>
    </header>
  );
};

export default NavBar;

import { FC, useRef } from 'react';
import {
  Box,
  Collapse,
  Container,
  Hide,
  IconButton,
  Image,
  Show,
  Stack,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import { CgShoppingCart } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

import NavigationItems from './NavigationItems';
import SimpleLink from './SimpleLink';
import { ROUTES } from '../../router/constant';
import User from './User';

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
        <Container display="flex" justifyContent={{ md: 'center' }} alignItems="center" maxW="container.2xl" gap={5}>
          <NavLink to={ROUTES.HOME}>
            <Image boxSize="70px" objectFit="cover" src="/assets/images/logo-shape.png" alt="or argent logo" />
          </NavLink>
          <Show above="md">
            <Box fontSize={{ md: '14px', lg: '16px', xl: '20px' }}>
              <NavigationItems />
            </Box>
          </Show>
          <Stack flex={{ base: 1, md: 0 }} alignItems="center" justify={'flex-end'} direction={'row'} spacing={6}>
            <User parentRef={containerRef} />
            <SimpleLink to={ROUTES.CART}>{<CgShoppingCart fontSize={24} />}</SimpleLink>
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

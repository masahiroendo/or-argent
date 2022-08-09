import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  VStack,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

import NavigationItems from './NavigationItems';

const ResponsiveMenu: FC = () => {
  const { t } = useTranslation('navbar');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Box textAlign="end" pt={2} pr={2}>
        <IconButton
          variant="ghost"
          ref={btnRef}
          aria-label="Menu"
          icon={<GiHamburgerMenu size="30px" />}
          onClick={onOpen}
        />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={12} size={'lg'} />
          <DrawerBody>
            <VStack alignItems="start" gap={2}>
              <NavigationItems translateFn={t} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ResponsiveMenu;

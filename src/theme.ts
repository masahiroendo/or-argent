import { extendTheme } from '@chakra-ui/react';

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/600-italic.css';
import '@fontsource/playfair-display/800.css';
import '@fontsource/playfair-display/800-italic.css';

const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Playfair Display', serif`,
  },
});

export default theme;

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/600-italic.css';
import '@fontsource/playfair-display/800.css';
import '@fontsource/playfair-display/800-italic.css';

import colors from './colors';
import fonts from './fonts';

const theme = extendTheme({ colors, fonts });

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

// 3. extend the theme
export const configTheme = extendTheme({ config });

export default theme;

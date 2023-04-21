/* eslint-disable max-len */
import { createTheme } from '@nextui-org/react';

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      // generic colors
      white: '#ffffff',
      black: '#000000',

      // background colors (light)
      background: '$white',
      backgroundAlpha: 'rgba(255, 255, 255, 0.8)',
      foreground: '$black',
      backgroundContrast: '$white',

      // Eqlze brand colors
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
  },
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // generic colors
      white: '#ffffff',
      black: '#000000',

      // background colors (light)
      background: '#2c2c44',
      backgroundAlpha: 'rgba(255, 255, 255, 0.8)',
      foreground: '$white',
      backgroundContrast: '$white',

      // Eqlze brand colors
      primaryLight: '$red200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
  },
});

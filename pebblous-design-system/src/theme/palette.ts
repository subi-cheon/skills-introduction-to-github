import { Color } from '@mui/material';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface TypeText {
    black: string;
  }
}

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#808080', // -
  600: '#637381',
  700: '#585858', // -
  800: '#212B36',
  900: '#161C24',
};

export const black = {
  0: '#FFFFFF',
  50: '#FFFFFF',

  100: '#F5F5F5',

  200: '#E6E6E6',
  300: '#DDD',

  400: '#BDBDBD',
  500: '#808080',

  600: '#FFFFFF',

  700: '#585858',

  800: '#FFFFFF',

  900: '#222',

  A100: '#FFFFFF',
  A200: '#FFFFFF',
  A400: '#FFFFFF',
  A700: '#FFFFFF',
};

export const primary = {
  lighter: '#FFF9F5',
  light: '#FF9B6A',
  main: '#F86825',
  dark: '#F86825',
  darker: '#7F3714',
  contrastText: '#FFFFFF',
  400: '#FFF9F5',
  10: '#FFF0E6',
};

export const secondary = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: black[100],
  dark: black[100],
  darker: '#27097A',
  contrastText: '#F86825',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#D3FCD2',
  light: '#77ED8B',
  main: '#78AFF0',
  dark: '#118D57',
  darker: '#065E49',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFC23F',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: '#FFFFFF',
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#F1576A',
  dark: '#F1576A',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: black[100],
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,

  noneOpacity: 0,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  black,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...base,
    mode: 'light',
    text: {
      primary: grey[700],
      secondary: grey[500],
      disabled: grey[500],
      black: black[900], //
    },
    background: {
      light: '#FFF9F5',
      paper: '#FFFFFF',
      default: '#FFFFFF',
      gray: '#F5F5F5',
      primary: '#F86825',
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };

  const dark = {
    ...base,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: grey[500],
      disabled: grey[600],
      black: black[900], //
    },
    background: {
      paper: grey[800],
      default: grey[900],
      neutral: alpha(grey[500], 0.12),
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === 'light' ? light : dark;
}

declare module '@mui/material/styles' {
  interface Palette {
    black: Color;
  }

  interface PaletteOptions {
    black: Color;
  }
}

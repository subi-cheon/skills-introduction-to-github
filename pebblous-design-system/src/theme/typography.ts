// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({xs, sm, md, lg }: {xs : number, sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:0px)': {
      fontSize: pxToRem(xs),
    },
    '@media (min-width:546px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:768px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1262px)': {
      fontSize: pxToRem(lg),
    },
  };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties['fontFamily'];
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
    body3: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

// ----------------------------------------------------------------------

export const typography = {
  fontFamily: 'Pretendard Variable, Pretendard, -apple-system, system-ui, sans-serif',
  fontSecondaryFamily: 'Pretendard Variable, Pretendard, -apple-system, system-ui, sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontSize: 16,
  defaultFontWeight: 400,
  h1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ xs:32, sm: 32, md: 32, lg: 40 }), //
  },
  h2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(26),
    ...responsiveFontSizes({xs : 24, sm: 24, md: 26, lg: 26 }), //
  },

  h3: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(22),
    ...responsiveFontSizes({xs : 20, sm: 20, md: 22, lg: 22 }), //
  },

  h4: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({xs : 18, sm: 18, md: 18, lg: 18 }), //
  },
  h5: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({xs : 16, sm: 16, md: 16, lg: 16 }), //
  },
  h6: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({xs : 14, sm: 14, md: 14, lg: 14 }), //
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16), //
  },
  subtitle2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(18), //
  },
  body1: {
    color: '#585858',
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    color: '#585858',
    fontWeight: 500,
    lineHeight: 1.4,
    fontSize: pxToRem(14),
  },
  body3: {
    color: '#808080',
    lineHeight: 1.4,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },
} as const;

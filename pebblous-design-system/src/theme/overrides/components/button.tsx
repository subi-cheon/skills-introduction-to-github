import { alpha, Theme } from '@mui/material/styles';
import { ButtonProps, buttonClasses } from '@mui/material/Button';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

// NEW VARIANT
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
    empty: true;
  }
}

// ----------------------------------------------------------------------

export function button(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  const rootStyles = (ownerState: ButtonProps) => {
    const inheritColor = ownerState.color === 'inherit';

    const containedVariant = ownerState.variant === 'contained';

    const outlinedVariant = ownerState.variant === 'outlined';

    const textVariant = ownerState.variant === 'text';

    const softVariant = ownerState.variant === 'soft';


    const emptyVariant = ownerState.variant === 'empty';

    const smallSize = ownerState.size === 'small';

    const mediumSize = ownerState.size === 'medium';

    const largeSize = ownerState.size === 'large';

    const defaultStyle = {
      borderRadius: 99,

      ...(inheritColor && {
        // CONTAINED
        ...(containedVariant && {
          color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
          backgroundColor: lightMode ? theme.palette.grey[800] : theme.palette.common.white,
          '&:hover': {
            backgroundColor: lightMode ? theme.palette.grey[700] : theme.palette.grey[400],
          },
        }),
        // OUTLINED
        ...(outlinedVariant && {
          // borderColor: alpha(theme.palette.grey[500], 0.32),
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }),
        // TEXT
        ...(textVariant && {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette.primary.main,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.24),
          },
        }),
        // EMPTY
        ...(emptyVariant && {
          backgroundColor: 'white',
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.action,
          },
        }),
      }),

      ...(outlinedVariant && {
        // '&:hover': {
        //   borderColor: 'currentColor',
        // },
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        // CONTAINED
        ...(containedVariant && {
          '&:hover': {
            boxShadow: theme.customShadows[color],
          },
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette[color][lightMode ? 'dark' : 'light'],
          backgroundColor: alpha(theme.palette[color].main, 0.05),
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].main, 0.32),
          },
        }),

        // EMPTY
        ...(emptyVariant && {
          color: theme.palette[color].main,
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].main, 0),
          },
        }),

        ...(color === 'secondary' && {
          fontWeight: 500,
        }),

      }),
    }));

    const disabledState = {
      [`&.${buttonClasses.disabled}`]: {
        // SOFT
        ...(softVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
        // EMPTY
        ...(emptyVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
        }),
         // EMPTY
         ...(containedVariant && {
          backgroundColor: theme.palette.action.disabledBackground,
          color : theme.palette.black[400]
        }),
      },
    };

    const size = {
      paddingTop: 14,
      paddingBottom: 14,
      fontSize : 18,
      ...(smallSize && {
        paddingTop: 6,
        paddingBottom: 6,
        // height: 44,
        fontSize: 16,
        paddingLeft: 16,
        paddingRight: 16,
        ...(textVariant && {
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 8,
          paddingRight: 8,
        }),
      }),
      ...(mediumSize && {
        paddingLeft: 32,
        paddingRight: 32,
        ...(textVariant && {
          paddingLeft: 8,
          paddingRight: 8,
        }),
      }),
      ...(largeSize && {
        height: 48,
        fontSize: 15,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 80,
        paddingRight: 80,
        ...(textVariant && {
          paddingLeft: 10,
          paddingRight: 10,
        }),
      }),
    };

    return [defaultStyle, ...colorStyle, disabledState, size];
  };

  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => rootStyles(ownerState),
      },
    },
  };
}

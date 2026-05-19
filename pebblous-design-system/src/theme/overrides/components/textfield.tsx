import { alpha, Theme } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { filledInputClasses } from '@mui/material/FilledInput';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

// ----------------------------------------------------------------------

export function textField(theme: Theme) {
  const color = {
    focused: theme.palette.text.primary,
    active: theme.palette.text.secondary,
    placeholder: theme.palette.text.disabled,
  };

  const font = {
    label: theme.typography.body1,
    value: theme.typography.body1,
  };

  return {
    // HELPER
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
        },
      },
    },

    // LABEL
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...font.value,
          color: color.placeholder,
          [`&.${inputLabelClasses.shrink}`]: {
            ...font.label,
            fontWeight: 600,
            color: color.active,
            [`&.${inputLabelClasses.focused}`]: {
              color: color.focused,
            },
            [`&.${inputLabelClasses.error}`]: {
              color: theme.palette.error.main,
            },
            [`&.${inputLabelClasses.disabled}`]: {
              color: theme.palette.text.disabled,
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: 'translate(12px, 6px) scale(0.75)',
            },
          },
        },
      },
    },

    // BASE
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`&.${inputBaseClasses.disabled}`]: {
            '& svg': {
              color: theme.palette.text.disabled,
            },
          },
        },
        input: {
          ...font.value,
          '&::placeholder': {
            opacity: 1,
            color: color.placeholder,
          },
        },
      },
    },

    // STANDARD
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.black[300],
          },
          '&:after': {
            borderBottomColor: color.focused,
          },
        },
      },
    },

    // OUTLINED
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          '&:hover': {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.black[300],
              // borderColor: theme.palette.primary.main,
            },
          },

          [`&.${outlinedInputClasses.focused}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderWidth: '1px',
              borderColor: theme.palette.primary.main,
            },
          },

          [`&.${outlinedInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.error.main,
            },
          },
          [`&.${outlinedInputClasses.disabled}`]: {
            backgroundColor: theme.palette.action.disabledBackground,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: theme.palette.black[300],
            },
          },
        },

        input: {
          padding: '10px 24px',
          [`& .MuiInputAdornment-root + &`]: {
            paddingLeft: '0px',  // startAdornment일 경우 paddingLeft 조정
          },
          [`& + .MuiInputAdornment-root`]: {
            paddingRight: '0px',  // endAdornment일 경우 paddingRight 조정
          },
        },

        notchedOutline: {
          borderColor: theme.palette.black[300],
          // transition: theme.transitions.create(['border-color'], {
          //   duration: theme.transitions.duration.shortest,
          // }),
        },
      },
    },

    // FILLED
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.grey[500], 0.08),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          [`&.${filledInputClasses.error}`]: {
            backgroundColor: alpha(theme.palette.error.main, 0.08),
            [`&.${filledInputClasses.focused}`]: {
              backgroundColor: alpha(theme.palette.error.main, 0.16),
            },
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
      },
    },
  };
}

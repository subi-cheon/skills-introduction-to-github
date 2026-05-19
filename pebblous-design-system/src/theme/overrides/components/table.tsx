import { Theme, alpha } from '@mui/material/styles';
import { tableRowClasses } from '@mui/material/TableRow';

// ----------------------------------------------------------------------

export function table(theme: Theme) {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          [`&.${tableRowClasses.selected}`]: {
            backgroundColor: alpha(theme.palette.primary.dark, 0.04),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.dark, 0.08),
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px',
          fontSize: 16,
          color: theme.palette.black[900],
          border: `solid 1px ${theme.palette.black[200]}`
        },
        head: {
          padding: '15px 12px 15px 12px',
          fontWeight: theme.typography.fontWeightBold,
          backgroundColor: '#fff9f5',
          color: theme.palette.primary.main,
          border: `solid 1px ${theme.palette.black[200]}`,
        },
        body: {
          border: `solid 1px ${theme.palette.black[200]}`,
        },
        footer: {
          fontWeight: theme.typography.fontWeightBold,
          backgroundColor: '#fff9f5',
          color: theme.palette.primary.main,
          border: `solid 1px ${theme.palette.black[200]}`,
        },
        stickyHeader: {
          padding: '15px 12px 15px 12px',
          fontWeight: theme.typography.fontWeightBold,
          backgroundColor: '#fff9f5',
          color: theme.palette.primary.main,
          outline: `solid 1px ${theme.palette.black[200]}`,
        },
        paddingCheckbox: {
          paddingLeft: theme.spacing(1),
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          width: '100%',
        },
        toolbar: {
          height: 64,
        },
        actions: {
          marginRight: 8,
        },
        select: {
          paddingLeft: 8,
          '&:focus': {
            borderRadius: theme.shape.borderRadius,
          },
        },
        selectIcon: {
          right: 4,
          width: 16,
          height: 16,
          top: 'calc(50% - 8px)',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          position: 'sticky',
          bottom: 0,
          zIndex: 3,
          backgroundColor: '#fff9f5',
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.primary.main,
          outline: `solid 1px ${theme.palette.black[200]}`,
        },
      },
    },
  };
}

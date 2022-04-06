/////////////////////// *** ///////////////////////
// JUST EXAMPLE 
/////////////////////// *** ///////////////////////

import * as React from "react";
import { createTheme } from "@mui/material";
import { LinkProps } from "@mui/material/Link";
import { LinkBehavior } from "@atoms";
import { BODY_MIN_WIDTH, POPOVER_HEIGHT, TOOLBAR_HEIGHT } from "@constants";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      rejected: React.CSSProperties["color"];
      rejectedBg: React.CSSProperties["color"];
      pending: React.CSSProperties["color"];
      pendingBg: React.CSSProperties["color"];
      success: React.CSSProperties["color"];
      successBg: React.CSSProperties["color"];
      draft: React.CSSProperties["color"];
    };
    editButton: {
      bg: React.CSSProperties["color"];
      border: React.CSSProperties["color"];
    };
    customShadows: {
      1: React.CSSProperties["boxShadow"];
      2: React.CSSProperties["boxShadow"];
      3: React.CSSProperties["boxShadow"];
    };
  }

  interface Palette {
    neutral: {
      10: React.CSSProperties["color"];
      15: React.CSSProperties["color"];
      20: React.CSSProperties["color"];
      30: React.CSSProperties["color"];
      60: React.CSSProperties["color"];
    };
    grayScale: {
      50: React.CSSProperties["color"];
      40: React.CSSProperties["color"];
      30: React.CSSProperties["color"];
      25: React.CSSProperties["color"];
      20: React.CSSProperties["color"];
      10: React.CSSProperties["color"];
      5: React.CSSProperties["color"];
    };
    button: {
      hover: React.CSSProperties["color"];
      containedHover: React.CSSProperties["color"];
    };
    customColors: {
      purple: React.CSSProperties["color"];
    };
  }
  interface PaletteOptions {
    // neutral: PaletteOptions["primary"];
    neutral: {
      10: React.CSSProperties["color"];
      15: React.CSSProperties["color"];
      20: React.CSSProperties["color"];
      30: React.CSSProperties["color"];
      60: React.CSSProperties["color"];
    };
    grayScale: {
      50: React.CSSProperties["color"];
      40: React.CSSProperties["color"];
      30: React.CSSProperties["color"];
      25: React.CSSProperties["color"];
      20: React.CSSProperties["color"];
      10: React.CSSProperties["color"];
      5: React.CSSProperties["color"];
    };
    button: {
      hover: React.CSSProperties["color"];
      containedHover: React.CSSProperties["color"];
    };
    customColors: {
      purple: React.CSSProperties["color"];
    };
  }

  interface PaletteColor {
    darker?: string;
    lightBlack?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lightBlack?: string;
  }

  interface ThemeOptions {
    status: {
      rejected: React.CSSProperties["color"];
      rejectedBg: React.CSSProperties["color"];
      pending: React.CSSProperties["color"];
      pendingBg: React.CSSProperties["color"];
      success: React.CSSProperties["color"];
      successBg: React.CSSProperties["color"];
      draft: React.CSSProperties["color"];
    };
    editButton: {
      bg: React.CSSProperties["color"];
      border: React.CSSProperties["color"];
    };
    customShadows: {
      1: React.CSSProperties["boxShadow"];
      2: React.CSSProperties["boxShadow"];
      3: React.CSSProperties["boxShadow"];
    };
  }
}

// TODO: figure out of how to replace media queries with breakpoints to dynamic values
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1368,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 8,
  },
  editButton: {
    bg: "#EEF4FF",
    border: "#A7BADF",
  },
  customShadows: {
    1: "0px 2px 1px -1px rgba(165, 160, 160, 0.2)",
    2: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    3: "0px 2px 1px -1px rgba(165, 160, 160, 0.2), 0px 1px 1px rgba(119, 119, 119, 0.14), 0px 1px 3px rgba(255, 255, 255, 0.12)",
  },
  status: {
    rejected: "#E00F0F",
    rejectedBg: "#FFEFEF",
    pending: "#E17A00",
    pendingBg: "#FFF3E5",
    success: "#00CA71",
    successBg: "#EDF7ED",
    draft: "#B7BABC",
  },
  palette: {
    primary: {
      main: "#41479B",
      darker: "#121232",
      lightBlack: "#333",
    },
    secondary: {
      main: "#44756B",
    },
    neutral: {
      10: "#F2F2F2",
      15: "#F4F4F4",
      20: "#E5E5E5",
      30: "#E6E6E6",
      60: "#696F77",
    },
    grayScale: {
      50: "#6B7384",
      40: "#6D7689",
      30: "#D7E3EE",
      25: "#D2D9E7",
      20: "#F8F9FA",
      10: "#F9FAFB",
      5: "#BCC3D1",
    },
    text: {
      primary: "#262626",
      secondary: "#92979C",
    },
    button: {
      hover: "rgba(65, 71, 155, 0.04)",
      containedHover: "rgb(45, 49, 108)",
    },
    error: {
      main: "#E00F0F",
    },
    customColors: {
      purple: "#41479B",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 16,
    h1: {
      fontSize: "1.875rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: `${BODY_MIN_WIDTH}px`,
          backgroundColor: "#F8F9FA",
          "&.scroll-disable": {
            overflow: "hidden",
          },
        },
        // ".MuiAutocomplete-popper": {
        //   top: "4px !important",
        // },
        ".MuiFormHelperText-root.Mui-error": {
          fontSize: ".75rem",
          color: "#E00F0F !important",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
      styleOverrides: {
        root: {
          "&.MuiIconButton-root.MuiAutocomplete-popupIndicator": {
            padding: 0,
            margin: 0,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiFormHelperText-root.Mui-error": {
            color: "#E00F0F",
          },
          "& .MuiInputLabel-root.Mui-error": {
            color: "#E00F0F",
          },
          "& .MuiSvgIcon-root": {
            fill: "#262626",
          },
          "& .MuiSelect-select.MuiInputBase-input": {
            height: 0,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderWidth: "2px",
          boxShadow: "none",
          "&:hover": {
            borderWidth: "2px",
            boxShadow: "none",
          },
          "&. MuiIconButton-root-MuiAutocomplete-popupIndicator": {
            padding: 0,
            margin: 0,
          },
          "&.MuiButton-contained.Mui-disabled": {
            color: "#fff",
            backgroundColor: "#41479B",
            opacity: "0.7",
          },
          "&.MuiButton-text.Mui-disabled": {
            color: "#41479B",
            opacity: "0.7",
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: "16px 40px",
          "@media (min-width: 600px)": {
            padding: "13px 40px",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: "4px",
          paddingBottom: "4px",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "12px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "none",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 600px)": {
            paddingRight: "40px",
            paddingLeft: "40px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": {
            fontSize: "1rem",
            lineHeight: "1.625rem",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            fontSize: "1rem",
            top: "-4px",
          },
          "& .MuiInputBase-input": {
            fontSize: "1rem",
            padding: "12px 16px",
          },
          "& .MuiSelect-select": {
            fontSize: "1rem",
          },
          "& .MuiFormHelperText-root": {
            fontSize: ".75rem",
          },
          "& .MuiOutlinedInput-root": {
            padding: 0,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#BCC3D1",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#41479B",
          },
          "&.MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#E00F0F",
            },
          "&.MuiOutlinedInput-root.Mui-disabled": {
            opacity: 0.7,
          },
          "&.MuiOutlinedInput-root.Mui-disabled:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#BCC3D1",
            },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
            padding: "12px 16px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiAutocomplete-paper": {
            boxShadow: "none",
            borderRadius: 4,
            border: "1px solid #BCC3D1",
            fontSize: "1rem",
            height: "218px",
          },
          "&.MuiPopover-paper": {
            maxHeight: `${POPOVER_HEIGHT}px`,
          },
          "& .MuiAutocomplete-listbox": {
            padding: 0,
            maxHeight: "218px",
          },
          "& .MuiAutocomplete-option": {
            padding: "10px 16px",
          },
          "&.MuiAccordion-root": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: "16px",
          "&:last-child": {
            marginBottom: 0,
            "& .MuiCollapse-root": {
              marginBottom: 0,
            },
          },
          "&::before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: 0,
          },
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
          "& .MuiCollapse-root": {
            marginBottom: "16px",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "10px",
          minHeight: "46px",
          border: "1px solid #BCC3D1",
          borderRadius: "8px",
          marginBottom: "4px",
          "&.Mui-expanded": {
            minHeight: "46px",
            margin: "0 0 4px",
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            marginRight: "8px",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          padding: 0,
          backgroundColor: "#F8F9FA",
          borderRadius: "8px",
          "& .MuiCollapse-wrapperInner": {
            padding: "16px",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fill: "currentColor",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fill: "#41479B",
            width: "15px",
            height: "15px",
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#F4F4F4",
          "& .MuiLinearProgress-barColorSuccess": {
            backgroundColor: "#00A059",
          },
        },
      },
    },
  },
  spacing: 4,
  mixins: {
    toolbar: {
      minHeight: TOOLBAR_HEIGHT,
      "@media (min-width: 0px) and (orientation: landscape)": {
        minHeight: TOOLBAR_HEIGHT,
      },
      "@media (min-width: 600px)": {
        minHeight: TOOLBAR_HEIGHT,
      },
    },
  },
});

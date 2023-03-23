import { createTheme } from "@mui/material/styles";

const MUITheme = createTheme({
  spacing: 8,
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 550,
      sm: 767,
      md: 991,
      lg: 1199,
      xl: 1440
    }
  },
  palette: {
    text: {
      primary: "#3E3C48",
      inputLabel: "#8E93A2",
      red: "#ff3e00",
      black: "#242424",
      bgBlue: "#132870",
      links: "#C5E6F4",
      icon: "#BEC2CD",
      blackText: {
        primary: "#777",
        secondary: "#F3f3f2",
        tertiary: "#717171"
      },
      white: {
        primary: "#fff",
        secondary: "#F3f3f2",
        tertiary: "#E8F4FE"
      },
      blue: {
        primary: "#042586",
        secondary: "#259BEB",
        tertiary: "#136BD6"
      }
    },
    background: {
      gradient: "radial-gradient(circle, #259AEA 0.04%, #136BD6 100%)",
      primary: "#E8F4FE",
      secondary: "#D1EAFE",
      darkBlue: "#132870",
      lightBlue: "#F3F9FE",
      btnBg: "#041e42",
      white: "#fff",
      grey: "#F3F3F2",
      danger: "#E13636",
      warning: "#FFCD00"
    },
    border: {
      primary: "#8E93A2",
      secondary: "#979797",
      tertiary: "#EFF3F9",
      white: "#fff",
      blue: "#136BD6",
      grey: "#F3F3F2"
    }
  },
  typography: {
    fontFamily: {
      primary: `"Roboto", "Helvetica", "Arial", sans-serif`,
      secondary: `'Lexend Deca', sans-serif`
    },
    h2: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 32,
      fontWeight: 600,
      lineHeight: "32px"
    },
    h3: {
      color: "#3E3C48",
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 26,
      lineHeight: "32px"
    },
    h4: {
      color: "#3E3C48",
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 24,
      lineHeight: "32px"
    },
    h5: {
      color: "#3E3C48",
      fontFamily: `"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: "600"
    },
    body1: {
      color: "#282828",
      fontFamily: `"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
      fontSize: 14,
      lineHeight: "21px"
    }
  }
});

export default MUITheme;

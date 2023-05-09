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
      primary: "#00529a",
      secondary: "#D1EAFE",
      darkBlue: "#01224f",
      lightBlue: "#98daf8",
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' &&{
              backgroundColor: MUITheme.palette.background.primary,
              color: '#fff',
              cursor:'pointer',
              '&:hover':{
                backgroundColor: MUITheme.palette.background.darkBlue,
              },
              '& +.MuiButton-root': {
                marginLeft:'15px',
              },
              '&.Mui-disabled': {
                backgroundColor: MUITheme.palette.background.lightBlue,
                color: '#fff',
              },
              ...(ownerState.rounded &&{
                borderRadius:'20px',
              }),
            }),
            ...(ownerState.size === 'medium' && {
              backgroundColor: "#00529a",
              height:'40px',
              padding:'9px 30px',
              textTransform:'unset',
              fontSize: '14px',
              lineHeight: '22px',

            }),
            ...(ownerState.size === 'large' && {
              backgroundColor: "#00529a",
              borderRadius:'24px',
              height:'47px',
              padding:'11px 40px',
              textTransform:'unset',
              fontSize: '17px',
              lineHeight: '25px',
            }),
            ...(ownerState.size === 'small' && {
              backgroundColor: "#00529a",
              borderRadius:'24px',
              height:'30px',
              padding:'4px 20px',
              textTransform:'unset',
              fontSize: '14px',
              lineHeight: '22px',
            }),
            ...(ownerState.disabled &&{
              backgroundColor: MUITheme.palette.background.lightBlue,
            }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'primary' &&{
              backgroundColor: '#fff',
              color: '#055CE5',
              cursor:'pointer',
              '&:hover':{
                borderColor: MUITheme.palette.background.darkBlue,
                color: MUITheme.palette.background.darkBlue,
              },
              '&.Mui-disabled': {
                borderColor: MUITheme.palette.background.lightBlue,
                color: MUITheme.palette.background.lightBlue,
              },
              ...(ownerState.size === 'medium' && {
                height:'40px',
                padding:'9px 30px',
                textTransform:'unset',
                fontSize: '14px',
                lineHeight: '22px',
              })
            }),
            ...(ownerState.variant === 'contained' &&
            ownerState.color === 'success' &&{
              backgroundColor:'rgb(46, 125, 50)',
              '&:hover':{
                backgroundColor:'rgb(27, 94, 32)',
              },
            }),
        }),
      },
    },
    MuiFormControl:{
      styleOverrides:{
        root: ({ ownerState }) => ({
          '& legend':{'& span':{display:'none'},},
        }),
      },
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiTextField:{
      styleOverrides:{
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' &&{
            textTransform:'unset',
            fontSize: '14px',
            lineHeight: '22px',
            '& legend':{'& span':{display:'none'},},
          }),
        })
      },
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: { shrink: true }, 
      },
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root: ({ ownerState }) => ({
            height:'40px',
            textTransform:'unset',
            fontSize: '14px',
            lineHeight: '22px',
            marginBottom:'30px',
            Input:{
              padding:MUITheme.spacing(2)
            },
        }),
      },
      
    },
    MuiFormLabel:{
      styleOverrides:{
        root: ({ ownerState }) => ({
          transform:'none',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '19px',
          color:"#232323",
          cursor:'pointer',
          position:'unset',
          marginBottom:'8px',
          "&.Mui-focused": {
            color:"#232323",
          },
          
        }),
      },
      defaultProps: {
        shrink: true
      },
    },
    MuiInputLabel:{
      styleOverrides:{
        root: ({ ownerState }) => ({
          color:MUITheme.palette.text.textColor,
          position:'relative',
          transform:'unset',
          fontSize:'14px',
          pointerEvents:'unset',
          overflow:'auto',
          "&.Mui-focused": {
            color:"#232323",
          },
          '&.Mui-error':{
            color:'#333',
          }
          
        }),
      },
      defaultProps: {
        shrink: false
      },
    },
  },
});

export default MUITheme;

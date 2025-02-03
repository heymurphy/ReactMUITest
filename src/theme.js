import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Ensures dark mode styling
    primary: {
      main: "#32CD32", // Lime Green
    },
    secondary: {
      main: "#ADFF2F", // Lighter Lime Green (highlight)
    },
    onwhite: {
      main: "#333",
    },
    action: {
      active: "#228B22", // Darker Lime Green
    },
    background: {
      default: "#333333", // Charcoal Grey background
      paper: "#121212", // Slightly off-black for cards and surfaces
    },
    text: {
      primary: "#F5F5F5", // Off-white text
      secondary: "#ADFF2F", // Lighter Lime Green for highlights
    },
  },
  typography: {
    fullWidthContainer: {
      width: "100%",
      maxWidth: "100%",
      height: "fit-content",
      backgroundColor: "rgba(10, 1, 19, 0.6)", // Pebble Grey with transparency (60% opacity)
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "0",
      borderRadius: "16px", // Rounded edges
    },
    PaperBlack: {
      width: "100%",
      maxWidth: "100%",
      height: "fit-content",
      backgroundColor: "rgba(9, 1, 16, 0.7)", // Fully transparent Pebble Grey
      backgroundImage: "linear-gradient(to bottom, rgba(10, 10, 11, 0.3), rgba(83, 16, 172, 0.1), rgba(199, 28, 205, 0.1), rgba(192, 241, 162, 0.1), rgba(2, 0, 4, 0.3))",

      alignItems: "center",
      justifyContent: "center",
      margin: "2em auto 12em auto",
      padding: "3em 3em 8em 3em",
      borderRadius: "16px", // Rounded edges
    },
    fullWidthContainerWhite: {
      width: "100%",
      maxWidth: "100%",
      height: "fit-content",
      backgroundColor: "rgba(253, 249, 252, 0.6)", // Fully transparent Pebble Grey
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "2em 0",
      padding: "1rem",
      borderRadius: "16px", // Rounded edges
    },
    h1: {
      fontSize: "2rem",
      margin: "0 0",
      fontWeight:"200",
      "@media (min-width:400px)": {
        fontSize: "1.8rem",
        marginTop:"-1em",
      },
      "@media (min-width:960px)": {
        fontSize: "4rem",
      },
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:960px)": {
        fontSize: "4rem",
      },
    },
    h5: {
      fontSize: "2rem",
      paddingBottom: "0",
      opacity: ".8",
      "@media (min-width:400px)": {
        fontSize: ".7rem",
        marginTop: ".75rem",
      },
      "@media (min-width:960px)": {
        fontSize: "01.5rem",
      },
    },
    h4: {
      opacity: ".8",
    },
     h6: {
      opacity: ".8",
    },
    body2: {
      opacity: ".8",
    },
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.nav-link": {
            textDecoration: "none",
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": { color: "rgb(186, 255, 186)" }, // Lighter Lime on hover
            "&.active": { color: "rgb(26, 102, 26)" }, // Darker Lime when active
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#333333", // Charcoal Grey background applied globally
          backgroundImage:
            "linear-gradient(rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.8)), url('/assets/header-background.webp')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "2rem",
          fontWeight: "200",
          letterSpacing: "-.035em",
          background: "linear-gradient(to bottom,rgb(182, 249, 167), #ADFF2F,rgb(97, 88, 98))",
          backgroundSize: "100% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#333",
            transition: "border-color 0.3s ease",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c2cead", // Hover state color (you can adjust if needed)
            transition: "border-color 0.3s ease",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9bab80 !important", // Focus (active) state color
            transition: "border-color 0.3s ease",
          },
          "&:focus": {
            outline: "none !important",
            boxShadow: "none !important",
          },
        },
      },
    },    
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "rgb(114, 244, 54)", // Default button color (Lime Green)
          "&:hover": {
            backgroundColor: "#228B22", // Darker Lime on hover
          },
          "&:active": {
            backgroundColor: "#1A661A", // Even darker on active
          },
        },
      },
    },
  },
});

export default theme;
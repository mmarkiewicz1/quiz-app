import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#098181",
      main: "#098181",
      dark: "#098181",
    },
    secondary: {
      light: "#104447",
      main: "#104447",
      dark: "#104447",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
    },
    info: {
      light: "#098181",
      main: "#098181",
      dark: "#098181",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
    mainGradient:
      "linear-gradient(51.37deg, rgba(8, 128, 128, 0.65) 24.88%, rgba(163, 249, 254, 0.65) 103.05%)",
  },
  overrides: {
    MuiPaper: {
      root: {
        background:
          "linear-gradient(51.37deg, rgba(8, 128, 128, 0.65) 24.88%, rgba(163, 249, 254, 0.65) 103.05%)",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#008080",
        },
      },
    },
    MuiInputBase: {
      input: {
        borderRadius: "40px",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "40px",
      },
      input: {
        padding: "12px",
        backgroundColor: "#008080",
        filter: "brightness(130%)",
      },
    },
    MuiInputLabel: {
      formControl: {
        top: "-5px",
      },
    },
    MuiSelect: {
      selectMenu: {
        borderRadius: "40px",
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);
export { lightTheme };

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7F39FB",
      main: "#6200EE",
      dark: "#3700B3",
      contrastText: "#fff",
    },
    secondary: {
      light: "#00B3A6",
      main: "#03DAC5",
      dark: "#018786",
      contrastText: "#000",
    },
  },
});

export default theme;

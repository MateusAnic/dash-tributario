import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#202020",
    },
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#1c4e80",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "1.383rem",
    },
    h2: { fontSize: "1.296rem" },
    h3: { fontSize: "1.215rem" },
    h4: { fontSize: "1.138rem" },
    h5: { fontSize: "1.067rem" },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.8rem" },
  },
});

export { theme };

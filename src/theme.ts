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
      default: "#f1f1f1",
    },
  },
  typography: {
    h1: {
      fontSize: "1.802rem",
    },
    h2: { fontSize: "1.602rem" },
    h3: { fontSize: "1.424rem" },
    h4: { fontSize: "1.266rem" },
    h5: { fontSize: "1.125rem" },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.889rem" },
  },
});

export { theme };

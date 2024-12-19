import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwind.css";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
      main: "#1976D2",
      dark: "#1565C0",
      light: "#63A4FF",
    },
    secondary: {
      main: "#FF5722",
      dark: "#E64A19",
      light: "#FF8A65",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme} noSsr>
      <App />
    </ThemeProvider>
  </StrictMode>
);

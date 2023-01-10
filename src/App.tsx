import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, SignUpPage, DashboardPage , CostumerRegister, TaxRegister, DreRegister } from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/cliente/cadastro" element={<CostumerRegister />} />
            <Route path="/planejamento-tributario/cadastro" element={<TaxRegister />} />
            <Route path="/dre/cadastro" element={<DreRegister />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export { App };

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  DashboardPage,
  CostumerRegister,
  TaxRegister,
  DreRegister,
} from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import { theme } from "./theme";
import { store } from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/cliente/cadastro" element={<CostumerRegister />} />
            <Route
              path="/planejamento-tributario/cadastro"
              element={<TaxRegister />}
            />
            <Route path="/dre/cadastro" element={<DreRegister />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export { App };

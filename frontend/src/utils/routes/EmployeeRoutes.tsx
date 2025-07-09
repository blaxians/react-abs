import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/login/LoginPage";
import ProtectedRoutes from "../../components/ProtectedRoutes";
import Dashboard from "../../components/employee/dashboard/Dashboard";
import PanelLayout from "../../layouts/PanelLayout";
import PageNotFound from "../../components/PageNotFound";
import HeaderLayout from "../../layouts/HeaderLayout";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { CssBaseline } from "@mui/material";

const EmployeeRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="login" element={<HeaderLayout />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <PanelLayout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default EmployeeRoutes;

import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../../components/ProtectedRoutes";
import LoginPage from "../../pages/login/LoginPage";
import Dashboard from "../../components/admin/dashboard/Dashboard";
import PageNotFound from "../../components/PageNotFound";
import PanelLayout from "../../layouts/PanelLayout";
import HeaderLayout from "../../layouts/HeaderLayout";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "../../theme";
import "@fontsource/public-sans";

const AdminRoutes = () => {
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
          <Route path="admin" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AdminRoutes;

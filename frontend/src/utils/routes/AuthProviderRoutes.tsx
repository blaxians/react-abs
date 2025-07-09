import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "../../providers/AuthProvider";
import PageNotFound from "../../components/PageNotFound";

const AdminRoutes = lazy(() => import("./AdminRoutes"));
const EmployeeRoutes = lazy(() => import("./EmployeeRoutes"));

const AuthProviderRoutes = () => (
  <AuthProvider>
    <Suspense fallback={<div>Loading role modules...</div>}>
      <Routes>
        <Route path="admin/*" element={<AdminRoutes />} />
        <Route path="employee/*" element={<EmployeeRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  </AuthProvider>
);

export default AuthProviderRoutes;

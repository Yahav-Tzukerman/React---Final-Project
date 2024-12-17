import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import UnAuthorizedPage from "./pages/UnAuthorizedPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomersPage from "./pages/admin/CustomersPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import SignupPage from "./pages/SignupPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import ProductsPage from "./pages/customer/ProductsPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Admin Routes */}
      <Route path="/admin">
        <Route
          path="categories"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CategoriesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="products"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminProductsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="customers"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CustomersPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Customer Routes */}
      <Route path="/customer">
        <Route
          path="products"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Error Pages */}
      <Route path="/404" element={<PageNotFound />} />
      <Route path="/403" element={<UnAuthorizedPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;

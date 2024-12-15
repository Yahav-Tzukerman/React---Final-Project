import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import UnAuthorizedPage from "./pages/UnAuthorizedPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import CustomersPage from "./pages/admin/CustomersPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import SignupPage from "./pages/SignupPage";
import CreateProductCard from "./components/admin/CreateProductCard";
import CreateProductListComp from "./components/admin/CreateProductList";

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
              <CreateProductListComp />
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
              <h1>Customer Products</h1>
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

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupComp from "./components/Signup";
import PageNotFound from "./pages/PageNotFound";
import UnAuthorizedPage from "./pages/UnAuthorizedPage";
import HomePage from "./pages/HomePage";
import CategoriesList from "./components/admin/CategoriesList";
import ProtectedRoute from "./utils/ProtectedRoute";
import CustomerTableComp from "./components/admin/CustomerTable";
import CustomersPage from "./pages/admin/CustomersPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupComp />} />
      <Route path="/" element={<HomePage />} />

      {/* Admin Routes */}
      <Route path="/admin">
        <Route
          path="categories"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CategoriesList />
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

import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupComp from "./components/Signup";
import PageNotFound from "./pages/PageNotFound";
import UnAuthorizedPage from "./pages/UnAuthorizedPage";
import HomePage from "./pages/HomePage";
import CategoriesList from "./components/admin/CategoriesList";
import ProtectedRoute from "./utils/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupComp />} />
      <Route path="/" element={<HomePage />} />

      {/* Admin Routes */}
      <Route
        path="/admin"
      >
        <Route
          path="categories"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CategoriesList />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Customer Routes */}
      <Route
        path="/customer"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <p>Customer Dashboard</p>
          </ProtectedRoute>
        }
      />

      {/* Error Pages */}
      <Route path="/404" element={<PageNotFound />} />
      <Route path="/403" element={<UnAuthorizedPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;

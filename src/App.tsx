import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { PropertyDetailPage } from "./pages/PropertyDetailPage";
import { RoommatePage } from "./pages/RoommatePage";
import { BlogPage } from "./pages/BlogPage";
import { ListPropertyPage } from "./pages/ListPropertyPage";
import { VerificationPage } from "./pages/VerificationPage";
import { AboutPage } from "./pages/AboutPage";
import { TenantDashboardPage } from "./pages/TenantDashboardPage";
import { LandlordDashboardPage } from "./pages/LandlordDashboardPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import Login from "./pages/Login";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Authentication check based on stored token
const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return !!token;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* Public routes that don't require authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />

            {/* Protected routes that require authentication */}
            <Route
              path="/roommates"
              element={
                <ProtectedRoute>
                  <RoommatePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/list-property"
              element={
                <ProtectedRoute>
                  <ListPropertyPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/verification"
              element={
                <ProtectedRoute>
                  <VerificationPage />
                </ProtectedRoute>
              }
            />
            
            {/* Dashboard routes */}
            <Route
              path="/admin-dashboard/*"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/*"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <TenantDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/*"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordDashboardPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedTypes?: ('tenant' | 'landlord' | 'admin')[];
}

function ProtectedRoute({ children, allowedTypes }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page with the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedTypes && user && !allowedTypes.includes(user.type)) {
    // Redirect to appropriate dashboard if user type doesn't match
    return <Navigate to={`/${user.type}-dashboard`} replace />;
  }

  return <>{children}</>;
}

export default App;
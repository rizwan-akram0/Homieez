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
import { TenantProfilePage } from "./pages/tenant/ProfilePage";
import { TenantBookingsPage } from "./pages/tenant/BookingsPage";
import { TenantPaymentsPage } from "./pages/tenant/PaymentsPage";
import { SavedPropertiesPage } from "./pages/tenant/SavedPropertiesPage";
import { MessagesPage } from "./pages/tenant/MessagesPage";
import { LoyaltyPointsPage } from "./pages/tenant/LoyaltyPointsPage";
import { TenantVerificationPage } from "./pages/tenant/VerificationPage";
import { LandlordDashboardPage } from "./pages/LandlordDashboardPage";
import { LandlordPropertiesPage } from "./pages/landlord/PropertiesPage";
import { LandlordTenantsPage } from "./pages/landlord/TenantsPage";
import { LandlordBookingsPage } from "./pages/landlord/BookingsPage";
import { LandlordPaymentsPage } from "./pages/landlord/PaymentsPage";
import { LandlordProfilePage } from "./pages/landlord/ProfilePage";
import { LandlordMessagesPage } from "./pages/landlord/MessagesPage";
import { LandlordAnalyticsPage } from "./pages/landlord/AnalyticsPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { AdminUsersPage } from "./pages/admin/UsersPage";
import { AdminAnalyticsPage } from "./pages/admin/AnalyticsPage";
import Login from "./pages/Login";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Import modals
import { PropertyDetailsModal } from "./components/modals/PropertyDetailsModal";
import { ScheduleViewingModal } from "./components/modals/ScheduleViewingModal";
import { RedeemPointsModal } from "./components/modals/RedeemPointsModal";
import { UploadDocumentModal } from "./components/modals/UploadDocumentModal";
import { SendMessageModal } from "./components/modals/SendMessageModal";

// Add these imports
import { AdminPropertiesPage } from './pages/admin/PropertiesPage';
import { AdminBookingsPage } from './pages/admin/BookingsPage';
import { AdminVerificationsPage } from './pages/admin/VerificationsPage';
import { AdminPaymentsPage } from './pages/admin/PaymentsPage';
import { AdminSupportTicketsPage } from './pages/admin/SupportTicketsPage';
import { AdminReportsPage } from './pages/admin/ReportsPage';

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
            
            {/* Tenant Dashboard routes */}
            <Route
              path="/tenant-dashboard"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <TenantDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/profile"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <TenantProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/bookings"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <TenantBookingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/payments"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <TenantPaymentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/saved"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <SavedPropertiesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/messages"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <MessagesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/loyalty"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <LoyaltyPointsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tenant-dashboard/verification"
              element={
                <ProtectedRoute allowedTypes={['tenant']}>
                  <TenantVerificationPage />
                </ProtectedRoute>
              }
            />

            {/* Landlord Dashboard routes */}
            <Route
              path="/landlord-dashboard"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/profile"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/properties"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordPropertiesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/tenants"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordTenantsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/bookings"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordBookingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/payments"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordPaymentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/messages"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordMessagesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/landlord-dashboard/analytics"
              element={
                <ProtectedRoute allowedTypes={['landlord']}>
                  <LandlordAnalyticsPage />
                </ProtectedRoute>
              }
            />

            {/* Admin Dashboard routes */}
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/users"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminUsersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/analytics"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminAnalyticsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/properties"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminPropertiesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/bookings"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminBookingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/verifications"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminVerificationsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/payments"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminPaymentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/tickets"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminSupportTicketsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard/reports"
              element={
                <ProtectedRoute allowedTypes={['admin']}>
                  <AdminReportsPage />
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
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedTypes && user && !allowedTypes.includes(user.type)) {
    return <Navigate to={`/${user.type}-dashboard`} replace />;
  }

  return <>{children}</>;
}

export default App;
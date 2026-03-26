import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { ProtectedRoute, PublicRoute } from './components/auth';
import { LoadingSpinner, ScrollToTop } from './components/common';
import { Footer, Navbar } from './components/layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));
const BookingPage = lazy(() => import('./pages/BookingPage/BookingPage'));
const ConfirmationPage = lazy(
  () => import('./pages/ConfirmationPage/ConfirmationPage'),
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const AdminDashboardPage = lazy(
  () => import('./pages/AdminDashboardPage/AdminDashboardPage'),
);
const AdminMenuPage = lazy(() => import('./pages/AdminMenuPage/AdminMenuPage'));

const App = () => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="bg-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route
              path="/booking-confirmation"
              element={<ConfirmationPage />}
            />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/admin/menu" element={<AdminMenuPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;

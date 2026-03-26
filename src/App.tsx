import { Route, Routes, useLocation } from 'react-router';

import { ProtectedRoute, PublicRoute } from './components/auth';
import { ScrollToTop } from './components/common';
import { Footer, Navbar } from './components/layout';
import {
  AdminDashboardPage,
  BookingPage,
  ConfirmationPage,
  HomePage,
  LoginPage,
  MenuPage,
} from './pages';

const App = () => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="bg-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/booking-confirmation" element={<ConfirmationPage />} />

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboardPage />} />
          </Route>
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;

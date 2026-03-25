import { Route, Routes } from 'react-router';

import { ProtectedRoute, PublicRoute } from './components/auth';
import { ScrollToTop } from './components/common';
import { Footer, Navbar } from './components/layout';
import {
  BookingPage,
  ConfirmationPage,
  HomePage,
  LoginPage,
  MenuPage,
} from './pages';

const App = () => {
  return (
    <div className="bg-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/booking-confirmation" element={<ConfirmationPage />} />

          {/* Auth */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          {/* Admin */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/admin"
              element={
                <div className="bg-warm-dark text-cream py-32 text-center">
                  Admin Dashboard (coming next)
                </div>
              }
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

import { Route, Routes } from 'react-router';

import { ScrollToTop } from './components/common';
import { Footer, Navbar } from './components/layout';
import { BookingPage, ConfirmationPage, HomePage, MenuPage } from './pages';

const App = () => {
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

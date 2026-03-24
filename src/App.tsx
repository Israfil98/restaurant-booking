import { Route, Routes } from 'react-router';

import { Footer, Navbar } from './components/layout';
import { HomePage, MenuPage } from './pages';

const App = () => {
  return (
    <div className="bg-cream">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

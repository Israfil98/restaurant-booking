import {
  About,
  CtaBanner,
  FeaturedMenu,
  Hero,
  Testimonials,
} from './components/landing';
import { Footer, Navbar } from './components/layout';

const App = () => {
  return (
    <div className="bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedMenu />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;

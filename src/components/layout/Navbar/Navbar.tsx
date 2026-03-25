import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { Button, Logo } from '../../common';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-burgundy/10 bg-cream/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2"
        >
          <Logo size={28} />
          <span className="font-display text-burgundy text-2xl font-bold">
            Dinespot
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <a
                key={link.href}
                href={link.href}
                className="text-warm-dark hover:text-burgundy text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-warm-dark hover:text-burgundy text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}

          <Button href="/book" className="px-5 py-2.5">
            Book a Table
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-warm-dark md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-burgundy/10 bg-cream/95 overflow-hidden border-t backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) =>
                link.href.startsWith('/#') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-warm-dark hover:text-burgundy text-sm font-medium tracking-wide transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-warm-dark hover:text-burgundy text-sm font-medium tracking-wide transition-colors"
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <Button
                href="/book"
                className="px-5 py-2.5 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book a Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

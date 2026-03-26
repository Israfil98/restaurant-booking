import { Facebook, Instagram, Twitter } from 'lucide-react';

import { Link } from 'react-router';
import { restaurantInfo } from '../../../data';
import { Logo } from '../../common';

const socialIcons: Record<string, React.ElementType> = {
  instagram: Instagram,
  facebook: Facebook,
  x: Twitter,
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-warm-dark py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="mb-4 flex items-center gap-2">
              <Logo size={24} />
              <span className="font-display text-cream text-xl font-bold">
                {restaurantInfo.name}
              </span>
            </a>
            <p className="text-warm-gray text-sm leading-relaxed">
              {restaurantInfo.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-cream mb-4 text-sm font-bold tracking-wide uppercase">
              Contact
            </h3>
            <div className="text-warm-gray flex flex-col gap-3 text-sm">
              <p>{restaurantInfo.address}</p>
              <p>{restaurantInfo.phone}</p>
              <p>{restaurantInfo.email}</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-cream mb-4 text-sm font-bold tracking-wide uppercase">
              Hours
            </h3>
            <div className="text-warm-gray flex flex-col gap-3 text-sm">
              {restaurantInfo.hours.map((schedule) => (
                <div key={schedule.days}>
                  <p className="text-cream/80 font-medium">{schedule.days}</p>
                  <p>{schedule.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-display text-cream mb-4 text-sm font-bold tracking-wide uppercase">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {restaurantInfo.socials.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.platform}`}
                    className="text-warm-gray hover:text-cream transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-cream/10 text-warm-gray mt-12 flex items-center justify-between border-t pt-8 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights
            reserved.
          </p>
          <Link
            to="/login"
            className="text-warm-gray/50 hover:text-warm-gray transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

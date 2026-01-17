import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Parivar Gifts</h3>
                <p className="text-sm opacity-80">Since 2005</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your one-stop destination for premium gifts and home essentials. 
              Trusted by families across Nashik for over 18 years.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: '/products', label: 'All Products' },
                { path: '/products?category=gift-items', label: 'Gift Items' },
                { path: '/products?category=pooja-brass', label: 'Pooja Items' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Categories</h4>
            <ul className="space-y-3">
              {[
                'Kitchen & Dining',
                'Pooja & Brass Items',
                'Gift Hampers',
                'Home Essentials',
                'Festival Specials',
              ].map(category => (
                <li key={category}>
                  <Link 
                    to="/products"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Visit Our Store</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Mumbai Naka, behind KIMS Hospital,<br />
                  Nashik – 422001, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">info@parivargifts.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">10 AM - 9 PM (All Days)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© 2024 Parivar Gifts. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

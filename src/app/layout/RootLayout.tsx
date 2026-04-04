import { Outlet, NavLink } from "react-router";
import { useState, useCallback } from "react";
import { Menu, X, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS } from "../constants/designSystem";

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);
  
  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Top Info Bar - Desktop Only */}
      <div className="hidden md:flex items-center justify-between gap-4 bg-primary text-primary-foreground text-sm px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-6">
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{CONTACT_INFO.location}</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="flex items-center gap-2 font-bold text-2xl text-primary hover:opacity-80 transition-opacity"
            >
              <img 
                src="/tolwatts-logo.png" 
                alt="TolWatts Technology Logo" 
                className="h-10 w-auto"
              />
              <span className="hidden sm:inline">TolWatts</span>
            </NavLink>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md font-medium transition-all duration-200 ease-out ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <NavLink 
              to="/contact"
              className="hidden sm:inline-block px-6 py-2.5 rounded-lg font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity duration-200"
            >
              Get a Quote
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-3 space-y-1 sm:px-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className="block w-full mt-4 px-4 py-3 text-center rounded-lg font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity duration-200"
              >
                Get a Quote
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/tolwatts-logo.png" 
                  alt="TolWatts Technology Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-bold text-xl">TolWatts</span>
              </div>
              <p className="text-sm opacity-80">
                Reliable, affordable, and sustainable solar energy solutions tailored for homes and businesses across Nigeria.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {NAV_LINKS.filter((link) => link.to !== "/" && link.to !== "/contact").slice(0, 3).map((link) => (
                  <li key={link.to}>
                    <NavLink 
                      to={link.to} 
                      className="hover:opacity-75 transition-opacity duration-200"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/services" className="hover:opacity-75 transition-opacity duration-200">Residential Solar</a></li>
                <li><a href="/services" className="hover:opacity-75 transition-opacity duration-200">Commercial Systems</a></li>
                <li><a href="/services" className="hover:opacity-75 transition-opacity duration-200">Maintenance & Support</a></li>
                <li><a href="/services" className="hover:opacity-75 transition-opacity duration-200">Consultancy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{CONTACT_INFO.location}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:opacity-75 transition-opacity duration-200">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:opacity-75 transition-opacity duration-200">
                    {CONTACT_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} TolWatts Technology Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:opacity-100 transition-opacity duration-200">Privacy Policy</a>
              <a href="#terms" className="hover:opacity-100 transition-opacity duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2347068952359"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-200 z-50 animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}

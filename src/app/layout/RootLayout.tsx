import { Outlet, NavLink } from "react-router";
import { useState } from "react";
import { Menu, X, Sun, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm py-2 px-4 hidden md:flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-2"><Phone size={14} /> +234 706 895 2359</span>
          <span className="flex items-center gap-2"><Mail size={14} /> hello@tolwatts.com</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-2"><MapPin size={14} /> Lagos, Nigeria</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center gap-2 text-green-700 font-bold text-2xl">
                <Sun className="h-8 w-8 text-yellow-500" />
                TolWatts
              </NavLink>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-green-600 ${
                      isActive ? "text-green-700 border-b-2 border-green-600 pb-1" : "text-slate-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink to="/contact" className="bg-yellow-500 text-slate-900 px-5 py-2.5 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                Get a Quote
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-slate-600 hover:text-green-700 focus:outline-none"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? "bg-green-50 text-green-700" : "text-slate-600 hover:bg-slate-50 hover:text-green-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center bg-yellow-500 text-slate-900 px-5 py-3 rounded-md font-bold"
              >
                Get a Quote
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-2xl">
                <Sun className="h-6 w-6 text-yellow-500" />
                TolWatts
              </div>
              <p className="text-sm text-slate-400">
                Reliable, affordable, and sustainable solar energy solutions tailored for homes and businesses across Nigeria.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/about" className="hover:text-yellow-500 transition-colors">About Us</NavLink></li>
                <li><NavLink to="/services" className="hover:text-yellow-500 transition-colors">Our Services</NavLink></li>
                <li><NavLink to="/projects" className="hover:text-yellow-500 transition-colors">Projects</NavLink></li>
                <li><NavLink to="/blog" className="hover:text-yellow-500 transition-colors">Solar Resources</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/services" className="hover:text-yellow-500 transition-colors">Residential Solar</NavLink></li>
                <li><NavLink to="/services" className="hover:text-yellow-500 transition-colors">Commercial Installation</NavLink></li>
                <li><NavLink to="/services" className="hover:text-yellow-500 transition-colors">Service Apartments</NavLink></li>
                <li><NavLink to="/services" className="hover:text-yellow-500 transition-colors">Maintenance</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span>Lagos, Nigeria</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-yellow-500 shrink-0" />
                  <span>+234 706 895 2359</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-yellow-500 shrink-0" />
                  <span>hello@tolwatts.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} TolWatts Technology Ltd. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <NavLink to="#" className="hover:text-white">Privacy Policy</NavLink>
              <NavLink to="#" className="hover:text-white">Terms of Service</NavLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2347068952359"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors z-50 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe, Phone } from "lucide-react";
import gsap from "gsap";
import { prefersReducedMotion } from "../../utils/motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuRendered, setIsMobileMenuRendered] = useState(false);
  const mobileMenuRef = useRef(null);

  const openMobileMenu = () => {
    setIsMobileMenuRendered(true);
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // Reduced motion: skip the GSAP close tween and unmount immediately
    if (prefersReducedMotion()) setIsMobileMenuRendered(false);
  };

  // GSAP animation for Mobile Menu opening/closing
  useEffect(() => {
    const el = mobileMenuRef.current;
    if (!el) return;

    // Reduced motion: menu is already visible/invisible via state — no tween
    if (prefersReducedMotion()) return;

    gsap.killTweensOf(el);

    if (isMobileMenuOpen) {
      gsap.fromTo(
        el,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setIsMobileMenuRendered(false),
      });
    }

    return () => gsap.killTweensOf(el);
  }, [isMobileMenuOpen, isMobileMenuRendered]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Garibook Club", href: "#club" },
    { name: "VMS", href: "#vms" },
    { name: "Business", href: "#business" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight text-emerald-600 group-hover:opacity-90 transition-opacity">
              GARI<span className="text-gray-900">BOOK</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions (Language & Contact / CTA) */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language Selector */}
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md px-2 py-1"
            >
              <Globe className="w-4 h-4 text-gray-500" />
              <span>EN</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {/* Call Action / Emergency Contact */}
            <a
              href="tel:+880123456789"
              className="flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Help Center</span>
            </a>

            {/* Login / Action Button */}
            <button
              type="button"
              className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() =>
                isMobileMenuOpen ? closeMobileMenu() : openMobileMenu()
              }
              className="p-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuRendered && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 shadow-xl"
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-base font-semibold text-gray-800 hover:text-emerald-600 hover:bg-emerald-50/50 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <hr className="my-2 border-gray-100" />

            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-sm font-medium text-gray-500">Language</span>
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-bold text-gray-700"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>English (EN)</span>
              </button>
            </div>

            <button
              type="button"
              className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors shadow"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
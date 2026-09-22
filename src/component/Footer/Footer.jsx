// src/components/Footer/Footer.jsx
import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Send,
  ShieldCheck,
  Car,
} from "lucide-react";
import { prefersReducedMotion } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}


const quickLinks = [
  { name: "About Us", href: "#top" },
  { name: "Services", href: "#services" },
  { name: "Garibook Club", href: "#club" },
  { name: "Business", href: "#business" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  { name: "Intercity Car Rental", href: "#services" },
  { name: "Hourly & Daily Rental", href: "#services" },
  { name: "Airport Transfer", href: "#services" },
  { name: "Event & Wedding Cars", href: "#services" },
  { name: "Corporate Fleet", href: "#business" },
  { name: "VMS Dashboard", href: "#vms" },
];

const contactInfo = [
  { icon: MapPin, text: "Gulshan Avenue, Dhaka 1212, Bangladesh" },
  { icon: Phone, text: "+880 1234-567890", href: "tel:+880123456789" },
  { icon: Mail, text: "support@garibook.com", href: "mailto:support@garibook.com" },
  { icon: Clock, text: "Sat – Thu, 9:00 AM – 10:00 PM" },
];

const socialLinks = [
  { name: "Facebook", href: "#facebook", icon: FacebookIcon },
  { name: "Instagram", href: "#instagram", icon: InstagramIcon },
  { name: "LinkedIn", href: "#linkedin", icon: LinkedinIcon },
  { name: "YouTube", href: "#youtube", icon: YoutubeIcon },
];

export default function Footer() {
  const footerRef = useRef(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
      });

      tl.from(".footer-brand", {
        y: 28, opacity: 0, duration: 0.55, ease: "power3.out", clearProps: "all",
      })
        .from(".footer-col", {
          y: 28, opacity: 0, duration: 0.55, stagger: 0.1, ease: "power3.out", clearProps: "all",
        }, "-=0.35")
        .from(".footer-newsletter", {
          y: 24, opacity: 0, duration: 0.55, ease: "power3.out", clearProps: "all",
        }, "-=0.3")
        .from(".footer-bottom", {
          y: 16, opacity: 0, duration: 0.45, ease: "power2.out", clearProps: "all",
        }, "-=0.25");
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    window.setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative bg-gradient-to-b from-emerald-950 to-gray-950 text-gray-300 overflow-hidden scroll-mt-24"
    >
      {/* Background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Top accent line */}
      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand column */}
          <div className="footer-brand lg:col-span-4">
            <a href="#top" className="inline-flex items-center gap-2 group mb-5">
              <span className="text-2xl font-black tracking-tight text-white">
                GARI<span className="text-emerald-400">BOOK</span>
              </span>
            </a>

            <p className="text-sm sm:text-[15px] leading-relaxed text-gray-400 mb-6 max-w-sm">
              Bangladesh&apos;s trusted intercity car rental platform — verified drivers,
              transparent pricing, and comfortable rides across all 64 districts.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-xs font-semibold text-emerald-300 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Drivers
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-xs font-semibold text-emerald-300 px-3 py-1.5 rounded-full">
                <Car className="w-3.5 h-3.5" />
                64 Districts
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white hover:-translate-y-1 flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav className="footer-col lg:col-span-2" aria-label="Quick links">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-emerald-400 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="footer-col lg:col-span-3" aria-label="Services">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-emerald-400 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-col lg:col-span-3">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text, href }) => {
                const inner = (
                  <span className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-sm text-gray-400 leading-relaxed pt-1.5 group-hover:text-emerald-300 transition-colors">
                      {text}
                    </span>
                  </span>
                );

                return (
                  <li key={text}>
                    {href ? (
                      <a href={href} className="group flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg">
                        {inner}
                      </a>
                    ) : (
                      <div className="group">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter mt-10 rounded-3xl bg-gradient-to-r from-emerald-600/15 via-emerald-600/8 to-teal-600/15 border border-emerald-500/20 px-5 py-7 sm:px-8 sm:py-8 flex flex-col lg:flex-row lg:items-center gap-6 justify-between backdrop-blur-sm">
          <div className="max-w-md">
            <h3 className="text-white font-black text-lg sm:text-xl tracking-tight mb-1.5">
              Stay in the loop
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Travel deals, route guides, and fleet updates — straight to your inbox. No spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col sm:flex-row gap-3" aria-label="Newsletter signup">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 min-w-0 bg-white/10 border border-white/15 text-white placeholder-gray-400 text-sm rounded-xl px-4 py-3 outline-none focus:border-emerald-400 focus:bg-white/15 focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          {subscribed && (
            <p className="text-sm font-semibold text-emerald-300 lg:w-full lg:max-w-xs lg:text-right" role="status">
              Thanks! You&apos;re subscribed.
            </p>
          )}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Garibook. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <a href="#privacy" className="text-gray-500 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-700" aria-hidden="true" />
            <a href="#terms" className="text-gray-500 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded">
              Terms of Service
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-700" aria-hidden="true" />
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// src/components/PromoSection/AppPromo.jsx
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Navigation, CalendarCheck, ShieldCheck } from "lucide-react";
import { appPromoData } from "../../data/homeData";
import fallbackImage from "../../assets/hero.svg";
import { prefersReducedMotion } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Navigation, text: "Live driver tracking" },
  { icon: CalendarCheck, text: "Instant trip booking" },
  { icon: ShieldCheck, text: "Verified & insured rides" },
];

function AppleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M3.6 2.7c-.37.2-.6.6-.6 1.1v16.4c0 .5.23.9.6 1.1l9.1-9.3L3.6 2.7zm11.1 6.4L5.3 3.4l8.5 8.6 1.1-1.1.8-.8zm.9.9-1.1 1.1 1.1 1.1 3.4-1.9c.7-.4.7-1.4 0-1.8l-3.4-1.9v3.4zM5.3 20.6l9.4-5.7-1.9-1.9-7.5 7.6z" />
    </svg>
  );
}

export default function AppPromo() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      tl.from(".app-promo-eyebrow", {
        y: 20, opacity: 0, duration: 0.5, ease: "power3.out", clearProps: "all",
      })
        .from(".app-promo-content", {
          y: 32, opacity: 0, duration: 0.6, ease: "power3.out", clearProps: "all",
        }, "-=0.3")
        .from(".app-promo-feature", {
          x: -20, opacity: 0, duration: 0.45, stagger: 0.1, ease: "power2.out", clearProps: "all",
        }, "-=0.3")
        .from(".app-promo-cta", {
          y: 16, opacity: 0, duration: 0.45, stagger: 0.1, ease: "power2.out", clearProps: "all",
        }, "-=0.25")
        .from(".app-promo-image", {
          y: 48, opacity: 0, scale: 0.96, duration: 0.8, ease: "power3.out", clearProps: "all",
        }, "-=0.85")
        .from(".app-promo-float", {
          y: 14, opacity: 0, duration: 0.5, stagger: 0.12, ease: "power2.out", clearProps: "all",
        }, "-=0.35");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-24 -left-20 w-[420px] h-[420px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -right-16 w-[380px] h-[380px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="app-promo-eyebrow inline-flex items-center gap-2 bg-white/10 border border-white/15 text-emerald-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Smartphone className="w-3.5 h-3.5" />
              Mobile App
            </span>

            <div className="app-promo-content">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] mb-5">
                {appPromoData.title.split("Garibook")[0]}
                <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  Garibook
                </span>
                {appPromoData.title.split("Garibook")[1]}
              </h2>

              <p className="text-emerald-100/85 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0">
                {appPromoData.description}
              </p>

              <ul className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {features.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="app-promo-feature inline-flex items-center gap-2 bg-white/10 border border-white/15 text-sm text-emerald-50 px-3.5 py-2 rounded-full backdrop-blur-sm"
                  >
                    <Icon className="w-4 h-4 text-emerald-300 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="#download-ios"
                  className="app-promo-cta group inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-emerald-50 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-black/25 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
                >
                  <AppleIcon className="w-7 h-7" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-normal text-gray-500 uppercase tracking-wide">
                      Download on the
                    </span>
                    <span className="block text-sm sm:text-base">App Store</span>
                  </span>
                </a>

                <a
                  href="#download-android"
                  className="app-promo-cta group inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-emerald-50 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-black/25 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
                >
                  <PlayIcon className="w-6 h-6 text-emerald-600" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-normal text-gray-500 uppercase tracking-wide">
                      Get it on
                    </span>
                    <span className="block text-sm sm:text-base">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="app-promo-image relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Glow behind phone */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-emerald-400/25 rounded-full blur-[70px] pointer-events-none"
            />

            <div className="relative w-64 sm:w-72 lg:w-80 rounded-[2.75rem] border-[7px] border-gray-950/90 bg-gray-950 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.65)] overflow-hidden">
              {/* Notch */}
              <span className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-full z-20" />
              <img
                src={appPromoData.image}
                alt="Garibook mobile app"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
                className="w-full h-[420px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              {/* Screen scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-emerald-950/20 pointer-events-none" />
            </div>

            {/* Floating chip: driver arriving */}
            <div className="app-promo-float absolute -left-2 sm:left-0 top-16 flex items-center gap-2.5 bg-white/95 text-gray-900 rounded-2xl px-3.5 py-2.5 shadow-xl border border-white/60 backdrop-blur-sm">
              <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Navigation className="w-4 h-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  Live
                </span>
                <span className="block text-xs font-semibold">Driver arriving in 3 min</span>
              </span>
            </div>

            {/* Floating chip: rating */}
            <div className="app-promo-float absolute -right-1 sm:right-0 bottom-16 flex items-center gap-2 bg-white/95 text-gray-900 rounded-2xl px-3.5 py-2.5 shadow-xl border border-white/60 backdrop-blur-sm">
              <span className="text-amber-400 text-sm leading-none">★</span>
              <span className="text-xs font-bold">4.9</span>
              <span className="text-[11px] text-gray-500">· 500k+ trips</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

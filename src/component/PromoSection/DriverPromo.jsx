// src/components/PromoSection/DriverPromo.jsx
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BadgePercent,
  CalendarClock,
  Wallet,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { driverPromoData } from "../../data/homeData";
import fallbackImage from "../../assets/hero.svg";
import { prefersReducedMotion } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: CalendarClock, text: "Flexible hours — drive when you want" },
  { icon: Wallet, text: "Weekly payouts straight to your bank" },
  { icon: MapPin, text: "Smart ride alerts near your location" },
];

export default function DriverPromo() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      tl.from(".driver-image", {
        x: -48, opacity: 0, duration: 0.75, ease: "power3.out", clearProps: "all",
      })
        .from(".driver-badge", {
          y: 16, opacity: 0, duration: 0.4, ease: "power2.out", clearProps: "all",
        }, "-=0.45")
        .from(".driver-title", {
          y: 28, opacity: 0, duration: 0.55, ease: "power3.out", clearProps: "all",
        }, "-=0.25")
        .from(".driver-desc", {
          y: 20, opacity: 0, duration: 0.45, ease: "power2.out", clearProps: "all",
        }, "-=0.3")
        .from(".driver-benefit", {
          x: -18, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", clearProps: "all",
        }, "-=0.25")
        .from(".driver-cta", {
          y: 16, opacity: 0, duration: 0.45, ease: "power2.out", clearProps: "all",
        }, "-=0.2")
        .from(".driver-float", {
          y: 14, opacity: 0, duration: 0.5, ease: "power2.out", clearProps: "all",
        }, "-=0.4");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="driver-signup"
      className="relative py-20 sm:py-24 bg-gray-50 overflow-hidden scroll-mt-24"
    >
      {/* Background glows */}
      <div className="absolute top-16 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100 grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="driver-image relative h-72 sm:h-96 lg:h-auto min-h-full">
            <img
              src={driverPromoData.image}
              alt="Garibook professional driver"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent pointer-events-none" />

            {/* Floating earnings chip */}
            <div className="driver-float absolute bottom-5 left-5 right-5 sm:right-auto flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/70 max-w-xs">
              <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Wallet className="w-5 h-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs font-bold text-gray-900">Keep 100% of your fare</p>
                <p className="text-[11px] text-gray-500">On select trips — no hidden cuts</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="driver-badge inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-5 w-fit">
              <BadgePercent className="w-3.5 h-3.5" />
              0% Commission
            </span>

            <h2 className="driver-title text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
              Be a Smart{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Driver
              </span>
            </h2>

            <p className="driver-desc text-gray-600 text-base sm:text-lg leading-relaxed mb-7">
              {driverPromoData.description}
            </p>

            <ul className="space-y-3.5 mb-9">
              {benefits.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="driver-benefit flex items-start gap-3 text-gray-700 font-medium text-sm sm:text-base"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <span className="flex items-center gap-2">
                    {text}
                    <Icon className="w-4 h-4 text-gray-400 hidden sm:block" aria-hidden="true" />
                  </span>
                </li>
              ))}
            </ul>

            <div className="driver-cta flex flex-wrap gap-4">
              <a
                href="#driver-signup"
                className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-emerald-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span>Register as Driver</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="#driver-faq"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3.5 rounded-xl border border-gray-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

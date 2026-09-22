import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ShieldCheck, Star, Award, Smartphone } from "lucide-react";
import BookingForm from "../BookingForm/BookingForm";
import { prefersReducedMotion } from "../../utils/motion";

export default function Hero() {
  const heroRef = useRef(null);

  // GSAP Entrance & Floating Badge Animations
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: -15, duration: 0.5 })
        .from(".hero-heading", { opacity: 0, y: 25, duration: 0.7 }, "-=0.2")
        .from(".hero-subtext", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-trust-tags", { opacity: 0, y: 15, duration: 0.5 }, "-=0.3")
        .from(".hero-booking-panel", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
        .from(".hero-floating-card", { opacity: 0, scale: 0.8, stagger: 0.15, duration: 0.6 }, "-=0.5");

      // Continuous subtle floating effect for badges
      gsap.to(".float-badge-1", {
        y: -8,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });

      gsap.to(".float-badge-2", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[90vh] bg-gradient-to-br from-emerald-950 via-gray-900 to-slate-950 text-white overflow-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Top Tag Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="hero-badge inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-emerald-300 uppercase">
              #1 Premium Car Rental in Bangladesh
            </span>
          </div>

          <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6">
            Freedom in Every <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Journey</span>
          </h1>

          <p className="hero-subtext text-gray-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Experience reliable, comfortable, and transparent car rentals across 64 districts with verified drivers and instant booking.
          </p>

          {/* Key Value Pill Highlights */}
          <div className="hero-trust-tags flex flex-wrap justify-center items-center gap-6 mt-6 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Safe & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.9 Star Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>No Hidden Charges</span>
            </div>
          </div>
        </div>

        {/* Floating Stat Badges (Desktop Only Decor) */}
        <div className="hidden lg:block">
          <div className="hero-floating-card float-badge-1 absolute top-28 left-0 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 z-20 max-w-[210px]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-gray-300 font-medium">Completed Trips</p>
              <p className="text-base font-bold text-white">500,000+</p>
            </div>
          </div>

          <div className="hero-floating-card float-badge-2 absolute top-40 right-0 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 z-20 max-w-[210px]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/30">
              <Smartphone className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-gray-300 font-medium">Download App</p>
              <p className="text-base font-bold text-white">iOS & Android</p>
            </div>
          </div>
        </div>

        {/* Booking Form Wrapper with Glassmorphism */}
        <div className="hero-booking-panel mt-8 max-w-4xl mx-auto">
          <div className="relative group">
            {/* Subtle Gradient Glow Behind Booking Box */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500" />
            
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/20 text-gray-900">
              <BookingForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
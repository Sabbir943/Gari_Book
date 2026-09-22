import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Car, MapPin, CheckCircle, Compass } from "lucide-react";
import { journeyStepsData } from "../../data/homeData";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Car,
  MapPin,
  CheckCircle,
};

export default function JourneySteps() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".journey-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "all",
      })
        .from(
          ".journey-heading",
          {
            y: 28,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.3"
        )
        .from(
          ".journey-subtext",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.35"
        )
        .from(
          ".journey-line",
          {
            scaleX: 0,
            duration: 1,
            ease: "power2.inOut",
            clearProps: "all",
          },
          "-=0.2"
        )
        .from(
          ".journey-step-card",
          {
            y: 48,
            opacity: 0,
            scale: 0.94,
            duration: 0.65,
            stagger: 0.18,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.75"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white"
    >
      {/* Decorative Background Glows */}
      <div className="absolute -top-28 left-1/4 w-[420px] h-[420px] bg-emerald-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 right-1/5 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

      {/* Top Accent Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="journey-eyebrow inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5" />
            How It Works
          </span>

          <h2 className="journey-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
            Freedom in Every{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="journey-subtext mt-4 text-emerald-50/70 text-base sm:text-lg leading-relaxed">
            Book your ride in three easy steps with transparent pricing and
            instant confirmation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Animated Connector Line (desktop) */}
          <div className="hidden md:block absolute top-[7.5rem] left-[16%] right-[16%] h-px journey-line origin-center">
            <div className="h-px w-full bg-gradient-to-r from-emerald-500/0 via-emerald-400/70 to-teal-400/0" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_4px_rgba(52,211,153,0.55)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {journeyStepsData.map((item) => {
              const Icon = iconMap[item.icon] || Car;

              return (
                <article
                  key={item.step}
                  className="journey-step-card group relative rounded-3xl p-6 sm:p-7 bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-emerald-400/45 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/60"
                >
                  {/* Soft hover glow */}
                  <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />

                  {/* Ghost Step Number */}
                  <span className="pointer-events-none absolute top-4 right-5 text-6xl font-black text-white/[0.04] group-hover:text-emerald-400/10 tracking-wider transition-colors duration-300 select-none">
                    {item.step}
                  </span>

                  {/* Header: Icon + Step Pill */}
                  <div className="relative flex items-start justify-between gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-teal-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-emerald-600/30 group-hover:-rotate-3 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-400/25 text-emerald-300 text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="relative text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-emerald-100 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="relative text-sm text-emerald-50/65 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent bar */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-500" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

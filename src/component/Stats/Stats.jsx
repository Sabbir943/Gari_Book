import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Route, Users, Star } from "lucide-react";
import { statsData } from "../../data/homeData";

gsap.registerPlugin(ScrollTrigger);

const iconMap = { MapPin, Route, Users, Star };

export default function Stats() {
  const containerRef = useRef(null);
  const numberRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "all",
      });

      statsData.forEach((stat, index) => {
        const el = numberRefs.current[index];
        if (!el) return;

        const counter = { value: 0 };
        gsap.to(counter, {
          value: stat.value,
          duration: 1.8,
          delay: 0.2 + index * 0.12,
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            const decimals = stat.decimals ?? 0;
            el.textContent = counter.value.toFixed(decimals);
          },
        });
      });

      gsap.from(".stats-divider", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        scaleX: 0,
        duration: 1.2,
        ease: "power2.out",
        clearProps: "all",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white"
    >
      {/* Decorative Background Glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Accent Hairline */}
      <div className="stats-divider absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent origin-center" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || MapPin;

            return (
              <div
                key={stat.id}
                className="stat-card group relative rounded-2xl p-5 sm:p-6 text-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/40 backdrop-blur-md transition-all duration-300"
              >
                {/* Icon Tile */}
                <div className="mx-auto mb-4 w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/25 group-hover:border-emerald-400/60 transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Animated Number */}
                <p className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
                  <span
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-emerald-400">{stat.suffix}</span>
                </p>

                {/* Label */}
                <p className="mt-2.5 text-[11px] sm:text-xs font-semibold text-emerald-100/80 uppercase tracking-widest">
                  {stat.label}
                </p>

                {/* Hover Glow Bar */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

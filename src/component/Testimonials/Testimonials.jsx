// src/components/Testimonials/Testimonials.jsx
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, BadgeCheck, MessageSquareQuote } from "lucide-react";
import { testimonialsData } from "../../data/homeData";
import fallbackImage from "../../assets/hero.svg";
import { prefersReducedMotion } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      tl.from(".testimonials-eyebrow", {
        y: 20, opacity: 0, duration: 0.5, ease: "power3.out", clearProps: "all",
      })
        .from(".testimonials-heading", {
          y: 28, opacity: 0, duration: 0.6, ease: "power3.out", clearProps: "all",
        }, "-=0.3")
        .from(".testimonials-subtext", {
          y: 20, opacity: 0, duration: 0.5, ease: "power3.out", clearProps: "all",
        }, "-=0.35")
        .from(".testimonial-card", {
          y: 48, opacity: 0, scale: 0.96, duration: 0.65, stagger: 0.14, ease: "power3.out", clearProps: "all",
        }, "-=0.25");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 bg-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-10 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="testimonials-eyebrow inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Testimonials
          </span>

          <h2 className="testimonials-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            Our Passengers{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Speak For Us
            </span>
          </h2>

          <p className="testimonials-subtext mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Read real feedback from people who rely on Garibook for daily travel and long trips.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <figure
              key={item.id}
              className="testimonial-card group relative bg-white p-7 sm:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Hover top accent */}
              <span className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:w-full transition-all duration-500" />

              {/* Decorative quote watermark */}
              <Quote
                className="absolute -top-1 right-4 w-16 h-16 text-emerald-50 rotate-180 select-none pointer-events-none group-hover:text-emerald-100 transition-colors duration-300"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400" aria-label={`${item.rating} out of 5 stars`}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <blockquote className="text-gray-700 text-sm sm:text-[15px] leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </blockquote>
              </div>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-gray-100 relative">
                <span className="relative shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-100 group-hover:ring-emerald-300 transition-all duration-300"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </span>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 truncate">{item.name}</h4>
                  <p className="text-xs text-gray-500 truncate">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

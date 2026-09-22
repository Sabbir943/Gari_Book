// src/components/PromoSection/PromoSection.jsx
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PromoSection({
  badge,
  title,
  description,
  bullets,
  ctaText,
  ctaHref,
  image,
  imagePosition = "right",
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".promo-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: imagePosition === "right" ? -40 : 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".promo-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: imagePosition === "right" ? 40 : -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [imagePosition]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 overflow-hidden border-b border-gray-100"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imagePosition === "left" ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Content Column */}
          <div
            className={`promo-content ${
              imagePosition === "left" ? "lg:col-start-2" : ""
            }`}
          >
            {badge && (
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                {badge}
              </span>
            )}

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
              {title}
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              {description}
            </p>

            {bullets && bullets.length > 0 && (
              <ul className="space-y-3 mb-8">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href={ctaHref || "#"}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image / Graphic Column */}
          <div
            className={`promo-image ${
              imagePosition === "left" ? "lg:col-start-1" : ""
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl group">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
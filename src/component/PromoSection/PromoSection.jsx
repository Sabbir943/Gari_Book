import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { promoSectionsData } from "../../data/homeData";
import fallbackImage from "../../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function PromoSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray(".promo-block", sectionRef.current);

      blocks.forEach((block) => {
        const media = block.querySelector(".promo-media");
        const imageOnRight = media?.classList.contains("media-right");
        const fromX = imageOnRight ? 56 : -56;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 78%",
          },
        });

        tl.from(block.querySelector(".promo-badge"), {
          y: 16,
          opacity: 0,
          duration: 0.45,
          ease: "power3.out",
          clearProps: "all",
        })
          .from(
            block.querySelector(".promo-title"),
            {
              y: 28,
              opacity: 0,
              duration: 0.55,
              ease: "power3.out",
              clearProps: "all",
            },
            "-=0.25"
          )
          .from(
            block.querySelector(".promo-desc"),
            {
              y: 20,
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
              clearProps: "all",
            },
            "-=0.3"
          )
          .from(
            block.querySelectorAll(".promo-bullet"),
            {
              x: -16,
              opacity: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "all",
            },
            "-=0.25"
          )
          .from(
            block.querySelector(".promo-cta"),
            {
              y: 16,
              opacity: 0,
              duration: 0.45,
              ease: "power3.out",
              clearProps: "all",
            },
            "-=0.2"
          )
          .from(
            media,
            {
              x: fromX,
              opacity: 0,
              duration: 0.75,
              ease: "power3.out",
              clearProps: "all",
            },
            "-=0.9"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {promoSectionsData.map((promo, index) => {
          const imageOnRight = promo.imagePosition !== "left";

          return (
            <div
              key={promo.id}
              id={promo.id}
              className={`promo-block scroll-mt-24 py-16 sm:py-20 ${
                index > 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Text Content Column */}
                <div
                  className={`promo-content ${
                    imageOnRight ? "" : "lg:order-2"
                  }`}
                >
                  {promo.badge && (
                    <span className="promo-badge inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {promo.badge}
                    </span>
                  )}

                  <h2 className="promo-title text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
                    {promo.title}
                  </h2>

                  <p className="promo-desc text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                    {promo.description}
                  </p>

                  {promo.bullets?.length > 0 && (
                    <ul className="space-y-3.5 mb-8">
                      {promo.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="promo-bullet flex items-start gap-3 text-gray-700 font-medium text-sm sm:text-base"
                        >
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={promo.ctaHref || "#"}
                    className="promo-cta group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-emerald-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    <span>{promo.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </a>
                </div>

                {/* Image / Graphic Column */}
                <div
                  className={`promo-media relative ${
                    imageOnRight ? "media-right lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Offset Decorative Frame */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-emerald-500/25 to-teal-500/15 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"
                  />

                  <div className="relative group rounded-[1.5rem] overflow-hidden border border-gray-200 bg-gray-100 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                      className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Gradient Scrime */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent pointer-events-none" />

                    {/* Floating Trust Chip */}
                    <div className="absolute bottom-4 left-4 right-4 sm:right-auto flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/60">
                      <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 leading-tight">
                          Verified & Insured
                        </p>
                        <p className="text-[11px] text-gray-500 leading-tight">
                          Trusted partner network
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

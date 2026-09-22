import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPinned, Users } from "lucide-react";
import { useCasesData } from "../../data/homeData";
import fallbackImage from "../../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".usecases-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "all",
      })
        .from(
          ".usecases-heading",
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
          ".usecases-subtext",
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
          ".use-case-card",
          {
            y: 56,
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 bg-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-10 -left-28 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="usecases-eyebrow inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <MapPinned className="w-3.5 h-3.5" />
            Use Cases
          </span>

          <h2 className="usecases-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            Tailored for Every{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Travel Need
            </span>
          </h2>

          <p className="usecases-subtext mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Whether for quick airport drop-offs or family tours, Garibook has
            the right ride for you.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {useCasesData.map((useCase) => (
            <article
              key={useCase.id}
              className="use-case-card group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300 flex flex-col"
            >
              {/* Hover Top Accent Bar */}
              <span className="absolute top-0 left-0 z-20 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:w-full transition-all duration-500" />

              {/* Media */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Scrim for tag readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-slate-900/15 pointer-events-none" />

                {/* Tag Badge */}
                {useCase.tag && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md border border-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {useCase.tag}
                  </span>
                )}

                {/* Floating guest chip */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-full border border-white/15 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  Book in minutes
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">
                  {useCase.subtitle}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                  {useCase.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {useCase.description}
                </p>

                <button
                  type="button"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-emerald-600 hover:text-white text-gray-800 font-semibold text-sm py-3 rounded-xl transition-all duration-300 border border-gray-200 hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 group/btn"
                >
                  <span>Book This Ride</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

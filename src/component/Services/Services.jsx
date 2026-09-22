import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Car, Clock, Plane, Sparkles, ArrowRight } from "lucide-react";
import { servicesData } from "../../data/homeData";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Car,
  Clock,
  Plane,
  Sparkles,
};

export default function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".services-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "all",
      })
        .from(
          ".services-heading",
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
          ".services-subtext",
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
          ".service-card",
          {
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 0.65,
            stagger: 0.12,
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
      id="services"
      className="relative py-20 sm:py-24 bg-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="services-eyebrow inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            What We Offer
          </span>

          <h2 className="services-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="services-subtext mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Tailored transportation solutions designed to give you comfort,
            flexibility, and safety.
          </p>
        </div>

        {/* Data-Driven Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Car;

            return (
              <article
                key={service.id}
                className="service-card group relative bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Hover Top Accent Bar */}
                <span className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:w-full transition-all duration-500" />

                {/* Watermark Index */}
                <span className="absolute -top-2 -right-2 text-7xl font-black text-gray-100 group-hover:text-emerald-50 transition-colors duration-300 select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {service.tag && (
                  <span className="absolute top-5 right-5 z-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md shadow-emerald-600/30">
                    {service.tag}
                  </span>
                )}

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-600/25 group-hover:-rotate-6 transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
                  <span className="group-hover:underline underline-offset-4">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

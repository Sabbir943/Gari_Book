// src/components/Blogs/Blogs.jsx
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { blogsData } from "../../data/homeData";
import fallbackImage from "../../assets/hero.svg";
import { prefersReducedMotion } from "../../utils/motion";

gsap.registerPlugin(ScrollTrigger);

export default function Blogs() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      tl.from(".blogs-heading", {
        y: 28, opacity: 0, duration: 0.6, ease: "power3.out", clearProps: "all",
      })
        .from(".blogs-subtext", {
          y: 20, opacity: 0, duration: 0.5, ease: "power3.out", clearProps: "all",
        }, "-=0.35")
        .from(".blogs-cta", {
          y: 16, opacity: 0, duration: 0.45, ease: "power2.out", clearProps: "all",
        }, "-=0.3")
        .from(".blog-card", {
          y: 48, opacity: 0, scale: 0.96, duration: 0.65, stagger: 0.14, ease: "power3.out", clearProps: "all",
        }, "-=0.25");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="relative py-20 sm:py-24 bg-gray-50 overflow-hidden scroll-mt-24">
      {/* Background glows */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              Our Blog
            </span>
            <h2 className="blogs-heading text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Beyond{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            <p className="blogs-subtext mt-3 text-gray-600 text-base sm:text-lg">
              Travel guides, car rental tips, and fleet news.
            </p>
          </div>

          <a
            href="#all-articles"
            className="blogs-cta group self-start md:self-auto inline-flex items-center gap-2 bg-white hover:bg-emerald-600 hover:text-white text-emerald-700 font-semibold text-sm px-5 py-3 rounded-xl border border-emerald-200 hover:border-emerald-600 shadow-sm hover:shadow-lg hover:shadow-emerald-600/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>Show All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="blog-card group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300 flex flex-col"
            >
              {/* Hover top accent */}
              <span className="relative z-10 block h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:w-full transition-all duration-500" />

              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-slate-900/10 pointer-events-none" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md border border-white/70">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-5">
                  {blog.excerpt}
                </p>

                <a
                  href={`#blog-${blog.id}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 group-hover:text-emerald-700"
                >
                  <span className="group-hover:underline underline-offset-4">Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

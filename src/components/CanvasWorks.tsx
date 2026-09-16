import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

const DESIGN_CATEGORIES = ["UI/UX", "UI/UX & Branding", "Graphic Design", "Branding"];

const PROJECTS = [
  { id: 1, titleKey: "project.1.title", descKey: "project.1.desc", category: "Fullstack / AI",    tags: ["Android", "PyTorch", "TFLite", "ML Kit"], img: "/deepfake-project.png",       link: "https://github.com/sachinskumar2004/Realtime_Deepfake_Detector_for_Android", badgeColor: "bg-cyan-400 text-black" },
  { id: 2, titleKey: "project.2.title", descKey: "project.2.desc", category: "Fullstack",          tags: ["React", "PHP", "Cloud"],                   img: "/bloodbank-project.png",                                                                                               badgeColor: "bg-rose-400 text-black" },
  { id: 3, titleKey: "project.3.title", descKey: "project.3.desc", category: "Frontend",           tags: ["Bootstrap", "Typed.js", "Frontend"],        img: "/mulearncep-project.png",   link: "https://github.com/sachinskumar2004/mulearncep",                                  badgeColor: "bg-emerald-400 text-black" },
  { id: 4, titleKey: "project.4.title", descKey: "project.4.desc", category: "UI/UX",              tags: ["Figma", "UI/UX", "3D Art"],                 img: "/mulearn-redesign-thumb.jpg",                                                                                         badgeColor: "bg-purple-400 text-black" },
  { id: 5, titleKey: "project.5.title", descKey: "project.5.desc", category: "UI/UX & Branding",  tags: ["Logo Design", "3D Graphic", "Branding"],    img: "/logo-design-project.jpg",  link: "https://www.behance.net/sachinsachu17/services/649567/Logo-Design4",              badgeColor: "bg-amber-400 text-black" },
  { id: 6, titleKey: "project.6.title", descKey: "project.6.desc", category: "Graphic Design",    tags: ["Brochure", "Flyer", "UI/UX"],               img: "/notice-design-thumb.jpg",  link: "https://www.behance.net/sachinsachu17/services/649493/Flyer-and-Brochure-Design", badgeColor: "bg-pink-400 text-black" },
  { id: 7, titleKey: "project.7.title", descKey: "project.7.desc", category: "Graphic Design",    tags: ["ID Card", "Branding", "UI/UX"],             img: "/idcard-design-project.jpg",link: "https://www.behance.net/sachinsachu17/services/648745/ID-card-designing",         badgeColor: "bg-orange-400 text-black" },
  { id: 8, titleKey: "project.8.title", descKey: "project.8.desc", category: "Graphic Design",    tags: ["Poster Design", "Artwork", "Branding"],     img: "/poster-design-1.jpg",      link: "https://www.behance.net/sachinsachu17",                                           badgeColor: "bg-lime-400 text-black" },
];

const FILTER_KEYS = [
  { value: "All",          labelKey: "works.filter.all" },
  { value: "Fullstack",    labelKey: "works.filter.fullstack" },
  { value: "Frontend",     labelKey: "works.filter.frontend" },
  { value: "UI/UX",        labelKey: "works.filter.uiux" },
  { value: "Branding",     labelKey: "works.filter.branding" },
  { value: "Graphic Design", labelKey: "works.filter.graphic" },
];

export function CanvasWorks() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { lang, t } = useLanguage();

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="works" className="relative py-24 px-4 overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0099FF] mb-2">
              {t("works.eyebrow")}
            </p>
            <h2 className={`font-blocky font-black uppercase text-neutral-900 dark:text-white tracking-tight ${
              lang === "ml" ? "text-3xl sm:text-4xl" : "text-4xl sm:text-6xl"
            }`}>
              {t("works.title")}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {FILTER_KEYS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveCategory(f.value)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase transition-all cursor-pointer ${activeCategory === f.value
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-md scale-105"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const CardWrapper = p.link
              ? ({ children }: { children: React.ReactNode }) => (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="group relative bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-100 rounded-2xl overflow-hidden shadow-[5px_5px_0px_#000000] dark:shadow-[5px_5px_0px_#FFFFFF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000000] dark:hover:shadow-[8px_8px_0px_#FFFFFF] transition-all duration-300 flex flex-col justify-between"
                  >{children}</a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="group relative bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-100 rounded-2xl overflow-hidden shadow-[5px_5px_0px_#000000] dark:shadow-[5px_5px_0px_#FFFFFF] flex flex-col justify-between">
                    {children}
                  </div>
                );

            return (
              <CardWrapper key={p.id}>
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b-2 border-neutral-900 dark:border-neutral-100">
                    <img src={p.img} alt={t(p.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider ${p.badgeColor} border border-black shadow-sm`}>
                      {p.category}
                    </div>
                    {p.link && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-black font-mono text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                          {t("works.view")}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className={`font-blocky font-bold text-neutral-900 dark:text-white uppercase mb-2 ${
                      lang === "ml" ? "text-sm line-clamp-2" : "text-xl line-clamp-1"
                    }`}>
                      {t(p.titleKey)}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-body leading-relaxed mb-4 line-clamp-2">
                      {t(p.descKey)}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-neutral-100 dark:border-neutral-800/80 mt-2">
                  <div className="flex flex-wrap gap-1">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-[10px] text-neutral-600 dark:text-neutral-300 font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <span className="p-2 rounded-lg bg-black text-white dark:bg-white dark:text-black shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}

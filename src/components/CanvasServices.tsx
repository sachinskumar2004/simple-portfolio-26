import React from "react";
import { useLanguage } from "../LanguageContext";

const SERVICES = [
  {
    num: "01",
    titleKey: "services.s1.title",
    descKey: "services.s1.desc",
    color: "bg-cyan-300 dark:bg-cyan-900/60 text-black dark:text-cyan-200",
    link: "https://www.behance.net/sachinsachu17",
    tags: ["React", "TypeScript"],
  },
  {
    num: "02",
    titleKey: "services.s2.title",
    descKey: "services.s2.desc",
    color: "bg-amber-300 dark:bg-amber-900/60 text-black dark:text-amber-200",
    link: "https://www.behance.net/sachinsachu17",
    tags: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    num: "03",
    titleKey: "services.s3.title",
    descKey: "services.s3.desc",
    color: "bg-emerald-300 dark:bg-emerald-900/60 text-black dark:text-emerald-200",
    link: "https://github.com/sachinskumar2004/Realtime_Deepfake_Detector_for_Android",
    tags: ["TFLite", "PyTorch", "LLM APIs"],
  },
  {
    num: "04",
    titleKey: "services.s4.title",
    descKey: "services.s4.desc",
    color: "bg-purple-300 dark:bg-purple-900/60 text-black dark:text-purple-200",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTM1MzE2NTU5MDkxOTIz?story_media_id=3836713332657592534_51267515708&igsh=YTc5cGVweWxieHps",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
  },
];

export function CanvasServices() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF0055] mb-2">
            {t("services.eyebrow")}
          </p>
          <h2 className="font-blocky text-4xl sm:text-6xl font-black uppercase text-neutral-900 dark:text-white tracking-tight">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="group relative bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-2xl p-6 shadow-[5px_5px_0px_#000000] dark:shadow-[5px_5px_0px_#FFFFFF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000000] dark:hover:shadow-[8px_8px_0px_#FFFFFF] transition-all duration-300 flex flex-col justify-between"
            >
              {s.link && (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-black dark:border-white bg-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-black dark:text-white flex items-center justify-center transition-all duration-300 group/btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-45"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              )}
              <div>
                <div className={`w-12 h-12 rounded-xl border border-black flex items-center justify-center font-mono text-xl font-extrabold mb-6 ${s.color} shadow-sm`}>
                  {s.num}
                </div>
                <h3 className={`font-blocky font-bold text-neutral-900 dark:text-white uppercase mb-3 leading-tight ${
                  lang === "ml" ? "text-base" : "text-xl"
                }`}>
                  {t(s.titleKey)}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 font-body leading-relaxed">
                  {t(s.descKey)}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700 font-mono text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

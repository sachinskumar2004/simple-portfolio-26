import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";

export function CanvasAbout() {
  const { t } = useLanguage();

  const SLIDESHOW = [
    "/me/njan/njan1.jpg",
    "/me/njan/njan2.jpg",
    "/me/njan/njan3.jpg",
    "/me/njan/njan4.jpg",
    "/me/njan/njan5.jpg",
  ];

  const WRK_SLIDESHOW = [
    "/me/wrk/wrk1.jpg",  "/me/wrk/wrk2.jpg",  "/me/wrk/wrk3.jpg",
    "/me/wrk/wrk4.jpg",  "/me/wrk/wrk5.jpg",  "/me/wrk/wrk6.jpg",
    "/me/wrk/wrk7.jpg",  "/me/wrk/wrk8.jpg",  "/me/wrk/wrk9.jpg",
    "/me/wrk/wrk10.jpg", "/me/wrk/wrk11.jpg", "/me/wrk/wrk12.jpg",
    "/me/wrk/wrk13.jpg", "/me/wrk/wrk14.jpg", "/me/wrk/wrk15.jpg",
    "/deepfake-project.png",
    "/bloodbank-project.png",
    "/mulearn-redesign-thumb.jpg",
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [wrkIndex, setWrkIndex]     = useState(0);

  useEffect(() => {
    const t1 = setInterval(() => setSlideIndex((i) => (i + 1) % SLIDESHOW.length), 3000);
    // Offset wrk by 1.5s so both don't flip simultaneously
    const t2 = setTimeout(() => {
      const t3 = setInterval(() => setWrkIndex((i) => (i + 1) % WRK_SLIDESHOW.length), 3000);
      return () => clearInterval(t3);
    }, 1500);
    return () => { clearInterval(t1); clearTimeout(t2); };
  }, []);

  return (
    <section id="about" className="relative pt-24 pb-2 -mb-[80px] px-4 overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Header Badge & Handwritten Arrow */}
        <div className="flex flex-col items-center text-center mb-12 relative">
          <div className="absolute -top-10 right-1/3 hidden sm:flex items-center gap-1 font-handwritten text-lg text-neutral-600 dark:text-neutral-300">
            <span>{t("about.label")}</span>
            <svg className="w-8 h-8 text-neutral-400 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <div className="relative inline-block px-4 py-1.5 bg-white dark:bg-neutral-900 border-2 border-[#0099FF] rounded font-mono text-sm font-bold tracking-widest uppercase text-neutral-900 dark:text-white shadow-sm">
            <div className="figma-handle tl"></div>
            <div className="figma-handle tr"></div>
            <div className="figma-handle bl"></div>
            <div className="figma-handle br"></div>
            <span>{t("about.badge")}</span>
          </div>
        </div>

        {/* Main text */}
        <div className="text-center max-w-3xl mx-auto mb-[45px]">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">{t("about.eyebrow")}</p>
          <p className="text-2xl sm:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {t("about.body")}
          </p>
        </div>

        {/* Wide grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">

          {/* Left Polaroid — Slideshow */}
          <div className="md:col-span-4 flex justify-end -translate-y-[212px] -translate-x-[165px]">
            <div
              className="p-3 bg-white text-black shadow-xl border border-neutral-300 rounded-sm rotate-[-5deg] hover:rotate-0 transition-transform duration-300 w-[290px] cursor-pointer select-none"
              onClick={() => setSlideIndex((i) => (i + 1) % SLIDESHOW.length)}
              title="Click to next photo"
            >
              <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden mb-3">
                {SLIDESHOW.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Sachin ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === slideIndex ? 1 : 0 }}
                  />
                ))}
              </div>
              <div className="font-handwritten text-center text-sm font-bold text-neutral-700">
                {t("about.polaroid1")}
              </div>
            </div>
          </div>


          {/* Center Skills Tag Pills */}
          <div className="md:col-span-4 flex flex-col items-center gap-3">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
              {t("about.competencies")}
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              <span className="px-4 py-2 rounded-lg bg-amber-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.webdev")}</span> 🌐
              </span>
              <span className="px-4 py-2 rounded-lg bg-emerald-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.uiux")}</span> 🎨
              </span>
              <span className="px-4 py-2 rounded-lg bg-pink-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.programming")}</span> 👨‍💻
              </span>
              <span className="px-4 py-2 rounded-lg bg-cyan-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.aiml")}</span> 🤖
              </span>
              <span className="px-4 py-2 rounded-lg bg-purple-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.cyber")}</span> 🔐
              </span>
              <span className="px-4 py-2 rounded-lg bg-lime-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.graphic")}</span> ✏️
              </span>
              <span className="px-4 py-2 rounded-lg bg-sky-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.photography")}</span> 📷
              </span>
              <span className="px-4 py-2 rounded-lg bg-rose-400 text-black font-mono font-bold text-xs shadow-sm flex items-center gap-1.5 border border-black hover:scale-105 transition-transform cursor-default">
                <span>{t("about.colourgrading")}</span> 🎞️
              </span>
            </div>
          </div>

          {/* Right Polaroid — Slideshow */}
          <div className="md:col-span-4 flex justify-start -translate-y-[182px] translate-x-[165px]">
            <div
              className="p-3 bg-white text-black shadow-xl border border-neutral-300 rounded-sm rotate-[5deg] hover:rotate-0 transition-transform duration-300 w-[290px] cursor-pointer select-none"
              onClick={() => setWrkIndex((i) => (i + 1) % WRK_SLIDESHOW.length)}
              title="Click to next photo"
            >
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-3">
                {WRK_SLIDESHOW.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Work ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === wrkIndex ? 1 : 0 }}
                  />
                ))}
              </div>
              <div className="font-handwritten text-center text-sm font-bold text-neutral-700">
                {t("about.polaroid2")}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

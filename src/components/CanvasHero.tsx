import React from "react";
import { useLanguage } from "../LanguageContext";

interface CanvasHeroProps {
  onNavigate: (sectionId: string) => void;
}

export function CanvasHero({ onNavigate }: CanvasHeroProps) {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background Canvas Elements */}
      <div className="absolute inset-0 bg-canvas-grid opacity-70 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Multiplayer Cursor Badge 1 (Top Left) */}
        <div className="hidden md:flex absolute -top-4 left-6 items-center gap-2 px-3 py-1.5 rounded-full bg-[#CAF23D] text-black font-mono text-xs font-bold shadow-md animate-float z-20">
          <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2l18 9-9 2-2 9z"/>
          </svg>
          <span>{t("hero.location")}</span>
        </div>

        {/* Floating Multiplayer Cursor Badge 2 (Top Right) */}
        <div className="hidden md:flex absolute -top-2 right-8 items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF0055] text-white font-mono text-xs font-bold shadow-md animate-float style-2 z-20" style={{ animationDelay: "1s" }}>
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2l18 9-9 2-2 9z"/>
          </svg>
          <span>{t("hero.scholar")}</span>
        </div>

        {/* Handwritten "my name is" label */}
        <div className="relative mb-2">
          <span className="font-handwritten text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-semibold tracking-wide">
            {t("hero.mynameis")}
          </span>
          <svg className="w-24 h-3 text-neutral-400 absolute -bottom-2 left-1/2 -translate-x-1/2" viewBox="0 0 100 20" fill="none">
            <path d="M5 12 Q 30 4, 50 14 T 95 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* FIGMA SELECTION BOUNDING BOX TITLE */}
        <div className="relative my-6 p-4 sm:p-8 rounded-xl bg-white/70 dark:bg-black/60 backdrop-blur-sm figma-selection-box max-w-full">
          {/* Bounding Box Handles */}
          <div className="figma-handle tl"></div>
          <div className="figma-handle tr"></div>
          <div className="figma-handle bl"></div>
          <div className="figma-handle br"></div>
          <div className="figma-handle tc"></div>
          <div className="figma-handle bc"></div>
          <div className="figma-handle ml"></div>
          <div className="figma-handle mr"></div>

          {/* Main Giant Canvas Title */}
          <h1 className="font-snowball text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-neutral-900 dark:text-white leading-none">
            Sachin S Kumar
          </h1>
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono font-bold mb-6 text-center max-w-xs sm:max-w-none">
          <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-500 animate-ping"></span>
          <span className={lang === "ml" ? "text-[10px] leading-snug" : "text-xs"}>{t("hero.available")}</span>
        </div>

        {/* Floating Multiplayer Cursor Badge 3 (Left) */}
        <div className="hidden lg:flex absolute bottom-24 -left-12 items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF] text-black font-mono text-xs font-bold shadow-md rotate-[-6deg] animate-float z-20">
          <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2l18 9-9 2-2 9z"/>
          </svg>
          <span>{t("hero.engineer")}</span>
        </div>

        {/* Floating Multiplayer Cursor Badge 4 (Right) */}
        <div className="hidden lg:flex absolute bottom-24 -right-12 items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF9900] text-black font-mono text-xs font-bold shadow-md rotate-[4deg] animate-float z-20">
          <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2l18 9-9 2-2 9z"/>
          </svg>
          <span>{t("hero.designer")}</span>
        </div>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 max-w-2xl leading-snug mb-8">
          {t("hero.tagline")} <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-lg md:text-xl align-middle">🟢</span> <span className="inline-block text-pink-500">⚙️</span>.
        </p>

        {/* Action CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate("contact")}
            className="px-7 py-3.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-mono text-sm font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-lg cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <span>{t("hero.contact_btn")}</span>
          </button>

          <button
            onClick={() => onNavigate("works")}
            className="px-7 py-3.5 rounded-xl bg-white dark:bg-neutral-900 border-2 border-black dark:border-white text-black dark:text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-[4px_4px_0px_#000000] dark:shadow-[4px_4px_0px_#FFFFFF] cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <span>{t("hero.works_btn")}</span>
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 opacity-60 flex flex-col items-center font-handwritten text-xs text-neutral-500">
          <span>{t("hero.scroll")}</span>
          <svg className="w-6 h-8 text-neutral-400 mt-1 animate-bounce" viewBox="0 0 24 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2v28M5 23l7 7 7-7"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
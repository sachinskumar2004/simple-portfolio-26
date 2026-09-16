import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";

interface CanvasHeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function CanvasHeader({ onNavigate, activeSection, darkMode, onToggleDarkMode }: CanvasHeaderProps) {
  const [time, setTime] = useState<string>("");
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: "hero",      labelKey: "nav.home" },
    { id: "about",     labelKey: "nav.about" },
    { id: "academics", labelKey: "nav.academics" },
    { id: "works",     labelKey: "nav.works" },
    { id: "services",  labelKey: "nav.services" },
    { id: "contact",   labelKey: "nav.contact" },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
  };

  return (
    <header className="anim-slide-down fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0D0D0E]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 select-none">
      {/* Top Menu Bar */}
      <div className="relative flex items-center justify-between px-3 sm:px-4 py-2 border-b border-neutral-200/60 dark:border-neutral-800/60 text-xs font-mono">

        {/* Left: Desktop Nav / Mobile Brand */}
        <div className="flex items-center gap-3">
          <nav className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-1 rounded font-bold uppercase transition-all cursor-pointer ${
                  activeSection === item.id
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white"
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </nav>

          {/* Mobile: Wordmark */}
          <span className="sm:hidden font-mono font-black text-xs tracking-wider uppercase text-neutral-900 dark:text-white">
            Sachin S Kumar
          </span>
        </div>

        {/* Center Live Clock — desktop only */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 px-3 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-[11px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>{time || "7:23:34 PM"}</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Language Toggle (visible on both mobile and desktop) */}
          <div className="flex items-center text-[11px] font-bold tracking-wider border border-neutral-200 dark:border-neutral-800 rounded px-2 py-0.5 text-neutral-500 bg-neutral-100/50 dark:bg-neutral-800/50">
            <button
              onClick={() => setLang("en")}
              className={`transition-colors cursor-pointer ${lang === "en" ? "text-black dark:text-white font-black" : "opacity-40 hover:opacity-70"}`}
            >
              EN
            </button>
            <span className="mx-1 opacity-30">|</span>
            <button
              onClick={() => setLang("ml")}
              className={`transition-colors cursor-pointer font-sans ${lang === "ml" ? "text-black dark:text-white font-black" : "opacity-40 hover:opacity-70"}`}
            >
              {String.fromCharCode(0x0D2E, 0x0D32)}
            </button>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={onToggleDarkMode}
            className="w-6 h-6 rounded flex items-center justify-center border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all cursor-pointer"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar — Visible on mobile (< sm), scrollable horizontally */}
      <div className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 overflow-x-auto no-scrollbar border-b border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/95 dark:bg-[#111113]/95 text-[11px] font-mono">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded font-bold uppercase transition-all shrink-0 cursor-pointer ${
              activeSection === item.id
                ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            }`}
          >
            {t(item.labelKey)}
          </button>
        ))}
      </div>

      {/* Canvas Ruler Line */}
      <div className="relative h-4 w-full bg-neutral-100/80 dark:bg-neutral-900/80 overflow-hidden flex items-center px-2 text-[9px] font-mono text-neutral-400 dark:text-neutral-600 select-none">
        <div className="canvas-ruler-h absolute inset-0 opacity-60"></div>
        <div className="relative z-10 w-full flex justify-between px-4 font-mono text-[9px]">
          <span>0</span><span>100</span><span>200</span><span>300</span><span>400</span>
          <span>500</span><span>600</span><span>700</span><span>800</span><span>900</span>
          <span>1000</span><span>1100</span><span>1200</span><span>1400</span>
        </div>
      </div>
    </header>
  );
}
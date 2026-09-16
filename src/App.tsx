import React, { useState, useEffect } from "react";
import { CanvasHeader } from "./components/CanvasHeader";
import { CanvasHero } from "./components/CanvasHero";
import { CanvasAbout } from "./components/CanvasAbout";
import { CanvasAcademics } from "./components/CanvasAcademics";
import { CanvasActivities } from "./components/CanvasActivities";
import { CanvasWorks } from "./components/CanvasWorks";
import { CanvasServices } from "./components/CanvasServices";
import { CanvasContact } from "./components/CanvasContact";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import "./styles/canvas.css";

export function CanvasStudioApp() {
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [contentReady, setContentReady] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [gridEnabled, setGridEnabled] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // Loader fades out at 2.25s over 0.4s â†’ fully gone at 2.65s
  // Unmount loader overlay slightly after content is revealed
  useEffect(() => {
    const contentTimer = setTimeout(() => setContentReady(true), 2650);
    const loaderTimer  = setTimeout(() => setShowLoader(false), 2800);
    return () => { clearTimeout(contentTimer); clearTimeout(loaderTimer); };
  }, []);

  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    const handleMouseLeave = () => setCursorVisible(false);
    const handleMouseEnter = () => setCursorVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LanguageProvider>
    <div id="canvas-page" className={`min-h-screen font-body transition-colors duration-300 ${darkMode ? "dark bg-[#0A0A0B] text-white" : "bg-[#FAFAFA] text-neutral-900"}`}>

      {/* Motion Blur Fade-In Loader Overlay */}
      {showLoader && (
        <div className="canvas-loader-overlay">
          <div className="relative flex flex-col items-center gap-3">
            <p className="canvas-loader-wordmark" style={{ color: '#facc15', textShadow: '0 0 40px rgba(250,204,21,0.4)' }}>Enthallaa ??</p>
            <p className="font-mono text-[11px] text-neutral-500 tracking-widest uppercase"
               style={{ animation: "motionBlurIn 1.0s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}>
              Loading experience
            </p>
          </div>
          <div className="canvas-loader-bar" />
        </div>
      )}


      {/* Background Canvas Grid Pattern â€” only after loader */}
      {contentReady && gridEnabled && (
        <div className="fixed inset-0 bg-canvas-grid pointer-events-none z-0"></div>
      )}

      {/* Interactive Custom Canvas Mouse Cursor (Desktop only, replacing default cursor) */}
      <div
        className={`hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999] items-center gap-1.5 transition-opacity duration-150 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
          willChange: "transform",
        }}
      >
        <svg className="w-4 h-4 fill-[#0099FF] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 2l18 9-9 2-2 9z" stroke="white" strokeWidth="1.2" />
        </svg>
        <span className="px-2 py-0.5 rounded bg-[#0099FF] text-white font-mono font-bold text-[10px] shadow-sm select-none">
          You
        </span>
      </div>

      {contentReady && (
        <>
          {/* Top Header */}
          <CanvasHeader onNavigate={handleNavigate} activeSection={activeSection} darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />

          {/* Main Canvas Sections */}
          <main className="relative z-10 canvas-blur-in">
            <CanvasHero onNavigate={handleNavigate} />
            <CanvasAbout />
            <CanvasAcademics />
            <CanvasActivities />
            <CanvasWorks />
            <CanvasServices />
            <CanvasContact />

            {/* Footer */}
            <FooterText />
          </main>
        </>
      )}

    </div>
    </LanguageProvider>
  );
}

function FooterText() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 py-8 text-center font-mono text-xs border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#0D0D0E]">
      <span className="text-neutral-400 dark:text-neutral-500">{t("footer.text")}</span>
    </footer>
  );
}


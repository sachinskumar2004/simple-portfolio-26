import React, { useState, useEffect } from "react";

interface CanvasPreloaderProps {
  onComplete: () => void;
}

export function CanvasPreloader({ onComplete }: CanvasPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING CANVAS ENGINE...");

  useEffect(() => {
    const duration = 1800; // ms
    let start: number | null = null;
    let raf: number;

    const animate = (time: number) => {
      if (start === null) start = time;
      const pct = Math.min((time - start) / duration, 1);
      const current = Math.round(pct * 100);
      setProgress(current);

      if (current > 30 && current < 65) {
        setStatusText("LOADING VECTOR & UI ASSETS...");
      } else if (current >= 65 && current < 95) {
        setStatusText("MOUNTING FIGMA BOUNDING BOXES...");
      } else if (current >= 95) {
        setStatusText("CANVAS READY 🚀");
      }

      if (pct < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setLeaving(true);
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 200);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#0A0A0B] text-white flex flex-col items-center justify-center p-6 select-none transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${leaving ? "-translate-y-full" : "translate-y-0"}`}>
      
      {/* Background Canvas Grid Pattern */}
      <div className="absolute inset-0 bg-canvas-grid opacity-20 pointer-events-none"></div>

      {/* Laser Scanning Line */}
      <div className="absolute inset-x-0 h-1 bg-[#00E5FF] shadow-[0_0_15px_#00E5FF] anim-canvas-scan z-10"></div>

      {/* Center Preloader Card */}
      <div className="relative z-20 max-w-md w-full bg-[#121214] border-2 border-white rounded-3xl p-8 shadow-[8px_8px_0px_#00E5FF] flex flex-col items-center text-center">
        
        {/* Figma Bounding Box Handles */}
        <div className="figma-handle tl"></div>
        <div className="figma-handle tr"></div>
        <div className="figma-handle bl"></div>
        <div className="figma-handle br"></div>

        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF] text-black font-mono text-[11px] font-bold uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
          <span>CANVAS STUDIO &middot; 2026</span>
        </div>

        {/* Giant Progress Percentage Counter */}
        <div className="font-blocky text-6xl sm:text-7xl font-black text-white tracking-tighter mb-4">
          {progress}<span className="text-[#00E5FF]">%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-3 bg-neutral-800 rounded-full border border-neutral-700 overflow-hidden mb-6 p-0.5">
          <div
            className="h-full bg-gradient-to-r from-[#00E5FF] via-[#CAF23D] to-[#FF0055] rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Status Text */}
        <div className="font-mono text-xs font-bold text-neutral-400 tracking-wider uppercase h-6 flex items-center">
          <span>{statusText}</span>
        </div>

      </div>

      {/* Corner Canvas Rulers */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 flex items-center gap-2">
        <span>X: {progress * 12}px</span>
        <span>Y: {progress * 8}px</span>
      </div>

      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-neutral-600">
        SACHIN S KUMAR &middot; PORTFOLIO ENGINE
      </div>

    </div>
  );
}

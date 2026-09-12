import React, { useState } from "react";

interface CanvasToolbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  gridEnabled: boolean;
  onToggleGrid: () => void;
}

export function CanvasToolbar({ darkMode, onToggleDarkMode, gridEnabled, onToggleGrid }: CanvasToolbarProps) {
  const [activeTool, setActiveTool] = useState<string>("select");
  const [zoom, setZoom] = useState<number>(100);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const playClick = () => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // Audio context fallback
    }
  };

  const handleToolClick = (tool: string) => {
    setActiveTool(tool);
    playClick();
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-2 border-black dark:border-white shadow-[6px_6px_0px_#000000] dark:shadow-[6px_6px_0px_#FFFFFF] font-mono text-xs select-none">
      
      {/* Tools Group */}
      <div className="flex items-center gap-1 pr-2 border-r border-neutral-300 dark:border-neutral-700">
        {[
          { id: "select", icon: "↖", label: "Select" },
          { id: "pan", icon: "✋", label: "Hand" },
          { id: "note", icon: "📝", label: "Note" },
          { id: "sticker", icon: "🎨", label: "Sticker" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => handleToolClick(t.id)}
            className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center transition-all cursor-pointer ${
              activeTool === t.id
                ? "bg-black text-white dark:bg-white dark:text-black scale-105"
                : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
            title={t.label}
          >
            <span>{t.icon}</span>
          </button>
        ))}
      </div>

      {/* Toggles Group */}
      <div className="flex items-center gap-1 pr-2 border-r border-neutral-300 dark:border-neutral-700">
        {/* Grid Toggle */}
        <button
          onClick={() => {
            onToggleGrid();
            playClick();
          }}
          className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center transition-all cursor-pointer ${
            gridEnabled
              ? "bg-cyan-400 text-black border border-black"
              : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          }`}
          title="Toggle Grid"
        >
          <span>#</span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            onToggleDarkMode();
            playClick();
          }}
          className="w-8 h-8 rounded-lg font-bold flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
          title="Toggle Theme"
        >
          <span>{darkMode ? "☀️" : "🌙"}</span>
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => {
            setSoundEnabled(!soundEnabled);
            playClick();
          }}
          className={`w-8 h-8 rounded-lg font-bold flex items-center justify-center transition-all cursor-pointer ${
            soundEnabled ? "text-emerald-500" : "text-neutral-400 opacity-50"
          }`}
          title="Toggle Sound Effects"
        >
          <span>{soundEnabled ? "🔊" : "🔇"}</span>
        </button>
      </div>

      {/* Zoom Controls */}
      <div className="flex items-center gap-1.5 px-2 text-neutral-800 dark:text-neutral-200">
        <button
          onClick={() => {
            setZoom((z) => Math.max(50, z - 10));
            playClick();
          }}
          className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-800 font-bold cursor-pointer"
        >
          -
        </button>

        <span className="w-10 text-center font-bold text-[11px]">{zoom}%</span>

        <button
          onClick={() => {
            setZoom((z) => Math.min(150, z + 10));
            playClick();
          }}
          className="w-6 h-6 rounded flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-neutral-800 font-bold cursor-pointer"
        >
          +
        </button>
      </div>

    </div>
  );
}

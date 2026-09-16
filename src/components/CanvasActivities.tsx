import React from "react";

const KEY_ROLES = [
  { label: "Gen. Secretary", org: "ASCI", period: "2024-25", accent: "border-cyan-400 text-cyan-400" },
  { label: "Design Lead", org: "GDG On Campus", period: "2024-25", accent: "border-amber-400 text-amber-400" },
  { label: "Design Lead", org: "Mulearn", period: "2022-24", accent: "border-purple-400 text-purple-400" },
  { label: "Design Head", org: "Tech Fest", period: "2024-25", accent: "border-lime-400 text-lime-400" },
];

export function CanvasActivities() {
  return (
    <div className="px-4 py-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 shrink-0">
          Compliments
        </span>
        <div className="flex flex-wrap gap-2">
          {KEY_ROLES.map((r, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono text-[10px] font-bold uppercase tracking-wider ${r.accent} bg-transparent hover:opacity-80 transition-opacity`}
            >
              {r.label}
              <span className="opacity-50 font-normal normal-case tracking-normal">
                {r.org} &middot; {r.period}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

export function CanvasAcademics() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { t } = useLanguage();

  const EDUCATION = [
    {
      id: 1,
      degreeKey: "academics.deg1",
      instKey: "academics.inst1",
      score: "CGPA: 7.35/10",
      date: "MAY 2026",
      scoreColor: "text-[#facc15]",
    },
    {
      id: 2,
      degreeKey: "academics.deg2",
      instKey: "academics.inst2",
      score: "Percentage: 95/100",
      date: "MARCH 2022",
      scoreColor: "text-[#facc15]",
    },
    {
      id: 3,
      degreeKey: "academics.deg3",
      instKey: "academics.inst3",
      score: "Percentage: 95/100",
      date: "JUNE 2020",
      scoreColor: "text-[#facc15]",
    },
  ];

  return (
    <section
      id="academics"
      className="relative py-24 px-4 overflow-hidden border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-14">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#facc15] mb-3">
            {t("academics.eyebrow")}
          </p>
          <h2 className="font-blocky text-5xl sm:text-7xl font-black uppercase text-neutral-900 dark:text-white tracking-tight leading-none flex items-end gap-0">
            {t("academics.title")}
            <span className="relative inline-flex items-end">
              S
              <span
                className="absolute -top-1 right-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-500"
                aria-hidden="true"
              />
            </span>
          </h2>
        </div>

        {/* Education List */}
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              onMouseEnter={() => setHoveredId(edu.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 px-2 transition-all duration-300 rounded-lg ${
                hoveredId === edu.id
                  ? "bg-neutral-100 dark:bg-neutral-900/60 pl-4"
                  : ""
              }`}
            >
              {/* Left - degree info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-blocky text-lg sm:text-xl font-black uppercase text-neutral-900 dark:text-white tracking-tight mb-1 leading-snug">
                  {t(edu.degreeKey)}
                </h3>
                <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 mb-1.5">
                  {t(edu.instKey)}
                </p>
                <p className={`font-mono text-sm font-bold ${edu.scoreColor}`}>
                  {edu.score}
                </p>
              </div>

              {/* Right - date pill badge */}
              <div className="shrink-0">
                <span className="inline-block px-4 py-1.5 rounded-full border border-neutral-900 dark:border-neutral-200 font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 dark:text-white transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  {edu.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

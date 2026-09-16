import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

export function CanvasContact() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { lang, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:sachinskumarofficial@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Project Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Green Mascot */}
            <div className="relative mb-6">
              <div className="w-24 h-28 sm:w-32 sm:h-36 bg-[#10B981] rounded-[45%_55%_60%_40%/50%_60%_40%_50%] flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex gap-2">
                  <div className="w-3.5 h-6 bg-black rounded-full"></div>
                  <div className="w-3.5 h-6 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Giant Display Title */}
            <h2 className={`font-blocky font-black uppercase text-neutral-900 dark:text-white leading-[0.88] tracking-tighter mb-6 ${
              lang === "ml"
                ? "text-4xl sm:text-5xl lg:text-6xl"
                : "text-6xl sm:text-8xl lg:text-9xl"
            }`}>
              {t("contact.title").split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>

            {/* Paragraph Text */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-md">
              {t("contact.body")}
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="w-full bg-[#EAB308] border-4 border-black rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[8px_8px_0px_#000000] dark:shadow-[8px_8px_0px_#FFFFFF]">
              
              {/* Lightning Bolt Stripe Background Art */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path d="M-50 100 L250 -50 L150 200 L450 50 L200 450 L300 250 L-50 500 Z" fill="#000000"/>
                </svg>
              </div>

              {/* Floating White Info Note */}
              <div className="relative z-10 bg-white text-black p-4 rounded-xl border-2 border-black font-handwritten text-sm font-bold shadow-md max-w-xs mb-8 rotate-[-2deg]">
                {t("contact.note")}
              </div>

              {/* Main Contact Button */}
              <div className="relative z-10">
                <button
                  onClick={() => setFormOpen(!formOpen)}
                  className="w-full py-5 px-6 rounded-2xl bg-[#00E5FF] border-4 border-black text-black font-blocky text-3xl sm:text-5xl font-black uppercase tracking-tight shadow-[6px_6px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_#000000] transition-all cursor-pointer flex items-center justify-between gap-4 group"
                >
                  <span>{t("contact.btn")}</span>
                  <div className="w-12 h-12 rounded-xl bg-[#FF0055] border-2 border-black flex items-center justify-center text-white group-hover:rotate-45 transition-transform shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </button>
              </div>

              {/* Expandable Quick Form */}
              {formOpen && (
                <form onSubmit={handleSubmit} className="relative z-10 mt-6 bg-white text-black p-6 rounded-2xl border-3 border-black shadow-lg space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase mb-1">{t("contact.label.name")}</label>
                      <input
                        type="text" required placeholder={t("contact.ph.name")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 rounded-lg border-2 border-black bg-neutral-50 text-xs font-body focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase mb-1">{t("contact.label.email")}</label>
                      <input
                        type="email" required placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 rounded-lg border-2 border-black bg-neutral-50 text-xs font-body focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1">{t("contact.label.subject")}</label>
                    <input
                      type="text" required placeholder={t("contact.ph.subject")}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-2.5 rounded-lg border-2 border-black bg-neutral-50 text-xs font-body focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1">{t("contact.label.message")}</label>
                    <textarea
                      required rows={3} placeholder={t("contact.ph.message")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 rounded-lg border-2 border-black bg-neutral-50 text-xs font-body focus:bg-white focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] font-mono text-neutral-500">{t("contact.hint")}</span>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-black text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      {t("contact.send")}
                    </button>
                  </div>
                </form>
              )}

              {/* Direct Mail & Social Cards */}
              <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                <a href="mailto:sachinskumarofficial@gmail.com" className="px-4 py-2 rounded-xl bg-white text-black border-2 border-black font-mono text-xs font-bold hover:bg-black hover:text-white transition-colors">
                  ✉ sachinskumarofficial@gmail.com
                </a>
                <a href="https://github.com/sachinskumar2004" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-white text-black border-2 border-black font-mono text-xs font-bold hover:bg-black hover:text-white transition-colors">
                  ⚡ GitHub
                </a>
                <a href="https://www.instagram.com/sachin_panayam" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-white text-black border-2 border-black font-mono text-xs font-bold hover:bg-black hover:text-white transition-colors">
                  📸 Instagram
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

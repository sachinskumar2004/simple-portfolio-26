// Language context for EN / ML toggle
import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "ml";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const translations: Record<string, Record<Lang, string>> = {
  // ── Nav ──────────────────────────────────────────────────────────────────
  "nav.home":      { en: "🏠 HOME",      ml: "🏠 ഹോം" },
  "nav.about":     { en: "✱ ABOUT",      ml: "✱ ആബൗട്ട്" },
  "nav.academics": { en: "🎓 ACADEMICS",  ml: "🎓 അക്കാദമിക്" },
  "nav.works":     { en: "☷ WORKS",      ml: "☷ പ്രവൃത്തി" },
  "nav.services":  { en: "⚡ SERVICES",   ml: "⚡ സേവനങ്ങൾ" },
  "nav.contact":   { en: "♥ CONTACT",    ml: "♥ ബന്ധം" },

  // ── Hero ─────────────────────────────────────────────────────────────────
  "hero.location":    { en: "Currently at CUSAT Kochi",     ml: "നിലവിൽ CUSAT കൊച്ചിയിൽ" },
  "hero.scholar":     { en: "MTECH CS Scholar",             ml: "MTECH CS പഠിതാവ്" },
  "hero.mynameis":    { en: "my name is",                   ml: "എന്റെ പേര്" },
  "hero.available":   { en: "● AVAILABLE FOR THOUGHTFUL PROJECTS", ml: "● ചിന്താശേഷിയുള്ള പ്രൊജക്ടുകൾക്ക് ലഭ്യം" },
  "hero.engineer":    { en: "SOFTWARE ENGINEER",            ml: "സോഫ്റ്റ്‌വെയർ എഞ്ചിനിയർ" },
  "hero.designer":    { en: "GRAPHIC · UI DESIGNER",        ml: "ഗ്രാഫിക് · UI ഡിസൈനർ" },
  "hero.tagline":     { en: "I design outstanding digital products", ml: "ഞാൻ അസാധാരണ ഡിജിറ്റൽ ഉൽപ്പന്നങ്ങൾ ഡിസൈൻ ചെയ്യുന്നു" },
  "hero.contact_btn": { en: ">> CONTACT ME",               ml: ">> എന്നെ ബന്ധപ്പെടുക" },
  "hero.works_btn":   { en: "⚡ EXPLORE WORKS",            ml: "⚡ പ്രവൃത്തി കാണുക" },
  "hero.scroll":      { en: "scroll down to explore",       ml: "താഴേക്ക് സ്ക്രോൾ ചെയ്യുക" },

  // ── About ─────────────────────────────────────────────────────────────────
  "about.badge":        { en: "SOFTWARE DEVELOPER • KERALA",   ml: "സോഫ്റ്റ്‌വെയർ ഡെവലപ്പർ • കേരള" },
  "about.label":        { en: "about me!",                    ml: "എന്നെ കുറിച്ച്!" },
  "about.eyebrow":      { en: "Building Reliable, Scalable & User-Centric Software", ml: "വിശ്വസനീയവും സ്കേലബിൾ ആയതുമായ സോഫ്റ്റ്‌വെയർ നിർമ്മിക്കുന്നു" },
  "about.body":         { en: "Expertise in Python & C Language, Web Development, UI/UX Design, and actively advancing skills in Cybersecurity and Artificial Intelligence.", ml: "Python & C ഭാഷ, വെബ് ഡെവലപ്‌മെന്റ്, UI/UX ഡിസൈൻ എന്നിവയിൽ പ്രാവീണ്യം, സൈബർ സുരക്ഷ, ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസ് എന്നിവയിൽ ക്രിയാത്മകമായി നൈപുണ്യം വർദ്ധിപ്പിക്കുന്നു." },
  "about.polaroid1":    { en: "2026 · Kerala",               ml: "2026 · കേരള" },
  "about.polaroid2":    { en: "my workspace & builds",       ml: "എന്റെ വർക്ക്സ്പേസ്" },
  "about.competencies": { en: "❖ CORE COMPETENCIES",        ml: "❖ പ്രധാന കഴിവുകൾ" },
  "about.webdev":       { en: "Web Development",             ml: "വെബ് ഡെവലപ്‌മെന്റ്" },
  "about.uiux":         { en: "UI/UX Design",                ml: "UI/UX ഡിസൈൻ" },
  "about.programming":  { en: "Programming",                 ml: "പ്രോഗ്രാമിങ്" },
  "about.aiml":         { en: "AI / ML",                     ml: "AI / ML" },
  "about.cyber":        { en: "Cybersecurity",               ml: "സൈബർ സുരക്ഷ" },
  "about.graphic":      { en: "Graphic Design",              ml: "ഗ്രാഫിക് ഡിസൈൻ" },
  "about.photography":  { en: "Photography",                 ml: "ഫോട്ടോഗ്രഫി" },
  "about.colourgrading":{ en: "Colour Grading",              ml: "കളർ ഗ്രേഡിങ്" },

  // ── Academics ─────────────────────────────────────────────────────────────
  "academics.eyebrow": { en: "{03 / EDUCATION}",   ml: "{03 / വിദ്യാഭ്യാസം}" },
  "academics.title":   { en: "ACADEMICS",          ml: "അക്കാദമിക്" },
  "academics.deg1":    { en: "BACHELOR OF TECHNOLOGY (BTECH) IN COMPUTER SCIENCE", ml: "കമ്പ്യൂട്ടർ സയൻസിൽ ബാച്ചിലർ ഓഫ് ടെക്നോളജി (BTECH)" },
  "academics.inst1":   { en: "College of Engineering Perumon, Kerala Technological University", ml: "കോളേജ് ഓഫ് എഞ്ചിനിയറിംഗ് പെരുമൺ, കേരള ടെക്നോളജിക്കൽ യൂണിവേഴ്സിറ്റി" },
  "academics.deg2":    { en: "HIGHER SECONDARY EDUCATION (BIOLOGY SCIENCE)", ml: "ഹയർ സെക്കൻഡറി വിദ്യാഭ്യാസം (ജീവശാസ്ത്ര സ്ട്രീം)" },
  "academics.inst2":   { en: "Govt HSS Perinad, Kollam, Kerala",            ml: "ഗവ. ഹയർ സെക്കൻഡറി സ്കൂൾ പേരിനാട്, കൊല്ലം, കേരള" },
  "academics.deg3":    { en: "HIGH SCHOOL",                                  ml: "ഹൈ സ്കൂൾ" },
  "academics.inst3":   { en: "Govt HS Panayil, Kollam, Kerala",             ml: "ഗവ. ഹൈ സ്കൂൾ പണയിൽ, കൊല്ലം, കേരള" },

  // ── Works ─────────────────────────────────────────────────────────────────
  "works.eyebrow": { en: "✿ PORTFOLIO CANVAS",   ml: "✿ പോർട്ട്ഫോളിയോ ക്യാൻവാസ്" },
  "works.title":   { en: "FEATURED WORKS",        ml: "തിരഞ്ഞെടുത്ത പ്രവൃത്തികൾ" },
  "works.filter.all":       { en: "All",          ml: "എല്ലാം" },
  "works.filter.fullstack": { en: "Fullstack",    ml: "ഫുൾസ്റ്റാക്ക്" },
  "works.filter.frontend":  { en: "Frontend",     ml: "ഫ്രണ്ട്എൻഡ്" },
  "works.filter.uiux":      { en: "UI/UX",        ml: "UI/UX" },
  "works.filter.branding":  { en: "Branding",     ml: "ബ്രാൻഡിങ്" },
  "works.filter.graphic":   { en: "Graphic Design", ml: "ഗ്രാഫിക് ഡിസൈൻ" },
  "works.view":    { en: "View",                  ml: "കാണുക" },
  // Project titles & descriptions
  "project.1.title": { en: "AI Real-Time Deepfake Detector",          ml: "AI റിയൽ-ടൈം ഡീപ്ഫേക്ക് ഡിറ്റക്ടർ" },
  "project.1.desc":  { en: "On-device real-time deepfake detection pipeline for Android using PyTorch and TFLite.", ml: "PyTorch, TFLite ഉപയോഗിച്ച് Android-ൽ ഓൺ-ഡിവൈസ് ഡീപ്ഫേക്ക് കണ്ടെത്തൽ." },
  "project.2.title": { en: "Cloud Blood Bank Platform",               ml: "ക്ലൗഡ് ബ്ലഡ് ബാങ്ക് പ്ലാറ്റ്ഫോം" },
  "project.2.desc":  { en: "Full-stack web platform digitizing blood donation lifecycles with role-specific dashboards.", ml: "രക്തദാന ലൈഫ്സൈക്കിൾ ഡിജിറ്റൈസ് ചെയ്യുന്ന ഫുൾ-സ്റ്റാക്ക് വെബ് പ്ലാറ്റ്ഫോം." },
  "project.3.title": { en: "muLearn CEP Campus Website",              ml: "muLearn CEP ക്യാമ്പസ് വെബ്സൈറ്റ്" },
  "project.3.desc":  { en: "Official web platform for the muLearn campus chapter featuring interactive event rosters.", ml: "ഇന്ററാക്ടീവ് ഇവന്റ് ലിസ്റ്റ് ഉള്ള muLearn ക്യാമ്പസ് ചാപ്റ്ററിന്റെ ഔദ്യോഗിക വെബ് പ്ലാറ്റ്ഫോം." },
  "project.4.title": { en: "muLearn Official Landing Page Redesign",  ml: "muLearn ഔദ്യോഗിക ലാൻഡിങ് പേജ് റീഡിസൈൻ" },
  "project.4.desc":  { en: "Comprehensive 3D UI/UX landing page redesign concept for the muLearn community platform.", ml: "muLearn കമ്മ്യൂണിറ്റി പ്ലാറ്റ്ഫോമിനുള്ള 3D UI/UX ലാൻഡിങ് പേജ് റീഡിസൈൻ കോൺസെപ്റ്റ്." },
  "project.5.title": { en: "3D Metallic Title Logo Design",           ml: "3D മെറ്റാലിക് ടൈറ്റിൽ ലോഗോ ഡിസൈൻ" },
  "project.5.desc":  { en: "Custom 3D metallic logo design, brand identity artwork, and typography highlights.", ml: "കസ്റ്റം 3D മെറ്റാലിക് ലോഗോ, ബ്രാൻഡ് ഐഡന്റിറ്റി ആർട്ട്‌വർക്ക്." },
  "project.6.title": { en: "Official Event Notice & Brochure Design", ml: "ഔദ്യോഗിക ഇവന്റ് നോട്ടീസ് & ബ്രോഷർ ഡിസൈൻ" },
  "project.6.desc":  { en: "Multi-page official event brochure layout, invitation graphics, and typography formatting.", ml: "മൾട്ടി-പേജ് ഔദ്യോഗിക ഇവന്റ് ബ്രോഷർ ലേഔട്ട്, ക്ഷണ ഗ്രാഫിക്സ്." },
  "project.7.title": { en: "ID Card Designing",                       ml: "ഐഡി കാർഡ് ഡിസൈൻ" },
  "project.7.desc":  { en: "Custom official ID card design, leadership poster artwork, and executive typography branding.", ml: "ഔദ്യോഗിക ഐഡി കാർഡ് ഡിസൈൻ, നേതൃത്വ പോസ്റ്റർ ആർട്ട്‌വർക്ക്." },
  "project.8.title": { en: "Poster Designing",                        ml: "പോസ്റ്റർ ഡിസൈൻ" },
  "project.8.desc":  { en: "Series of event posters, concert promotional artwork, contest flyers, and official campaign graphics.", ml: "ഇവന്റ് പോസ്റ്ററുകൾ, കോൺസർട്ട് പ്രൊമോഷണൽ ആർട്ട്‌വർക്ക്, ഫ്ലെയറുകൾ." },

  // ── Services ──────────────────────────────────────────────────────────────
  "services.eyebrow":  { en: "⚡ SERVICES & EXPERTISE",    ml: "⚡ സേവനങ്ങൾ & വൈദഗ്ദ്ധ്യം" },
  "services.title":    { en: "WHAT I CAN BUILD FOR YOU",   ml: "എനിക്ക് നിങ്ങൾക്ക് എന്ത് നിർമ്മിക്കാൻ കഴിയും" },
  "services.s1.title": { en: "Frontend Web Dev",           ml: "ഫ്രണ്ട്എൻഡ് വെബ് ഡെവ്" },
  "services.s1.desc":  { en: "Building responsive, performant, and accessible web applications using React, Vite, Next.js, and TypeScript.", ml: "React, Next.js, TypeScript ഉപയോഗിച്ച് റെസ്‌പോൺസീവ്, പ്രവർത്തനക്ഷമ, ആക്സസ്സ് ചെയ്യാൻ കഴിയുന്ന വെബ് ആപ്ലിക്കേഷനുകൾ നിർമ്മിക്കുന്നു." },
  "services.s2.title": { en: "UI/UX & Graphic Design",    ml: "UI/UX & ഗ്രാഫിക് ഡിസൈൻ" },
  "services.s2.desc":  { en: "Crafting intuitive user flows, high-fidelity Figma prototypes, 3D metallic logos, and promotional event posters.", ml: "Figma പ്രോട്ടോടൈപ്പുകൾ, 3D ലോഗോകൾ, ഇവന്റ് പോസ്റ്ററുകൾ എന്നിവ ഡിസൈൻ ചെയ്യുന്നു." },
  "services.s3.title": { en: "AI Application Dev",        ml: "AI ആപ്ലിക്കേഷൻ ഡെവ്" },
  "services.s3.desc":  { en: "Designing lightweight on-device AI pipelines, integrating TFLite models, MediaProjection APIs, and LLM interfaces.", ml: "TFLite, LLM ഇന്റഗ്രേഷൻ ഉൾപ്പെടെ ഓൺ-ഡിവൈസ് AI പൈപ്പ്ലൈനുകൾ ഡിസൈൻ ചെയ്യുന്നു." },
  "services.s4.title": { en: "Video Editing",             ml: "വീഡിയോ എഡിറ്റിങ്" },
  "services.s4.desc":  { en: "Creating high-impact promo edits, visual transitions, overlays, color grading, and video content stories.", ml: "ഉയർന്ന ഇംപാക്ടുള്ള പ്രോമോ എഡിറ്റ്, കളർ ഗ്രേഡിങ്, വീഡിയോ സ്റ്റോറികൾ സൃഷ്ടിക്കുന്നു." },

  // ── Contact ───────────────────────────────────────────────────────────────
  "contact.title":     { en: "LET'S\nTALK",              ml: "സംസാരിക്കാം" },
  "contact.body":      { en: "I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.", ml: "സങ്കീർണ്ണമായ പ്രശ്‌നങ്ങൾ പരിഹരിക്കാനും മിടുക്കരായ ആളുകളുമായി സഹകരിക്കാനും ആരെങ്കിലുമൊരാളുടെ ദിവസം മെച്ചപ്പെടുത്തുന്ന കാര്യങ്ങൾ നൽകാനും കഴിയുന്ന പ്രൊജക്ടുകളിൽ ഞാൻ ഏറ്റവും ഊർജ്ജസ്വലനാണ്." },
  "contact.note":      { en: "Open for full-time roles, freelance projects & interesting conversations.", ml: "ഫുൾ-ടൈം ജോലികൾ, ഫ്രീലാൻസ് പ്രൊജക്ടുകൾ & രസകരമായ സംഭാഷണങ്ങൾക്ക് തുറന്നിരിക്കുന്നു." },
  "contact.btn":       { en: "CONTACT",                  ml: "ബന്ധപ്പെടുക" },
  "contact.label.name":    { en: "Your Name",            ml: "നിങ്ങളുടെ പേര്" },
  "contact.label.email":   { en: "Email",                ml: "ഇ-മെയിൽ" },
  "contact.label.subject": { en: "Subject",              ml: "വിഷയം" },
  "contact.label.message": { en: "Message",              ml: "സന്ദേശം" },
  "contact.ph.name":    { en: "John Doe",                ml: "ജോൺ ഡോ" },
  "contact.ph.subject": { en: "Project inquiry",         ml: "പ്രൊജക്ട് അന്വേഷണം" },
  "contact.ph.message": { en: "Tell me a little about your project, timeline, and goals.", ml: "നിങ്ങളുടെ പ്രൊജക്ട്, ടൈംലൈൻ, ലക്ഷ്യങ്ങൾ എന്നിവയെ കുറിച്ച് പറഞ്ഞ് തരൂ." },
  "contact.hint":      { en: "Prefills message in your email client", ml: "നിങ്ങളുടെ ഇ-മെയിൽ ക്ലയന്റിൽ സന്ദേശം പൂർവ്വ-നിര്‍ണ്ണയിക്കുന്നു" },
  "contact.send":      { en: "Send Message 🚀",          ml: "സന്ദേശം അയക്കുക 🚀" },

  // ── Footer ────────────────────────────────────────────────────────────────
  "footer.text": { en: "This website works on my machine™.", ml: "ഈ വെബ്‌സൈറ്റ് എന്റെ മെഷീനിൽ പ്രവർത്തിക്കുന്നു™." },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry["en"] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

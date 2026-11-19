"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ShieldCheck } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, options?: { immediate: boolean }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t dark:border-white/[0.08] border-neutral-200 dark:bg-[#0A0C10] bg-neutral-100 py-12 text-xs font-mono-code dark:text-neutral-400 text-neutral-600">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b dark:border-white/5 border-neutral-200">
          <div>
            <div className="text-base font-bold dark:text-white text-neutral-900 font-display">
              {PERSONAL_DATA.name}
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-400 mt-0.5 font-sans font-medium">
              Full Stack Developer • PEC Registered Computer Engineer
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-neutral-500 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>BS in Computer Engineering • CGPA 3.35</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-sans text-xs">
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href={PERSONAL_DATA.github} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors font-medium">GitHub</a>
            <a href={`tel:${PERSONAL_DATA.phone}`} className="hover:text-emerald-500 transition-colors font-mono-code">{PERSONAL_DATA.phone}</a>
            <a href="/Muhammad_Umair_Resume.pdf" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium">Resume PDF</a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl dark:bg-white/5 bg-white border dark:border-white/10 border-neutral-200 text-neutral-700 dark:text-neutral-200 hover:text-blue-600 self-start md:self-auto shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          <div>
            &copy; {year} Muhammad Umair. Built with Next.js &amp; Tailwind CSS.
          </div>
          <div>
            Karachi, Pakistan (PKT)
          </div>
        </div>
      </div>
    </footer>
  );
}

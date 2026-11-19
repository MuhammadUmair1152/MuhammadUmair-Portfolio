"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Copy, Check, Menu, X, Clock, Sun, Moon } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: { offset: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -70 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pt-4 md:pt-6 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-[1600px] transition-all duration-300 rounded-2xl border px-5 sm:px-8 py-3.5 ${
          scrolled
            ? "dark:bg-[#0D0F14]/90 bg-white/90 backdrop-blur-xl dark:border-white/10 border-neutral-200 shadow-lg"
            : "dark:bg-[#0D0F14]/60 bg-white/60 backdrop-blur-md dark:border-white/5 border-neutral-200/60"
        }`}
      >
        {/* Left: Branding & Role */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 text-left group"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 text-sm font-bold font-mono-code">
            <span>{PERSONAL_DATA.initials}</span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0D0F14]" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight dark:text-white text-neutral-900 group-hover:text-blue-600 transition-colors">
              {PERSONAL_DATA.name}
            </div>
            <div className="text-[11px] dark:text-neutral-400 text-neutral-500 font-medium">
              Full Stack Developer • PEC Eng.
            </div>
          </div>
        </button>

        {/* Center: Navigation in Exact Requested Sequence */}
        <nav className="hidden lg:flex items-center gap-1.5 dark:bg-white/[0.03] bg-neutral-100/80 border dark:border-white/5 border-neutral-200/80 rounded-full px-4 py-1.5">
          {[
            { label: "Education", id: "education" },
            { label: "Experience", id: "experience" },
            { label: "Projects", id: "projects" },
            { label: "Skills", id: "skills" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3.5 py-1 text-xs font-medium dark:text-neutral-300 text-neutral-600 hover:text-blue-600 dark:hover:text-white transition-colors rounded-full"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
            }}
            aria-label="Open Command Palette"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl dark:bg-white/5 bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-white/10 border dark:border-white/10 border-neutral-200 text-xs font-mono-code dark:text-neutral-300 text-neutral-600 transition-colors"
            title="Search commands (Ctrl+K)"
          >
            <span>⌘K</span>
          </button>

          {/* GitHub Profile */}
          <a
            href={PERSONAL_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-xl dark:bg-white/5 bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-white/10 border dark:border-white/10 border-neutral-200 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition-colors"
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-8 h-8 rounded-xl dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition-colors"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Quick Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="hidden sm:flex items-center gap-2 text-xs font-mono-code dark:text-neutral-300 text-neutral-700 dark:bg-white/5 bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-white/10 border dark:border-white/10 border-neutral-200 px-3.5 py-1.5 rounded-full transition-all"
            title="Copy email"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          {/* Contact Trigger */}
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-1.5 text-xs font-semibold dark:bg-white bg-neutral-900 dark:text-black text-white hover:opacity-90 px-4 py-1.5 rounded-full transition-all shadow-sm"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 dark:text-neutral-300 text-neutral-700 rounded-lg dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 dark:bg-[#0D0F14] bg-white border dark:border-white/10 border-neutral-200 rounded-2xl p-6 shadow-2xl lg:hidden flex flex-col gap-3"
          >
            {[
              { label: "Education & Degree", id: "education" },
              { label: "Working Experience", id: "experience" },
              { label: "Selected Projects", id: "projects" },
              { label: "Skills & Technologies", id: "skills" },
              { label: "Contact Information", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2.5 px-3 rounded-xl dark:hover:bg-white/5 hover:bg-neutral-100 text-sm font-medium dark:text-neutral-200 text-neutral-800"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-3 border-t dark:border-white/10 border-neutral-200 flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="text-xs font-mono-code dark:text-neutral-300 text-neutral-700 flex items-center gap-2"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
              <button
                onClick={handleCopyEmail}
                className="text-xs font-mono-code text-blue-600 dark:text-blue-400"
              >
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

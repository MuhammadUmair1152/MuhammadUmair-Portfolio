"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  Cpu,
  Mail,
  Copy,
  Check,
  FileText,
  Sun,
  Moon,
  ExternalLink,
  Command,
  X,
} from "lucide-react";
import { PERSONAL_DATA, PROJECTS } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

interface ActionItem {
  id: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  title: string;
  subtitle: string;
  icon: React.ElementType;
  shortcut?: string;
  perform: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: { offset: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -70 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1200);
  }, []);

  // Actions list
  const actions: ActionItem[] = useMemo(
    () => [
      {
        id: "nav-hero",
        category: "Navigation",
        title: "Overview // Intro & Bio",
        subtitle: "Muhammad Umair • Full Stack Engineer",
        icon: Sparkles,
        shortcut: "G H",
        perform: () => scrollTo("hero"),
      },
      {
        id: "nav-education",
        category: "Navigation",
        title: "Academic Foundation // Degree",
        subtitle: "BS Computer Engineering (SSUET, PEC Registered)",
        icon: GraduationCap,
        shortcut: "G E",
        perform: () => scrollTo("education"),
      },
      {
        id: "nav-experience",
        category: "Navigation",
        title: "Working Experience // Career",
        subtitle: "Innovative Network (Full Stack Developer)",
        icon: Briefcase,
        shortcut: "G X",
        perform: () => scrollTo("experience"),
      },
      {
        id: "nav-projects",
        category: "Navigation",
        title: "Featured Projects // Case Studies",
        subtitle: "Tahafuz FYP, DriveSafe, MemoPixx, DanceBook",
        icon: Layers,
        shortcut: "G P",
        perform: () => scrollTo("projects"),
      },
      {
        id: "nav-skills",
        category: "Navigation",
        title: "Skills & Technical Craft",
        subtitle: "NestJS, React Native, Python AI, PostgreSQL",
        icon: Cpu,
        shortcut: "G S",
        perform: () => scrollTo("skills"),
      },
      {
        id: "nav-contact",
        category: "Navigation",
        title: "Get In Touch // Inquiries",
        subtitle: "Email, Phone & Direct Message",
        icon: Mail,
        shortcut: "G C",
        perform: () => scrollTo("contact"),
      },
      ...PROJECTS.map((p) => ({
        id: `project-${p.id}`,
        category: "Projects" as const,
        title: `${p.title} (${p.category})`,
        subtitle: p.tagline,
        icon: Layers,
        perform: () => scrollTo("projects"),
      })),
      {
        id: "action-copy-email",
        category: "Actions",
        title: copied ? "Email Address Copied!" : "Copy Direct Email",
        subtitle: PERSONAL_DATA.email,
        icon: copied ? Check : Copy,
        shortcut: "⌘ C",
        perform: handleCopyEmail,
      },
      {
        id: "action-resume",
        category: "Actions",
        title: "Download Resume (PDF)",
        subtitle: "Latest updated curriculum vitae",
        icon: FileText,
        shortcut: "⌘ D",
        perform: () => {
          setIsOpen(false);
          window.open("/Muhammad_Umair_Resume.pdf", "_blank");
        },
      },
      {
        id: "action-toggle-theme",
        category: "Actions",
        title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
        subtitle: `Current active: ${theme === "dark" ? "Dark Theme" : "Light Theme"}`,
        icon: theme === "dark" ? Sun : Moon,
        shortcut: "⌘ T",
        perform: () => {
          toggleTheme();
          setIsOpen(false);
        },
      },
      {
        id: "action-github",
        category: "Social",
        title: "Visit GitHub Profile",
        subtitle: PERSONAL_DATA.github,
        icon: ExternalLink,
        perform: () => {
          setIsOpen(false);
          window.open(PERSONAL_DATA.github, "_blank");
        },
      },
      {
        id: "action-linkedin",
        category: "Social",
        title: "Visit LinkedIn Profile",
        subtitle: PERSONAL_DATA.linkedin,
        icon: ExternalLink,
        perform: () => {
          setIsOpen(false);
          window.open(PERSONAL_DATA.linkedin, "_blank");
        },
      },
    ],
    [scrollTo, handleCopyEmail, copied, theme, toggleTheme]
  );

  // Filtered items
  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  }, [actions, query]);

  // Pause Lenis and lock scroll when open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (isOpen) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "unset";
    }
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle palette: Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Keyboard navigation within list
  useEffect(() => {
    if (!isOpen) return;

    const handleNav = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].perform();
        }
      }
    };

    window.addEventListener("keydown", handleNav);
    return () => window.removeEventListener("keydown", handleNav);
  }, [isOpen, selectedIndex, filtered]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <>
      {/* Floating Trigger Pill (Bottom-Right) */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full dark:bg-[#12141C]/90 bg-white/90 backdrop-blur-md border dark:border-white/10 border-neutral-300 shadow-xl text-xs font-mono-code dark:text-neutral-300 text-neutral-700 hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all group"
        title="Quick Command Palette (Ctrl+K)"
      >
        <Command className="w-3.5 h-3.5 text-blue-500 group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline font-sans text-xs">Commands</span>
        <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono-code dark:bg-white/10 bg-neutral-100 border dark:border-white/10 border-neutral-200">
          ⌘K
        </kbd>
      </motion.button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Palette Window */}
            <motion.div
              data-lenis-prevent="true"
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl rounded-2xl dark:bg-[#12141C] bg-white border dark:border-white/15 border-neutral-200 shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Search Bar Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b dark:border-white/10 border-neutral-200">
                <Search className="w-4 h-4 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command, project, skill, or action..."
                  className="w-full bg-transparent text-sm dark:text-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none font-sans"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div
                data-lenis-prevent="true"
                className="max-h-[380px] overflow-y-auto overscroll-contain p-2 space-y-1"
              >
                {filtered.length === 0 ? (
                  <div className="py-12 text-center text-xs dark:text-neutral-400 text-neutral-500 font-sans">
                    No matching commands found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filtered.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.perform}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all text-xs ${
                          isSelected
                            ? "dark:bg-blue-600/15 bg-blue-50 dark:border-blue-500/30 border-blue-200 border"
                            : "dark:hover:bg-white/[0.04] hover:bg-neutral-50 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : "dark:bg-white/5 bg-neutral-100 dark:text-neutral-300 text-neutral-600"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium dark:text-white text-neutral-900 truncate">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-neutral-400 truncate">
                              {item.subtitle}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className="text-[10px] font-mono-code text-neutral-400 uppercase">
                            {item.category}
                          </span>
                          {item.shortcut && (
                            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 text-neutral-400">
                              {item.shortcut}
                            </kbd>
                          )}
                          {isSelected && <ArrowRight className="w-3.5 h-3.5 text-blue-500" />}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Helper */}
              <div className="px-4 py-2.5 border-t dark:border-white/10 border-neutral-200 bg-neutral-50 dark:bg-white/[0.02] flex items-center justify-between text-[11px] font-mono-code text-neutral-400">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-white/10 text-[10px]">
                      ↑
                    </kbd>{" "}
                    <kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-white/10 text-[10px]">
                      ↓
                    </kbd>{" "}
                    to navigate
                  </span>
                  <span>
                    <kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-white/10 text-[10px]">
                      ↵
                    </kbd>{" "}
                    to select
                  </span>
                </div>
                <div>
                  <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-white/10 text-[10px]">
                    ESC
                  </kbd>{" "}
                  to close
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

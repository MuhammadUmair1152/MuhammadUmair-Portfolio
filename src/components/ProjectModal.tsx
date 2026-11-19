"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (project) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          data-lenis-prevent="true"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto overscroll-contain dark:bg-[#0C0E17] bg-white border dark:border-white/10 border-black/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl dark:text-white text-neutral-900 font-sans"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 border-b dark:border-white/10 border-black/10">
            <div className="flex items-center gap-3 font-mono-code text-xs dark:text-neutral-400 text-neutral-500">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-500 font-semibold">
                CASE STUDY // {project.number}
              </span>
              <span>|</span>
              <span className="uppercase font-medium dark:text-neutral-300 text-neutral-700">{project.category}</span>
              <span>|</span>
              <span>{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full dark:bg-white/5 bg-black/5 hover:bg-black/10 dark:hover:bg-white/10 border dark:border-white/10 border-black/10 dark:text-neutral-400 text-neutral-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Role */}
          <div className="mt-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h2>
            <p className="font-mono-code text-sm text-blue-500 mt-1 font-semibold">
              {project.tagline}
            </p>
            <div className="mt-2 font-mono-code text-xs dark:text-neutral-400 text-neutral-500">
              ROLE: <span className="dark:text-neutral-200 text-neutral-800 font-medium">{project.role}</span>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3.5 rounded-xl dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/5 border-black/5 font-mono-code">
                <div className="text-[10px] text-neutral-400 uppercase font-medium">{metric.label}</div>
                <div className="text-base sm:text-lg font-bold mt-0.5 text-blue-500">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Executive Summary */}
          <div className="mt-8">
            <h3 className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider mb-2 font-semibold">
              Executive Summary
            </h3>
            <p className="dark:text-neutral-300 text-neutral-700 text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* The Engineering Challenge vs Architecture Solution */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl dark:bg-red-950/20 bg-red-50 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-500 font-mono-code text-xs font-semibold uppercase mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl dark:bg-blue-950/20 bg-blue-50 border border-blue-500/20">
              <div className="flex items-center gap-2 text-blue-500 font-mono-code text-xs font-semibold uppercase mb-2">
                <Cpu className="w-4 h-4" />
                <span>Architectural Solution</span>
              </div>
              <p className="text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed font-sans">
                {project.architectureSolution}
              </p>
            </div>
          </div>

          {/* Key Deliverables & Engineering Highlights */}
          <div className="mt-8">
            <h3 className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider mb-4 font-semibold">
              Key Engineering Deliverables
            </h3>
            <div className="space-y-3 font-sans">
              {project.keyHighlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-8 pt-6 border-t dark:border-white/10 border-black/10">
            <h3 className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider mb-3 font-semibold">
              Technologies &amp; Protocols
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 font-mono-code text-xs dark:text-neutral-300 text-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="mt-8 pt-6 border-t dark:border-white/10 border-black/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl dark:bg-white bg-black dark:text-black text-white font-semibold text-xs hover:opacity-90 transition-opacity"
                >
                  <span>Visit Production Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 dark:text-white text-black font-mono-code text-xs transition-colors hover:border-blue-500"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono-code dark:text-neutral-400 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              Close Drawer [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

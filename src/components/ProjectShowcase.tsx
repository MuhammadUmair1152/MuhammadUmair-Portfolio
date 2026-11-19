"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useSpring, useInView } from "framer-motion";
import { ArrowUpRight, Smartphone, Cpu, Shield, Award, CheckCircle2, Sparkles } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import TahafuzArchitectureSimulator from "./TahafuzArchitectureSimulator";

// Magnetic card component for project grid
function MagneticProjectCard({
  project,
  idx,
  onSelect,
}: {
  project: Project;
  idx: number;
  onSelect: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * 0.08);
      y.set((e.clientY - cy) * 0.08);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{ x, y }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(project)}
        className="p-6 sm:p-7 rounded-3xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm flex flex-col justify-between hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-blue-500/5 hover:shadow-lg transition-all duration-300 cursor-pointer group"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b dark:border-white/5 border-neutral-200 text-xs font-mono-code text-neutral-500">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              PROJECT {project.number}
            </span>
            <span>{project.category}</span>
          </div>

          {/* Title */}
          <h4 className="font-display text-xl sm:text-2xl font-bold mt-4 dark:text-white text-neutral-900 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h4>
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 font-sans">
            {project.tagline}
          </div>

          <p className="mt-3 text-xs sm:text-sm dark:text-neutral-400 text-neutral-600 leading-relaxed font-sans">
            {project.summary}
          </p>

          {/* Key Metric */}
          <div className="mt-4 p-3 rounded-xl dark:bg-white/[0.02] bg-neutral-50 border dark:border-white/5 border-neutral-200 flex items-center justify-between text-xs font-mono-code">
            <span className="text-neutral-500 uppercase text-[10px]">{project.metrics[0].label}:</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{project.metrics[0].value}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t dark:border-white/5 border-neutral-200 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono-code text-neutral-500">
            {project.techStack.slice(0, 3).map((t, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/5 dark:text-neutral-300 text-neutral-700">
                {t}
              </span>
            ))}
          </div>

          <motion.span
            whileHover={{ x: 3, y: -3 }}
            className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fypProject = PROJECTS[0];
  const otherProjects = PROJECTS.slice(1);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const fypRef = useRef<HTMLDivElement>(null);
  const fypInView = useInView(fypRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-20 md:py-28 border-b dark:border-white/[0.08] border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Section Header with clip-path reveal */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b dark:border-white/[0.08] border-neutral-200"
        >
          <div>
            <motion.div
              className="flex items-center gap-2 font-mono-code text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1.5"
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>SELECTED WORKS & SYSTEMS</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-neutral-900"
                initial={{ y: "100%" }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                Featured Projects
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="dark:text-neutral-400 text-neutral-600 text-sm max-w-md font-sans"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Real-world applications engineered from initial architecture to production deployment across mobile, web, and hardware.
          </motion.p>
        </div>

        {/* TAHAFUZ FYP — Prominent Showcase */}
        <div className="mt-10" ref={fypRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={fypInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl dark:bg-[#12141C] bg-white border-2 border-blue-500/30 dark:border-blue-500/40 shadow-xl relative overflow-hidden"
          >
            {/* Animated corner accent */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b dark:border-white/10 border-neutral-200">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-mono-code text-xs font-bold">
                  PROJECT 01 // FYP
                </span>
                <span className="font-mono-code text-xs text-neutral-500">{fypProject.year}</span>
              </div>
              <motion.div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-medium text-xs"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <Award className="w-4 h-4 shrink-0" />
                <span>Awarded Top Grade & Faculty Appreciation</span>
              </motion.div>
            </div>

            {/* Title & Description */}
            <div className="mt-6">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-neutral-900">
                {fypProject.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium mt-1 font-sans">
                {fypProject.tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base dark:text-neutral-300 text-neutral-700 leading-relaxed max-w-4xl font-sans">
                {fypProject.summary} This project received widespread academic recognition and jury praise for its practical humanitarian approach to women&apos;s personal safety, bridging low-latency mobile interactions with custom IoT edge hardware.
              </p>
            </div>

            {/* Mobile App & IoT Features Side-by-Side */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile App */}
              <motion.div
                className="p-5 sm:p-6 rounded-2xl dark:bg-white/[0.02] bg-neutral-50 border dark:border-white/5 border-neutral-200"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-3 font-mono-code">
                  <Smartphone className="w-4 h-4" />
                  <span>React Native Mobile App</span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 font-sans">
                  {fypProject.mobileFeatures?.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* IoT Features */}
              <motion.div
                className="p-5 sm:p-6 rounded-2xl dark:bg-white/[0.02] bg-neutral-50 border dark:border-white/5 border-neutral-200"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-3 font-mono-code">
                  <Cpu className="w-4 h-4" />
                  <span>ESP32 IoT Hardware</span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 font-sans">
                  {fypProject.iotFeatures?.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Interactive Architecture Simulator */}
            <TahafuzArchitectureSimulator />

            {/* Tech Stack & CTA */}
            <div className="mt-8 pt-6 border-t dark:border-white/10 border-neutral-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono-code">
                {fypProject.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-2.5 py-1 rounded-lg dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 dark:text-neutral-300 text-neutral-700 font-medium cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedProject(fypProject)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-sm"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* OTHER PROJECTS GRID — with magnetic hover */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, idx) => (
            <MagneticProjectCard
              key={project.id}
              project={project}
              idx={idx}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Cpu, Server, Smartphone, Database, Terminal, Shield } from "lucide-react";
import { SKILL_GROUPS } from "@/data/portfolioData";

const GROUP_ICONS = [Server, Smartphone, Database, Terminal, Shield, Cpu];

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function SkillGroup({
  group,
  idx,
}: {
  group: { title: string; skills: string[] };
  idx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = GROUP_ICONS[idx % GROUP_ICONS.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="p-6 sm:p-7 rounded-3xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm flex flex-col gap-4 group hover:border-blue-500/30 dark:hover:border-blue-500/40 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 pb-3 border-b dark:border-white/5 border-neutral-200">
        <div className="w-8 h-8 rounded-lg dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
          <Icon className="w-4 h-4 dark:text-neutral-400 text-neutral-600 group-hover:text-blue-500 transition-colors" />
        </div>
        <h3 className="font-display text-lg sm:text-xl font-bold dark:text-white text-neutral-900">
          {group.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, sIdx) => (
          <motion.span
            key={sIdx}
            custom={sIdx}
            variants={chipVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.06, y: -2 }}
            className="px-3 py-1.5 rounded-xl dark:bg-white/[0.04] bg-neutral-100 border dark:border-white/8 border-neutral-200 text-xs font-mono-code dark:text-neutral-200 text-neutral-800 font-medium cursor-default hover:border-blue-500/40 hover:dark:bg-blue-500/10 hover:bg-blue-50 transition-all duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsCraft() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="relative py-20 md:py-28 border-b dark:border-white/[0.08] border-neutral-200">
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
              <Cpu className="w-4 h-4" />
              <span>TECHNICAL CAPABILITIES</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-neutral-900"
                initial={{ y: "100%" }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                Skills & Technologies
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="dark:text-neutral-400 text-neutral-600 text-sm max-w-md font-sans"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Core toolset used across production backends, mobile apps, databases, and machine intelligence pipelines.
          </motion.p>
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <SkillGroup key={group.title} group={group} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

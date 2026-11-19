"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 md:py-28 border-b dark:border-white/[0.08] border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b dark:border-white/[0.08] border-neutral-200">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1.5">
              <Briefcase className="w-4 h-4" />
              <span>CAREER TRAJECTORY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-neutral-900">
              Working Experience
            </h2>
          </div>
          <p className="dark:text-neutral-400 text-neutral-600 text-sm max-w-md font-sans">
            Hands-on engineering experience designing enterprise SaaS, real-time IoT firmware pipelines, and scalable cloud architectures.
          </p>
        </div>

        {/* Experience List */}
        <div className="mt-10 space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm transition-all hover:border-blue-500/40"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b dark:border-white/5 border-neutral-200">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold dark:text-white text-neutral-900">
                      {exp.role}
                    </h3>
                    {exp.active && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono-code text-[11px] font-semibold border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 font-sans">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{exp.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-5 space-y-2.5 font-sans">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed">
                      {ach}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="mt-6 pt-4 border-t dark:border-white/5 border-neutral-200 flex flex-wrap gap-2 text-xs font-mono-code">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg dark:bg-white/[0.03] bg-neutral-100 border dark:border-white/5 border-neutral-200 dark:text-neutral-300 text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

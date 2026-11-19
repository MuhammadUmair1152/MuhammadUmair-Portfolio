"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Award, BookOpen, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

export default function EducationSection() {
  const { education } = PERSONAL_DATA;

  return (
    <section id="education" className="relative py-20 md:py-28 border-b dark:border-white/[0.08] border-neutral-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b dark:border-white/[0.08] border-neutral-200">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION &amp; ACCREDITATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-neutral-900">
              Education &amp; Credentials
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full self-start md:self-auto font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>PEC Registered Computer Engineer</span>
          </div>
        </div>

        {/* Education Details Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-3xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono-code text-xs text-neutral-500">
                <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                  FORMAL DEGREE
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{education.period}</span>
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-4 dark:text-white text-neutral-900">
                {education.degree}
              </h3>
              <div className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium mt-1 font-sans">
                {education.shortDegree}
              </div>

              <p className="mt-2 text-sm dark:text-neutral-400 text-neutral-600 flex items-center gap-1.5 font-sans">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{education.institution} • {education.location}</span>
              </p>

              {/* CGPA & Legal Registration Badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 font-mono-code text-xs">
                <div className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-neutral-50 border dark:border-white/5 border-neutral-200">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider">CUMULATIVE CGPA</span>
                  <div className="text-xl sm:text-2xl font-bold mt-1 text-blue-600 dark:text-blue-400 font-display">
                    {education.cgpa}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl dark:bg-white/[0.03] bg-neutral-50 border dark:border-white/5 border-neutral-200">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider">LEGAL STATUS</span>
                  <div className="text-base sm:text-lg font-bold mt-1 text-emerald-600 dark:text-emerald-400 font-display">
                    PEC Registered
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-6 space-y-2.5 font-sans">
                {education.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm dark:text-neutral-300 text-neutral-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t dark:border-white/5 border-neutral-200 flex items-center justify-between text-xs font-mono-code text-neutral-500">
              <span>FOUR-YEAR ENGINEERING CURRICULUM COMPLETED</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">VERIFIED</span>
            </div>
          </motion.div>

          {/* Right Column: Coursework & Industry Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Core Coursework */}
            <div className="p-6 sm:p-7 rounded-3xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm flex-1">
              <div className="flex items-center gap-2 font-mono-code text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
                <BookOpen className="w-4 h-4" />
                <span>CORE ENGINEERING DISCIPLINES</span>
              </div>
              <h4 className="font-display text-lg font-bold dark:text-white text-neutral-900 mb-3">
                Computer Engineering Subjects
              </h4>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                {[
                  "Data Structures & Alg.",
                  "Distributed Systems",
                  "Database Systems",
                  "Computer Networks",
                  "Embedded Systems (ESP32)",
                  "Software Engineering",
                  "Operating Systems",
                  "Object Oriented Prog.",
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl dark:bg-white/[0.02] bg-neutral-50 border dark:border-white/5 border-neutral-200 dark:text-neutral-300 text-neutral-700"
                  >
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 sm:p-7 rounded-3xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 font-mono-code text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                <Award className="w-4 h-4" />
                <span>CERTIFICATIONS &amp; LICENSES</span>
              </div>
              <h4 className="font-display text-lg font-bold dark:text-white text-neutral-900 mb-3">
                Professional Credentials
              </h4>

              <div className="space-y-2.5 text-xs font-mono-code">
                {education.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl dark:bg-white/[0.02] bg-neutral-50 border dark:border-white/5 border-neutral-200 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold dark:text-white text-neutral-900">{cert.name}</div>
                      <div className="text-[11px] text-neutral-500 font-sans mt-0.5">{cert.authority}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

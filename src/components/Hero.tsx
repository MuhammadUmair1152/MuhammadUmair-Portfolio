"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Copy, Check, ShieldCheck, MapPin, Phone } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";

// Split headline into words for stagger animation
const HEADLINE = "Full Stack Developer building scalable web apps, mobile platforms & connected systems.";
const WORDS = HEADLINE.split(" ");

import type { Variants } from "framer-motion";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.055,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
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
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b dark:border-white/[0.08] border-neutral-200 overflow-hidden">
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Status Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 mb-8 text-xs"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Roles & Contracts</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 dark:text-neutral-300 text-neutral-700 font-mono-code">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>PEC Registered Computer Engineer</span>
              </div>
              <a
                href={`tel:${PERSONAL_DATA.phone}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-mono-code text-[11px]"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PERSONAL_DATA.phone}</span>
              </a>
              <div className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-neutral-500 font-mono-code text-[11px]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Karachi, Pakistan</span>
              </div>
            </motion.div>

            {/* Word-by-Word Animated Headline */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight dark:text-white text-neutral-900 leading-[1.1] perspective-[800px]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ perspective: "800px" }}
            >
              {WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  variants={wordVariants}
                  custom={i}
                  style={{ display: "inline-block", transformOrigin: "bottom" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-base sm:text-lg md:text-xl dark:text-neutral-300 text-neutral-600 max-w-2xl leading-relaxed font-sans"
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold dark:text-white text-neutral-900">Muhammad Umair</span>.
              I design and build production-grade software — from multi-tenant SaaS platforms and RESTful APIs with Node.js and NestJS, to cross-platform mobile apps in React Native and intelligent Python systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl dark:bg-white bg-neutral-900 dark:text-black text-white font-medium text-sm transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("education")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl dark:bg-white/5 bg-neutral-100 border dark:border-white/10 border-neutral-200 dark:text-white text-neutral-900 font-medium text-sm transition-colors"
              >
                <span>My Background</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono-code dark:text-neutral-400 text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>

              <a
                href="/Muhammad_Umair_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono-code text-neutral-500 hover:text-blue-600 transition-colors"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl dark:bg-white/5 bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-white/10 border dark:border-white/10 border-neutral-200 text-xs font-mono-code dark:text-neutral-200 text-neutral-800 transition-all group"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </motion.div>

            {/* Core Tech Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 pt-6 border-t dark:border-white/10 border-neutral-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-code text-neutral-500"
            >
              <span className="font-semibold text-neutral-400">CORE TECH:</span>
              {["Node.js & NestJS", "Python & AI/ML", "React Native", "PostgreSQL & MongoDB", "Docker & CI/CD"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.08, duration: 0.4 }}
                  className="dark:text-neutral-300 text-neutral-700"
                >
                  {tech}
                  {i < 4 && <span className="ml-6 text-neutral-400">•</span>}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Clean Standalone Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="w-full max-w-sm">
              {/* Standalone Pure Photo */}
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border dark:border-white/10 border-neutral-200 bg-neutral-900">
                <Image
                  src="/images/umair-new.jpg"
                  alt="Muhammad Umair — Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-[center_15%]"
                />
              </div>

              {/* 3 Clean Titles directly beneath the picture */}
              <div className="mt-4 pt-1 flex flex-col gap-1">
                <h3 className="font-display text-2xl font-bold dark:text-white text-neutral-900 tracking-tight">
                  Muhammad Umair
                </h3>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 font-sans">
                  Full Stack Developer • PEC Registered Computer Engineer
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

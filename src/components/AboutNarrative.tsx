"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Shield, Sparkles, Compass, Lightbulb, Code2 } from "lucide-react";

export default function AboutNarrative() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t dark:border-white/[0.08] border-black/[0.08] w-full">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Visual Persona */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-3xl dark:bg-[#0D0F17] bg-white border dark:border-white/10 border-black/10 p-5 sm:p-7 shadow-2xl overflow-hidden group">
              <div className="flex items-center justify-between pb-4 mb-4 border-b dark:border-white/5 border-black/5 font-mono-code text-[11px] dark:text-neutral-400 text-neutral-500">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  PERSPECTIVE // 01
                </span>
                <span className="text-emerald-500 font-semibold">KARACHI, PK</span>
              </div>

              {/* Full Portrait in Formal Attire */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden dark:bg-neutral-900 bg-neutral-100 border dark:border-white/5 border-black/5">
                <Image
                  src="/images/umair-portrait-full.jpg"
                  alt="Muhammad Umair Formal Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#08090C] from-black/80 via-transparent to-transparent opacity-75" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono-code">
                  <div className="text-sm font-bold">Muhammad Umair</div>
                  <div className="text-xs text-blue-400 mt-0.5">BS Computer Engineering • PEC Registered</div>
                  <p className="text-[11px] text-neutral-300 font-sans mt-1">
                    Passionate about bridging hardware sensors with scalable distributed cloud systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono-code text-xs text-blue-500 mb-3">
                <Compass className="w-4 h-4" />
                <span>BEYOND THE RESUME // THE CRAFT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Engineering with empathy for users and zero tolerance for downtime.
              </h2>

              <div className="mt-6 space-y-4 dark:text-neutral-300 text-neutral-700 text-base sm:text-lg font-sans font-light leading-relaxed">
                <p>
                  My journey began with bare-metal microcontrollers—writing low-level Embedded C and soldering sensor pins. That physical grounding shaped how I write software today: I treat every byte, database query, and network socket as a scarce physical resource.
                </p>
                <p>
                  Whether architecting UK automotive warranty platforms handling thousands of recurring Direct Debits, writing Over-The-Air WebSocket firmware conduits for IoT devices, or implementing 128D biometric vector pipelines in Python, I engineer systems that are fault-tolerant, secure, and beautiful to use.
                </p>
              </div>

              {/* Core Philosophy Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-code text-xs">
                <div className="p-4 rounded-2xl dark:bg-[#0D0F17] bg-white border dark:border-white/10 border-black/10 shadow-sm">
                  <div className="flex items-center gap-2 text-blue-500 font-bold mb-1">
                    <Shield className="w-4 h-4" />
                    <span>DEFENSIVE ARCHITECTURE</span>
                  </div>
                  <p className="dark:text-neutral-400 text-neutral-600 font-sans text-xs leading-relaxed mt-1">
                    Build for failure: network jitter, double-tap payments, and dropped sockets. Idempotent design is non-negotiable.
                  </p>
                </div>

                <div className="p-4 rounded-2xl dark:bg-[#0D0F17] bg-white border dark:border-white/10 border-black/10 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500 font-bold mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>APPLIED MACHINE INTELLIGENCE</span>
                  </div>
                  <p className="dark:text-neutral-400 text-neutral-600 font-sans text-xs leading-relaxed mt-1">
                    Harnessing Python, OpenCV, and modern LLM APIs to eliminate manual bottlenecks and extract structured intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

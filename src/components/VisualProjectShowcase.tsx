"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Shield, Activity, CreditCard, Cpu, Sparkles, Terminal } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function VisualProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="showcase" className="relative py-28 md:py-36 border-t dark:border-white/[0.08] border-black/[0.08] w-full">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b dark:border-white/[0.08] border-black/[0.08]">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-blue-500 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>02 // INTERACTIVE PRODUCT ARTIFACTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
              Featured Flagships
            </h2>
          </div>
          <p className="dark:text-neutral-400 text-neutral-600 text-sm md:text-base max-w-lg font-sans leading-relaxed">
            Tangible software systems engineered from zero to production. High-throughput distributed backends, physical IoT kiosks, and financial split-payment engines.
          </p>
        </div>

        {/* 2-Column High-Impact Visual Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: DriveSafe Warranty UK (Enterprise SaaS) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(PROJECTS[0])}
            className="group relative rounded-3xl dark:bg-[#0D0F17] bg-white border dark:border-white/10 border-black/10 overflow-hidden cursor-pointer hover:border-blue-500/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
          >
            {/* Visual Header / Mockup Window */}
            <div className="p-6 sm:p-8 dark:bg-gradient-to-b dark:from-[#131724] dark:to-[#0D0F17] bg-gradient-to-b from-blue-50/50 to-white border-b dark:border-white/5 border-black/5">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 font-mono-code text-[11px] dark:text-neutral-400 text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-medium">drivesafewarranty.co.uk</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-semibold uppercase text-[10px]">
                  UK Dealership SaaS
                </span>
              </div>

              {/* Stylized Dashboard Mockup Interface */}
              <div className="mt-4 rounded-2xl dark:bg-[#090A10] bg-neutral-900 p-5 text-white font-mono-code shadow-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-blue-400 font-bold">DRIVESAFE DEALER CONSOLE</span>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE TENANT: UK-DL-4089
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-neutral-400">ACTIVE POLICIES</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-1">1,428</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-neutral-400">RECURRING MANDATES</div>
                    <div className="text-base sm:text-lg font-bold text-emerald-400 mt-1">GoCardless Direct</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-neutral-400">DB ISOLATION</div>
                    <div className="text-base sm:text-lg font-bold text-blue-400 mt-1">Prisma Multi-Tenant</div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs flex items-center justify-between">
                  <span className="text-neutral-300">Stripe Billing + PDF Generation Engine</span>
                  <span className="text-blue-400 font-semibold">100% Automated</span>
                </div>
              </div>
            </div>

            {/* Bottom Content & Highlights */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs text-blue-500 font-semibold">01 // ENTERPRISE SAAS</span>
                  <span className="font-mono-code text-xs dark:text-neutral-500 text-neutral-400">2025 • UK MARKET</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 group-hover:text-blue-500 transition-colors">
                  DriveSafe Warranty UK
                </h3>
                <p className="mt-3 dark:text-neutral-400 text-neutral-600 text-sm sm:text-base font-sans leading-relaxed">
                  End-to-end multi-tenant warranty management platform architected in NestJS, PostgreSQL, and Next.js. Features per-dealer dynamic schema isolation and dual payment gateways (Stripe &amp; GoCardless) serving active car dealers across the UK.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 font-mono-code text-xs">
                  {["NestJS", "Next.js", "PostgreSQL", "Prisma ORM", "Stripe", "GoCardless", "Redis"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg dark:bg-white/5 bg-black/5 dark:text-neutral-300 text-neutral-700 border dark:border-white/10 border-black/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t dark:border-white/5 border-black/5 flex items-center justify-between">
                <span className="font-mono-code text-xs text-blue-500 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect Deep-Dive Case Study <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="font-mono-code text-[11px] text-emerald-500 font-semibold">ACTIVE PRODUCTION</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MemoPixx (IoT Kiosk Platform) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setSelectedProject(PROJECTS[1])}
            className="group relative rounded-3xl dark:bg-[#0D0F17] bg-white border dark:border-white/10 border-black/10 overflow-hidden cursor-pointer hover:border-blue-500/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
          >
            {/* Visual Header / Mockup Window */}
            <div className="p-6 sm:p-8 dark:bg-gradient-to-b dark:from-[#131724] dark:to-[#0D0F17] bg-gradient-to-b from-amber-50/50 to-white border-b dark:border-white/5 border-black/5">
              <div className="flex items-center justify-between pb-4 font-mono-code text-[11px] dark:text-neutral-400 text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-medium">memopixx.com // kiosk_daemon</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold uppercase text-[10px]">
                  Smart Hardware Ecosystem
                </span>
              </div>

              {/* Stylized Kiosk Mockup */}
              <div className="mt-4 rounded-2xl dark:bg-[#090A10] bg-neutral-900 p-5 text-white font-mono-code shadow-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-amber-400 font-bold">MEMOPIXX UNATTENDED KIOSK</span>
                  <span className="text-neutral-300 text-[10px]">NFC / QR TOKEN ACTIVE</span>
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                      QR
                    </div>
                    <div>
                      <div className="text-xs font-semibold">Mobile Pair &amp; Magnet Customizer</div>
                      <div className="text-[10px] text-neutral-400">Zero App Install Required</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-xs font-bold">READY</span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-neutral-400">TRANSACTION ENGINE:</span>
                    <div className="text-white font-semibold">MongoDB Multi-Doc ACID</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-neutral-400">STRIPE TERMINAL:</span>
                    <div className="text-emerald-400 font-semibold">Apple &amp; Google Pay</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content & Highlights */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs text-amber-500 font-semibold">02 // IOT &amp; HARDWARE KIOSK</span>
                  <span className="font-mono-code text-xs dark:text-neutral-500 text-neutral-400">2025 • PRODUCTION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 group-hover:text-blue-500 transition-colors">
                  MemoPixx Photo Magnet Kiosks
                </h3>
                <p className="mt-3 dark:text-neutral-400 text-neutral-600 text-sm sm:text-base font-sans leading-relaxed">
                  Distributed cloud backend and user web app powering unattended photo magnet printing kiosks. Built with NFC/QR session flows, cashless Stripe payments, transactional revenue sharing, and a 13-section administrative RBAC portal.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 font-mono-code text-xs">
                  {["React.js", "Node.js", "Express.js", "MongoDB (Mongoose)", "Stripe Terminal", "PM2", "WebSockets"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg dark:bg-white/5 bg-black/5 dark:text-neutral-300 text-neutral-700 border dark:border-white/10 border-black/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t dark:border-white/5 border-black/5 flex items-center justify-between">
                <span className="font-mono-code text-xs text-blue-500 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect Deep-Dive Case Study <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="font-mono-code text-[11px] text-emerald-500 font-semibold">ZERO-DROP QUEUE</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: DanceBook (Creator Marketplace & Split Payments) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(PROJECTS[2])}
            className="group relative rounded-3xl dark:bg-[#0D0F17] bg-white border dark:border-white/10 border-black/10 overflow-hidden cursor-pointer hover:border-blue-500/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
          >
            <div className="p-6 sm:p-8 dark:bg-gradient-to-b dark:from-[#131724] dark:to-[#0D0F17] bg-gradient-to-b from-purple-50/50 to-white border-b dark:border-white/5 border-black/5">
              <div className="flex items-center justify-between pb-4 font-mono-code text-[11px] dark:text-neutral-400 text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-medium">dancebook.app</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 font-semibold uppercase text-[10px]">
                  Marketplace FinTech
                </span>
              </div>

              <div className="mt-4 rounded-2xl dark:bg-[#090A10] bg-neutral-900 p-5 text-white font-mono-code shadow-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-purple-400 font-bold">STRIPE CONNECT SPLIT ENGINE</span>
                  <span className="text-emerald-400 text-[10px]">90% CREATOR / 10% PLATFORM</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-neutral-400">CONCURRENT MESSAGING</div>
                    <div className="text-base font-bold text-white mt-1">Socket.io Real-Time</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-neutral-400">DIGITAL TICKETING</div>
                    <div className="text-base font-bold text-purple-400 mt-1">Cryptographic QR</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs text-purple-500 font-semibold">03 // FINTECH &amp; SPLIT-PAYOUTS</span>
                  <span className="font-mono-code text-xs dark:text-neutral-500 text-neutral-400">2025 • LIVE</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 group-hover:text-blue-500 transition-colors">
                  DanceBook Platform
                </h3>
                <p className="mt-3 dark:text-neutral-400 text-neutral-600 text-sm sm:text-base font-sans leading-relaxed">
                  End-to-end event and casting booking platform supporting dance workshops, auditions, and ticket sales. Engineered with real-time Socket.io chat and automated Stripe Connect split payments.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 font-mono-code text-xs">
                  {["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Stripe Connect"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg dark:bg-white/5 bg-black/5 dark:text-neutral-300 text-neutral-700 border dark:border-white/10 border-black/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-5 border-t dark:border-white/5 border-black/5 flex items-center justify-between">
                <span className="font-mono-code text-xs text-blue-500 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect Deep-Dive Case Study <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="font-mono-code text-[11px] text-emerald-500 font-semibold">LIVE PLATFORM</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Tahafuz (IoT Women Safety Lifeline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => setSelectedProject(PROJECTS[3])}
            className="group relative rounded-3xl dark:bg-[#0D0F17] bg-white border dark:border-white/10 border-black/10 overflow-hidden cursor-pointer hover:border-blue-500/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
          >
            <div className="p-6 sm:p-8 dark:bg-gradient-to-b dark:from-[#131724] dark:to-[#0D0F17] bg-gradient-to-b from-emerald-50/50 to-white border-b dark:border-white/5 border-black/5">
              <div className="flex items-center justify-between pb-4 font-mono-code text-[11px] dark:text-neutral-400 text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-medium">esp32_firmware // telemetry_bridge</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold uppercase text-[10px]">
                  Embedded IoT Lifeline
                </span>
              </div>

              <div className="mt-4 rounded-2xl dark:bg-[#090A10] bg-neutral-900 p-5 text-white font-mono-code shadow-2xl border border-white/10">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                  <span className="text-emerald-400 font-bold">ESP32 SENSOR ARBITRATION</span>
                  <span className="text-emerald-400 text-[10px]">&lt; 800ms SOS SLA</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-neutral-400">HARDWARE INTERRUPT</div>
                    <div className="text-sm font-bold text-white mt-1">MPU-6050 Shake Gesture</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-neutral-400">BACKGROUND AUDIO</div>
                    <div className="text-sm font-bold text-emerald-400 mt-1">AES-256 Encrypted Buffer</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs text-emerald-500 font-semibold">04 // HARDWARE IOT &amp; MOBILE</span>
                  <span className="font-mono-code text-xs dark:text-neutral-500 text-neutral-400">CAPSTONE PROJECT</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mt-2 group-hover:text-blue-500 transition-colors">
                  Tahafuz Lifeline System
                </h3>
                <p className="mt-3 dark:text-neutral-400 text-neutral-600 text-sm sm:text-base font-sans leading-relaxed">
                  Personal safety ecosystem pairing a custom ESP32 wearable microcontroller with a React Native mobile companion app. Instantly broadcasts real-time GPS coordinates and encrypted audio streams on physical gesture detection.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 font-mono-code text-xs">
                  {["ESP32", "Embedded C", "React Native", "Node.js", "Firebase", "GPS Telemetry"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg dark:bg-white/5 bg-black/5 dark:text-neutral-300 text-neutral-700 border dark:border-white/10 border-black/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-5 border-t dark:border-white/5 border-black/5 flex items-center justify-between">
                <span className="font-mono-code text-xs text-blue-500 font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Inspect Deep-Dive Case Study <ArrowUpRight className="w-4 h-4" />
                </span>
                <span className="font-mono-code text-[11px] text-emerald-500 font-semibold">AWARD-WINNING CAPSTONE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

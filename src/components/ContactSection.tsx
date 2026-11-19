"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Copy, Check, ArrowUpRight, Phone, Send, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { PERSONAL_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const leftInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail || !formMessage) return;

    setSending(true);

    // Simulate brief send delay for UX
    await new Promise((r) => setTimeout(r, 600));

    const subject = encodeURIComponent(`Inquiry from ${formName || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`
    );
    window.location.href = `mailto:${PERSONAL_DATA.email}?subject=${subject}&body=${body}`;

    setSending(false);
    setFormSubmitted(true);

    // Fire confetti
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#a78bfa", "#34d399", "#f59e0b", "#ec4899"],
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: ["#3b82f6", "#34d399"],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: ["#a78bfa", "#f59e0b"],
        });
      }, 300);
    } catch {
      // confetti is a progressive enhancement
    }
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: PERSONAL_DATA.github,
      Icon: GitHubIcon,
      desc: "Open source work",
    },
    {
      label: "LinkedIn",
      href: PERSONAL_DATA.linkedin,
      Icon: LinkedInIcon,
      desc: "Professional profile",
    },
    {
      label: "Phone",
      href: `tel:${PERSONAL_DATA.phone}`,
      Icon: Phone,
      desc: PERSONAL_DATA.phone,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 border-b dark:border-white/[0.08] border-neutral-200"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Section Header */}
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
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-white text-neutral-900"
                initial={{ y: "100%" }}
                animate={headerInView ? { y: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                Let&apos;s Work Together
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="dark:text-neutral-400 text-neutral-600 text-sm max-w-md font-sans"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Currently open to Full Stack Developer positions, senior roles, and high-impact engineering projects.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold dark:text-white text-neutral-900 leading-snug">
                Let&apos;s build something impactful together.
              </h3>
              <p className="mt-3 dark:text-neutral-300 text-neutral-600 text-base leading-relaxed font-sans">
                Feel free to reach out directly. I&apos;m always happy to discuss software engineering, new opportunities, or interesting projects.
              </p>

              {/* Email Card */}
              <div className="mt-8 p-6 rounded-2xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm group hover:border-blue-500/30 transition-colors">
                <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-1.5">
                  Direct Email
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_DATA.email}`}
                    className="font-mono-code text-base sm:text-lg font-bold dark:text-white text-neutral-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    {PERSONAL_DATA.email}
                  </a>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl dark:bg-white/5 bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-white/10 border dark:border-white/10 border-neutral-200 text-xs font-mono-code self-start sm:self-auto transition-all"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="copied"
                          className="flex items-center gap-1.5 text-emerald-500 font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        >
                          <Check className="w-3.5 h-3.5" />
                          Copied!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          className="flex items-center gap-1.5"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        >
                          <Copy className="w-3.5 h-3.5 text-neutral-400" />
                          Copy
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socialLinks.map(({ label, href, Icon, desc }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={leftInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex flex-col gap-1 p-4 rounded-2xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all group shadow-sm"
                  >
                    <Icon className="w-5 h-5 dark:text-neutral-300 text-neutral-700 group-hover:text-blue-500 transition-colors" />
                    <span className="font-semibold text-xs dark:text-white text-neutral-900 font-mono-code mt-1">
                      {label}
                    </span>
                    <span className="text-[11px] text-neutral-500 truncate">{desc}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <motion.div
              className="mt-8 pt-6 border-t dark:border-white/10 border-neutral-200"
              initial={{ opacity: 0 }}
              animate={leftInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/Muhammad_Umair_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl dark:bg-white bg-neutral-900 dark:text-black text-white text-sm font-medium shadow-sm transition-opacity hover:opacity-90"
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-6 sm:p-8 rounded-3xl dark:bg-[#12141C] bg-white border dark:border-white/10 border-neutral-200 shadow-sm">
              <h4 className="font-display text-xl font-bold dark:text-white text-neutral-900 mb-1">
                Send a Message
              </h4>
              <p className="text-xs dark:text-neutral-400 text-neutral-500 font-sans mb-6">
                Fill in your details and I&apos;ll reply as soon as possible.
              </p>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="py-10 text-center"
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4"
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, times: [0, 0.6, 1] }}
                    >
                      <Check className="w-8 h-8" />
                    </motion.div>
                    <h5 className="font-display text-lg font-bold dark:text-white text-neutral-900">
                      Message Sent! 🎉
                    </h5>
                    <p className="text-xs dark:text-neutral-400 text-neutral-600 mt-2 max-w-xs mx-auto">
                      Your email client has been opened with your inquiry pre-filled. I&apos;ll get back to you soon.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormName("");
                        setFormEmail("");
                        setFormMessage("");
                      }}
                      className="mt-5 px-5 py-2 rounded-xl border dark:border-white/10 border-neutral-200 text-xs font-mono-code dark:text-neutral-300 text-neutral-700 hover:border-blue-500/50 transition-all"
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4 text-xs font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <label className="block font-medium dark:text-neutral-300 text-neutral-700 mb-1.5">
                        Your Name / Company
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins // Engineering Manager"
                        className="w-full px-4 py-3 rounded-xl dark:bg-white/[0.03] bg-neutral-50 border dark:border-white/10 border-neutral-200 dark:text-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-medium dark:text-neutral-300 text-neutral-700 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl dark:bg-white/[0.03] bg-neutral-50 border dark:border-white/10 border-neutral-200 dark:text-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-medium dark:text-neutral-300 text-neutral-700 mb-1.5">
                        Message / Project Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Tell me about your project, timeline, or open role..."
                        className="w-full px-4 py-3 rounded-xl dark:bg-white/[0.03] bg-neutral-50 border dark:border-white/10 border-neutral-200 dark:text-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 text-sm transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={sending ? {} : { scale: 1.02, y: -1 }}
                      whileTap={sending ? {} : { scale: 0.97 }}
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      {sending ? (
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span>{sending ? "Sending..." : "Send Message"}</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

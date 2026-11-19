"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radio,
  Cpu,
  Server,
  Smartphone,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Activity,
  MapPin,
  ShieldAlert,
  Wifi,
  Clock,
  Sparkles,
} from "lucide-react";

interface TelemetryLog {
  timestamp: string;
  stage: string;
  message: string;
  status: "pending" | "success" | "warning";
}

export default function TahafuzArchitectureSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [logs, setLogs] = useState<TelemetryLog[]>([]);
  const [completed, setCompleted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout[]>([]);

  const stages = [
    {
      id: 1,
      title: "Wearable IoT Hardware",
      subtitle: "Silent Physical Trigger",
      icon: Radio,
      badge: "EDGE SENSOR",
      detail: "Hardware GPIO trigger activated. Captures user distress state with zero screen visibility.",
      metric: "0ms — GPIO Interrupt",
      color: "amber",
    },
    {
      id: 2,
      title: "ESP32 Controller",
      subtitle: "GPS + GSM Telemetry",
      icon: Cpu,
      badge: "FIRMWARE (C++)",
      detail: "Captures live GPS coordinates (24.8607° N, 67.0011° E) & encrypts telemetry packet over GSM.",
      metric: "45ms — Satellite Lock",
      color: "emerald",
    },
    {
      id: 3,
      title: "NestJS Cloud Broker",
      subtitle: "High-Throughput Gateway",
      icon: Server,
      badge: "BACKEND CLOUD",
      detail: "Authenticates packet signature, verifies cryptographic hash, & routes payload via WebSockets.",
      metric: "138ms — P99 Latency",
      color: "blue",
    },
    {
      id: 4,
      title: "React Native Mobile App",
      subtitle: "Dispatch & Live Tracker",
      icon: Smartphone,
      badge: "MOBILE DISPATCH",
      detail: "Renders real-time map pin, triggers loud SOS alarm & dispatches SMS alerts to 3 emergency contacts.",
      metric: "210ms — Contact Notified",
      color: "purple",
    },
  ];

  const clearAllTimers = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  };

  const addLog = (stage: string, message: string, status: "pending" | "success" | "warning") => {
    const time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setLogs((prev) => [...prev, { timestamp: time, stage, message, status }]);
  };

  const startSimulation = () => {
    if (isRunning) return;
    clearAllTimers();
    setIsRunning(true);
    setCompleted(false);
    setActiveStage(1);
    setLogs([]);

    addLog("STAGE 01", "Hardware SOS button depressed: GPIO14 digital interrupt triggered.", "warning");

    // Stage 2
    const t1 = setTimeout(() => {
      setActiveStage(2);
      addLog("STAGE 02", "ESP32 locked GPS Fix: Lat 24.8607° N, Lon 67.0011° E. Encrypting AES-GCM payload.", "pending");
    }, 900);

    // Stage 3
    const t2 = setTimeout(() => {
      setActiveStage(3);
      addLog("STAGE 03", "NestJS Cloud Broker received telemetry. Ingestion latency: 138ms. Broadcasting to WebSocket room.", "pending");
    }, 1800);

    // Stage 4
    const t3 = setTimeout(() => {
      setActiveStage(4);
      setCompleted(true);
      setIsRunning(false);
      addLog("STAGE 04", "🚨 Alert Delivered! Mobile App triggered emergency protocol. 3 Guardians & Police dispatched.", "success");
    }, 2700);

    timerRef.current = [t1, t2, t3];
  };

  const resetSimulation = () => {
    clearAllTimers();
    setIsRunning(false);
    setActiveStage(0);
    setCompleted(false);
    setLogs([]);
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  return (
    <div className="mt-8 pt-8 border-t dark:border-white/10 border-neutral-200">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-code text-blue-600 dark:text-blue-400 font-semibold mb-1">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>INTERACTIVE ARCHITECTURE SIMULATOR</span>
          </div>
          <h4 className="font-display text-lg sm:text-xl font-bold dark:text-white text-neutral-900">
            End-to-End Hardware ⟷ Cloud ⟷ Mobile Telemetry Pipeline
          </h4>
          <p className="text-xs dark:text-neutral-400 text-neutral-600 font-sans mt-0.5">
            Simulate how a real-time distress signal travels from the physical wearable device to the mobile application in &lt; 250ms.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {!isRunning && !completed ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={startSimulation}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-md shadow-blue-500/20 transition-all font-mono-code"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Simulate SOS Event</span>
            </motion.button>
          ) : isRunning ? (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-mono-code text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>Packet In-Flight...</span>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={resetSimulation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl dark:bg-white/5 bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-white/10 border dark:border-white/10 border-neutral-300 font-mono-code text-xs dark:text-neutral-300 text-neutral-700 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Pipeline</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Pipeline 4-Stage Visualizer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeStage === stage.id;
          const isPassed = activeStage > stage.id || completed;

          return (
            <motion.div
              key={stage.id}
              animate={{
                scale: isActive ? 1.02 : 1,
                borderColor: isActive
                  ? "#3b82f6"
                  : isPassed
                  ? "rgba(16, 185, 129, 0.4)"
                  : "rgba(255, 255, 255, 0.08)",
              }}
              transition={{ duration: 0.3 }}
              className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? "dark:bg-blue-600/10 bg-blue-50/70 border-blue-500 shadow-lg shadow-blue-500/10"
                  : isPassed
                  ? "dark:bg-emerald-500/5 bg-emerald-50/50 dark:border-emerald-500/30 border-emerald-300"
                  : "dark:bg-white/[0.02] bg-neutral-50/80 dark:border-white/5 border-neutral-200"
              }`}
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b dark:border-white/5 border-neutral-200">
                  <span className="font-mono-code text-[10px] text-neutral-400 uppercase tracking-wider">
                    STAGE 0{stage.id}
                  </span>
                  <span
                    className={`font-mono-code text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-blue-500 text-white animate-pulse"
                        : isPassed
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "dark:bg-white/5 bg-neutral-200 text-neutral-500"
                    }`}
                  >
                    {isPassed ? "DELIVERED" : isActive ? "PROCESSING" : stage.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : isPassed
                        ? "bg-emerald-500 text-white"
                        : "dark:bg-white/5 bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-display text-sm font-bold dark:text-white text-neutral-900 leading-tight">
                      {stage.title}
                    </h5>
                    <div className="text-[11px] text-neutral-500 font-sans">{stage.subtitle}</div>
                  </div>
                </div>

                <p className="mt-3 text-xs dark:text-neutral-300 text-neutral-600 leading-relaxed font-sans">
                  {stage.detail}
                </p>
              </div>

              {/* Metric Footer */}
              <div className="mt-4 pt-3 border-t dark:border-white/5 border-neutral-200 flex items-center justify-between text-[11px] font-mono-code">
                <span className="text-neutral-400">BENCHMARK:</span>
                <span
                  className={`font-semibold ${
                    isPassed ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-500"
                  }`}
                >
                  {stage.metric}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Live Telemetry Terminal Feed */}
      <div className="mt-4 p-4 rounded-2xl dark:bg-[#0A0C10] bg-neutral-900 border dark:border-white/10 border-neutral-800 text-white shadow-inner font-mono-code text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-neutral-300">LIVE TELEMETRY STREAM</span>
          </div>
          <span className="text-[10px] text-neutral-500">
            {logs.length > 0 ? `${logs.length} packet event(s) logged` : "Awaiting simulation trigger"}
          </span>
        </div>

        <div className="mt-2.5 space-y-1.5 min-h-[64px] max-h-36 overflow-y-auto">
          {logs.length === 0 ? (
            <div className="text-neutral-500 text-[11px] italic py-2">
              &gt; Ready. Click &ldquo;Simulate SOS Event&rdquo; to test real-time firmware ➔ cloud telemetry.
            </div>
          ) : (
            logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-2.5 text-[11px] leading-relaxed"
              >
                <span className="text-neutral-500 shrink-0">[{log.timestamp}]</span>
                <span className="text-blue-400 font-bold shrink-0">{log.stage}:</span>
                <span
                  className={
                    log.status === "warning"
                      ? "text-amber-300 font-medium"
                      : log.status === "success"
                      ? "text-emerald-400 font-medium"
                      : "text-neutral-200"
                  }
                >
                  {log.message}
                </span>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

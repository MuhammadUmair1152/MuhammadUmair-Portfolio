"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2, Activity, ArrowRight, Layers } from "lucide-react";

interface PipelineStep {
  name: string;
  role: string;
  protocol: string;
  latency: string;
  security: string;
  details: string;
}

interface ArchitectureScenario {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  summary: string;
  steps: PipelineStep[];
  codeSnippet: string;
}

const SCENARIOS: ArchitectureScenario[] = [
  {
    id: "drivesafe",
    title: "Multi-Tenant Dynamic DB Isolation",
    subtitle: "DriveSafe Warranty (UK Automotive SaaS)",
    domain: "Enterprise SaaS & FinTech",
    summary:
      "Every UK dealership operates with dedicated tenant schema isolation. Requests are authenticated via JWT, parsed for tenant ID, routed to the isolated PostgreSQL connection pool, and synchronized with Stripe/GoCardless.",
    steps: [
      {
        name: "Client Ingestion",
        role: "Next.js App / Dealership Portal",
        protocol: "HTTPS / TLS 1.3",
        latency: "~24ms",
        security: "Signed HttpOnly JWT + CSRF Guard",
        details: "Policy issuance, dealer claims or monthly Direct Debit setup request initiated.",
      },
      {
        name: "Tenant Guard & Routing",
        role: "NestJS Dependency Injection Guard",
        protocol: "Internal Express Middleware",
        latency: "~5ms",
        security: "Role-Based Access Control (RBAC)",
        details: "Extracts dealer tenant context from claims and provisions tenant-specific Prisma Client instance.",
      },
      {
        name: "Isolated Storage",
        role: "PostgreSQL Database Engine",
        protocol: "Postgres TCP (Connection Pool)",
        latency: "~18ms",
        security: "Row & Schema Level Isolation",
        details: "Executes policy persistence with strict tenant boundaries; zero cross-dealer data leakage.",
      },
      {
        name: "Payment & Event Dispatch",
        role: "Stripe Billing & GoCardless API",
        protocol: "Idempotent REST Webhooks",
        latency: "~140ms",
        security: "HMAC SHA-256 Webhook Signatures",
        details: "Automated recurring BACS direct debit mandates, invoice generation, and customer contracts.",
      },
    ],
    codeSnippet: `// NestJS Dynamic Tenant Context Resolver
@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly prismaService: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-dealer-id'] as string;
    if (!tenantId) throw new UnauthorizedException('Tenant context missing');

    // Dynamically bind isolated schema connection
    req['tenantPrisma'] = await this.prismaService.getDealerClient(tenantId);
    next();
  }
}`,
  },
  {
    id: "memopixx",
    title: "Networked IoT Kiosk & Transaction Buffer",
    subtitle: "MemoPixx (Smart Kiosk & Cashless Print Engine)",
    domain: "IoT Kiosk & Multi-Party Revenue Split",
    summary:
      "Physical kiosks handle customer NFC session handoff, mobile uploads, Stripe Terminal authorization, and multi-document ACID transactions ensuring zero dropped print jobs.",
    steps: [
      {
        name: "Physical NFC/QR Handoff",
        role: "Kiosk Terminal & User Mobile Web App",
        protocol: "NFC Token / QR WebSocket Session",
        latency: "<50ms",
        security: "Ephemeral Session Token",
        details: "Customer pairs their mobile device to physical kiosk hardware without app installation.",
      },
      {
        name: "Asset Pipeline & Buffer",
        role: "Cloudinary + Express Backend",
        protocol: "Chunked Stream / HTTPS",
        latency: "~120ms",
        security: "Pre-signed Upload Nonce",
        details: "High-resolution magnet artwork converted to CMYK print matrices and queued in local buffer.",
      },
      {
        name: "Atomic Payment Capture",
        role: "Stripe Terminal & Multi-Doc Mongo ACID",
        protocol: "Stripe Webhook Event Bus",
        latency: "~180ms",
        security: "Distributed ACID Transaction Session",
        details: "Payment confirmation triggers simultaneous venue revenue split write and print release.",
      },
      {
        name: "Hardware Job Dispense",
        role: "Kiosk Embedded Controller (PM2 daemon)",
        protocol: "Local TCP / USB Serial Daemon",
        latency: "~30ms",
        security: "Encrypted Hardware Heartbeat",
        details: "Direct drive print motor activation, photo magnet cutting, and ATM-style pickup tray event.",
      },
    ],
    codeSnippet: `// Multi-Document Transaction with Atomic Revenue Split
const session = await mongoose.startSession();
session.startTransaction();
try {
  await PrintJob.create([{ kioskId, assetUrl, status: 'QUEUED' }], { session });
  await Ledger.create([{
    venueShare: amount * 0.20,
    operatorShare: amount * 0.80,
    transactionId
  }], { session });
  await session.commitTransaction();
  kioskSocket.emit('job:dispatch', { printToken });
} catch (error) {
  await session.abortTransaction();
}`,
  },
  {
    id: "tahafuz",
    title: "Hardware Interrupt & Emergency Telemetry",
    subtitle: "Tahafuz (ESP32 IoT & Mobile Safety Lifeline)",
    domain: "Embedded IoT & Edge Hardware",
    summary:
      "Physical shake gestures trigger ESP32 hardware interrupts, establishing dual-redundant BLE/Cellular packets to the companion app, launching silent audio streaming and emergency dispatch.",
    steps: [
      {
        name: "Inertial Interrupt",
        role: "ESP32 + MPU-6050 Accelerometer",
        protocol: "I2C Hardware ISR Interrupt",
        latency: "<10ms",
        security: "Hardware Level Signal Filter",
        details: "Violent shake pattern detected in under 10ms, waking device from deep sleep immediately.",
      },
      {
        name: "Local Telemetry Conduit",
        role: "ESP32 Firmware (Embedded C)",
        protocol: "Bluetooth Low Energy (GATT Service)",
        latency: "~45ms",
        security: "Encrypted BLE Pairing",
        details: "Streams trigger packet to paired React Native mobile application in background execution.",
      },
      {
        name: "Mobile Audio & GPS Capture",
        role: "React Native Background Service",
        protocol: "Silent Native Audio Bridge",
        latency: "~85ms",
        security: "AES-256 Encrypted Audio Buffer",
        details: "Acquires high-precision GPS coordinates while activating discreet background mic recording.",
      },
      {
        name: "Cloud Dissemination",
        role: "Node.js WebSocket & Firebase Cloud",
        protocol: "WSS + Emergency SMS Fallback",
        latency: "~130ms",
        security: "Tokenized Cloud Authorization",
        details: "Distributes live telemetry map to authorities and trusted emergency contacts.",
      },
    ],
    codeSnippet: `// ESP32 Hardware ISR & Gesture Threshold in Embedded C
void IRAM_ATTR onShakeInterrupt() {
  uint32_t now = millis();
  if (now - lastTrigger > DEBOUNCE_MS) {
    emergencyFlag = true;
    portENTER_CRITICAL_ISR(&mux);
    esp_ble_gatts_send_indicate(gatt_if, conn_id, handle, 
                               sizeof(sos_packet), (uint8_t*)&sos_packet, false);
    portEXIT_CRITICAL_ISR(&mux);
  }
}`,
  },
  {
    id: "visionid",
    title: "128D Biometric Vector & Python Vision",
    subtitle: "VisionID Attendance (Applied AI & Computer Vision)",
    domain: "Computer Vision & Python Microservices",
    summary:
      "Automated biometric attendance pipeline that detects faces, extracts 128-dimensional deep feature embeddings, computes Euclidean distance thresholds, and updates the administrative database.",
    steps: [
      {
        name: "Frame Ingestion",
        role: "OpenCV RTSP Video Stream",
        protocol: "H.264 Video Capture",
        latency: "~30ms/frame",
        security: "Anti-Spoofing Heuristics",
        details: "Captures continuous high-resolution classroom video feeds and normalizes lighting levels.",
      },
      {
        name: "Facial Landmark Alignment",
        role: "Dlib / OpenCV Landmark Predictor",
        protocol: "Affine Warp Normalization",
        latency: "~40ms",
        security: "68-Point Geometric Alignment",
        details: "Detects eye, nose, and jaw fiducials to align facial orientation regardless of camera tilt.",
      },
      {
        name: "Vector Embedding Extraction",
        role: "ResNet Deep Metric Model (Python)",
        protocol: "128D Floating-Point Array",
        latency: "~50ms",
        security: "Euclidean Distance Metric (Threshold: 0.55)",
        details: "Maps facial geometry into a 128-dimensional hyperspace embedding vector.",
      },
      {
        name: "FastAPI Ledger Sync",
        role: "FastAPI + PostgreSQL Storage",
        protocol: "Asynchronous REST / JSON",
        latency: "~15ms",
        security: "Immutable Timestamp Ledger",
        details: "Reconciles matching student ID, records automated attendance, and logs audit trail.",
      },
    ],
    codeSnippet: `# Python Automated Biometric Embedding Matching
def evaluate_face_embedding(frame_face_encoding, known_encodings, tolerance=0.54):
    # Compute Euclidean distance across reference database
    distances = np.linalg.norm(known_encodings - frame_face_encoding, axis=1)
    min_idx = np.argmin(distances)
    if distances[min_idx] <= tolerance:
        return {"matched": True, "student_id": known_ids[min_idx], "confidence": float(1 - distances[min_idx])}
    return {"matched": False, "student_id": None}`,
  },
];

export default function ArchitectureVisualizer() {
  const [activeScenarioId, setActiveScenarioId] = useState("drivesafe");
  const [simulating, setSimulating] = useState(false);
  const [activeHop, setActiveHop] = useState<number | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleRunSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveHop(0);

    const hopInterval = 600;
    scenario.steps.forEach((_, idx) => {
      setTimeout(() => {
        setActiveHop(idx);
      }, idx * hopInterval);
    });

    setTimeout(() => {
      setActiveHop(null);
      setSimulating(false);
    }, scenario.steps.length * hopInterval + 400);
  };

  return (
    <section id="architecture" className="relative py-28 md:py-36 border-t dark:border-white/[0.08] border-black/[0.08] dark:bg-[#07080B] bg-neutral-100/60 w-full">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b dark:border-white/[0.08] border-black/[0.08]">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-blue-500 mb-2">
              <Layers className="w-4 h-4" />
              <span>04 // SYSTEM SIMULATION CONSOLE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
              Architecture Simulator
            </h2>
          </div>
          <p className="dark:text-neutral-400 text-neutral-600 text-sm md:text-base max-w-lg font-sans leading-relaxed">
            Inspect real-world data pipelines engineered for high throughput, zero downtime, multi-tenancy, and hardware telemetry.
          </p>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {SCENARIOS.map((item) => {
            const isSelected = item.id === activeScenarioId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveScenarioId(item.id);
                  setActiveHop(null);
                  setSimulating(false);
                }}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border font-mono-code text-xs flex flex-col justify-between ${
                  isSelected
                    ? "dark:bg-white/[0.08] bg-white border-blue-500 text-blue-500 dark:text-white shadow-lg"
                    : "dark:bg-white/[0.02] bg-white/70 dark:border-white/5 border-black/10 dark:text-neutral-400 text-neutral-600 hover:border-black/20"
                }`}
              >
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">{item.domain}</span>
                <span className="font-display text-base font-bold dark:text-white text-black mt-2 leading-snug">
                  {item.title}
                </span>
                <span className="text-[11px] text-blue-500 mt-3 flex items-center gap-1.5 font-medium">
                  Inspect Pipeline <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Console */}
        <div className="mt-8 rounded-3xl dark:bg-[#0B0D14] bg-white border dark:border-white/10 border-black/10 p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b dark:border-white/[0.08] border-black/[0.08]">
            <div>
              <div className="font-mono-code text-xs text-blue-500 uppercase tracking-wider font-semibold">
                {scenario.subtitle}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-1.5">
                {scenario.title}
              </h3>
              <p className="dark:text-neutral-300 text-neutral-700 text-sm sm:text-base mt-3 max-w-4xl leading-relaxed">
                {scenario.summary}
              </p>
            </div>

            {/* Run Simulation Trigger */}
            <button
              onClick={handleRunSimulation}
              disabled={simulating}
              className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono-code text-xs font-semibold shrink-0 transition-all duration-300 ${
                simulating
                  ? "bg-blue-600/20 text-blue-500 border border-blue-500/40 cursor-wait"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:scale-105"
              }`}
            >
              <Play className={`w-4 h-4 ${simulating ? "animate-spin" : ""}`} />
              <span>{simulating ? "Transmitting Packet..." : "Simulate Live Request"}</span>
            </button>
          </div>

          {/* Interactive Pipeline Hops Graph */}
          <div className="mt-8">
            <div className="font-mono-code text-xs dark:text-neutral-500 text-neutral-400 mb-4 flex items-center justify-between">
              <span>END-TO-END DATA CONDUIT</span>
              <span>4 PIPELINE HOPS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {scenario.steps.map((step, idx) => {
                const isCurrentHop = activeHop === idx;
                const isPassedHop = activeHop !== null && activeHop > idx;

                return (
                  <motion.div
                    key={idx}
                    animate={{
                      scale: isCurrentHop ? 1.03 : 1,
                      borderColor: isCurrentHop
                        ? "rgba(59, 130, 246, 0.9)"
                        : isPassedHop
                        ? "rgba(16, 185, 129, 0.6)"
                        : undefined,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isCurrentHop
                        ? "dark:bg-blue-950/40 bg-blue-50 shadow-lg border-blue-500"
                        : isPassedHop
                        ? "dark:bg-emerald-950/20 bg-emerald-50 border-emerald-500/40"
                        : "dark:bg-white/[0.02] bg-neutral-50 dark:border-white/5 border-black/5"
                    }`}
                  >
                    {/* Hop Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono-code text-[10px] px-2.5 py-0.5 rounded dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 dark:text-neutral-300 text-neutral-700 font-semibold">
                        HOP 0{idx + 1}
                      </span>
                      {isCurrentHop ? (
                        <span className="inline-flex items-center gap-1 font-mono-code text-[10px] text-blue-500 animate-pulse font-medium">
                          <Activity className="w-3.5 h-3.5" />
                          PROCESSING
                        </span>
                      ) : isPassedHop ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <span className="font-mono-code text-[10px] text-neutral-400">IDLE</span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg">
                        {step.name}
                      </h4>
                      <p className="font-mono-code text-xs text-blue-500 mt-1 font-medium">
                        {step.role}
                      </p>
                      <p className="text-xs sm:text-sm dark:text-neutral-400 text-neutral-600 mt-3 leading-relaxed font-sans">
                        {step.details}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="mt-5 pt-3.5 border-t dark:border-white/5 border-black/5 space-y-1.5 font-mono-code text-[11px]">
                      <div className="flex items-center justify-between dark:text-neutral-400 text-neutral-600">
                        <span className="text-neutral-400">Protocol:</span>
                        <span className="font-medium">{step.protocol}</span>
                      </div>
                      <div className="flex items-center justify-between dark:text-neutral-400 text-neutral-600">
                        <span className="text-neutral-400">SLA Latency:</span>
                        <span className="text-emerald-500 font-semibold">{step.latency}</span>
                      </div>
                      <div className="flex items-center justify-between dark:text-neutral-400 text-neutral-600">
                        <span className="text-neutral-400">Security:</span>
                        <span className="truncate max-w-[150px]" title={step.security}>
                          {step.security}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Architecture Code Snippet Viewer */}
          <div className="mt-8 rounded-2xl dark:bg-[#07080C] bg-neutral-900 text-white border dark:border-white/10 border-black/10 p-6 overflow-hidden">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 font-mono-code text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-neutral-200 font-medium">implementation_extract.ts</span>
              </div>
              <span className="text-neutral-400">TYPESCRIPT / ARCHITECTURE</span>
            </div>
            <pre className="mt-4 font-mono-code text-xs sm:text-sm text-neutral-300 overflow-x-auto leading-relaxed p-2">
              <code>{scenario.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

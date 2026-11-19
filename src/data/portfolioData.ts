export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  summary: string;
  mobileFeatures?: string[];
  iotFeatures?: string[];
  accolades?: string;
  problem: string;
  architectureSolution: string;
  keyHighlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  active?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    focus: string;
  }[];
}

export const PERSONAL_DATA = {
  name: "Muhammad Umair",
  initials: "MU",
  title: "Full Stack Developer",
  subTitle: "BS in Computer Engineering (PEC Registered) • Node.js | Python | NestJS | React Native",
  location: "Karachi, Pakistan",
  email: "muhammadumair1152@gmail.com",
  phone: "+92 334 366 9534",
  github: "https://github.com/MuhammadUmair1152",
  linkedin: "https://linkedin.com/in/MUmairDev",
  pecRegistration: "PEC Registered Computer Engineer",
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    shortDegree: "BS in Computer Engineering",
    institution: "Sir Syed University of Engineering and Technology (SSUET)",
    location: "Karachi, Pakistan",
    period: "October 2021 — June 2025",
    cgpa: "3.35 / 4.0",
    pecStatus: "PEC Registered Engineer",
    description:
      "Comprehensive four-year engineering degree encompassing software engineering, distributed systems, embedded hardware, computer architecture, and database systems.",
    highlights: [
      "Graduated with a strong CGPA of 3.35 / 4.0 in Computer Engineering.",
      "Formally registered and accredited by the Pakistan Engineering Council (PEC).",
      "Final Year Project: 'Tahafuz – Women Safety Solution' awarded top grades and extensive jury appreciation.",
      "Core Courses: Data Structures & Algorithms, Distributed Systems, Database Management Systems, Computer Networks, Embedded Systems, Software Engineering.",
    ],
    certifications: [
      {
        name: "PEC (Pakistan Engineering Council) Registered Engineer",
        authority: "Government of Pakistan",
        year: "2025",
      },
      {
        name: "React Native Mobile Development",
        authority: "Saylani Mass IT Training Program (SMIT)",
        year: "2024",
      },
      {
        name: "Deployment of SQL Projects with Front-End Integration",
        authority: "Sir Syed University of Engineering and Technology",
        year: "2024",
      },
      {
        name: "Modern Web Development Certification",
        authority: "DigiSkills.pk",
        year: "2023",
      },
    ],
  },
  bio: "Full Stack Developer and PEC-registered Computer Engineer with professional experience building scalable web applications, multi-tenant SaaS platforms, and mobile apps. Skilled in Node.js, NestJS, Python, React Native, and PostgreSQL, with a passion for clean architecture and robust user experiences.",
};

export const PROJECTS: Project[] = [
  {
    id: "Tahafuz",
    number: "01",
    title: "Tahafuz – Women Safety Solution",
    tagline: "React Native Mobile App & ESP32 IoT Hardware Lifeline (Final Year Project)",
    category: "Mobile App & IoT",
    year: "2024 — 2025",
    role: "Lead Mobile & IoT Developer (FYP Lead)",
    featured: true,
    accolades: "Awarded highest grade & wide faculty appreciation for impactful humanitarian technology and flawless mobile-hardware synchronization.",
    metrics: [
      { label: "Emergency Trigger Response", value: "< 800ms" },
      { label: "Mobile App Platform", value: "React Native (iOS & Android)" },
      { label: "Offline Resilience", value: "Local SQLite + Firebase Cloud" },
    ],
    techStack: [
      "React Native",
      "ESP32 Microcontroller",
      "Embedded C",
      "Node.js",
      "Express.js",
      "Firebase Cloud Storage",
      "SQLite",
      "MongoDB",
      "GPS Telemetry",
    ],
    summary:
      "A complete women's safety ecosystem combining an intuitive cross-platform React Native mobile app with a discreet ESP32 wearable device, providing real-time emergency broadcasts and tamper-resistant evidence capture.",
    mobileFeatures: [
      "Intuitive React Native mobile interface with single-tap emergency SOS and background shake gesture detector.",
      "Discreet background audio recording module that records and encrypts ambient audio when an alert is triggered.",
      "Real-time GPS coordinate triangulation continuously streaming live tracking links to emergency contacts and authorities.",
      "Offline-first architecture storing audio snippets and GPS logs in a local SQLite database with automated cloud synchronization once connectivity returns.",
    ],
    iotFeatures: [
      "Custom ESP32 firmware written in Embedded C with MPU-6050 accelerometer for rapid gesture detection.",
      "Ultra-low-power standby mode with instantaneous hardware interrupt waking the device in milliseconds.",
      "Dual BLE (Bluetooth Low Energy) and Wi-Fi connection handshake with the user's smartphone.",
    ],
    problem:
      "During dangerous situations, victims often cannot unlock their phone or open an app in time, and poor network coverage can cause standard emergency alerts to fail completely.",
    architectureSolution:
      "Constructed a dual-trigger architecture: a physical shake of either the wearable device or the smartphone immediately triggers a low-level background service that captures GPS coordinates, records encrypted audio, and dispatches automated SMS alerts even under spotty mobile coverage.",
    keyHighlights: [
      "Engineered the full React Native mobile application supporting both iOS and Android with foreground and background services.",
      "Implemented AES-256 encrypted audio snippet packaging streamed to Firebase Cloud Storage.",
      "Designed low-latency BLE GATT communication between the ESP32 hardware and the smartphone app.",
      "Extensively commended by academic panelists and university leadership during final project defense.",
    ],
    githubUrl: "https://github.com/MuhammadUmair1152",
  },
  {
    id: "tahafuz-safety",
    number: "01",
    title: "Tahafuz – Women Safety Solution",
    tagline: "React Native Mobile App & ESP32 IoT Hardware Lifeline (Final Year Project)",
    category: "Mobile App & IoT",
    year: "2024 — 2025",
    role: "Lead Mobile & IoT Developer (FYP Lead)",
    featured: true,
    accolades: "Awarded highest grade & wide faculty appreciation for impactful humanitarian technology and flawless mobile-hardware synchronization.",
    metrics: [
      { label: "Emergency Trigger Response", value: "< 800ms" },
      { label: "Mobile App Platform", value: "React Native (iOS & Android)" },
      { label: "Offline Resilience", value: "Local SQLite + Firebase Cloud" },
    ],
    techStack: [
      "React Native",
      "ESP32 Microcontroller",
      "Embedded C",
      "Node.js",
      "Express.js",
      "Firebase Cloud Storage",
      "SQLite",
      "MongoDB",
      "GPS Telemetry",
    ],
    summary:
      "A complete women's safety ecosystem combining an intuitive cross-platform React Native mobile app with a discreet ESP32 wearable device, providing real-time emergency broadcasts and tamper-resistant evidence capture.",
    mobileFeatures: [
      "Intuitive React Native mobile interface with single-tap emergency SOS and background shake gesture detector.",
      "Discreet background audio recording module that records and encrypts ambient audio when an alert is triggered.",
      "Real-time GPS coordinate triangulation continuously streaming live tracking links to emergency contacts and authorities.",
      "Offline-first architecture storing audio snippets and GPS logs in a local SQLite database with automated cloud synchronization once connectivity returns.",
    ],
    iotFeatures: [
      "Custom ESP32 firmware written in Embedded C with MPU-6050 accelerometer for rapid gesture detection.",
      "Ultra-low-power standby mode with instantaneous hardware interrupt waking the device in milliseconds.",
      "Dual BLE (Bluetooth Low Energy) and Wi-Fi connection handshake with the user's smartphone.",
    ],
    problem:
      "During dangerous situations, victims often cannot unlock their phone or open an app in time, and poor network coverage can cause standard emergency alerts to fail completely.",
    architectureSolution:
      "Constructed a dual-trigger architecture: a physical shake of either the wearable device or the smartphone immediately triggers a low-level background service that captures GPS coordinates, records encrypted audio, and dispatches automated SMS alerts even under spotty mobile coverage.",
    keyHighlights: [
      "Engineered the full React Native mobile application supporting both iOS and Android with foreground and background services.",
      "Implemented AES-256 encrypted audio snippet packaging streamed to Firebase Cloud Storage.",
      "Designed low-latency BLE GATT communication between the ESP32 hardware and the smartphone app.",
      "Extensively commended by academic panelists and university leadership during final project defense.",
    ],
    githubUrl: "https://github.com/MuhammadUmair1152",
  },
  {
    id: "drivesafe-warranty",
    number: "02",
    title: "DriveSafe Warranty",
    tagline: "UK SaaS Automotive Warranty & Policy Lifecycle Engine",
    category: "Full Stack SaaS",
    year: "2025",
    role: "Full Stack Developer",
    featured: true,
    metrics: [
      { label: "Market", value: "UK Automotive Dealers" },
      { label: "Payment Systems", value: "Stripe & GoCardless Direct Debit" },
      { label: "Tenancy Model", value: "Automated Per-Dealer Isolation" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Stripe Billing",
      "GoCardless API",
      "Handlebars",
    ],
    summary:
      "A production multi-tenant automotive warranty platform serving active car dealerships across the UK, automating policy issuance, recurring monthly direct debits, and warranty claims workflows.",
    problem:
      "UK car dealerships needed a unified portal to issue warranties to car buyers, manage monthly bank installment debits, and auto-generate legal contracts without manual paperwork.",
    architectureSolution:
      "Architected a modular NestJS backend with PostgreSQL and Prisma ORM, implementing role-based portals for Admins, Dealers, and Customers, with automated Stripe and GoCardless payment schedules.",
    keyHighlights: [
      "Developed multi-tenant RBAC portals separating Admin, Dealer, and Customer capabilities.",
      "Automated direct debit mandates via GoCardless and card subscriptions via Stripe.",
      "Dynamic PDF generation pipeline rendering legal warranty contracts with real-time email delivery.",
      "Two-way synchronization with Google Sheets API for automated real-time dealer sales tracking.",
    ],
    liveUrl: "https://drivesafewarranty.co.uk",
  },
  {
    id: "memopixx",
    number: "03",
    title: "MemoPixx",
    tagline: "Networked Photo Magnet Printing Kiosk Platform",
    category: "Full Stack Web & Kiosk",
    year: "2025",
    role: "Lead Full Stack Developer",
    featured: true,
    metrics: [
      { label: "Session Handoff", value: "Instant NFC / QR" },
      { label: "Admin Sections", value: "13+ RBAC Modules" },
      { label: "Payments", value: "Stripe Apple / Google Pay" },
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "Stripe",
      "TanStack Query",
      "Cloudinary",
      "PM2",
    ],
    summary:
      "A complete cloud backend, mobile web app, and 13-section admin dashboard for networked retail kiosks where customers design custom photo magnets on their phones and print them instantly at kiosks.",
    problem:
      "Unattended retail kiosks required frictionless customer phone pairing without app downloads, instant cashless payments, and zero-loss print queues.",
    architectureSolution:
      "Built a seamless mobile web design flow paired via QR code to physical kiosks, using MongoDB multi-document transactions for atomic revenue-sharing writes and Stripe for webhook-driven print jobs.",
    keyHighlights: [
      "Integrated Stripe payments (Card, Apple Pay, Google Pay) with webhook-driven print jobs.",
      "Built 13+ section administrative dashboard with role-based access for Admins, Operators, and Venue Partners.",
      "Engineered DOOH advertising delivery with per-impression tracking and staff PIN verification.",
      "Hardware queue management ensuring zero dropped print orders during peak kiosk traffic.",
    ],
    liveUrl: "https://memopixx.com",
  },
  {
    id: "dancebook",
    number: "04",
    title: "DanceBook",
    tagline: "Full Stack Social & Event-Booking Platform",
    category: "Full Stack Web & FinTech",
    year: "2025",
    role: "Full Stack Developer",
    featured: true,
    metrics: [
      { label: "Split Payments", value: "90% Creator / 10% Platform" },
      { label: "Real-Time Chat", value: "Socket.io Concurrency" },
      { label: "Ticketing", value: "Instant QR Passes" },
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Stripe Connect",
      "Firebase",
      "Tailwind CSS",
    ],
    summary:
      "A full-stack social event and class booking platform for the dance community, featuring auditions, classes, digital ticketing, and Stripe Connect automated split payouts.",
    problem:
      "Dance artists and workshop hosts needed a single platform to announce workshops, sell tickets, receive instant split payouts, and chat with attendees in real time.",
    architectureSolution:
      "Developed a full React and Node.js application integrating Stripe Connect custom accounts for automated 90/10 payout splits and real-time Socket.io chat rooms.",
    keyHighlights: [
      "Stripe Connect integration for automated split payouts directly into creator bank accounts.",
      "Real-time bi-directional messaging and group notifications powered by Socket.io.",
      "Digital ticket purchasing with QR codes for fast door check-in at dance studios.",
      "Comprehensive admin panel to review casting calls, verify instructors, and monitor platform fees.",
    ],
    liveUrl: "https://dancebook.app",
  },
  {
    id: "vision-attendance",
    number: "05",
    title: "VisionID – Face Recognition Attendance System",
    tagline: "Python Computer Vision & Automated Attendance Pipeline",
    category: "Python & AI",
    year: "2024",
    role: "Python Developer",
    featured: true,
    metrics: [
      { label: "Recognition Speed", value: "< 120ms per face" },
      { label: "Accuracy", value: "98.7% Verified" },
      { label: "Workflow", value: "100% Automated" },
    ],
    techStack: [
      "Python",
      "OpenCV",
      "Face Recognition (dlib)",
      "FastAPI",
      "NumPy",
      "PostgreSQL",
    ],
    summary:
      "An automated attendance management system using Python and OpenCV that captures video frames, extracts 128D facial embeddings, and automatically records attendance in the database.",
    problem:
      "Manual classroom roll-calls waste valuable instruction time and are prone to proxy attendance.",
    architectureSolution:
      "Implemented a Python pipeline that normalizes camera feeds, computes 128-dimensional facial feature vectors, and performs Euclidean distance matching against registered student profiles.",
    keyHighlights: [
      "Real-time facial detection and alignment using OpenCV and dlib facial landmarks.",
      "Euclidean distance matching against registered database of facial encodings.",
      "Automated attendance report generation in CSV and PDF formats with anomaly detection.",
    ],
    githubUrl: "https://github.com/MuhammadUmair1152",
  },
  {
    id: "kernel-ast-compiler",
    number: "06",
    title: "Code Execution & AST Generation API",
    tagline: "Sandboxed JavaScript Execution & Syntactic Analysis Service",
    category: "Backend & Systems",
    year: "2024",
    role: "Backend Developer",
    featured: false,
    metrics: [
      { label: "Sandbox Context", value: "Isolated V8 VM" },
      { label: "Unit Testing", value: "Jest Test Harness" },
      { label: "Output Format", value: "ESTree Compliant AST" },
    ],
    techStack: [
      "Node.js",
      "Babel Parser",
      "MongoDB",
      "Jest",
      "Express.js",
    ],
    summary:
      "A developer backend service that safely executes untrusted JavaScript code inside an isolated sandbox, generates Abstract Syntax Trees (ASTs), and logs runtime outputs with MongoDB.",
    problem:
      "Online educational platforms require safe execution of arbitrary user code without exposing the host server to infinite loops or filesystem exploits.",
    architectureSolution:
      "Implemented a sandboxed VM with strict CPU timeouts, memory caps, and Babel AST parser integration.",
    keyHighlights: [
      "Isolated execution preventing hostile scripts from accessing server environment variables or memory.",
      "Full AST parsing mapping code structure into structured JSON nodes.",
      "Comprehensive Jest test suite covering security edge-cases and runtime exceptions.",
    ],
    githubUrl: "https://github.com/MuhammadUmair1152/Backend-Compiler-API",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "innovative-network",
    company: "Innovative Network (Pvt.) Ltd.",
    role: "Full Stack Developer",
    period: "August 2025 — Present",
    location: "Karachi, Pakistan",
    active: true,
    description:
      "Leading full-cycle design and implementation of multi-tenant cloud platforms, fin-tech payment integrations, and high-performance backend systems.",
    achievements: [
      "Architected DriveSafe Warranty (drivesafewarranty.co.uk) from scratch: a multi-tenant automotive SaaS serving UK car dealerships with dual payment gateways (Stripe & GoCardless).",
      "Developed DanceBook (dancebook.app): social event and class booking platform with real-time Socket.io chat, digital ticketing, and Stripe Connect 90/10 split-payment processing.",
      "Engineered backend integration services and secure client-facing APIs for 200+ connected businesses, ensuring high availability and seamless data compliance.",
      "Designed and deployed scalable RESTful APIs using NestJS, PostgreSQL, and Prisma ORM in an Agile environment with automated CI/CD releases.",
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Stripe Connect",
      "GoCardless",
      "Socket.io",
      "Redis",
      "Docker",
    ],
  },
  {
    id: "iotfiy-solutions",
    company: "IOTFIY Solutions",
    role: "Backend Developer",
    period: "November 2024 — June 2025",
    location: "Karachi, Pakistan",
    active: false,
    description:
      "Engineered backend RESTful APIs, device management microservices, and secure Over-The-Air (OTA) firmware pipelines for smart IoT devices.",
    achievements: [
      "Designed and developed scalable RESTful APIs using Node.js and Express.js for real-time IoT device telemetry management.",
      "Built secure Over-the-Air (OTA) Update APIs for IoT hardware, enabling real-time encrypted firmware deployment over WebSockets.",
      "Optimized database queries and middleware caching layers, reducing server response times by 35%.",
      "Assisted with Linux/Ubuntu server configurations, PM2 process management, and production monitoring to maintain high availability.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "WebSockets",
      "OTA Firmware Updates",
      "MongoDB",
      "Redis",
      "Linux / Ubuntu",
    ],
  },
  {
    id: "coderatory",
    company: "Coderatory",
    role: "MERN Stack Developer Intern",
    period: "June 2023 — September 2024",
    location: "Karachi, Pakistan",
    active: false,
    description:
      "Contributed to core product development, database schema modeling, and automated data scraping scripts.",
    achievements: [
      "Developed backend RESTful APIs, server logic, and MongoDB schemas using Node.js for the company's core product suite.",
      "Built automated web scraping tools using Python and Selenium for structured data collection and processing.",
      "Contributed to Coderatory's product 'Muntazim', improving data indexing and user-matching query accuracy.",
      "Collaborated in Agile sprints, resolving software bugs, and writing comprehensive test routines.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Python",
      "Selenium",
      "MongoDB",
      "REST APIs",
      "Git",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Backend Development",
    skills: ["Node.js", "NestJS", "Express.js", "Python (FastAPI / Flask)", "RESTful API Design", "WebSockets"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Python & Machine Intelligence",
    skills: ["Python", "OpenCV", "Face Recognition", "LLM Prompting & API Integration", "Selenium Web Scraping", "NumPy"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis Caching", "Firebase", "Query Optimization"],
  },
  {
    title: "Payments & Systems",
    skills: ["Stripe (Billing & Connect)", "GoCardless Direct Debit", "Multi-Tenant SaaS", "RBAC Security", "Third-Party REST APIs"],
  },
  {
    title: "DevOps & Engineering Practices",
    skills: ["Docker", "Git & GitHub", "CI/CD Pipelines", "Linux / Ubuntu", "PM2", "Jest Unit Testing", "Agile / SDLC"],
  },
];

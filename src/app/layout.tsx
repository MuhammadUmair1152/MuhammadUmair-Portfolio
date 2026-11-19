import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CommandPalette from "@/components/CommandPalette";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Umair — Full Stack Engineer",
  description:
    "Portfolio of Muhammad Umair — BS in Computer Engineering (PEC Registered). Full Stack Developer specializing in scalable web applications, React Native mobile apps, and intelligent Python systems.",
  keywords: [
    "Muhammad Umair",
    "Full Stack Engineer",
    "NestJS",
    "Node.js",
    "Python",
    "PostgreSQL",
    "React Native",
    "PEC Registered",
  ],
  authors: [{ name: "Muhammad Umair" }],
  openGraph: {
    title: "Muhammad Umair — Full Stack Engineer",
    description:
      "Full Stack Developer specializing in scalable web apps, mobile platforms, and intelligent Python systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-blue-600/30 selection:text-white transition-colors duration-300"
      >
        <ThemeProvider>
          <SmoothScroll>
            <div className="relative min-h-screen w-full overflow-hidden bg-[var(--background)] bg-noise transition-colors duration-300">
              <ScrollProgressBar />
              <CustomCursor />
              <CommandPalette />
              {children}
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

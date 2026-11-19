import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EducationSection from "@/components/EducationSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsCraft from "@/components/SkillsCraft";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col w-full selection:bg-blue-600/30 selection:text-white">
      <Navbar />
      <Hero />
      <EducationSection />
      <ExperienceTimeline />
      <ProjectShowcase />
      <SkillsCraft />
      <ContactSection />
      <Footer />
    </main>
  );
}

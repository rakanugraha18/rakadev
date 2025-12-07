import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AIChatSection from "@/components/AIChatSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Raka Nugraha | Fullstack JavaScript Developer</title>
        <meta
          name="description"
          content="Portfolio of Raka Nugraha, a Fullstack JavaScript Developer specializing in React, Next.js, Node.js, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Fullstack Developer, JavaScript, React, Next.js, TypeScript, Node.js, Web Developer, Indonesia"
        />
        <meta property="og:title" content="Raka Nugraha | Fullstack JavaScript Developer" />
        <meta
          property="og:description"
          content="Portfolio of Raka Nugraha, a Fullstack JavaScript Developer specializing in React, Next.js, Node.js, and modern web technologies."
        />
        <link rel="canonical" href="https://rakanugrahadev.xyz" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AIChatSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;

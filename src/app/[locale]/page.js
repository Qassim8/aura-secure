import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/services/ServicesSection";
import PartnersSection from "@/components/shared/Partners";
import StatsSection from "@/components/shared/StatsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection bg="bg-white" />
      <AboutSection bg="(--second-color)" />
      <StatsSection bg="bg-(--primary-color)" />
      <ServicesSection bg="(--second-color)" />
      <ProjectsSection bg="bg-white" isPage={false} />
      <TestimonialsSection bg="bg-(--second-color)" />
      <ContactSection bg="bg-white" />
    </main>
  );
}

import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/projects/ProjectsSection";
import ServicesSection from "@/components/services/ServicesSection";
import PartnersSection from "@/components/shared/Partners";
import StatsSection from "@/components/shared/StatsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection bg="bg-white" />
      <AboutSection bg="(--second-color)" />
      <StatsSection bg="bg-(--primary-color)" />
      <ServicesSection bg="(--second-color)" />
      <PortfolioSection bg="bg-white" />
      <TestimonialsSection bg="bg-(--second-color)" />
      <ContactSection bg="bg-white" />
    </main>
  );
}

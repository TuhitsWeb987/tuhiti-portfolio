
import { ContactSection } from "./components/ContactSection";
import { Hero } from "./components/Hero";
import { ProjectSection } from "./components/ProjectSection";
import { SkillsSection } from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

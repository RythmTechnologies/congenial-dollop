import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <ProjectsSection />
      <section className="py-4 border-y border-border">
        <TestimonialsMarquee />
      </section>
    </main>
  );
}

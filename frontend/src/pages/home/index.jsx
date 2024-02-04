import ReferancesMarquee from "@/components/ReferancesMarquee";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <ProjectsSection />
      <section className="py-4 border-y border-border">
        <ReferancesMarquee />
      </section>
    </main>
  );
}

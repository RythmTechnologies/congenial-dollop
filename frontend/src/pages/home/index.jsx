import ProjectsSection from "@/components/ProjectsSection";
import Marquee from "@/components/ui/marquee";
import ReferancesMarquee from "@/components/ReferancesMarquee";
import AboutSection from "@/components/AboutSection";

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

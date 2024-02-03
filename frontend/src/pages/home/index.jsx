import ProjectsSection from "@/components/projectsSection";
import Marquee from "@/components/marquee";
import About from "../about";
import ReferancesMarquee from "@/components/referancesMarquee";

export default function Home() {
  return (
    <main>
      <About />
      <ProjectsSection />
      <section className="py-4 border-y border-border">
        <ReferancesMarquee />
      </section>
    </main>
  );
}

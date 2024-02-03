import Projects from "@/components/projects";
import Marquee from "@/components/marquee";
import About from "../about";

export default function Home() {
  return (
    <div>
      <About />
      <Marquee />
      <Projects />
    </div>
  );
}

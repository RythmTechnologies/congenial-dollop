import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rythm Technologies | Ana Sayfa</title>
        <meta name="description" content="Rythm Tecnologies ana sayfa desc!" />
      </Helmet>
      <AboutSection />
      <ProjectsSection />
      <TestimonialsMarquee />
    </>
  );
}

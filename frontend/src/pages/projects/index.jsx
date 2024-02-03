import { Outlet } from "react-router-dom";

import ProjecstSection from "@/components/projectsSection";
import { Heading } from "@/components/ui/heading";
export default function Projects() {
  return (
    <>
      <Heading
        level="h1"
        className="scroll-m-20 text-3xl font-bold tracking-tight mb-4 px-4"
      >
        Projects
      </Heading>
      <ProjecstSection />
      <Outlet />
    </>
  );
}

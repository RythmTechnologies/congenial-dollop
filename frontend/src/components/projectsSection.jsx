import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Heading } from "./ui/heading";

const projects = [
  {
    id: 1,
    name: "Tavsanli",
    description: "deneme deneme",
    image: "https://s.tmimgcdn.com/scr/351400/351409-original.png",
    source: "href",
  },
  {
    id: 2,
    name: "Tavsanli",
    description: "deneme deneme",
    image: "https://s.tmimgcdn.com/scr/351400/351409-original.png",
    source: "href",
  },
  {
    id: 3,
    name: "Tavsanli",
    description: "deneme deneme",
    image: "https://s.tmimgcdn.com/scr/351400/351409-original.png",
    source: "href",
  },
  {
    id: 4,
    name: "Tavsanli deneme debneme",
    description: "deneme deneme",
    image: "https://s.tmimgcdn.com/scr/351400/351409-original.png",
    source: "href",
  },
  {
    id: 5,
    name: "Tavsanli deneme last",
    description: "deneme deneme",
    image: "https://s.tmimgcdn.com/scr/351400/351409-original.png",
    source: "href",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-4">
      <Heading level="h2" className="mb-4 px-4">
        See our latest projects
      </Heading>
      <article className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="p-4 flex flex-col gap-2">
            <a
              href="/projects/tavsanli"
              className=" rounded-lg h-40 overflow-hidden border-2  "
            >
              <img
                className="h-full w-full object-cover rounded"
                src={project.image}
                alt=""
              />
            </a>
            <p className=" sm:text-center font-bold text-foreground">
              {project.name}
            </p>
          </div>
        ))}
        <Link
          to="/projects"
          className="col-span-full flex items-center sm:justify-center py-4 px-4"
        >
          <Button className="w-auto">See all projects</Button>
        </Link>
      </article>
    </section>
  );
}

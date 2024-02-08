import { useRef } from "react";

import { Button } from "./ui/button";
import { Spinner } from "./spinner";
import { Heading } from "./ui/heading";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/api";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsSection() {
  const {
    data: projects,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  if (isLoading) {
    return (
      <div className="px-4 flex flex-col gap-y-4 w-full">
        <div className="h-40 flex items-center justify-center">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Button onClick={refetch} variant="outline">
        Oops! Try again!
      </Button>
    );
  }

  return (
    <section className="flex-1 p-4 w-full" style={{ maxWidth: "100vw" }}>
      <Heading level="h2" className="mb-4">
        En son projelerimize göz atın
      </Heading>
      <article className="py-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full mb-14 md:mb-16 "
          opts={{
            align: "start",
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {projects?.map((project, index) => (
              <CarouselItem
                key={index}
                className=" sm:basis-1/2 min-h-full flex-grow"
              >
                <div className="p-1 h-full">
                  <div
                    key={project.id}
                    className="flex flex-col gap-2 w-full h-full"
                  >
                    <Link
                      to={"/projeler/" + project.slug}
                      className="h-40 xs:h-52 sm:h-44 md:h-52 flex-1 rounded-lg overflow-hidden border-2"
                    >
                      <img
                        className="h-full w-full object-center object-contain rounded"
                        src={project.image}
                        alt={project.name}
                      />
                    </Link>
                    <p className=" sm:text-center font-bold text-foreground">
                      {project.name}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" !top-[calc(100%+1.5rem)] !left-[calc(50%-4rem)]" />
          <CarouselNext className=" !top-[calc(100%+1.5rem)] !right-[calc(50%-4rem)]" />
        </Carousel>

        <Link
          to="/projeler"
          className="col-span-full flex items-center xs:justify-center sm:p-4"
        >
          <Button className="w-full xs:w-1/2 md:w-auto">
            Tüm projeleri gör
          </Button>
        </Link>
      </article>
    </section>
  );
}

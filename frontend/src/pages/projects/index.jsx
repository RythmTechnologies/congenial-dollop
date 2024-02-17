import { Outlet } from "react-router-dom";

import { Heading } from "@/components/ui/heading";
import { getProjects } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const projects = data;

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
      <Button onClick={() => refetch} variant="outline">
        Oops! Try again!
      </Button>
    );
  }

  return (
    <>
      <Helmet>
        <title>Projeler</title>
        <meta
          name="description"
          content="Projelerimiz: RythmTechnologies olarak müşterilerimizin ihtiyaçlarına yönelik web, masaüstü ve mobil uygulama projelerimizi inceleyin. Gerçek çözümler, somut sonuçlar."
        />
      </Helmet>
      <Heading
        level="h1"
        className="scroll-m-20 text-3xl font-bold tracking-tight mb-4 px-4"
      >
        Projeler
      </Heading>

      <section className="flex-1 p-4">
        <article className="grid grid-cols-1 md:grid-cols-2">
          {data &&
            projects?.map((project) => (
              <div key={project.id} className="p-4 flex flex-col gap-2">
                <a
                  href={`projeler/${project.slug}`}
                  className=" rounded-lg h-auto xs:h-52 md:h-52 overflow-hidden border  "
                >
                  <img
                    className="h-full w-full object-contain md:object-cover rounded"
                    src={project.image}
                    alt={project.name}
                  />
                </a>
                <p className=" sm:text-center font-bold text-foreground">
                  {project.name}
                </p>
              </div>
            ))}
        </article>
      </section>

      <Outlet />
    </>
  );
}

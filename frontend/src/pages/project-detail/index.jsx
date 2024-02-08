import { getProjectBySlug } from "@/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { TechLogoComponent } from "@/components/icons";
import { Card, CardDescription } from "@/components/ui/card";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const { data, error, isLoading, failureReason } = useQuery({
    queryKey: ["projects", slug],
    queryFn: () => getProjectBySlug(slug),
  });

  console.log(failureReason);
  if (isLoading) {
    return (
      <div className="px-4 pb-4 flex flex-col gap-y-4 w-full">
        <Skeleton className="w-2/5 sm:w-1/4 h-10  bg-muted" />
        <Skeleton className="w-full h-48 bg-muted rounded-xl" />
        <Skeleton className="w-full h-[280px] sm:h-[220px] bg-muted" />
      </div>
    );
  }
  if (error)
    return (
      <div className="flex items-center justify-center px-4">
        <Card className="flex-1 flex flex-col gap-y-2 items-center justify-center p-10 text-center border-0 sm:border sm:shadow-2xl sm:shadow-red-500/10">
          <CardDescription>Proje bulunamadı!</CardDescription>
          <Button
            variant="outline"
            onClick={() => navigate("/projeler", { replace: true })}
          >
            Tüm projeler
          </Button>
        </Card>
      </div>
    );

  const project = data;

  return (
    <>
      <section className=" shadow-lg rounded-lg px-4 flex flex-col space-y-4">
        <Button
          className="flex items-center justify-center rounded-full  aspect-square"
          variant="ghost"
          size="icon"
          onClick={() => navigate("/projeler")}
        >
          <ArrowLeftCircle />
        </Button>

        <figure class="md:flex bg-gradient-to-r  from-muted to-background rounded-xl p-8 md:p-0 border border-border overflow-hidden">
          <img
            class="w-36 h-36 md:w-60 md:h-full rounded-full md:rounded-none  mx-auto md:mx-0 object-cover md:object-cover"
            src={project.image}
            alt={project.name}
          />
          <div class="flex-1 pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <Heading className="text-center md:text-left" level="h3">
                “ {project.name} ”
              </Heading>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                <Badge
                  className={
                    "pl-0 bg-gradient-to-r from-blue-600 to-indigo-200 inline-block text-transparent bg-clip-text text-2xl"
                  }
                >
                  {project.category.name}
                </Badge>
              </div>
              <div class="flex flex-wrap justify-center md:justify-start py-4 gap-x-4 gap-y-2">
                {project.technologies?.map((tech) => (
                  <div className="inline-flex gap-x-1 ">
                    <TechLogoComponent
                      logoName={tech.name.replace(/\s/g, "")}
                      className="w-8 h-8"
                    />
                    <span className="text-sm text-foreground/40">
                      {/* {tech.name} */}
                    </span>
                  </div>
                ))}
              </div>
            </figcaption>
          </div>
        </figure>
      </section>
      <section className="p-4 my-16 ">
        <div className="w-[calc(100vw-32px)] sm:max-w-screen-sm md:w-auto overflow-x-auto">
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
      </section>
    </>
  );
}

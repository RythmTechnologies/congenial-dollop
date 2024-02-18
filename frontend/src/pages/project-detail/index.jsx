import { getProjectBySlug } from "@/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftCircle } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Heading } from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { TechLogoComponent } from "@/assets/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import DateUtils from "@/lib/day-js";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["projects", slug],
    queryFn: () => getProjectBySlug(slug),
  });

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
      <Helmet>
        <title> {project.name}</title>
        <meta
          name="description"
          content={`${project.name} Projemize Bakış: RythmTechnologies, her bir projesinde müşteri beklentilerini aşmayı ve sürdürülebilir çözümler sunmayı hedefler. Projemizin özelliklerini ve yaklaşımımızı keşfedin."`}
        />
      </Helmet>
      <Card className="border-0 rounded-none shadow-none">
        <CardHeader className="flex-row items-center gap-x-4 border-b border-border/40 p-4 sticky top-14 backdrop-blur-md">
          <Button
            className="flex items-center justify-center rounded-full  aspect-square"
            variant="ghost"
            size="icon"
            onClick={() => navigate("/projeler")}
          >
            <ArrowLeftCircle />
          </Button>
          <div className="flex-grow">
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>
              {DateUtils.formatDate(project.created_at, { fromNow: true })}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <article className="p-4 flex flex-col gap-y-16">
            <figure className="shadow-lg md:flex bg-gradient-to-r  from-muted to-background rounded-xl p-8 md:p-0 border border-border overflow-hidden">
              <img
                className="w-36 h-36 md:w-60 md:h-full rounded-full md:rounded-none  mx-auto md:mx-0 object-contain md:object-contain"
                src={project.image}
                alt={project.name}
              />
              <div className="flex-1 pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <Heading
                    className="text-center md:text-left px-2.5"
                    level="h3"
                  >
                    {project.name}
                  </Heading>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400 flex justify-center md:justify-start flex-wrap gap-4">
                    <Badge
                      className={
                        "inline-flex py-0.5 leading-3 bg-gradient-to-r from-blue-600 to-indigo-200 text-transparent bg-clip-text text-xl"
                      }
                    >
                      {project.category?.name}
                    </Badge>
                    <Badge
                      className={
                        "inline-flex items-center justify-center p-0 group bg-transparent min-h-[38px]"
                      }
                    >
                      <Link
                        className="flex items-center justify-center py-0.5 px-2.5 h-full full leading-3 bg-gradient-to-r from-blue-600 to-indigo-200 text-transparent bg-clip-text"
                        to={project?.source}
                        target="_blank"
                      >
                        {project?.source}
                      </Link>
                    </Badge>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start py-4 px-2.5 gap-x-4 gap-y-2">
                    {project.technologies?.map((tech, key) => (
                      <div key={key} className="inline-flex gap-x-1 ">
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
            <div className="w-[calc(100vw-32px)] sm:max-w-screen-sm md:w-auto overflow-x-auto">
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          </article>
        </CardContent>
      </Card>
    </>
  );
}

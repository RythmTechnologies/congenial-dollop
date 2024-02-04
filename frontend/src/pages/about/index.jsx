import { useQuery } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import { Skeleton } from "@/components/ui/skeleton";
import { getAbout } from "@/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
  if (isLoading) {
    return (
      <div className="p-4 flex flex-col gap-y-4 w-full">
        <Skeleton className="w-2/5 sm:w-1/4 h-10 mb-4 bg-muted" />
        <Skeleton className="w-full h-[64px] sm:h-[92px] bg-muted" />
        <Skeleton className="w-full h-[280px] sm:h-[220px] bg-muted" />
      </div>
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="flex-1 py-4 ">
      <Heading level="h2" className="mb-4 px-4">
        About us
      </Heading>
      <div>
        <Card className="rounded-none sm:rounded-xl border-border">
          <CardHeader className="border-b border-border rounded-0 sm:rounded-t-xl p-4 sticky top-14 backdrop-blur-md">
            <CardTitle>Rythm Technologies</CardTitle>
            <CardDescription>2024-01-01</CardDescription>
          </CardHeader>
          {data.map((about) => (
            <CardContent className="p-4 border-b border-border last:border-none">
              <Heading level="h3" className="mb-2">
                {about.name}
              </Heading>
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
            </CardContent>
          ))}
        </Card>
      </div>
    </section>
  );
}

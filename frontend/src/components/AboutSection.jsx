import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heading } from "@/components/ui/heading";
import { Skeleton } from "@/components/ui/skeleton";
import { getAbout } from "@/api";

export default function AboutSection() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
  if (isLoading) {
    return (
      <div className="px-4 pb-4 flex flex-col gap-y-4 w-full">
        <Skeleton className="w-2/5 sm:w-1/4 h-10 mb-4 bg-muted" />
        <Skeleton className="w-full h-[140px] sm:h-[92px] bg-muted" />
        <Skeleton className="w-full h-[280px] sm:h-[220px] bg-muted" />
      </div>
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="flex-1 py-4">
      <Heading level="h2" className="mb-4 px-4">
        About us
      </Heading>
      <div>
        <TabsAbout data={data} />
      </div>
    </section>
  );
}

function TabsAbout({ data }) {
  return (
    <Tabs defaultValue={data[0]?.name} className="px-4 py-4">
      <TabsList className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 overflow-hidden">
        {data.map((about) => (
          <TabsTrigger
            key={about.id}
            className="px-2 flex-1 transition-opacity justify-start md:justify-center"
            value={about.name}
          >
            {about.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((about) => (
        <TabsContent
          key={about.name}
          value={about.name}
          className="transition-all mt-4"
        >
          <Card>
            <CardHeader className="border-b border-border p-4">
              <CardTitle>Rythm Technologies</CardTitle>
              <CardDescription>{about.date}</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

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
    return <div className="p-4">Error: {error.message}</div>;
  }

  return (
    <section className="flex-1 p-4 border-b border-border/40">
      <Heading level="h2" className="flex flex-wrap gap-x-4 mb-4">
        <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Rythm<span className="text-muted-foreground">Technologies</span>
        </div>
      </Heading>
      <div className="py-4">
        <TabsAbout data={data} />
      </div>
    </section>
  );
}

const icons = [
  { icon: "💡", name: "Biz Kimiz?" },
  { icon: "🚀", name: "Misyonumuz" },
  { icon: "🌟", name: "Hizmetlerimiz" },
  { icon: "🔗", name: "Neden Rythm Technologies?" },
];

function TabsAbout({ data }) {
  return (
    <Tabs defaultValue={data[0]?.name}>
      <TabsList className="h-auto w-full grid grid-cols-1 xs:grid-cols-2  md:flex overflow-hidden">
        {data?.map((about, key) => (
          <TabsTrigger
            key={about.id}
            className="px-4 py-2 md:px-2 md:py-1 flex-1 transition-opacity justify-start md:justify-center"
            value={about.name}
          >
            {icons.find((item) => item.name === about.name)?.icon}
            &nbsp;
            {about.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {data?.map((about) => (
        <TabsContent
          key={about.name}
          value={about.name}
          className="transition-all mt-4"
        >
          <Card className="shadow-lg border-border/40">
            <CardHeader className="border-b border-border/40 p-4">
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

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heading } from "@/components/ui/heading";

export default function About() {
  async function getAbout() {
    const response = await fetch("http://0.0.0.0:8000/about-api/biography");
    const data = response.json();
    return data;
  }
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="flex-1">
      <Heading level="h1" className="mb-4 px-4">
        About Us
      </Heading>
      <main>
        <TabsDemo data={data} />
      </main>
    </div>
  );
}

export function TabsDemo({ data }) {
  return (
    <Tabs defaultValue={data[0].name} className="px-4 py-4">
      <TabsList className="h-auto w-full grid md:flex grid-cols-1 sm:grid-cols-2 overflow-hidden">
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
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: about.content }} />
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

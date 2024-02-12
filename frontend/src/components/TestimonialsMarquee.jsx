import { useQuery } from "@tanstack/react-query";
import { Badge } from "./ui/badge";
import { Heading } from "./ui/heading";
import Marquee from "./ui/marquee";
import { getTeamMembers } from "@/api";

export default function TestimonialsMarquee() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: getTeamMembers,
  });

  if (isLoading) return null;
  if (error) return null;

  return (
    <section className="pt-4 ">
      <Heading level="h2" className="mb-4 px-4">
        Ekibimiz
      </Heading>
      <div className="w-screen sm:w-auto py-4 border-t border-border/40">
        <Marquee speed={1.5} direction="left">
          {data?.map((person) => (
            <div
              key={person.id}
              className="block h-full min-w-max rounded-t-lg overflow-hidden relative group"
            >
              <img
                src={person.photo}
                alt={`${person.name} - ${person.title}`}
                lazy={"true"}
                className="h-48 w-48 rounded-t-lg object-cover group-hover:opacity-25 transition-opacity duration-300"
              />
              <p className="absolute bottom-0 left-0 w-full h-16 group-hover:h-full font-bold whitespace-nowrap flex flex-col items-center justify-center bg-background/40 backdrop-blur-xl  transition-all duration-300 ">
                {person.name}{" "}
                <Badge
                  className={
                    " invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-background transition-all duration-300"
                  }
                  variant="outline"
                >
                  {person.title}
                </Badge>
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

import { TechLogoComponent } from "./icons";
import { Badge } from "./ui/badge";
import { Heading } from "./ui/heading";
import Marquee from "./ui/marquee";

const we = [
  {
    id: 2,
    created_at: "2024-02-08T01:59:10.312163+03:00",
    updated_at: "2024-02-08T01:59:10.312185+03:00",
    name: "Ömer OCAK",
    title: "Full Stack Developer",
    photo:
      "https://rythm-tech-bucket.s3.amazonaws.com/media/team/83617943.jpeg",
    slug: "omer-ocak",
  },
  {
    id: 3,
    created_at: "2024-02-08T02:00:37.837071+03:00",
    updated_at: "2024-02-08T02:00:37.837097+03:00",
    name: "Burak KALE",
    title: "Full Stack Developer",
    photo: "https://rythm-tech-bucket.s3.amazonaws.com/media/team/image2.png",
    slug: "burak-kale",
  },
  {
    id: 1,
    created_at: "2024-02-08T01:57:40.813865+03:00",
    updated_at: "2024-02-08T02:00:52.461861+03:00",
    name: "Mehmet Halil MUNGAN",
    title: "Full Stack Developer",
    photo:
      "https://rythm-tech-bucket.s3.amazonaws.com/media/team/126997544.jpeg",
    slug: "mehmet-halil-mungan",
  },
  {
    id: 4,
    created_at: "2024-02-08T02:01:32.021464+03:00",
    updated_at: "2024-02-08T02:01:32.021488+03:00",
    name: "Melih ÇIRAY",
    title: "Full Stack Developer",
    photo:
      "https://rythm-tech-bucket.s3.amazonaws.com/media/team/WhatsApp_Image_2024-02-08_at_02.00.02.jpeg",
    slug: "melih-ciray",
  },
  {
    id: 5,
    created_at: "2024-02-08T02:01:58.854253+03:00",
    updated_at: "2024-02-08T02:01:58.854277+03:00",
    name: "Enes Burak ÇOMRUK",
    title: "Full Stack Developer",
    photo: "https://rythm-tech-bucket.s3.amazonaws.com/media/team/image.png",
    slug: "enes-comruk",
  },
];

export default function TestimonialsMarquee() {
  return (
    <section className="pt-4 ">
      <Heading level="h2" className="mb-4 px-4">
        Ekibimiz
      </Heading>
      <div className="w-screen sm:w-auto py-4 border-t border-border/40">
        <Marquee speed={0.5} direction="left">
          {we?.map((person) => (
            <div
              key={person.id}
              className="block h-full min-w-max rounded-t-lg overflow-hidden relative"
            >
              <img
                src={person.photo}
                alt={`${person.name} - ${person.title}`}
                className="h-48 w-48 object-cover"
              />
              <p className="absolute bottom-0 left-0 w-full h-16 font-bold whitespace-nowrap flex flex-col items-center justify-center bg-background/40 backdrop-blur">
                {person.name}{" "}
                <Badge className={"bg-primary/80 backdrop-blur-md"}>
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

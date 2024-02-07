import hero from "@/assets/videos/hero.mp4";
import { Heading } from "@/components/ui/heading";

export default function HeroSection() {
  return (
    <section className="relative h-60 md:h-[30rem] lg:h-[calc(100vh-3.5rem)] flex justify-center items-center">
      <div className="absolute w-full h-full overflow-hidden">
        <video
          src={hero}
          className="absolute inset-0 min-w-full min-h-full object-cover opacity-80 dark:opacity-30"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          playsInline={true}
        />
      </div>
      {/* <div className="z-10 text-center px-8 drop-shadow-lg shadow-black">
        <div className="uppercase text-sm mb-4">Welcome to</div>
        <Heading level="h1" spacing="wide">
          Rythm&nbsp;
          <span className=" inline-flex">Technologies</span>
        </Heading>
      </div> */}
    </section>
  );
}

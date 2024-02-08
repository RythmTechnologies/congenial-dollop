export default function HeroSection() {
  return (
    <section className="relative h-60 md:h-[30rem] lg:h-[calc(100vh-3.5rem)] flex justify-center items-center">
      <div className="absolute w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 min-w-full min-h-full object-cover opacity-80 dark:opacity-30"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          playsInline={true}
        >
          <source
            src="https://rythm-tech-bucket.s3.eu-central-1.amazonaws.com/media/video/hero.webm"
            type="video/webm; codecs=vp9"
          />
        </video>
      </div>
    </section>
  );
}

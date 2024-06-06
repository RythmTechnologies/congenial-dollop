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
          <track kind="Rythm Technologies hero video!"></track>
          <source
            src="https://lastfloors-development.s3.eu-west-1.amazonaws.com/media/projects/202402020047-ezgif.com-video-to-webp-converter.webp"
            type="video/webm; codecs=vp9"
          />
        </video>
      </div>
    </section>
  );
}

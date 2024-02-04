import { useLayoutEffect } from "react";
import { useTheme } from "@/stores/app/hooks";
import useColorScheme from "@/hooks/use-color-scheme";

import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Subscribe from "./components/subscribe";
import hero from "@/assets/videos/hero.mp4";

export default function WebLayout() {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const location = useLocation();

  useLayoutEffect(() => {
    if (theme === "system") {
      document.body.className = colorScheme;
    } else {
      document.body.className = theme;
    }
  }, [theme, colorScheme]);
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col">
        {location.pathname === "/" && <HeroSection />}
        <div className="flex-1 container py-4 md:py-0 md:px-0 mx-auto sm:mx-auto border-x border-border/40 max-w-2xl">
          <Outlet />
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative mb-6 h-60 md:h-[30rem] lg:h-[calc(100vh-3.5rem)] flex justify-center items-center">
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
        <div className="text-4xl font-mplus font-medium">
          A curated list of the tech I{" "}
          <span className="text-orange-500">use</span>
        </div>
      </div> */}
    </section>
  );
}

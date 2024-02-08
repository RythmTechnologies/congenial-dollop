import { useLayoutEffect } from "react";
import { useTheme } from "@/stores/app/hooks";
import useColorScheme from "@/hooks/use-color-scheme";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Subscribe from "./components/subscribe";
import HeroSection from "@/components/HeroSection";

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
      <main className="flex-1 grid">
        {location.pathname === "/" && <HeroSection />}
        <div className="flex-1 flex flex-col  container p-0 pt-4 sm:mx-auto border-x border-border/40 max-w-2xl">
          <Outlet />
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}

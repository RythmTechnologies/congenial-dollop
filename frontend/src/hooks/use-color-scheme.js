import { useState, useLayoutEffect } from "react";

export default function useColorScheme() {
  const [colorScheme, setColorScheme] = useState("light");

  useLayoutEffect(() => {
    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQueryList.addEventListener("change", (e) => {
        setColorScheme(e.matches ? "dark" : "light");
      });
      setColorScheme(mediaQueryList.matches ? "dark" : "light");
    }
  }, []);

  return colorScheme;
}

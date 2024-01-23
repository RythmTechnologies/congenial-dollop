import useColorScheme from "@/hooks/use-color-scheme";
import { useTheme } from "@/stores/app/hooks";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function WebLayout() {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    if (theme === "system") {
      document.body.className = colorScheme;
    } else {
      document.body.className = theme;
    }
  }, [theme, colorScheme]);
  return (
    <>
      <Header />
      <main className="container max-w-xl">
        <Outlet />
      </main>
    </>
  );
}

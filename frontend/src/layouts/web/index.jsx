import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import useColorScheme from "@/hooks/use-color-scheme";
import { useTheme } from "@/stores/app/hooks";

export default function WebLayout() {
  const theme = useTheme();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const className = theme === "default" ? colorScheme : theme;
    document.body.className = className;
  }, [theme, colorScheme]);

  return (
    <>
      Layout
      <Outlet />
    </>
  );
}

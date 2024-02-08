import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getNavlinks } from "@/api";

import { NavbarMobile } from "./Navbar.Mobile";
import { NavbarDesktop } from "./Navbar.Desktop";

export default function Navbar({ children }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["navlinks"],
    queryFn: getNavlinks,
    staleTime: 2 * 24 * 60 * 60 * 1000, // 2 gün
    cacheTime: 2 * 24 * 60 * 60 * 1000, // 2 gün
  });

  const contextValue = useMemo(
    () => ({ data, error, isLoading }),
    [data, error, isLoading]
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
}

/**
 * TODO: Context Provider yerine Redux Store kullanarak gerceklestir.
 */
const NavbarContext = React.createContext();
export function useNavbarContext() {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a Navbar");
  }
  return context;
}

Navbar.Desktop = NavbarDesktop;
Navbar.Mobile = NavbarMobile;

import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { CgMenuRightAlt } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TechLogoComponent } from "@/components/icons";
import useBreakpoints from "@/hooks/use-breakpoint";

import Navbar from "./components/Navbar";
import { HeaderLogo } from "./components/HeaderLogo";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { breakpoint } = useBreakpoints("mobile");

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40  bg-background">
      <div className="container flex h-14 max-w-6xl items-center">
        <div className="mr-4 flex">
          <HeaderLogo />
          <Navbar>
            <Navbar.Desktop />
          </Navbar>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end ">
          {/* <Button variant="link" size="icon" className="p-0 ">
            <Link
              to="https://www.linkedin.com/company/rythmtechnologies/"
              target="_blank"
              title="Rythm Technologies Linkedin"
              className="w-full h-full flex items-center justify-center bg-transparent"
            >
              <TechLogoComponent
                logoName="Linkedin"
                color="bg-primary"
                size={18}
              />
            </Link>
          </Button>
          <Button variant="link" size="icon" className="p-0 ">
            <Link
              to="https://github.com/RythmTechnologies"
              target="_blank"
              title="Rythm Technologies GitHub"
              className="w-full h-full flex items-center justify-center bg-transparent"
            >
              <TechLogoComponent
                logoName="GitHub"
                color="bg-primary"
                size={18}
              />
            </Link>
          </Button> */}
          <ModeToggle />
          {breakpoint == "mobile" && (
            <Sheet open={open} onOpenChange={() => setOpen(!open)}>
              <SheetTrigger asChild>
                <Button variant="link" size="icon" className="text-foreground">
                  <CgMenuRightAlt size={24} className="absolute" />
                  <span className="sr-only">Toggle Menur</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full xs:max-w-sm">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center">
                    <NavLink>
                      <span className="font-bold">Rythm Technologies</span>
                    </NavLink>
                  </SheetTitle>
                </SheetHeader>
                <div className="relative overflow-hidden my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="h-full w-full rounded-[inherit] overflow-y-auto">
                    <Navbar>
                      <Navbar.Mobile />
                    </Navbar>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}

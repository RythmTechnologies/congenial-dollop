import React, { useMemo } from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BrandLogo } from "@/components/icons";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

import { useNavbarContext } from "./Navbar";
import { Skeleton } from "@/components/ui/skeleton";

export function NavbarMobile() {
  const { data, isLoading } = useNavbarContext();

  const classicLinks = useMemo(
    () => data?.filter((navlink) => !navlink.has_subs_links),
    [data]
  );
  const dropDownLinks = useMemo(
    () => data?.filter((navlink) => navlink.has_subs_links),
    [data]
  );

  return (
    <NavigationMenu
      orientation="vertical"
      className="flex flex-col min-w-full py-4 "
    >
      <div className="min-w-full table">
        <ul className="flex flex-col space-y-3">
          {isLoading ? (
            <li className="w-full flex flex-col gap-y-4 rounded-md">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <div className="h-px rounded-full w-full bg-muted" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
            </li>
          ) : (
            <>
              <MobileDropdownLinks dropDownLinks={dropDownLinks} />
              <MobileClassicLinks classicLinks={classicLinks} />
            </>
          )}
        </ul>
      </div>
    </NavigationMenu>
  );
}

function MobileClassicLinks({ classicLinks }) {
  return (
    <>
      {classicLinks?.map((navlink) => (
        <li key={navlink.id}>
          <NavigationMenuLink asChild>
            <NavLink
              to={navlink.href}
              className={cn(navigationMenuTriggerStyle(), "w-full block ")}
              data-radix-collection-item
            >
              {navlink.name}
            </NavLink>
          </NavigationMenuLink>
        </li>
      ))}
    </>
  );
}

function MobileDropdownLinks({ dropDownLinks }) {
  function ProjectsLinks() {
    return (
      <NavigationMenuLink asChild>
        <Link
          className="flex h-full w-full gap-x-2 py-2 pr-2 mb-4 select-none rounded-md bg-gradient-to-b from-muted/50 to-muted  no-underline outline-none focus:shadow-md focus:border focus:border-foreground"
          to="/projeler"
        >
          <BrandLogo className="w-16 h-16 aspect-auto object-contain" />
          <div className="flex-1 flex flex-col">
            <div className="text-lg font-medium">Tüm projeler</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Tüm projelere göz atarak yetkinliğimizi görün
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    );
  }
  return (
    <>
      {dropDownLinks?.map((navlink) => (
        <li key={navlink.id}>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className="pl-4 py-2">
                {navlink.name}
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                {navlink.href === "/projeler" && <ProjectsLinks />}
                {navlink.sub_links?.map((link) => (
                  <NavigationMenuLink key={link.id} asChild>
                    <NavLink
                      to={navlink.href + link.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "w-full block text-primary/60"
                      )}
                      data-radix-collection-item
                    >
                      {link.title}
                    </NavLink>
                  </NavigationMenuLink>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
      ))}
    </>
  );
}

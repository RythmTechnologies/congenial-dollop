import React, { useMemo } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import { Skeleton } from "@/components/ui/skeleton";
import { BrandLogo } from "@/components/icons";
import { Link, NavLink } from "react-router-dom";
import { ListItem } from "./ListItem";

import { useNavbarContext } from "./Navbar";

export function NavbarDesktop() {
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
    <NavigationMenu className="container hidden lg:flex max-w-3xl mx-auto bg-transparent text-sm">
      <NavigationMenuList>
        {isLoading ? (
          <li className="row-span-3 h-10 w-96 py-1">
            <Skeleton className="h-full w-full" />
          </li>
        ) : (
          <>
            <DropDownLinks dropDownLinks={dropDownLinks} />
            <ClassicNavLinks classicLinks={classicLinks} />
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ClassicNavLinks({ classicLinks }) {
  return classicLinks?.map((link) => (
    <NavigationMenuItem key={link.name}>
      <NavLink
        to={link.href}
        className={navigationMenuTriggerStyle()}
        data-radix-collection-item
      >
        {link.name}
      </NavLink>
    </NavigationMenuItem>
  ));
}

function DropDownLinks({ dropDownLinks }) {
  function ProjectsLinksMain() {
    return (
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md focus:border focus:border-foreground"
            to="/projeler"
          >
            <BrandLogo className="w-full h-40 aspect-auto object-contain" />
            <div className="mb-2 mt-4 text-lg font-medium">Tüm projeler</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Tüm projelere göz atarak yetkinliğimizi görün
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
  return (
    <>
      {dropDownLinks?.map((navlink) => (
        <NavigationMenuItem key={navlink.id}>
          <NavigationMenuTrigger>{navlink.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              {/** Eger proje sayfası ise ekstra render et */}
              {navlink.href === "/projeler" && <ProjectsLinksMain />}
              {navlink.sub_links?.map((link) => (
                <ListItem
                  key={link.id}
                  title={link.title}
                  href={`${navlink.href}${link.href}`}
                  className="focus:border focus:border-foreground"
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
    </>
  );
}

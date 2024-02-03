import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";
import { ListItem } from "./ListItem";
import { Logo } from "@/components/icons";

const navlinks = [
  {
    id: 7,
    created_at: "2024-01-29T20:28:26.554675+03:00",
    updated_at: "2024-01-29T20:28:35.475530+03:00",
    name: "About",
    href: "/about",
    has_subs_links: false,
    subs_links: [],
  },
  {
    id: 8,
    created_at: "2024-01-29T20:28:53.078616+03:00",
    updated_at: "2024-01-29T20:28:53.078648+03:00",
    name: "Projects",
    href: "projects",
    has_subs_links: true,
    subs_links: [
      {
        id: 1,
        title: "Tavsanli",
        descriptions: "Tavşanlı Höyük Kazısı projesidir.",
        href: "/projects/tavsanli-project",
      },
      {
        id: 2,
        title: "Emlak",
        descriptions: "Emlak Projesidir",
        href: "/projects/emlak-projesi",
      },
      {
        id: 3,
        title: "Emlak",
        descriptions: "Emlak Projesidir",
        href: "/projects/emlak-projesi",
      },
      {
        id: 4,
        title: "Emlak",
        descriptions: "Emlak Projesidir",
        href: "/projects/emlak-projesi",
      },
      {
        id: 4,
        title: "Emlak",
        descriptions: "Emlak Projesidir",
        href: "/projects/emlak-projesi",
      },
      {
        id: 4,
        title: "Emlak",
        descriptions: "Emlak Projesidir",
        href: "/projects/emlak-projesi",
      },
    ],
  },
  {
    id: "3fc021d1-327c-4282-81b2-f0b2c4abe588",
    created_at: "2024-01-30T13:04:37.226301+03:00",
    updated_at: "2024-01-30T13:04:37.226322+03:00",
    name: "Comminity",
    href: "",
    has_subs_links: true,
    subs_links: [
      {
        id: "75c5c1dd-4c24-4866-82d9-a68d3fd704ab",
        created_at: "2024-01-30T13:04:33.072260+03:00",
        updated_at: "2024-01-30T13:04:33.072272+03:00",
        title: "Join Us",
        descriptions: "Topluluğumuza Katılmanız Bizi Çok Mutlu Eder.",
        href: "/join-us",
      },
      {
        id: "7581cas-4c24-4866-82d9-a68d3fd704ab",
        created_at: "2024-01-30T13:04:33.072260+03:00",
        updated_at: "2024-01-30T13:04:33.072272+03:00",
        title: "Blog",
        descriptions: "Güncemizi takip edin!  ",
        href: "/blog",
      },
      {
        id: "7581cas-4c24-4866-82d9-a68d3fd704ab",
        created_at: "2024-01-30T13:04:33.072260+03:00",
        updated_at: "2024-01-30T13:04:33.072272+03:00",
        title: "Blog",
        descriptions: "Güncemizi takip edin!  ",
        href: "/blog",
      },
      {
        id: "7581cas-4c24-4866-82d9-a68d3fd704ab",
        created_at: "2024-01-30T13:04:33.072260+03:00",
        updated_at: "2024-01-30T13:04:33.072272+03:00",
        title: "Blog",
        descriptions: "Güncemizi takip edin!  ",
        href: "/blog",
      },
    ],
  },
  {
    id: 9,
    created_at: "2024-01-29T20:29:11.416585+03:00",
    updated_at: "2024-01-29T20:29:11.416608+03:00",
    name: "Contact",
    href: "/contact",
    has_subs_links: false,
    subs_links: [],
  },
];

/**
 * TODO:
 *  - modeldeki ID'ler uuid olmalı
 *  - contact-us değil contact olmalı
 *
 * */
export default function Navbar() {
  const classicLinks = navlinks.filter((navlink) => !navlink.has_subs_links);
  const dropDownLinks = navlinks.filter((navlink) => navlink.has_subs_links);

  function ClassicNavLinks({ classicLinks }) {
    return classicLinks.map((link) => (
      <NavigationMenuItem key={link.name}>
        <Link
          to={link.href}
          className={navigationMenuTriggerStyle()}
          data-radix-collection-item
        >
          {link.name}
        </Link>
      </NavigationMenuItem>
    ));
  }
  function DropDownLinks({ dropDownLinks }) {
    return (
      <>
        {dropDownLinks.map((navlink) => (
          <NavigationMenuItem key={navlink.id}>
            <NavigationMenuTrigger>{navlink.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                {navlink.href === "projects" && (
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <Logo className="w-full h-32 object-cover" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          All projects
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          See our competence by taking a look at all projects
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                )}
                {navlink.subs_links.map((link) => (
                  <ListItem key={link.id} title={link.title} href={link.href}>
                    {link.descriptions}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </>
    );
  }

  return (
    <NavigationMenu className="container hidden md:flex max-w-3xl mx-auto bg-transparent text-sm">
      <NavigationMenuList>
        <DropDownLinks dropDownLinks={dropDownLinks} />
        <ClassicNavLinks classicLinks={classicLinks} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

import { Moon, Sun, Monitor } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { setTheme } from "@/stores/app/actions";
import { useTheme } from "@/stores/app/hooks";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const activeTheme = useTheme();

  async function handleTheme(theme) {
    if (activeTheme === theme) return;
    await setTheme(theme);
  }

  const themes = [
    {
      id: 0,
      value: "light",
      icon: Sun,
    },
    {
      id: 1,
      value: "dark",
      icon: Moon,
    },
    {
      id: 2,
      value: "system",
      icon: Monitor,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => {
          return (
            <DropdownMenuItem
              key={theme.id}
              onClick={() => handleTheme(theme.value)}
              className={cn(
                activeTheme === theme.value && "bg-accent/40",
                "gap-x-2"
              )}
            >
              {<theme.icon width="20" />} {theme.value}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

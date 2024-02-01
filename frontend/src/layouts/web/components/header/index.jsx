import { HeaderLogo } from "./components/HeaderLogo";
import Navbar from "./components/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container flex h-14 max-w-4xl items-center">
        <div className="mr-4 flex">
          <HeaderLogo />
          <Navbar />
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

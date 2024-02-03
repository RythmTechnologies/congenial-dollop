import { Logo } from "@/components/icons/logo";
import { Heading } from "@/components/ui/heading";
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-4 flex-shrink-0">
      <Logo className="h-10 w-10 " />
      <Heading
        level="h3"
        className="hidden font-bold sm:inline-block whitespace-nowrap"
      >
        Rythm{" "}
        <Heading level="h3" className=" inline-flex text-muted-foreground">
          Technologies
        </Heading>
      </Heading>
    </Link>
  );
};

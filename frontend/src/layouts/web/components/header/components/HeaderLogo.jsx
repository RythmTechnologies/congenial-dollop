import { BrandLogo } from "@/components/icons/logo";
import { Heading } from "@/components/ui/heading";
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-4 flex-shrink-0">
      <BrandLogo className="h-9 w-9 sm:h-10 sm:w-10 " />
      <Heading
        level="h3"
        className=" hidden xs:inline-block font-bold whitespace-nowrap text-primary transition-colors "
      >
        Rythm{" "}
        <span className="inline-flex text-muted-foreground">Technologies</span>
      </Heading>
    </Link>
  );
};

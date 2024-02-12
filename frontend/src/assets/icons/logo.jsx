import { cn } from "@/lib/utils";
import logo from "./logo.png";

export const BrandLogo = ({ className }) => {
  return (
    <img src={logo} alt="Rythm Technologies Logo" className={cn(className)} />
  );
};

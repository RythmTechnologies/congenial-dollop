import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 font-semibold", {
  variants: {
    level: {
      h1: "text-3xl font-extrabold tracking-tight lg:text-4xl",
      h2: "text-2xl font-bold lg:text-3xl",
      h3: "text-xl font-semibold lg:text-2xl",
      h4: "text-md font-semibold lg:text-xl",
      h5: "text-base font-medium lg:text-md",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    spacing: {
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
    },
  },
  defaultVariants: {
    level: "h2",
    align: "left",
    spacing: "tight",
  },
});

const Heading = React.forwardRef(
  (
    { className, level, align, spacing, children, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : `${level}`;

    return (
      <Comp
        className={cn(headingVariants({ level, align, spacing }), className)}
        ref={ref}
        {...props}
        children={children}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };

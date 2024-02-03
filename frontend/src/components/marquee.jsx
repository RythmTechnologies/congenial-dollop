import * as React from "react";

import { cn } from "@/lib/utils";

const Marquee = React.forwardRef(
  ({ className, speed = 1, direction = "left", children }, ref) => {
    const marqueeRef = React.useRef(null); // Marquee için iç ref
    const contentRef = React.useRef(null); // İçerik için iç ref

    // Komponent içindeki ref'leri ve dışarıdan gelen ref'i birleştir
    React.useEffect(() => {
      if (ref) {
        ref.current = marqueeRef.current;
      }
    }, [ref]);

    React.useEffect(() => {
      const marquee = marqueeRef.current;
      const content = contentRef.current;
      if (!marquee || !content) return;

      let animationFrameId;
      let currentPosition = 0;

      const moveMarquee = () => {
        const updatePosition =
          direction === "left" ? -0.5 * speed : 0.5 * speed;
        currentPosition += updatePosition;
        content.style.transform = `translateX(${currentPosition}px)`;

        const contentWidth = content.offsetWidth;
        const marqueeWidth = marquee.offsetWidth;

        if (
          direction === "left" &&
          Math.abs(currentPosition) > contentWidth + marqueeWidth
        ) {
          currentPosition = 0;
        } else if (direction === "right" && currentPosition > marqueeWidth) {
          currentPosition = -contentWidth;
        }

        animationFrameId = requestAnimationFrame(moveMarquee);
      };

      const startAnimation = () => {
        animationFrameId = requestAnimationFrame(moveMarquee);
      };

      const stopAnimation = () => {
        cancelAnimationFrame(animationFrameId);
      };

      marquee.addEventListener("mouseenter", stopAnimation);
      marquee.addEventListener("mouseleave", startAnimation);

      startAnimation();

      return () => {
        stopAnimation();
        marquee.removeEventListener("mouseenter", stopAnimation);
        marquee.removeEventListener("mouseleave", startAnimation);
      };
    }, [speed, direction]);

    return (
      <div
        className={cn(
          "overflow-hidden whitespace-nowrap marquee-mask",
          className
        )}
        ref={marqueeRef}
      >
        <div className="inline-flex space-x-4" ref={contentRef}>
          {children}
        </div>
      </div>
    );
  }
);

export default Marquee;

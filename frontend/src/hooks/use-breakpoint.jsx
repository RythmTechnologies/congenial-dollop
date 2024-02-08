import useBreakpoint from "use-breakpoint";

/**
 * It is important to bind the object of breakpoints to a variable for memoization to work correctly.
 * If they are created dynamically, try using the `useMemo` hook.
 */
const BREAKPOINTS = { mobile: 0, tablet: 1024, desktop: 1280 };

export default function useBreakpoints(bp) {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, bp);
  return { breakpoint };
}

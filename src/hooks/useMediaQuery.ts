import { useEffect, useState } from "react";

// Matches Tailwind's default `lg` breakpoint.
export const LG_QUERY = "(min-width: 1024px)";

// This app is client-rendered only (no SSR), so it's safe to read
// matchMedia synchronously on first render instead of defaulting to a
// guess and correcting after mount.
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleChange = () => setMatches(mql.matches);

    handleChange();
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

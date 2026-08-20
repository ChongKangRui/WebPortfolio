import type { Transition, Variants } from "framer-motion";

// Shared scroll-reveal tuning so every section's fade-in feels the same.
//
// `margin` pulls the trigger line up ~80px before the element's bottom edge,
// so the reveal finishes roughly as the element settles into view instead of
// firing only once it's already sitting fully on screen (which reads as a
// delayed "pop" after the fact). `amount: 0.2` keeps it from firing the
// instant a single pixel peeks in.
export const revealViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

// For a tight cluster of items (an icon grid, a row of cards) we want the
// whole group to start animating together the moment the group starts
// appearing — not gated by each item's own scroll position. `amount: 0`
// fires as soon as any part of the group is on screen.
export const groupRevealViewport = {
  once: true,
  amount: 0,
  margin: "0px 0px -50px 0px",
} as const;

export const fadeInUp = { opacity: 0, y: 16 };

export function revealTransition(delay = 0): Transition {
  return { duration: 0.5, delay, ease: "easeOut" };
}

// Use on a parent with `variants={staggerContainer(step)}`, `initial="hidden"`,
// `whileInView="visible"`, `viewport={groupRevealViewport}` — children (each
// with `variants={staggerItem}`) all start animating on that single trigger,
// just a beat apart from one another, rather than each watching its own
// scroll position individually.
export function staggerContainer(step = 0.05): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: step } },
  };
}

// Shorter, punchier fade than revealTransition() on purpose: when items sit
// close together and only a beat apart (staggerChildren), a long fade makes
// many of them mid-animation at once and the wave reads as "all at once".
// A quick fade per item keeps each pop distinct.
export const staggerItem: Variants = {
  hidden: fadeInUp,
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

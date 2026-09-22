// src/utils/motion.js
// GSAP animates via JavaScript, so the CSS prefers-reduced-motion query
// alone cannot stop it. Guard entrance/scroll effects with this helper.

export function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function shouldSkipIntro(): boolean {
  if (typeof window === "undefined") return false

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function markIntroSeen(): void {
  // reserved for future analytics; intro always plays on home load
}

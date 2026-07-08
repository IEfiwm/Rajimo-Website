const INTRO_SEEN_KEY = "rajimo-intro-seen"

export function shouldSkipIntro(): boolean {
  if (typeof window === "undefined") return false

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return true
  }

  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === "1"
  } catch {
    return false
  }
}

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1")
  } catch {
    // ignore storage errors (private mode, etc.)
  }
}

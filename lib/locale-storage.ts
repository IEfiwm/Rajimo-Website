import { content, type Locale } from "./content"

export const LOCALE_STORAGE_KEY = "rajimo-locale"

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null
  try {
    const value = localStorage.getItem(LOCALE_STORAGE_KEY)
    return value === "fa" || value === "en" ? value : null
  } catch {
    return null
  }
}

export function writeStoredLocale(locale: Locale) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // ignore
  }
}

export function applyLocaleToDocument(locale: Locale) {
  const t = content[locale]
  document.documentElement.lang = t.lang
  document.documentElement.dir = t.dir
  document.documentElement.dataset.locale = locale
}

export const localeBootstrapScript = `(function(){try{var l=localStorage.getItem("${LOCALE_STORAGE_KEY}");if(l==="en"||l==="fa"){document.documentElement.lang=l==="fa"?"fa":"en";document.documentElement.dir=l==="fa"?"rtl":"ltr";document.documentElement.dataset.locale=l;}}catch(e){}})();`

"use client"

import { useEffect, useState } from "react"
import { content, type Locale } from "@/lib/content"
import { applyLocaleToDocument, readStoredLocale, writeStoredLocale } from "@/lib/locale-storage"

export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>("fa")

  useEffect(() => {
    const stored = readStoredLocale()
    if (stored) setLocaleState(stored)
  }, [])

  useEffect(() => {
    applyLocaleToDocument(locale)
    writeStoredLocale(locale)
  }, [locale])

  const setLocale = (value: Locale | ((prev: Locale) => Locale)) => {
    setLocaleState(value)
  }

  const toggleLocale = () => setLocale((l) => (l === "fa" ? "en" : "fa"))

  const t = content[locale]

  return { locale, setLocale, toggleLocale, t }
}

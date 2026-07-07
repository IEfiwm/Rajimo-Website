"use client"

import { content, type Locale } from "@/lib/content"
import { APP_VERSION } from "@/lib/version"
import { BrandLogo } from "@/components/brand-logo"

type SiteFooterProps = {
  locale: Locale
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = content[locale]

  return (
    <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <BrandLogo textClassName="brand-mark font-pixel text-xs tracking-[0.25em] text-black/50" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {t.nav.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-black/35 hover:text-black/70 transition-colors tracking-widest">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {t.footer.links.map((l) => (
            <a key={l.label} href={l.href} className="text-xs text-black/25 hover:text-black/55 transition-colors tracking-widest">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-black/[0.04] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-black/20">{t.footer.copyright}</span>
        <div
          className="inline-flex items-center gap-2.5 self-start sm:self-auto px-3.5 py-1.5 rounded-full border border-black/[0.07] bg-white/40"
          style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black/15 shrink-0" />
          <span className="text-[10px] text-black/30">{t.footer.versionLabel}</span>
          <span
            className={`text-[10px] text-black/50 tabular-nums ${locale === "en" ? "font-pixel tracking-[0.2em]" : "font-sans"}`}
          >
            v{APP_VERSION}
          </span>
        </div>
      </div>
    </footer>
  )
}

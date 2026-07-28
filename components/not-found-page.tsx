"use client"

import { BrandLogo } from "@/components/brand-logo"
import { MobileNav } from "@/components/mobile-nav"
import { SiteFooter } from "@/components/site-footer"
import { useLocale } from "@/components/use-locale"

export function NotFoundPage() {
  const { locale, toggleLocale, t } = useLocale()
  const page = t.notFound

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#111] flex flex-col" dir={t.dir}>
      <MobileNav content={t} locale={locale} onToggleLocale={toggleLocale} />

      <main className="relative flex-1 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 15% 20%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(0,0,0,0.04), transparent 55%)",
          }}
        />

        <div className="relative z-10 w-full max-w-3xl">
          <BrandLogo
            textClassName="brand-mark font-pixel text-xs tracking-[0.25em] text-black/50"
            className="mb-12"
          />

          <p
            className={`text-[11px] text-black/30 mb-6 ${
              locale === "en" ? "font-pixel tracking-[0.35em]" : "font-sans tracking-widest"
            }`}
          >
            {page.code}
          </p>

          <h1 className="animate-not-found-in text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            {page.title}
          </h1>

          <p
            className="animate-not-found-in text-sm md:text-base text-black/45 leading-relaxed max-w-md mb-10"
            style={{ animationDelay: "80ms" }}
          >
            {page.description}
          </p>

          <div
            className="animate-not-found-in flex flex-wrap gap-3"
            style={{ animationDelay: "160ms" }}
          >
            <a
              href="/"
              className="px-6 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-wide"
            >
              {page.home}
            </a>
            <a
              href="/solutions/"
              className="px-6 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-black/30 hover:text-black transition-colors tracking-wide bg-white/50"
            >
              {page.solutions}
            </a>
            <a
              href="/contact/"
              className="px-6 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-black/30 hover:text-black transition-colors tracking-wide bg-white/50"
            >
              {page.contact}
            </a>
          </div>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  )
}

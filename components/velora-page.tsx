"use client"

import { useCallback, useEffect, useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { RevealText } from "@/components/reveal-text"
import { BentoCard, Tag } from "@/components/bento-card"
import { SiteFooter } from "@/components/site-footer"
import { useLocale } from "@/components/use-locale"
import { arrowBack, arrowForward } from "@/lib/content"
import { veloraData, VELORA_LIVE_URL } from "@/lib/velora-data"
import { VeloraSalesChart } from "@/components/velora-sales-chart"

export function VeloraPage() {
  const { locale, toggleLocale, t: site } = useLocale()
  const page = veloraData[locale]
  const [heroReady, setHeroReady] = useState(false)
  const [activeShot, setActiveShot] = useState(0)
  const [galleryPaused, setGalleryPaused] = useState(false)

  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.querySelectorAll<HTMLElement>(".group").forEach((card) => {
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    })
  }, [])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setHeroReady(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (galleryPaused || page.shots.length < 2) return
    const id = window.setInterval(() => {
      setActiveShot((i) => (i + 1) % page.shots.length)
    }, 5600)
    return () => window.clearInterval(id)
  }, [page.shots.length, galleryPaused])

  const selectShot = useCallback((i: number) => {
    setActiveShot(i)
    setGalleryPaused(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#111]" dir={site.dir}>
      <MobileNav content={site} locale={locale} onToggleLocale={toggleLocale} />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <img
          src="/images/products/velora/hero.jpg"
          alt={locale === "fa" ? "داشبورد فروش ولورا" : "Velora sales dashboard"}
          className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
          style={{
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? "scale(1)" : "scale(1.05)",
            transition:
              "opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)",
          }}
          loading="eager"
          decoding="async"
        />

        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "72%",
            background:
              "linear-gradient(to top, #F5F4F0 0%, #F5F4F0 22%, rgba(245,244,240,0.92) 40%, rgba(245,244,240,0.55) 58%, rgba(245,244,240,0.15) 78%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{
            height: "28%",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col px-6 md:px-12 lg:px-20 pb-10 md:pb-14 pt-28">
          <div className="max-w-4xl">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black/70 transition-colors mb-8"
            >
              <span aria-hidden="true">{arrowBack(locale)}</span>
              {page.backHome}
            </a>

            <Tag>{page.tag}</Tag>

            <h1
              className={`mt-6 font-light leading-[0.95] ${
                locale === "en"
                  ? "font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.12em]"
                  : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
              }`}
            >
              {page.brand}
            </h1>

            <RevealText
              locale={locale}
              className="mt-5 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-[1.15] whitespace-pre-line text-black/70"
            >
              {page.heroTitle}
            </RevealText>

            <p className="mt-5 text-sm md:text-base text-black/45 leading-relaxed max-w-xl">
              {page.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact/"
                className="px-6 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-wide"
              >
                {page.ctaDemo}
              </a>
              <a
                href={VELORA_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-black/30 hover:text-black transition-colors tracking-wide bg-white/50"
              >
                {page.liveLabel} {arrowForward(locale)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[1.1]">
              {page.overviewTitle}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 max-w-2xl">
            {page.overview.map((paragraph) => (
              <p key={paragraph} className="text-sm md:text-base text-black/45 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SALES IMPACT */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <Tag>{page.salesTag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line"
            >
              {page.salesTitle}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed">{page.salesDescription}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/[0.06] border border-black/[0.06] mb-10">
            {page.salesMetrics.map((m, i) => (
              <div
                key={m.label}
                className="bg-[#F5F4F0] p-6 md:p-8 animate-not-found-in"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="text-3xl md:text-4xl font-light tracking-tight tabular-nums">{m.value}</div>
                <div className="mt-3 text-sm text-black/70">{m.label}</div>
                <div className="mt-1 text-[11px] text-black/35 leading-relaxed">{m.hint}</div>
              </div>
            ))}
          </div>

          <VeloraSalesChart
            months={page.chartMonths}
            legendSales={page.chartLegendSales}
            legendBaseline={page.chartLegendBaseline}
            unit={page.chartUnit}
            title={page.chartTitle}
            subtitle={page.chartSubtitle}
            takeaway={page.chartTakeaway}
            outcomes={page.chartOutcomes}
            note={page.chartNote}
          />

          <div className="mt-14">
            <h3 className="text-lg md:text-xl font-light tracking-tight mb-8">{page.salesLeversTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8" onMouseMove={handleMouse}>
              {page.salesLevers.map((lever, i) => (
                <div key={lever.title} className="flex gap-4 animate-not-found-in" style={{ animationDelay: `${i * 60}ms` }}>
                  <span className="text-[11px] text-black/25 tracking-widest pt-1 tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-base font-light mb-2">{lever.title}</h4>
                    <p className="text-sm text-black/45 leading-relaxed">{lever.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <Tag>{page.galleryTag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line"
            >
              {page.galleryTitle}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed">{page.galleryDescription}</p>
          </div>

          <div className="rounded-2xl border border-black/[0.07] bg-white overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-black/[0.06] bg-[#fafaf8]">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-black/[0.04] border border-black/[0.04]">
                <span className="block text-[11px] text-black/40 truncate text-center" dir="ltr">
                  velora.rajimo.ir
                </span>
              </div>
              <span className="hidden sm:inline text-[11px] text-black/30 tabular-nums shrink-0">
                {String(activeShot + 1).padStart(2, "0")} / {String(page.shots.length).padStart(2, "0")}
              </span>
            </div>

            <div className="relative bg-[#0B0C14]">
              <div className="max-h-[min(78vh,820px)] overflow-y-auto overscroll-contain">
                {page.shots.map((shot, i) => (
                  <img
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full h-auto block transition-opacity duration-500"
                    style={{
                      display: activeShot === i ? "block" : "none",
                    }}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ))}
              </div>
            </div>

            <div className="px-5 py-4 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-sm text-black/60 leading-relaxed">{page.shots[activeShot]?.caption}</p>
              <p className="text-[11px] text-black/30">
                {locale === "fa" ? "برای دیدن کامل صفحه اسکرول کنید" : "Scroll to see the full screen"}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {page.shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => selectShot(i)}
                className={`group text-start overflow-hidden border bg-white transition-colors ${
                  activeShot === i
                    ? "border-black/30 ring-1 ring-black/10"
                    : "border-black/[0.07] hover:border-black/20"
                }`}
              >
                <div className="relative aspect-[4/3] bg-[#0B0C14] overflow-hidden">
                  <img
                    src={shot.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3">
                  <div className="text-[10px] text-black/30 tracking-widest mb-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-black/60 leading-snug line-clamp-2">{shot.caption}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <Tag>{page.modulesTag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line"
            >
              {page.modulesTitle}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed">{page.modulesDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3" onMouseMove={handleMouse}>
            {page.modules.map((mod, i) => (
              <BentoCard key={mod.title} className="p-7 md:p-8 flex flex-col min-h-[280px]" delay={i * 50}>
                <h3 className="text-xl font-light mb-2">{mod.title}</h3>
                <p className="text-sm text-black/45 leading-relaxed mb-6">{mod.description}</p>
                <ul className="mt-auto space-y-2.5">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-black/50 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <Tag>{page.highlightsTag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.05]"
            >
              {page.highlightsTitle}
            </RevealText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {page.highlights.map((item, i) => (
              <div
                key={item.label}
                className="animate-not-found-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="text-[11px] text-black/30 tracking-widest mb-3">{item.label}</div>
                <p className="text-sm text-black/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <Tag>{page.rolesTag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.05]"
            >
              {page.rolesTitle}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed">{page.rolesDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" onMouseMove={handleMouse}>
            {page.roles.map((role, i) => (
              <BentoCard key={role.name} className="p-6 md:p-7" delay={i * 40}>
                <h3 className="text-base font-light mb-2">{role.name}</h3>
                <p className="text-sm text-black/45 leading-relaxed">{role.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Tag>{page.platformTag}</Tag>
            <RevealText
              locale={locale}
              className="mt-5 text-3xl sm:text-4xl font-light tracking-tight leading-[1.05]"
            >
              {page.platformTitle}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-md">
              {page.platformDescription}
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-0 border-t border-black/[0.06]">
              {page.platformItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 py-5 border-b border-black/[0.06] text-sm text-black/55"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden">
        <img
          src="/images/footer.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none opacity-80"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgb(245,244,240) 0%, rgba(245,244,240,0.92) 25%, rgba(245,244,240,0.5) 55%, transparent 75%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p
            className={`text-xs tracking-[0.3em] text-black/30 mb-6 ${
              locale === "en" ? "font-pixel" : "font-sans"
            }`}
          >
            {page.brand}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mb-6">
            {page.ctaTitle}
          </h2>
          <p className="text-sm text-black/45 leading-relaxed mb-10">{page.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact/"
              className="w-full sm:w-auto px-8 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium text-center"
            >
              {page.ctaButton}
            </a>
            <a
              href={VELORA_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-black/30 hover:text-black transition-colors tracking-widest bg-white/50 text-center"
            >
              {page.liveLabel}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </div>
  )
}

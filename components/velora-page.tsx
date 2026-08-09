"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { RevealText } from "@/components/reveal-text"
import { BentoCard, Tag } from "@/components/bento-card"
import { SiteFooter } from "@/components/site-footer"
import { useLocale } from "@/components/use-locale"
import { arrowBack, arrowForward } from "@/lib/content"
import { veloraData, VELORA_LIVE_URL } from "@/lib/velora-data"

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function VeloraPage() {
  const { locale, toggleLocale, t: site } = useLocale()
  const page = veloraData[locale]
  const { ref: heroVisualRef, inView: heroVisualInView } = useInView(0.2)

  const handleMouse = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.querySelectorAll<HTMLElement>(".group").forEach((card) => {
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#111]" dir={site.dir}>
      <MobileNav content={site} locale={locale} onToggleLocale={toggleLocale} />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-28 pb-16 md:pb-24 px-6 md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 70% 0%, rgba(0,0,0,0.045), transparent 58%), linear-gradient(to top, #F5F4F0 0%, transparent 45%)",
          }}
        />

        <div className="relative z-10 max-w-4xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs text-black/40 hover:text-black/70 transition-colors mb-10"
          >
            <span aria-hidden="true">{arrowBack(locale)}</span>
            {page.backHome}
          </a>

          <Tag>{page.tag}</Tag>

          <h1
            className={`mt-8 font-light leading-[0.95] ${
              locale === "en"
                ? "font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.12em]"
                : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
            }`}
          >
            {page.brand}
          </h1>

          <RevealText
            locale={locale}
            className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-[1.15] whitespace-pre-line text-black/70"
          >
            {page.heroTitle}
          </RevealText>

          <p className="mt-6 text-sm md:text-base text-black/45 leading-relaxed max-w-xl">
            {page.heroDescription}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
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
      </section>

      {/* PRODUCT VISUAL */}
      <section className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="max-w-6xl mx-auto" ref={heroVisualRef}>
          <div
            className="relative overflow-hidden border border-black/[0.07] bg-white"
            style={{
              opacity: heroVisualInView ? 1 : 0,
              transform: heroVisualInView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img
              src="/images/projects/velora.png"
              alt={page.brand}
              className="w-full h-auto object-cover object-top max-h-[70vh]"
              loading="eager"
              decoding="async"
            />
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

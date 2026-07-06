"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { IntroAnimation } from "@/components/intro-animation"
import { PixelIcon } from "@/components/pixel-icon"
import { LiveAgentFeed, LiveAgentCounter } from "@/components/live-agent-feed"
import { RevealText } from "@/components/reveal-text"
import { StackingAgentCards } from "@/components/stacking-agent-cards"
import { MobileNav } from "@/components/mobile-nav"
import { DevExSection } from "@/components/devex-section"
import { content, type Locale } from "@/lib/content"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function BentoCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-black/[0.07] bg-white overflow-hidden transition-all duration-700 hover:border-black/[0.15] hover:bg-[#fafaf8] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.3s ease, background-color 0.3s ease`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.03), transparent 60%)" }}
      />
      {children}
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/[0.04]">
      {children}
    </span>
  )
}

const WORKFLOW_IMAGES = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/define-5aafAmGBrxZpOqJ3XLHY3n3qzC2I5K.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compose-5RT5VR4f1Y3GoFmovqTKLTG4UXp3g2.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-zm8guZwxJHtwWsJ7XO4B0CF7GzlNK8.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deploy-an8fgHSLzniojkcmRyGGIFQUJF9T5J.png",
]

export default function RajimoPage() {
  const [locale, setLocale] = useState<Locale>("fa")
  const [introDone, setIntroDone] = useState(false)
  const [heroReady, setHeroReady] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const t = content[locale]

  const handleIntroDone = useCallback(() => {
    setIntroDone(true)
    requestAnimationFrame(() => {
      setVideoReady(true)
      setHeroReady(true)
    })
  }, [])

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
    document.documentElement.style.overflow = "hidden"

    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (introDone) {
      document.documentElement.style.overflow = ""
    }
  }, [introDone])

  useEffect(() => {
    document.documentElement.lang = t.lang
    document.documentElement.dir = t.dir
    document.documentElement.dataset.locale = locale
  }, [locale, t])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  const feedLabels =
    locale === "fa"
      ? { project: "پروژه", description: "شرح پروژه", status: "وضعیت" }
      : { project: "PROJECT", description: "DESCRIPTION", status: "STATUS" }

  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased" dir={t.dir}>
      <IntroAnimation onDone={handleIntroDone} />

      <div
        className="transition-opacity duration-500"
        style={{
          opacity: introDone ? 1 : 0,
          visibility: introDone ? "visible" : "hidden",
          pointerEvents: introDone ? "auto" : "none",
        }}
      >
      <MobileNav content={t} locale={locale} onToggleLocale={() => setLocale((l) => (l === "fa" ? "en" : "fa"))} />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agentic-hero-9yW3wnTNMfn2U6lsVhTTZSJFEvAoSj.mp4"
          style={{
            transform: videoReady ? "scale(1.05)" : "scale(0.85)",
            transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "65%", background: "linear-gradient(to top, #F5F4F0 0%, #F5F4F0 18%, rgba(245,244,240,0.85) 35%, rgba(245,244,240,0.5) 55%, rgba(245,244,240,0.15) 75%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "20%", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "38%", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: "55%", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} />

        <div className="h-20" />

        <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col px-6 md:px-12 pb-12 max-w-4xl">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-light text-[#111] leading-[1.05] tracking-tight mb-6 whitespace-pre-line"
            style={{
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(24px)",
              transform: heroReady ? "translateY(0px)" : "translateY(32px)",
              transition: "opacity 1s cubic-bezier(0.16,1,0.3,1), filter 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {t.hero.title}
          </h1>

          <p
            className="text-base md:text-lg text-black/50 leading-relaxed max-w-2xl mb-8"
            style={{
              opacity: heroReady ? 1 : 0,
              filter: heroReady ? "blur(0px)" : "blur(12px)",
              transform: heroReady ? "translateY(0px)" : "translateY(16px)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 100ms, filter 0.9s cubic-bezier(0.16,1,0.3,1) 100ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 100ms",
            }}
          >
            {t.hero.description}
          </p>

          <div
            className="flex flex-wrap gap-3 mb-10"
            style={{
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0px)" : "translateY(12px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 180ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 180ms",
            }}
          >
            <a href="#contact" className="px-6 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-wide">
              {t.hero.cta1}
            </a>
            <a href="#platform" className="px-6 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-black/30 hover:text-black transition-colors tracking-wide bg-white/50">
              {t.hero.cta2}
            </a>
          </div>

          <div className="flex gap-8 sm:gap-12">
            {t.hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  opacity: heroReady ? 1 : 0,
                  filter: heroReady ? "blur(0px)" : "blur(16px)",
                  transform: heroReady ? "translateY(0px)" : "translateY(20px)",
                  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${240 + i * 80}ms, filter 0.8s cubic-bezier(0.16,1,0.3,1) ${240 + i * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${240 + i * 80}ms`,
                }}
              >
                <div className="text-3xl sm:text-4xl text-[#111] font-light tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-black/40 tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="platform" className="py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="platform" size={40} />
            <div className="mt-4"><Tag>{t.solutions.tag}</Tag></div>
            <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
              {t.solutions.title}
            </RevealText>
            <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-2xl">{t.solutions.description}</p>
          </div>

          <div className="grid grid-cols-12 gap-3" onMouseMove={handleMouse}>
            <BentoCard className="col-span-12 p-8 min-h-[200px] flex flex-col justify-between relative overflow-hidden" delay={0}>
              <img
                src="/images/arc.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-75"
                style={{
                  objectPosition: "center 70%",
                  transform: locale === "fa" ? "scaleX(-1)" : "none",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  maskImage: "linear-gradient(to bottom, transparent 30%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, transparent 30%, black 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 20%, rgba(245,244,240,0.45) 45%, rgba(245,244,240,0.82) 62%, rgba(245,244,240,0.97) 78%, rgb(245,244,240) 100%)",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-light mb-3">{t.solutions.featured.title}</h3>
                <p className="text-sm text-black/45 leading-relaxed max-w-lg">{t.solutions.featured.description}</p>
              </div>
            </BentoCard>

            {t.solutions.items.map((item, i) => (
              <BentoCard key={item.title} className="col-span-12 md:col-span-4 p-8 min-h-[200px]" delay={120 + i * 40}>
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-sm text-black/45 leading-relaxed">{item.description}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="agents" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 ${locale === "en" ? "flex flex-col md:flex-row md:items-end md:justify-between gap-8" : ""}`}>
            <div>
              <PixelIcon type="agents" size={40} />
              <div className="mt-4"><Tag>{t.products.tag}</Tag></div>
              <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
                {t.products.title}
              </RevealText>
              {locale === "fa" && (
                <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-2xl">{t.products.side}</p>
              )}
            </div>
            {locale === "en" && (
              <p className="text-sm text-black/45 leading-relaxed max-w-xs">{t.products.side}</p>
            )}
          </div>
          <StackingAgentCards items={t.products.items} />
        </div>
      </section>

      {/* ABOUT / FOUNDERS */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="mt-4"><Tag>{t.about.tag}</Tag></div>
            <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
              {t.about.title}
            </RevealText>
            <div className="mt-8 space-y-5 max-w-2xl">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm md:text-base text-black/45 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {t.about.founders.map((founder, i) => (
              <BentoCard key={founder.name} className="overflow-hidden p-0" delay={i * 80}>
                <div className="relative aspect-[4/5] overflow-hidden bg-black/[0.03]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(245,244,240,0.95) 0%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="px-6 pb-6 pt-4 -mt-2 relative z-10">
                  <h3 className="text-lg font-light text-[#111]">{founder.name}</h3>
                  <p className={`text-xs text-black/40 mt-1 ${locale === "en" ? "font-pixel tracking-widest" : ""}`}>
                    {founder.role}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="workflow" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="workflow" size={40} />
            <div className="mt-4"><Tag>{t.process.tag}</Tag></div>
            <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
              {t.process.title}
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3" onMouseMove={handleMouse}>
            {t.process.items.map((step, i) => (
              <BentoCard key={step.n} className="relative overflow-hidden flex flex-col min-h-[320px]" delay={i * 80}>
                <div className="absolute inset-x-0 top-0 h-56 pointer-events-none">
                  <img
                    src={WORKFLOW_IMAGES[i]}
                    alt={step.title}
                    className="w-full h-full object-cover object-top"
                    style={{ maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)" }}
                  />
                </div>
                <div className="relative z-10 p-7">
                  <span className={`text-[11px] text-black/20 block ${locale === "en" ? "font-pixel tracking-widest" : "font-sans"}`}>{step.n}</span>
                </div>
                <div className="relative z-10 px-7 pb-7 mt-auto pt-16">
                  <h3 className="text-2xl font-light mb-3">{step.title}</h3>
                  <p className="text-sm text-black/45 leading-relaxed">{step.desc}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="integrations" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 ${locale === "en" ? "flex flex-col md:flex-row md:items-end md:justify-between gap-8" : ""}`}>
            <div>
              <PixelIcon type="integrations" size={40} />
              <div className="mt-4"><Tag>{t.industries.tag}</Tag></div>
              <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
                {t.industries.title}
              </RevealText>
              {locale === "fa" && (
                <p className="mt-6 text-sm text-black/45 leading-relaxed max-w-2xl">{t.industries.description}</p>
              )}
            </div>
            {locale === "en" && (
              <p className="text-sm text-black/45 leading-relaxed max-w-xs">{t.industries.description}</p>
            )}
          </div>

          <div className="rounded-2xl overflow-hidden border border-black/[0.07] flex flex-col md:block md:relative" onMouseMove={handleMouse}>
            <div className="relative w-full h-[280px] md:h-[480px] shrink-0">
              <img src="/images/arc.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
            <div className="flex flex-col gap-3 p-4 md:absolute md:bottom-4 md:end-4 md:p-0 md:w-72">
              <div className="rounded-xl border border-white/50 p-6" style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", background: "rgba(255,255,255,0.60)" }}>
                <Tag>{locale === "fa" ? "راهکار" : "SOLUTION"}</Tag>
                <h3 className="mt-3 text-lg font-light mb-2">{t.industries.card1.title}</h3>
                <p className="text-xs text-black/45 leading-relaxed">{t.industries.card1.description}</p>
              </div>
              <div className="rounded-xl border border-white/50 p-6" style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", background: "rgba(255,255,255,0.60)" }}>
                <Tag>{locale === "fa" ? "مقیاس" : "SCALE"}</Tag>
                <h3 className="mt-3 text-lg font-light mb-2">{t.industries.card2.title}</h3>
                <p className="text-xs text-black/45 leading-relaxed">{t.industries.card2.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="security" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <PixelIcon type="platform" size={40} />
            <div className="mt-4"><Tag>{t.whyUs.tag}</Tag></div>
            <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
              {t.whyUs.title}
            </RevealText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-sm text-black/45 leading-relaxed">{t.whyUs.description}</p>
              <div className="space-y-4">
                {t.whyUs.items.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-1 bg-black/10 rounded-full shrink-0" />
                    <div>
                      <h3 className="text-sm font-light mb-1">{item.label}</h3>
                      <p className="text-xs text-black/35">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex flex-col gap-2">
                {t.whyUs.badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-xs text-black/25">
                    <span className="w-1 h-1 rounded-full bg-black/25" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <BentoCard className="p-6" delay={0}>
              <div className="text-xs text-black/30 mb-4">{t.whyUs.feedTitle}</div>
              <div className="space-y-2">
                {t.whyUs.items.map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-black/[0.02] border border-black/[0.04]">
                  <span className={`text-[10px] text-black/25 min-w-[24px] ${locale === "fa" ? "font-sans" : "font-mono"}`}>
                    {locale === "fa" ? `۰${i + 1}` : `0${i + 1}`}
                  </span>
                    <span className="text-[11px] text-black/50 font-light flex-1">{item.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      <DevExSection content={t.devex} locale={locale} />

      {/* INDUSTRIES MARQUEE */}
      <section className="py-0 border-t border-black/[0.06] overflow-hidden select-none">
        <div className={`flex w-max border-b border-black/[0.06] ${locale === "fa" ? "marquee-rtl" : "marquee-ltr"}`}>
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0">
              {t.industries.items.map((cap) => (
                <div key={`${rep}-${cap}`} className="flex items-center gap-6 px-10 py-5 border-e border-black/[0.06] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                  <span className="text-sm text-black/45 whitespace-nowrap tracking-wide">{cap}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* LIVE PROJECTS */}
      <section id="live" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <PixelIcon type="agents" size={40} />
              <div className="mt-4"><Tag>{t.whyUs.feedTitle}</Tag></div>
              <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
                {t.liveProjects.title}
              </RevealText>
              <p className="mt-6 text-base text-black/40 leading-relaxed max-w-sm">{t.whyUs.description}</p>
              <div className="mt-10 flex items-end gap-2">
                <LiveAgentCounter locale={locale} count={5} />
                <span className="text-black/30 text-sm mb-1 tracking-wide">{t.whyUs.feedCounter}</span>
              </div>
            </div>
            <LiveAgentFeed items={t.liveFeed.items} labels={feedLabels} locale={locale} />
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section id="pricing" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <PixelIcon type="pricing" size={40} />
            <div className="mt-4"><Tag>{t.engagement.tag}</Tag></div>
            <RevealText locale={locale} className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05] whitespace-pre-line">
              {t.engagement.title}
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3" onMouseMove={handleMouse}>
            {t.engagement.plans.map((plan, i) => (
              <BentoCard key={plan.name} className={`p-8 flex flex-col ${plan.highlight ? "border-black/20 bg-[#F0EEE8]" : ""}`} delay={i * 80}>
                <div className="mb-8">
                  <div className={`text-[11px] text-black/40 mb-4 ${locale === "en" ? "font-pixel tracking-widest" : "font-sans"}`}>{plan.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-light">{plan.price}</span>
                  </div>
                  <p className="text-xs text-black/35 tracking-wide">{plan.sub}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-black/55">
                      <div className="w-1 h-1 rounded-full bg-black/25 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full py-3 rounded-xl text-sm tracking-widest transition-all duration-200 text-center ${
                    plan.highlight ? "bg-[#111] text-white hover:bg-[#333]" : "border border-black/10 text-black/60 hover:border-black/25 hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  {plan.cta}
                </a>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden">
        <img src="/images/footer.png" alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none" style={{ opacity: 0.85 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ maskImage: "linear-gradient(to top, transparent 0%, black 55%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgb(245,244,240) 0%, rgba(245,244,240,0.92) 18%, rgba(245,244,240,0.55) 35%, transparent 55%)" }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6 whitespace-pre-line">
            {t.cta.title}
          </h2>
          <p className="text-sm text-black/45 leading-relaxed mb-10">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:hello@rajimo.ir" className="px-8 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium">
              {t.cta.button1}
            </a>
            <a href="mailto:info@rajimo.ir" className="px-8 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-black/30 hover:text-black transition-colors tracking-widest bg-white/50">
              {t.cta.button2}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <span className="brand-mark font-pixel text-xs tracking-[0.25em] text-black/50">{t.brand}</span>
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
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-black/[0.04]">
          <span className="text-xs text-black/20">{t.footer.copyright}</span>
        </div>
      </footer>
      </div>
    </div>
  )
}







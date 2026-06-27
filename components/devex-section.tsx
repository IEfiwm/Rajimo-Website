"use client"

import { useState, useEffect } from "react"
import type { SiteContent } from "@/lib/content"

function buildSteps(content: SiteContent["devex"], locale: "fa" | "en") {
  const isFa = locale === "fa"
  return [
    {
      ...content.steps[0],
      file: isFa ? "تحلیل-نیاز.ts" : "discovery.ts",
      code: [
        { type: "comment", text: isFa ? "// شناخت اهداف و چالش‌های کسب‌وکار" : "// Business goals and challenges" },
        { type: "keyword", text: "const", after: " discovery ", keyword2: "=", keyword3: " await ", fn: "analyze", args: "({ business, goals })" },
        { type: "gap" },
        { type: "prop", key: "  challenges", val: "discovery.challenges" },
        { type: "prop", key: "  opportunities", val: "discovery.opportunities" },
      ],
    },
    {
      ...content.steps[1],
      file: isFa ? "معماری-محصول.ts" : "architecture.ts",
      code: [
        { type: "comment", text: isFa ? "// طراحی راهکار و تجربه کاربری" : "// Solution and UX design" },
        { type: "keyword", text: "const", after: " product ", keyword2: "=", keyword3: " ", fn: "design", args: "({ ux, architecture })" },
        { type: "gap" },
        { type: "prop", key: "  stack", val: "'Next.js + Cloud'" },
        { type: "prop", key: "  scalable", val: "true" },
      ],
    },
    {
      ...content.steps[2],
      file: isFa ? "توسعه.ts" : "development.ts",
      code: [
        { type: "comment", text: isFa ? "// پیاده‌سازی و تست" : "// Implementation and testing" },
        { type: "keyword", text: "await", after: " ", fn: "build", args: "({ features, automation, ai })" },
        { type: "gap" },
        { type: "output", text: isFa ? "✓ توسعه کامل" : "✓ Development complete" },
        { type: "output", text: isFa ? "✓ تست و QA" : "✓ Testing & QA" },
      ],
    },
    {
      ...content.steps[3],
      file: isFa ? "رشد.ts" : "growth.ts",
      code: [
        { type: "comment", text: isFa ? "// پشتیبانی و بهینه‌سازی مستمر" : "// Support and continuous optimization" },
        { type: "keyword", text: "await", after: " ", fn: "optimize", args: "({ monitoring, support })" },
        { type: "gap" },
        { type: "success", text: isFa ? "✓ محصول در حال رشد" : "✓ Product growing" },
        { type: "url", text: "  → rajimo.ir" },
      ],
    },
  ] as const
}

type CodeLine = ReturnType<typeof buildSteps>[number]["code"][number]

function CodeLine({ line }: { line: CodeLine }) {
  if (line.type === "gap") return <div className="h-3" />
  if (line.type === "comment") return <div className="text-[#9ca3af]">{line.text}</div>
  if (line.type === "output") return <div className="text-[#6b7280]">{line.text}</div>
  if (line.type === "success") return <div className="text-[#16a34a]">{line.text}</div>
  if (line.type === "url") return <div className="text-[#2563eb] underline">{line.text}</div>
  if (line.type === "plain") return <div className="text-[#111]">{line.text}</div>
  if (line.type === "prop") return (
    <div>
      <span className="text-[#2563eb]">{line.key}</span>
      <span className="text-[#111]">: </span>
      <span className="text-[#16a34a]">{line.val}</span>
      <span className="text-[#111]">,</span>
    </div>
  )
  if (line.type === "keyword") return (
    <div>
      <span className="text-[#7c3aed]">{line.text}</span>
      <span className="text-[#111]">{line.after}</span>
      <span className="text-[#7c3aed]">{line.keyword2}</span>
      {line.keyword3 && <span className="text-[#7c3aed]">{line.keyword3}</span>}
      {line.fn && <span className="text-[#b45309]">{line.fn}</span>}
      {line.args && <span className="text-[#111]">{line.args}</span>}
      {line.string && <span className="text-[#16a34a]">{line.string}</span>}
    </div>
  )
  return null
}

export function DevExSection({ content, locale }: { content: SiteContent["devex"]; locale: "fa" | "en" }) {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const steps = buildSteps(content, locale)

  function selectStep(i: number) {
    if (i === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(i)
      setVisible(true)
    }, 180)
  }

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive((prev) => (prev + 1) % steps.length)
        setVisible(true)
      }, 180)
    }, 3200)
    return () => clearInterval(t)
  }, [steps.length])

  const step = steps[active]

  return (
    <section id="devex" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.06] text-[10px] text-black/40">
            {content.tag}
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-light leading-[1.05] whitespace-pre-line">
            {content.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
          <div className="flex flex-col gap-3">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => selectStep(i)}
                className="flex-1 text-start rounded-2xl border transition-all duration-200 p-6 group"
                style={{
                  background: active === i ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.7)",
                  borderColor: active === i ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.06)",
                  boxShadow: active === i ? "0 1px 3px rgba(0,0,0,0.06)" : "0 1px 2px rgba(0,0,0,0.03)",
                }}
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-light shrink-0 transition-colors duration-200"
                    style={{
                      background: active === i ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.04)",
                      color: active === i ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.35)",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-sm transition-colors duration-200"
                      style={{
                        fontWeight: locale === "fa" ? 500 : 300,
                        color: active === i
                          ? (locale === "fa" ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.8)")
                          : (locale === "fa" ? "rgba(0,0,0,0.62)" : "rgba(0,0,0,0.5)"),
                      }}
                    >
                      {s.title}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: locale === "fa" ? "rgba(0,0,0,0.48)" : "rgba(0,0,0,0.28)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div
            className="lg:col-span-2 rounded-2xl border border-black/[0.06] p-8 flex flex-col"
            style={{ background: "rgba(255,255,255,0.7)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", minHeight: "360px" }}
          >
            <div className="flex items-center justify-between mb-5 shrink-0">
              <div
                className="text-[10px] transition-all duration-200 font-sans"
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 200ms ease, filter 200ms ease",
                  color: locale === "fa" ? "rgba(0,0,0,0.52)" : "rgba(0,0,0,0.3)",
                  fontWeight: locale === "fa" ? 500 : 400,
                }}
              >
                {step.file}
              </div>
            </div>

            <div className="flex-1 rounded-xl p-6 overflow-hidden" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div
                className={`text-[12px] leading-6 ${locale === "fa" ? "font-sans" : "font-mono"}`}
                style={{
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0px)" : "blur(6px)",
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 220ms cubic-bezier(0.16,1,0.3,1), filter 220ms cubic-bezier(0.16,1,0.3,1), transform 220ms cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {step.code.map((line, i) => (
                  <CodeLine key={i} line={line} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

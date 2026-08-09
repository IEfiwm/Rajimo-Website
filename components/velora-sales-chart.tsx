"use client"

import { useEffect, useId, useMemo, useRef, useState } from "react"
import { VELORA_SALES_SERIES } from "@/lib/velora-data"

function useInView(threshold = 0.25) {
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

function buildPath(
  values: number[],
  width: number,
  height: number,
  padX: number,
  padY: number,
  min: number,
  max: number
) {
  const span = max - min || 1
  const innerW = width - padX * 2
  const innerH = height - padY * 2
  return values
    .map((v, i) => {
      const x = padX + (i / (values.length - 1)) * innerW
      const y = padY + innerH - ((v - min) / span) * innerH
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
}

function pointAt(
  values: number[],
  i: number,
  width: number,
  height: number,
  padX: number,
  padY: number,
  min: number,
  max: number
) {
  const span = max - min || 1
  const innerW = width - padX * 2
  const innerH = height - padY * 2
  return {
    x: padX + (i / (values.length - 1)) * innerW,
    y: padY + innerH - ((values[i] - min) / span) * innerH,
  }
}

export function VeloraSalesChart({
  months,
  legendSales,
  legendBaseline,
  unit,
  title,
  subtitle,
  takeaway,
  outcomes,
  note,
}: {
  months: string[]
  legendSales: string
  legendBaseline: string
  legendProfit?: string
  unit: string
  title: string
  subtitle: string
  takeaway: string
  outcomes: Array<{ value: string; label: string; hint: string }>
  note: string
}) {
  const { ref, inView } = useInView(0.25)
  const gradId = useId().replace(/:/g, "")
  const width = 680
  const height = 280
  const padX = 44
  const padY = 36

  const sales = VELORA_SALES_SERIES.salesWith
  const baseline = VELORA_SALES_SERIES.salesWithout

  const min = Math.min(...sales, ...baseline) * 0.88
  const max = Math.max(...sales, ...baseline) * 1.06

  const salesPath = useMemo(
    () => buildPath(sales, width, height, padX, padY, min, max),
    [sales, min, max]
  )
  const baselinePath = useMemo(
    () => buildPath(baseline, width, height, padX, padY, min, max),
    [baseline, min, max]
  )

  const gapArea = useMemo(() => {
    const innerW = width - padX * 2
    const innerH = height - padY * 2
    const top = sales.map((v, i) => {
      const x = padX + (i / (sales.length - 1)) * innerW
      const y = padY + innerH - ((v - min) / (max - min)) * innerH
      return `${x},${y}`
    })
    const bottom = [...baseline]
      .map((v, i) => {
        const x = padX + (i / (baseline.length - 1)) * innerW
        const y = padY + innerH - ((v - min) / (max - min)) * innerH
        return `${x},${y}`
      })
      .reverse()
    return `M${top.join(" L")} L${bottom.join(" L")} Z`
  }, [sales, baseline, min, max])

  const lastBase = pointAt(baseline, baseline.length - 1, width, height, padX, padY, min, max)
  const firstSales = pointAt(sales, 0, width, height, padX, padY, min, max)
  const lastSales = pointAt(sales, sales.length - 1, width, height, padX, padY, min, max)
  const salesLift = sales[sales.length - 1] - baseline[baseline.length - 1]

  return (
    <div ref={ref} className="relative overflow-hidden border border-black/[0.07] bg-white p-6 md:p-8">
      <div className="mb-6 max-w-2xl">
        <h3 className="text-xl md:text-2xl font-light tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-black/40 leading-relaxed">{subtitle}</p>
      </div>

      <div
        className="mb-8 px-4 py-3 border border-black/[0.08] bg-[#F5F4F0] text-sm text-black/70 leading-relaxed"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.6s ease 0.2s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s",
        }}
      >
        {takeaway}
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-black/50 mb-5">
        <span className="inline-flex items-center gap-2">
          <span className="w-4 h-[3px] bg-[#111]" />
          {legendSales}
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="w-4 h-[2px]"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg,#1116 0 4px,transparent 4px 8px)",
            }}
          />
          {legendBaseline}
        </span>
      </div>

      <div className="relative">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label={title}>
          <defs>
            <linearGradient id={`gap-${gradId}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#111" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#111" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {[0, 0.5, 1].map((t) => {
            const val = min + (max - min) * (1 - t)
            const y = padY + (height - padY * 2) * t
            return (
              <g key={t}>
                <line
                  x1={padX}
                  x2={width - padX}
                  y1={y}
                  y2={y}
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="1"
                />
                <text
                  x={padX - 8}
                  y={y + 3}
                  textAnchor="end"
                  fill="rgba(0,0,0,0.28)"
                  fontSize="10"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                >
                  {Math.round(val)}
                </text>
              </g>
            )
          })}

          <path
            d={gapArea}
            fill={`url(#gap-${gradId})`}
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.9s ease 0.15s",
            }}
          />

          <path
            d={baselinePath}
            fill="none"
            stroke="rgba(0,0,0,0.28)"
            strokeWidth="2.25"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.02 0.032"
            style={{
              strokeDashoffset: inView ? 0 : 1,
              transition: "stroke-dashoffset 1.3s cubic-bezier(0.16,1,0.3,1)",
            }}
          />

          <path
            d={salesPath}
            fill="none"
            stroke="#111"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray="1"
            style={{
              strokeDashoffset: inView ? 0 : 1,
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          />

          {sales.map((_, i) => {
            const p = pointAt(sales, i, width, height, padX, padY, min, max)
            return (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r={i === sales.length - 1 ? 5 : 3}
                fill="#111"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.4s ease ${350 + i * 70}ms`,
                }}
              />
            )
          })}

          {/* Start / end labels on Velora line */}
          <text
            x={firstSales.x}
            y={firstSales.y - 14}
            textAnchor="middle"
            fill="rgba(0,0,0,0.45)"
            fontSize="11"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 0.8s" }}
          >
            {sales[0]}
          </text>
          <text
            x={lastSales.x - 4}
            y={lastSales.y - 14}
            textAnchor="end"
            fill="#111"
            fontSize="12"
            fontWeight="600"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 1s" }}
          >
            {sales[sales.length - 1]}
          </text>
          <text
            x={lastBase.x - 4}
            y={lastBase.y + 18}
            textAnchor="end"
            fill="rgba(0,0,0,0.35)"
            fontSize="11"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 1s" }}
          >
            {baseline[baseline.length - 1]}
          </text>
        </svg>

        <div
          className="absolute top-0 end-0 md:top-2 md:end-2 px-3.5 py-2.5 bg-[#111] text-white max-w-[11.5rem]"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease 1.05s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 1.05s",
          }}
        >
          <div className="text-[10px] text-white/45 mb-1">{months[months.length - 1]}</div>
          <div className="text-lg font-light tabular-nums tracking-tight">+{salesLift}</div>
          <div className="text-[11px] text-white/55 mt-0.5 leading-snug">{unit} فروش بیشتر</div>
        </div>
      </div>

      <div className="mt-1 grid grid-cols-6 gap-1 text-[11px] text-black/35 text-center ps-8 pe-1">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <p className="mt-2 text-[10px] text-black/25 ps-1">{unit}</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.06] border border-black/[0.06]">
        {outcomes.slice(0, 2).map((o, i) => (
          <div
            key={o.label}
            className="bg-white p-5 md:p-6"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 0.5s ease ${850 + i * 100}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${850 + i * 100}ms`,
            }}
          >
            <div className="text-2xl md:text-3xl font-light tracking-tight tabular-nums">{o.value}</div>
            <div className="mt-2 text-sm text-black/70">{o.label}</div>
            <div className="mt-1 text-[11px] text-black/35 leading-relaxed">{o.hint}</div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-black/30 leading-relaxed">{note}</p>
    </div>
  )
}

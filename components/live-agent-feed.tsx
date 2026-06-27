"use client"

import { useEffect, useState, useRef } from "react"
import type { SiteContent } from "@/lib/content"

type FeedContent = SiteContent["liveFeed"]

type AgentRow = {
  id: string
  name: string
  task: string
  region: string
  status: FeedContent["statuses"][number]
  progress: number
  elapsed: string
  key: number
}

function ProgressBar({ initial }: { initial: number }) {
  const [pct, setPct] = useState(initial)
  const rafRef = useRef<number>(0)
  const pctRef = useRef(initial)

  useEffect(() => {
    const tick = () => {
      pctRef.current = Math.min(99, pctRef.current + 0.015)
      setPct(Math.round(pctRef.current))
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={{ width: "100%", height: 2, background: "rgba(0,0,0,0.08)", borderRadius: 9 }}>
      <div
        style={{
          height: "100%",
          borderRadius: 9,
          width: `${pct}%`,
          background: "rgba(0,0,0,0.35)",
          transition: "width 0.5s linear",
        }}
      />
    </div>
  )
}

function randomRow(key: number, feed: FeedContent): AgentRow {
  return {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    name: `rajimo-${Math.floor(Math.random() * 900 + 100)}`,
    task: feed.projects[Math.floor(Math.random() * feed.projects.length)],
    region: feed.regions[Math.floor(Math.random() * feed.regions.length)],
    status: feed.statuses[Math.floor(Math.random() * feed.statuses.length)],
    progress: Math.floor(Math.random() * 85 + 10),
    elapsed: `${Math.floor(Math.random() * 14 + 1)}m ${Math.floor(Math.random() * 59)}s`,
    key,
  }
}

const GRID_EN = "72px 1fr 72px 64px"
const GRID_FA = "72px 1fr 64px 88px"

export function LiveAgentFeed({ feed, labels, locale }: { feed: FeedContent; labels: { project: string; task: string; region: string; status: string }; locale: "fa" | "en" }) {
  const isFa = locale === "fa"
  const gridCols = isFa ? GRID_FA : GRID_EN
  const headerStyle = isFa
    ? { fontSize: 10, fontWeight: 500, color: "rgba(0,0,0,0.52)" }
    : { fontSize: 8, letterSpacing: "0.16em", color: "rgba(0,0,0,0.30)", fontFamily: "monospace" }

  const [rows, setRows] = useState<AgentRow[]>([])
  const keyRef = useRef(100)

  useEffect(() => {
    setRows(Array.from({ length: 6 }, (_, i) => randomRow(i, feed)))

    const t = setInterval(() => {
      keyRef.current++
      setRows((prev) => [...prev.slice(1), randomRow(keyRef.current, feed)])
    }, 2800)
    return () => clearInterval(t)
  }, [feed])

  return (
    <div className="font-sans" style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.7)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridCols,
          padding: "10px 16px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          background: "rgba(0,0,0,0.03)",
          gap: 8,
        }}
      >
        {[labels.project, labels.task, labels.region, labels.status].map((h) => (
          <span key={h} style={headerStyle}>
            {h}
          </span>
        ))}
      </div>

      <div style={{ overflow: "hidden" }}>
        {rows.map((row, i) => (
          <div
            key={row.key}
            style={{
              display: "grid",
              gridTemplateColumns: gridCols,
              padding: "10px 16px",
              borderBottom: "1px solid rgba(0,0,0,0.04)",
              gap: 8,
              alignItems: "center",
              animation: i === rows.length - 1 ? "rowSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both" : "none",
            }}
          >
            <div>
              <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(0,0,0,0.65)", marginBottom: 1 }}>{row.name}</div>
              <div style={{ fontSize: 7.5, fontFamily: "monospace", color: "rgba(0,0,0,0.25)" }}>#{row.id}</div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                className="font-sans"
                style={{
                  fontSize: isFa ? 10 : 9,
                  color: isFa ? "rgba(0,0,0,0.68)" : "rgba(0,0,0,0.50)",
                  lineHeight: 1.4,
                  marginBottom: 5,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {row.task}
              </div>
              <ProgressBar initial={row.progress} />
            </div>
            <div style={{ fontSize: isFa ? 10 : 8, fontWeight: isFa ? 500 : 400, color: isFa ? "rgba(0,0,0,0.52)" : "rgba(0,0,0,0.30)" }}>{row.region}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 0 }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: row.status.color,
                  boxShadow: row.status.label.includes("running") || row.status.label.includes("اجرا") ? `0 0 6px ${row.status.color}` : "none",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: isFa ? 10 : 8,
                  fontWeight: isFa ? 500 : 400,
                  color: isFa ? "rgba(0,0,0,0.58)" : "rgba(0,0,0,0.35)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {row.status.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes rowSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export function LiveAgentCounter({ locale }: { locale: "fa" | "en" }) {
  const [count, setCount] = useState(24)
  const [mounted, setMounted] = useState(false)
  const isFa = locale === "fa"

  useEffect(() => {
    setMounted(true)
    const t = setInterval(() => {
      setCount((v) => Math.max(18, v + Math.floor(Math.random() * 3 - 1)))
    }, 1200)
    return () => clearInterval(t)
  }, [])

  return (
    <span
      style={{
        fontFamily: isFa ? "inherit" : "monospace",
        fontSize: "clamp(3rem, 6vw, 5rem)",
        fontWeight: isFa ? 400 : 300,
        color: isFa ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.85)",
        lineHeight: 1,
        letterSpacing: isFa ? "normal" : "-0.02em",
      }}
    >
      {mounted ? count.toLocaleString(isFa ? "fa-IR" : "en-US") : isFa ? "۲۴" : "24"}
    </span>
  )
}

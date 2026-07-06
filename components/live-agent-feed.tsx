"use client"

import type { SiteContent } from "@/lib/content"

type FeedItem = SiteContent["liveFeed"]["items"][number]

const GRID = "minmax(88px, 1.1fr) minmax(0, 2.4fr) minmax(88px, 1fr)"

function isRunningStatus(label: string) {
  return label.includes("اجرا") || label.toLowerCase().includes("progress")
}

export function LiveAgentFeed({
  items,
  labels,
  locale,
}: {
  items: readonly FeedItem[]
  labels: { project: string; description: string; status: string }
  locale: "fa" | "en"
}) {
  const isFa = locale === "fa"
  const headerStyle = isFa
    ? { fontSize: 10, fontWeight: 500, color: "rgba(0,0,0,0.52)" }
    : { fontSize: 8, letterSpacing: "0.16em", color: "rgba(0,0,0,0.30)", fontFamily: "monospace" }

  return (
    <div className="font-sans" style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, overflow: "hidden", background: "rgba(255,255,255,0.7)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: GRID,
          padding: "10px 16px",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          background: "rgba(0,0,0,0.03)",
          gap: 12,
        }}
      >
        {[labels.project, labels.description, labels.status].map((h) => (
          <span key={h} style={headerStyle}>
            {h}
          </span>
        ))}
      </div>

      <div>
        {items.map((row, i) => (
          <div
            key={`${row.name}-${row.description}-${i}`}
            style={{
              display: "grid",
              gridTemplateColumns: GRID,
              padding: "11px 16px",
              borderBottom: i < items.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none",
              gap: 12,
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: isFa ? 11 : 10,
                fontWeight: isFa ? 500 : 400,
                color: isFa ? "rgba(0,0,0,0.78)" : "rgba(0,0,0,0.65)",
              }}
            >
              {row.name}
            </div>
            <div
              className="font-sans"
              style={{
                fontSize: isFa ? 10 : 9,
                color: isFa ? "rgba(0,0,0,0.68)" : "rgba(0,0,0,0.50)",
                lineHeight: 1.45,
              }}
            >
              {row.description}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 0 }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: row.status.color,
                  boxShadow: isRunningStatus(row.status.label) ? `0 0 6px ${row.status.color}` : "none",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: isFa ? 10 : 8,
                  fontWeight: isFa ? 500 : 400,
                  color: isFa ? "rgba(0,0,0,0.58)" : "rgba(0,0,0,0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                {row.status.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function LiveAgentCounter({ locale, count = 5 }: { locale: "fa" | "en"; count?: number }) {
  const isFa = locale === "fa"

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
      {count.toLocaleString(isFa ? "fa-IR" : "en-US")}
    </span>
  )
}

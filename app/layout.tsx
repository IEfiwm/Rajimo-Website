import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ibmPlexSans } from '@/lib/fonts'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "راجیمو | زیرساخت دیجیتال کسب‌وکار — RAJIMO",
  description:
    "راجیمو به کسب‌وکارها کمک می‌کند با استفاده از محصولات دیجیتال، نرم‌افزارهای اختصاصی، اتوماسیون و هوش مصنوعی، سریع‌تر رشد کنند.",
  keywords: ["راجیمو", "Rajimo", "طراحی سایت", "اپلیکیشن", "نرم‌افزار", "هوش مصنوعی", "اتوماسیون"],
  authors: [{ name: "Rajimo" }],
  openGraph: {
    title: "RAJIMO — Digital Infrastructure for Business Growth",
    description: "From idea to growth, we build your digital infrastructure.",
    type: "website",
    siteName: "RAJIMO",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAJIMO — Digital Infrastructure for Business Growth",
    description: "From idea to growth, we build your digital infrastructure.",
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" data-locale="fa" suppressHydrationWarning className={ibmPlexSans.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/yekan-bakh-fanum/Yekan_Bakh_Fanum_Light.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/yekan-bakh-fanum/Yekan_Bakh_Fanum_Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

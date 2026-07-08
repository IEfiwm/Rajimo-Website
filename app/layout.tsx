import React from "react"
import { ibmPlexSans } from '@/lib/fonts'
import { DeferredAnalytics } from '@/components/deferred-analytics'
import { localeBootstrapScript } from '@/lib/locale-storage'
import { defaultMetadata } from '@/lib/seo'
import './globals.css'

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" data-locale="fa" suppressHydrationWarning className={ibmPlexSans.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBootstrapScript }} />
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
        <DeferredAnalytics />
      </body>
    </html>
  )
}

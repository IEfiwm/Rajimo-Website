import type { Metadata } from "next"

const DEFAULT_SITE_URL = "https://rajimo.ir"

export const siteConfig = {
  name: "راجیمو",
  nameEn: "RAJIMO",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, ""),
  description:
    "راجیمو به کسب‌وکارها کمک می‌کند با استفاده از محصولات دیجیتال، نرم‌افزارهای اختصاصی، اتوماسیون و هوش مصنوعی، سریع‌تر رشد کنند.",
  locale: "fa_IR",
  email: "contact@rajimo.ir",
  phones: ["+989127215825", "+989128501931"],
  keywords: [
    "راجیمو",
    "Rajimo",
    "طراحی سایت",
    "توسعه نرم‌افزار",
    "اپلیکیشن",
    "اتوماسیون",
    "هوش مصنوعی",
    "طراحی محصول",
    "زیرساخت دیجیتال",
    "شرکت نرم‌افزاری",
    "custom software",
    "digital agency Iran",
  ],
  ogImage: "/images/logo.png",
} as const

export const staticRoutes = [
  "/",
  "/solutions/",
  "/projects/",
  "/contact/",
] as const

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url
  if (!path || path === "/") return `${base}/`

  const normalized = path.startsWith("/") ? path : `/${path}`

  if (/\.[a-zA-Z0-9]+$/.test(normalized)) {
    return `${base}${normalized}`
  }

  return normalized.endsWith("/") ? `${base}${normalized}` : `${base}${normalized}/`
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path)
  const imagePath = ogImage ?? siteConfig.ogImage
  const imageUrl = imagePath.startsWith("http") ? imagePath : absoluteUrl(imagePath)

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.nameEn,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  }
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "راجیمو | زیرساخت دیجیتال کسب‌وکار — RAJIMO",
    template: "%s | راجیمو",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.nameEn,
  authors: [{ name: "Rajimo", url: siteConfig.url }],
  creator: "Rajimo",
  publisher: "Rajimo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.nameEn,
    title: "راجیمو | زیرساخت دیجیتال کسب‌وکار — RAJIMO",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Rajimo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "راجیمو | زیرساخت دیجیتال کسب‌وکار — RAJIMO",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
}

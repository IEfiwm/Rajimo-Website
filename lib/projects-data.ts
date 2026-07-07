import type { Locale } from "./content"

export type ProjectItem = {
  id: string
  name: string
  description: string
  url: string
  displayUrl: string
  image: string
}

export type ProjectsPageContent = {
  tag: string
  title: string
  description: string
  backHome: string
  visitSite: string
  openInNewTab: string
}

type ProjectsLocale = {
  page: ProjectsPageContent
  items: ProjectItem[]
}

export const projectsData: Record<Locale, ProjectsLocale> = {
  fa: {
    page: {
      tag: "نمونه کارها",
      title: "پروژه‌های ما",
      description:
        "نمونه‌ای از پلتفرم‌ها و وب‌سایت‌هایی که طراحی و توسعه داده‌ایم — از فروشگاه آنلاین تا سیستم‌های سازمانی.",
      backHome: "بازگشت به صفحه اصلی",
      visitSite: "مشاهده پروژه",
      openInNewTab: "باز کردن در تب جدید",
    },
    items: [
      {
        id: "itedari",
        name: "آی تی اداری",
        description: "وب‌سایت فروش ماشین‌آلات اداری",
        url: "https://itedari.ir/",
        displayUrl: "itedari.ir",
        image: "/images/projects/itedari.png",
      },
      {
        id: "soorkh",
        name: "سرخ",
        description: "وب‌سایت فروش زعفران",
        url: "https://soorkh.ir/",
        displayUrl: "soorkh.ir",
        image: "/images/projects/soorkh.png",
      },
      {
        id: "velora",
        name: "ولورا",
        description: "سیستم ERP یکپارچه مدیریت کسب‌وکار",
        url: "https://velora.rajimo.ir/",
        displayUrl: "velora.rajimo.ir",
        image: "/images/projects/velora.png",
      },
      {
        id: "lumora",
        name: "لومورا",
        description: "پلتفرم رشد فروش کافه و رستوران مبتنی بر هوش مصنوعی",
        url: "https://lumora.rajimo.ir/dashboard/",
        displayUrl: "lumora.rajimo.ir",
        image: "/images/projects/lumora.png",
      },
      {
        id: "arsianime",
        name: "ارسی انیمه",
        description: "پلتفرم استریم انیمه",
        url: "https://arsianime.com/",
        displayUrl: "arsianime.com",
        image: "/images/projects/arsianime.png",
      },
    ],
  },
  en: {
    page: {
      tag: "Portfolio",
      title: "Our Projects",
      description:
        "A selection of platforms and websites we've designed and built — from e-commerce to enterprise systems.",
      backHome: "Back to home",
      visitSite: "View project",
      openInNewTab: "Open in new tab",
    },
    items: [
      {
        id: "itedari",
        name: "IT Edari",
        description: "Office equipment e-commerce website",
        url: "https://itedari.ir/",
        displayUrl: "itedari.ir",
        image: "/images/projects/itedari.png",
      },
      {
        id: "soorkh",
        name: "Sorkh",
        description: "Saffron e-commerce website",
        url: "https://soorkh.ir/",
        displayUrl: "soorkh.ir",
        image: "/images/projects/soorkh.png",
      },
      {
        id: "velora",
        name: "Velora",
        description: "Integrated ERP business management system",
        url: "https://velora.rajimo.ir/",
        displayUrl: "velora.rajimo.ir",
        image: "/images/projects/velora.png",
      },
      {
        id: "lumora",
        name: "Lumora",
        description: "AI-powered cafe & restaurant sales growth platform",
        url: "https://lumora.rajimo.ir/dashboard/",
        displayUrl: "lumora.rajimo.ir",
        image: "/images/projects/lumora.png",
      },
      {
        id: "arsianime",
        name: "Arsi Anime",
        description: "Anime streaming platform",
        url: "https://arsianime.com/",
        displayUrl: "arsianime.com",
        image: "/images/projects/arsianime.png",
      },
    ],
  },
}

export function getProjects(locale: Locale) {
  return projectsData[locale]
}

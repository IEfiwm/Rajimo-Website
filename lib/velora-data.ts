import type { Locale } from "@/lib/content"

export const VELORA_LIVE_URL = "https://velora.rajimo.ir/"
export const VELORA_PATH = "/products/velora/"

export type VeloraModule = {
  title: string
  description: string
  items: string[]
}

export type VeloraShot = {
  src: string
  alt: string
  caption: string
}

export type VeloraPageContent = {
  tag: string
  brand: string
  heroTitle: string
  heroDescription: string
  backHome: string
  ctaDemo: string
  ctaContact: string
  liveLabel: string
  overviewTitle: string
  overview: string[]
  salesTag: string
  salesTitle: string
  salesDescription: string
  salesMetrics: Array<{ value: string; label: string; hint: string }>
  chartTitle: string
  chartSubtitle: string
  chartTakeaway: string
  chartLegendSales: string
  chartLegendBaseline: string
  chartLegendProfit: string
  chartUnit: string
  chartMonths: string[]
  chartOutcomes: Array<{ value: string; label: string; hint: string }>
  chartNote: string
  salesLeversTitle: string
  salesLevers: Array<{ title: string; desc: string }>
  galleryTag: string
  galleryTitle: string
  galleryDescription: string
  shots: VeloraShot[]
  modulesTag: string
  modulesTitle: string
  modulesDescription: string
  modules: VeloraModule[]
  highlightsTag: string
  highlightsTitle: string
  highlights: Array<{ label: string; desc: string }>
  rolesTag: string
  rolesTitle: string
  rolesDescription: string
  roles: Array<{ name: string; desc: string }>
  platformTag: string
  platformTitle: string
  platformDescription: string
  platformItems: string[]
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
}

/**
 * Illustrative monthly figures for a mid-size trading business (million toman).
 * Month 1 ≈ go-live; shows ops lift after consolidating sales, stock, and cashflow
 * in Velora vs continuing without an integrated system.
 */
export const VELORA_SALES_SERIES = {
  salesWith: [820, 910, 1040, 1190, 1330, 1520],
  salesWithout: [820, 835, 850, 865, 880, 900],
  profitWith: [98, 122, 152, 188, 225, 275],
  profitWithout: [98, 100, 102, 104, 106, 108],
}

export const veloraData: Record<Locale, VeloraPageContent> = {
  fa: {
    tag: "محصول راجیمو",
    brand: "VELORA",
    heroTitle: "کسب‌وکارتان را\nیک‌جا ببینید",
    heroDescription:
      "ولورا سیستم مدیریت کسب‌وکار است: فروش، خرید، انبار، مالی و گزارش — با هوش مصنوعی روی داده واقعی خودتان.",
    backHome: "بازگشت به صفحه اصلی",
    ctaDemo: "درخواست دمو",
    ctaContact: "مشاوره",
    liveLabel: "ورود به پنل",
    overviewTitle: "برای چه کسی ساخته شده؟",
    overview: [
      "اگر فروش دارید، انبار می‌چرخد، و طلب و بدهی‌تان پراکنده است، ولورا همان جریان را در یک پنل جمع می‌کند.",
      "برای یک شعبه یا چند سازمان جدا: هر کدام داده، نقش و فاکتور برندشدهٔ خودش را دارد.",
      "تیم فروش، انبار و حسابداری با دسترسی مشخص کار می‌کنند — بدون اکسل موازی و حدس روزانه.",
    ],
    salesTag: "فروش و سود",
    salesTitle: "وقتی عددها روشن باشد\nتصمیم هم روشن است",
    salesDescription:
      "الگوی زیر برای یک کسب‌وکار متوسط است: فروش ماهانه و سود تخمینی از ماه شروع تا ماه ششم — با ولورا در برابر ادامه کار بدون سیستم یکپارچه.",
    salesMetrics: [
      { value: "+۸۵٪", label: "رشد فروش ماهانه", hint: "از ماه اول تا ماه ششم" },
      { value: "+۲٫۸×", label: "سود تخمینی", hint: "همان دوره، با دید سود روی فاکتور" },
      { value: "+۶۲۰M", label: "فروش اضافه در ماه ۶", hint: "میلیون تومان نسبت به مسیر بدون ولورا" },
      { value: "−۳۵٪", label: "کمبود موجودی", hint: "هشدار قبل از از دست رفتن سفارش" },
    ],
    chartTitle: "روند فروش و سود",
    chartSubtitle: "فروش ماهانه در ۶ ماه اول — خط پررنگ با ولورا، خط چین بدون سیستم یکپارچه.",
    chartTakeaway:
      "در ماه ششم، فروش با ولورا حدود ۶۲۰ میلیون تومان بیشتر از مسیر بدون سیستم است؛ سود تخمینی هم تقریباً ۲٫۸ برابر می‌شود.",
    chartLegendSales: "با ولورا",
    chartLegendBaseline: "بدون ولورا",
    chartLegendProfit: "سود تخمینی با ولورا",
    chartUnit: "میلیون تومان",
    chartMonths: ["ماه ۱", "ماه ۲", "ماه ۳", "ماه ۴", "ماه ۵", "ماه ۶"],
    chartOutcomes: [
      {
        value: "+۸۵٪",
        label: "رشد فروش",
        hint: "از ۸۲۰ به ۱٬۵۲۰ میلیون تومان در ماه ششم",
      },
      {
        value: "۲٫۸×",
        label: "رشد سود تخمینی",
        hint: "از ۹۸ به ۲۷۵ میلیون تومان در همان دوره",
      },
    ],
    chartNote: "نمونهٔ ساده برای فهم روند؛ عدد واقعی هر کسب‌وکار فرق دارد.",
    salesLeversTitle: "چرا فروش و سود جلو می‌افتد",
    salesLevers: [
      {
        title: "وضعیت امروز، بدون تأخیر",
        desc: "فروش، سود تخمینی و فاکتورهای باز روی داشبورد — نه فردا در اکسل.",
      },
      {
        title: "موجودی هماهنگ با فروش",
        desc: "رزرو و هشدار کمبود، جلوی فروش کالای ناموجود را می‌گیرد.",
      },
      {
        title: "پیشنهاد از روی داده خودتان",
        desc: "هوش مصنوعی روی فروش، مشتری و وصول کار می‌کند — نه شعار کلی.",
      },
      {
        title: "هر نفر، محدودهٔ خودش",
        desc: "فروشنده، انباردار و حسابدار فقط همان‌قدر می‌بینند که لازم است.",
      },
    ],
    galleryTag: "داخل محصول",
    galleryTitle: "همان پنلی که تیم\nهر روز با آن کار می‌کند",
    galleryDescription: "داشبورد، انبار، هوش مصنوعی و نمای کامل — بدون برش و بدون تزئین اضافه.",
    shots: [
      {
        src: "/images/products/velora/hero.jpg",
        alt: "داشبورد امروز ولورا",
        caption: "داشبورد امروز — فروش، سود و روند هفتگی",
      },
      {
        src: "/images/projects/velora.png",
        alt: "داشبورد فروش ولورا",
        caption: "فروش خالص، سود تخمینی و کالاهای پرفروش",
      },
      {
        src: "/images/products/velora/dashboard.jpg",
        alt: "داشبورد حرفه‌ای ولورا",
        caption: "نمای حرفه‌ای با شاخص‌ها و نمودار فروش و خرید",
      },
      {
        src: "/images/products/velora/ai.jpg",
        alt: "ماژول هوش مصنوعی ولورا",
        caption: "تحلیل فروش، مشتری و سود روی داده واقعی",
      },
      {
        src: "/images/products/velora/inventory.jpg",
        alt: "انبار ولورا",
        caption: "موجودی، ارزش انبار و نیاز به تأمین",
      },
    ],
    modulesTag: "امکانات",
    modulesTitle: "کار روزمره\nدر یک جا",
    modulesDescription: "از فاکتور تا انبار و گزارش — هر بخش با دسترسی جدا.",
    modules: [
      {
        title: "فروش و خرید",
        description: "چرخه سفارش با تخفیف، شماره سند مطمئن و خروجی PDF/Excel.",
        items: [
          "فاکتور فروش نقدی، اعتباری و ترکیبی",
          "فاکتور خرید و ورود انبار",
          "پیش‌فاکتور PDF",
          "مرجوعی با کنترل مانده",
          "ثبت سریع مشتری و تأمین‌کننده",
        ],
      },
      {
        title: "کالا و انبار",
        description: "کاتالوگ قابل تنظیم، موجودی زنده و بهای تمام‌شده.",
        items: [
          "مشخصات کالا متناسب با کسب‌وکار شما",
          "موجودی، رزرو و تاریخچه حرکات",
          "بهای تمام‌شده WAC / FIFO / LIFO",
          "هشدار کم‌موجودی و نیاز به تأمین",
          "بارکد، SKU و واحد اندازه‌گیری",
        ],
      },
      {
        title: "مشتری و تیم فروش",
        description: "طرف‌حساب‌ها و فروشنده‌ها در یک جریان.",
        items: [
          "کانال حضوری و آنلاین",
          "فروشنده مسئول روی مشتری و فاکتور",
          "گزارش عملکرد تیم فروش",
          "اطلاعات بانکی تأمین‌کننده",
          "مانده طلب و بدهی",
        ],
      },
      {
        title: "مالی و هزینه",
        description: "وصول، پرداخت، هزینه و دفتر یکپارچه.",
        items: [
          "دریافت و پرداخت چندروشه‌",
          "مانده اول دوره",
          "هزینه با پیوست و تأیید",
          "دسته‌بندی و گزارش هزینه",
          "دفتر پشت‌صحنه یکپارچه",
        ],
      },
      {
        title: "گزارش و هوش مصنوعی",
        description: "شاخص مدیریتی و تحلیل روی دادهٔ خودتان.",
        items: [
          "داشبورد ساده و حرفه‌ای",
          "گزارش فروش، خرید، انبار و کاربران",
          "خروجی Excel و تاریخ جلالی",
          "تحلیل AI روی گزارش‌ها",
          "آرشیو تحلیل‌ها",
        ],
      },
      {
        title: "عملیات و دسترسی",
        description: "یادآور، نقش‌ها و اتصال امن به بیرون.",
        items: [
          "یادآور طلب، خرید باز و موجودی",
          "نمای لیست و تقویم",
          "نقش آماده و سفارشی",
          "تم روشن/تاریک",
          "توکن API با همان مجوز پنل",
        ],
      },
    ],
    highlightsTag: "زیرساخت",
    highlightsTitle: "محکم برای رشد",
    highlights: [
      {
        label: "چندسازمانی",
        desc: "داده جدا، سقف کاربر و ماژول جدا برای هر سازمان",
      },
      {
        label: "فاکتور با برند شما",
        desc: "لوگو، تماس و بانک روی چاپ و PDF",
      },
      {
        label: "تقویم ایران",
        desc: "ساعت تهران و تاریخ جلالی در فرم‌های اصلی",
      },
      {
        label: "API",
        desc: "همان منطق پنل، با توکن امن برای اتصال سیستم‌های دیگر",
      },
      {
        label: "پشتیبان",
        desc: "بک‌آپ زمان‌بندی‌شده و مانیتورینگ سلامت سیستم",
      },
      {
        label: "استقرار",
        desc: "آماده اجرا با Docker و دیتابیس پایدار",
      },
    ],
    rolesTag: "دسترسی",
    rolesTitle: "هر نفر، همان‌قدر که باید ببیند",
    rolesDescription: "نقش‌ها از قبل آماده‌اند؛ می‌توانید نقش سفارشی هم بسازید.",
    roles: [
      { name: "مالک / نایب مالک", desc: "کنترل کامل سازمان" },
      { name: "حسابدار", desc: "مالی، طلب و بدهی، هزینه و گزارش" },
      { name: "ادمین فروش", desc: "فروش، مشتری، گزارش و AI" },
      { name: "انباردار", desc: "انبار، کالا، خرید و تأمین‌کننده" },
      { name: "اپراتور", desc: "فروش و مشتری روزمره" },
      { name: "نقش سفارشی", desc: "مجوز دقیق برای فرآیند شما" },
    ],
    platformTag: "پلتفرم",
    platformTitle: "برای چند کسب‌وکار، یک هسته",
    platformDescription: "اگر چند سازمان دارید، از یک لایه مرکزی مدیریت می‌شوند.",
    platformItems: [
      "ایجاد و تنظیم سازمان‌ها",
      "مانیتورینگ دیتابیس و کارهای پس‌زمینه",
      "بک‌آپ به FTP، تلگرام یا بله",
      "ورود پشتیبانی به حساب در صورت نیاز",
      "تنظیم قالب‌های تحلیل AI",
    ],
    ctaTitle: "ولورا را روی کار خودتان ببینید",
    ctaDescription: "یک جلسه کوتاه کافی است تا ببینید فروش، انبار و مالی‌تان چطور در یک پنل جمع می‌شود.",
    ctaButton: "شروع گفت‌وگو",
  },
  en: {
    tag: "A Rajimo product",
    brand: "VELORA",
    heroTitle: "See your business\nin one place",
    heroDescription:
      "Velora is a business management system for sales, purchasing, inventory, finance, and reporting — with AI on your real data.",
    backHome: "Back to home",
    ctaDemo: "Request a demo",
    ctaContact: "Talk to us",
    liveLabel: "Open the panel",
    overviewTitle: "Who it’s for",
    overview: [
      "If you sell, move stock, and juggle receivables, Velora puts that flow in one panel.",
      "One branch or many organizations — each with its own data, roles, and branded invoices.",
      "Sales, warehouse, and finance work with clear access — without parallel spreadsheets.",
    ],
    salesTag: "Sales & profit",
    salesTitle: "Clear numbers.\nClear decisions.",
    salesDescription:
      "The chart follows a mid-size trading business: monthly sales and estimated profit from go-live to month six — with Velora versus continuing without an integrated system.",
    salesMetrics: [
      { value: "+85%", label: "Monthly sales growth", hint: "From month one to month six" },
      { value: "+2.8×", label: "Estimated profit", hint: "Same period, with profit visible on invoices" },
      { value: "+620M", label: "Extra sales in month 6", hint: "Million toman vs. without Velora" },
      { value: "−35%", label: "Stock-outs", hint: "Alerts before orders are lost" },
    ],
    chartTitle: "Sales & profit trend",
    chartSubtitle: "Monthly sales over the first 6 months — solid line with Velora, dashed without an integrated system.",
    chartTakeaway:
      "By month six, sales with Velora are about 620 million toman higher than without a system — and estimated profit is roughly 2.8×.",
    chartLegendSales: "With Velora",
    chartLegendBaseline: "Without Velora",
    chartLegendProfit: "Estimated profit with Velora",
    chartUnit: "million toman",
    chartMonths: ["M1", "M2", "M3", "M4", "M5", "M6"],
    chartOutcomes: [
      {
        value: "+85%",
        label: "Sales growth",
        hint: "From 820 to 1,520 million toman by month six",
      },
      {
        value: "2.8×",
        label: "Estimated profit growth",
        hint: "From 98 to 275 million toman in the same period",
      },
    ],
    chartNote: "A simple example to show the trend — real numbers vary by business.",
    salesLeversTitle: "Why sales and profit move",
    salesLevers: [
      {
        title: "Today’s status, now",
        desc: "Sales, estimated profit, and open invoices on the dashboard — not tomorrow in Excel.",
      },
      {
        title: "Stock that matches sales",
        desc: "Reservations and low-stock alerts stop selling what you don’t have.",
      },
      {
        title: "Suggestions from your data",
        desc: "AI works on sales, customers, and collections — not generic slogans.",
      },
      {
        title: "Everyone sees what they need",
        desc: "Sellers, warehouse, and finance stay inside clear boundaries.",
      },
    ],
    galleryTag: "Inside the product",
    galleryTitle: "The panel your team\nopens every day",
    galleryDescription: "Dashboard, inventory, AI, and full-screen views — complete, not cropped.",
    shots: [
      {
        src: "/images/products/velora/hero.jpg",
        alt: "Velora today’s dashboard",
        caption: "Today’s dashboard — sales, profit, and weekly trend",
      },
      {
        src: "/images/projects/velora.png",
        alt: "Velora sales dashboard",
        caption: "Net sales, estimated profit, and top sellers",
      },
      {
        src: "/images/products/velora/dashboard.jpg",
        alt: "Velora professional dashboard",
        caption: "Professional view with KPIs and sales/purchase chart",
      },
      {
        src: "/images/products/velora/ai.jpg",
        alt: "Velora AI module",
        caption: "Sales, customer, and profit analysis on real data",
      },
      {
        src: "/images/products/velora/inventory.jpg",
        alt: "Velora inventory",
        caption: "Stock, inventory value, and replenishment needs",
      },
    ],
    modulesTag: "Capabilities",
    modulesTitle: "Daily work\nin one place",
    modulesDescription: "From invoices to inventory and reports — each area with its own access.",
    modules: [
      {
        title: "Sales & purchasing",
        description: "Order cycle with discounts, reliable document numbers, and PDF/Excel output.",
        items: [
          "Cash, credit, and mixed sales invoices",
          "Purchase invoices and stock inbound",
          "Proforma PDF",
          "Returns with remaining quantity checks",
          "Quick customer and supplier create",
        ],
      },
      {
        title: "Catalog & inventory",
        description: "Flexible product fields, live stock, and costing methods.",
        items: [
          "Product attributes that fit your business",
          "Stock, reservations, and movement history",
          "Costing: WAC / FIFO / LIFO",
          "Low-stock and replenishment alerts",
          "Barcode, SKU, and units of measure",
        ],
      },
      {
        title: "Customers & sales team",
        description: "Parties and sellers in one connected flow.",
        items: [
          "Offline and online channels",
          "Owner salesperson on customers and invoices",
          "Sales team performance reports",
          "Vendor banking details",
          "Receivable and payable balances",
        ],
      },
      {
        title: "Finance & expenses",
        description: "Collections, payments, expenses, and a unified ledger.",
        items: [
          "Multi-method receipts and payments",
          "Opening balances",
          "Expenses with attachments and approval",
          "Expense categories and reports",
          "Unified ledger behind the scenes",
        ],
      },
      {
        title: "Reports & AI",
        description: "Management metrics and analysis on your own data.",
        items: [
          "Simple and professional dashboards",
          "Sales, purchase, inventory, and user reports",
          "Excel export and Jalali dates",
          "AI analysis on reports",
          "Analysis archive",
        ],
      },
      {
        title: "Ops & access",
        description: "Reminders, roles, and secure external access.",
        items: [
          "Reminders for receivables, open purchases, and stock",
          "List and calendar views",
          "Ready-made and custom roles",
          "Light/dark theme",
          "API tokens with panel permissions",
        ],
      },
    ],
    highlightsTag: "Foundation",
    highlightsTitle: "Built to grow with you",
    highlights: [
      {
        label: "Multi-organization",
        desc: "Isolated data, user caps, and modules per organization",
      },
      {
        label: "Your brand on invoices",
        desc: "Logo, contact, and bank details on print and PDF",
      },
      {
        label: "Iran calendar",
        desc: "Tehran time and Jalali dates on key forms",
      },
      {
        label: "API",
        desc: "Same panel logic, secure tokens for other systems",
      },
      {
        label: "Backup",
        desc: "Scheduled backups and system health monitoring",
      },
      {
        label: "Deploy",
        desc: "Ready to run with Docker and persistent storage",
      },
    ],
    rolesTag: "Access",
    rolesTitle: "Everyone sees what they should",
    rolesDescription: "Roles are ready out of the box — or build a custom one.",
    roles: [
      { name: "Owner / Deputy owner", desc: "Full organization control" },
      { name: "Accountant", desc: "Finance, AR/AP, expenses, and reports" },
      { name: "Sales admin", desc: "Sales, customers, reports, and AI" },
      { name: "Warehouse admin", desc: "Inventory, products, purchasing, and vendors" },
      { name: "Operator", desc: "Day-to-day sales and customers" },
      { name: "Custom role", desc: "Exact permissions for your process" },
    ],
    platformTag: "Platform",
    platformTitle: "One core for many businesses",
    platformDescription: "If you run multiple organizations, they share one control layer.",
    platformItems: [
      "Create and configure organizations",
      "Monitor database and background jobs",
      "Backup to FTP, Telegram, or Bale",
      "Support login when needed",
      "Configure AI analysis templates",
    ],
    ctaTitle: "See Velora on your work",
    ctaDescription: "A short call is enough to see how sales, inventory, and finance sit in one panel.",
    ctaButton: "Start the conversation",
  },
}

import type { Locale } from "@/lib/content"

export const VELORA_LIVE_URL = "https://velora.rajimo.ir/"
export const VELORA_PATH = "/products/velora/"

export type VeloraModule = {
  title: string
  description: string
  items: string[]
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

export const veloraData: Record<Locale, VeloraPageContent> = {
  fa: {
    tag: "محصول راجیمو",
    brand: "VELORA",
    heroTitle: "ERP یکپارچه\nبرای عمده‌فروشی پوشاک",
    heroDescription:
      "ولورا سیستم مدیریت کسب‌وکار چندسازمانی است؛ از فروش و خرید تا انبار، مالی، گزارش و هوش مصنوعی — با تقویم جلالی، نقش‌های دقیق و API آماده یکپارچه‌سازی.",
    backHome: "بازگشت به صفحه اصلی",
    ctaDemo: "درخواست دمو",
    ctaContact: "مشاوره تخصصی",
    liveLabel: "ورود به پنل",
    overviewTitle: "چرا ولورا؟",
    overview: [
      "عمده‌فروشی پوشاک به کاتالوگ پیچیده، موجودی لحظه‌ای، فروش اعتباری و تسویه چندکاناله نیاز دارد. ولورا این جریان را در یک پنل یکپارچه پوشش می‌دهد.",
      "هر سازمان فضای داده جدا، سیاست ماژول، سقف کاربر و برندینگ اختصاصی روی فاکتور و PDF دارد — مناسب تیم‌هایی که چند شعبه یا چند برند را مدیریت می‌کنند.",
      "همان منطق کسب‌وکار از طریق REST API با توکن امن در دسترس است؛ پنل و API از یک هسته مشترک استفاده می‌کنند.",
    ],
    modulesTag: "ماژول‌ها",
    modulesTitle: "همه عملیات روزانه\nدر یک پلتفرم",
    modulesDescription:
      "از پیش‌نویس فاکتور تا گزارش سود تخمینی و تحلیل AI — هر بخش با مجوز جداگانه و نقش‌های سازمانی کنترل می‌شود.",
    modules: [
      {
        title: "فروش و خرید",
        description: "چرخه کامل سفارش با شماره اتمی سند، تخفیف خط و کل، و خروجی PDF/Excel.",
        items: [
          "فاکتور فروش با نقدی، اعتباری و ترکیبی",
          "فاکتور خرید و ورود انبار",
          "پیش‌فاکتور PDF بدون ثبت دیتابیس",
          "مرجوعی فروش و خرید با کنترل مانده",
          "ثبت سریع مشتری و تأمین‌کننده",
        ],
      },
      {
        title: "کاتالوگ و انبار",
        description: "کالای پوشاک با فیلدهای تخصصی و بهای تمام‌شده قابل تنظیم.",
        items: [
          "مدل، رنگ، سایز، برند، فصل و کالکشن",
          "موجودی، رزرو و تاریخچه حرکات",
          "بهای تمام‌شده WAC / FIFO / LIFO",
          "هشدار کم‌موجودی و نیاز به تأمین",
          "بارکد، SKU و واحد اندازه‌گیری",
        ],
      },
      {
        title: "طرف‌حساب و فروش",
        description: "مشتری، تأمین‌کننده و ادمین فروش در یک جریان متصل.",
        items: [
          "کانال حضوری و آنلاین",
          "فروشنده مسئول روی مشتری و فاکتور",
          "داشبورد عملکرد ادمین‌های فروش",
          "اطلاعات بانکی تأمین‌کننده",
          "مانده حساب برای طلب و بدهی",
        ],
      },
      {
        title: "مالی و هزینه",
        description: "طلب، بدهی، دفتر حساب و چرخه تأیید هزینه.",
        items: [
          "ثبت دریافت و پرداخت چندروشه‌",
          "مانده اول دوره",
          "هزینه با پیوست و workflow تأیید",
          "دسته‌بندی و گزارش هزینه",
          "Ledger پشت‌صحنه یکپارچه",
        ],
      },
      {
        title: "گزارش و هوش مصنوعی",
        description: "KPI مدیریتی، aging طلب/بدهی و تحلیل فارسی با AI.",
        items: [
          "داشبورد حرفه‌ای و ساده",
          "گزارش فروش، خرید، انبار و کاربران",
          "خروجی Excel و فیلتر جلالی",
          "تحلیل AI روی داده‌های گزارش",
          "آرشیو و سقف مصرف ماهانه tenant",
        ],
      },
      {
        title: "عملیات و حساب",
        description: "یادآور کسب‌وکار، نقش‌ها، PWA و توکن API.",
        items: [
          "یادآور طلب، خرید باز و موجودی",
          "نمای لیست و تقویم",
          "نقش سیستمی و سفارشی",
          "تم روشن/تاریک و تور راهنما",
          "توکن REST با مجوز پنل",
        ],
      },
    ],
    highlightsTag: "زیرساخت",
    highlightsTitle: "ساخته‌شده برای مقیاس سازمانی",
    highlights: [
      {
        label: "چندسازمانی",
        desc: "جداسازی داده، سقف کاربر/فاکتور و روشن‌خاموش ماژول per organization",
      },
      {
        label: "برندینگ فاکتور",
        desc: "لوگو، تماس و اطلاعات بانک روی چاپ HTML و PDF",
      },
      {
        label: "تقویم ایران",
        desc: "Timezone تهران و ورودی تاریخ جلالی در فرم‌های کلیدی",
      },
      {
        label: "API یکپارچه",
        desc: "Bearer token با همان permissions پنل — OpenAPI در /dev",
      },
      {
        label: "پشتیبان و مانیتورینگ",
        desc: "بک‌آپ زمان‌بندی‌شده، Hangfire و پنل پلتفرم برای Super Admin",
      },
      {
        label: "آماده استقرار",
        desc: "Docker Compose با SQL Server و حجم داده پایدار",
      },
    ],
    rolesTag: "دسترسی",
    rolesTitle: "نقش‌هایی که با تیم شما هم‌خوان است",
    rolesDescription:
      "هر کاربر فقط نقش‌های زیر‌دست خود را می‌تواند انتساب دهد؛ ماتریس مجوز ماژول‌به‌ماژول قابل تنظیم است.",
    roles: [
      { name: "مالک / نایب مالک", desc: "کنترل کامل یا نزدیک به کامل سازمان" },
      { name: "حسابدار", desc: "مالی، طلب و بدهی، هزینه، گزارش، فروش و خرید" },
      { name: "ادمین فروش", desc: "فروش، مشتری، گزارش، AI و یادآور" },
      { name: "انباردار", desc: "انبار، کالا، خرید و تأمین‌کننده" },
      { name: "اپراتور", desc: "عملیات پایه فروش و مشتری" },
      { name: "نقش سفارشی", desc: "تعریف مجوز دقیق برای فرآیند داخلی شما" },
    ],
    platformTag: "پلتفرم",
    platformTitle: "از سازمان تا عملیات پشتیبان",
    platformDescription:
      "لایه پلتفرم برای مدیریت چند tenant، سلامت سیستم و قالب‌های تحلیل AI طراحی شده است.",
    platformItems: [
      "ایجاد و سیاست‌گذاری سازمان‌ها",
      "مانیتورینگ دیتابیس، دیسک و Jobs",
      "بک‌آپ به FTP، تلگرام یا بله",
      "ورود به حساب (impersonation) برای پشتیبانی",
      "پرامپت‌های AI و واحد/دسته سیستمی",
    ],
    ctaTitle: "ولورا را برای کسب‌وکارتان ببینید",
    ctaDescription:
      "اگر عمده‌فروشی پوشاک یا توزیع چندشعبه دارید، یک جلسه کوتاه برای دمو و نیازسنجی کافی است.",
    ctaButton: "شروع گفت‌وگو",
  },
  en: {
    tag: "A Rajimo product",
    brand: "VELORA",
    heroTitle: "Integrated ERP\nfor apparel wholesale",
    heroDescription:
      "Velora is a multi-tenant business system covering sales, purchasing, inventory, finance, reporting, and AI — with Jalali calendar support, precise roles, and a production-ready API.",
    backHome: "Back to home",
    ctaDemo: "Request a demo",
    ctaContact: "Talk to us",
    liveLabel: "Open the panel",
    overviewTitle: "Why Velora?",
    overview: [
      "Apparel wholesale needs rich catalogs, live stock, open-account sales, and multi-channel settlement. Velora runs that flow in one panel.",
      "Each organization gets isolated data, module policy, user caps, and invoice branding on HTML/PDF — ideal for multi-branch or multi-brand teams.",
      "The same business logic is exposed through a REST API with secure tokens; panel and API share one core.",
    ],
    modulesTag: "Modules",
    modulesTitle: "Daily operations\nin one platform",
    modulesDescription:
      "From draft invoices to estimated profit reports and AI analysis — every area is gated by permissions and roles.",
    modules: [
      {
        title: "Sales & purchasing",
        description: "Full order cycle with atomic document numbers, line/order discounts, and PDF/Excel output.",
        items: [
          "Sales invoices: cash, credit, and mixed",
          "Purchase invoices and stock inbound",
          "Proforma PDF with no DB persistence",
          "Sales and purchase returns with remaining qty checks",
          "Quick customer and supplier create",
        ],
      },
      {
        title: "Catalog & inventory",
        description: "Apparel-ready product fields and configurable costing methods.",
        items: [
          "Model, color, size, brand, season, collection",
          "Stock, reservations, and movement history",
          "Costing: WAC / FIFO / LIFO",
          "Low-stock and replenishment alerts",
          "Barcode, SKU, and units of measure",
        ],
      },
      {
        title: "Parties & sales team",
        description: "Customers, vendors, and sales admins in one connected flow.",
        items: [
          "Offline and online channels",
          "Owner sales admin on customers and invoices",
          "Sales-admin performance dashboard",
          "Vendor banking details",
          "Account balances for AR/AP",
        ],
      },
      {
        title: "Finance & expenses",
        description: "Receivables, payables, ledger entries, and expense approval.",
        items: [
          "Multi-method receipt and payment recording",
          "Opening balances",
          "Expenses with attachments and approval workflow",
          "Expense categories and reports",
          "Unified ledger behind the scenes",
        ],
      },
      {
        title: "Reports & AI",
        description: "Management KPIs, AR/AP aging, and Persian AI analysis.",
        items: [
          "Professional and simple dashboards",
          "Sales, purchase, inventory, and user reports",
          "Excel export and Jalali date filters",
          "AI analysis on report data",
          "Archive and monthly tenant usage caps",
        ],
      },
      {
        title: "Ops & account",
        description: "Business reminders, roles, PWA, and API tokens.",
        items: [
          "Reminders for receivables, open purchases, and stock",
          "List and calendar views",
          "System and custom roles",
          "Light/dark theme and guided tour",
          "REST tokens with panel permissions",
        ],
      },
    ],
    highlightsTag: "Platform",
    highlightsTitle: "Built for organizational scale",
    highlights: [
      {
        label: "Multi-tenant",
        desc: "Data isolation, user/invoice caps, and per-organization module switches",
      },
      {
        label: "Invoice branding",
        desc: "Logo, contact, and bank details on HTML and PDF prints",
      },
      {
        label: "Iran calendar",
        desc: "Tehran timezone and Jalali inputs on key forms",
      },
      {
        label: "Unified API",
        desc: "Bearer tokens with panel permissions — OpenAPI at /dev",
      },
      {
        label: "Backup & monitoring",
        desc: "Scheduled backups, Hangfire, and a Super Admin platform panel",
      },
      {
        label: "Deploy-ready",
        desc: "Docker Compose with SQL Server and persistent data volumes",
      },
    ],
    rolesTag: "Access",
    rolesTitle: "Roles that match your team",
    rolesDescription:
      "Users can only assign subordinate roles. Module permission matrices are configurable per tenant.",
    roles: [
      { name: "Owner / Deputy owner", desc: "Full or near-full organization control" },
      { name: "Accountant", desc: "Finance, AR/AP, expenses, reports, sales and purchasing" },
      { name: "Sales admin", desc: "Sales, customers, reports, AI, and reminders" },
      { name: "Warehouse admin", desc: "Inventory, products, purchasing, and vendors" },
      { name: "Operator", desc: "Core sales and customer operations" },
      { name: "Custom role", desc: "Fine-grained permissions for your internal process" },
    ],
    platformTag: "Control plane",
    platformTitle: "From tenants to ops support",
    platformDescription:
      "The platform layer manages multi-tenant policy, system health, and AI prompt templates.",
    platformItems: [
      "Create and configure organizations",
      "Monitor database, disk, and background jobs",
      "Backup to FTP, Telegram, or Bale",
      "Impersonation for support workflows",
      "AI prompts and system units/categories",
    ],
    ctaTitle: "See Velora for your business",
    ctaDescription:
      "If you run apparel wholesale or multi-branch distribution, a short demo and discovery call is enough to start.",
    ctaButton: "Start the conversation",
  },
}

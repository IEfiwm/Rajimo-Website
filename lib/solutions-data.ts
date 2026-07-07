import type { Locale } from "./content"

export const SOLUTION_SLUGS = [
  "custom-software",
  "automation",
  "product-design",
  "ai",
] as const

export type SolutionSlug = (typeof SOLUTION_SLUGS)[number]

export type SolutionFeature = {
  title: string
  description: string
}

export type SolutionPage = {
  slug: SolutionSlug
  tag: string
  title: string
  shortDescription: string
  heroTitle: string
  heroDescription: string
  overview: string[]
  features: SolutionFeature[]
  useCases: string[]
  cta: {
    title: string
    description: string
    button: string
  }
}

export type SolutionsIndex = {
  tag: string
  title: string
  description: string
  backHome: string
  backToSolutions: string
  viewSolution: string
}

type SolutionsLocale = {
  index: SolutionsIndex
  pages: Record<SolutionSlug, SolutionPage>
}

export const solutionsData: Record<Locale, SolutionsLocale> = {
  fa: {
    index: {
      tag: "راهکارهای ما",
      title: "راهکارهای دیجیتال\nبرای رشد کسب‌وکار",
      description:
        "از توسعه نرم‌افزار اختصاصی تا اتوماسیون و هوش مصنوعی — راهکارهایی که با نیاز واقعی کسب‌وکار شما هم‌راستا هستند.",
      backHome: "بازگشت به صفحه اصلی",
      backToSolutions: "همه راهکارها",
      viewSolution: "مشاهده جزئیات",
    },
    pages: {
      "custom-software": {
        slug: "custom-software",
        tag: "توسعه اختصاصی",
        title: "توسعه نرم‌افزارهای اختصاصی",
        shortDescription:
          "طراحی و توسعه وب‌سایت‌ها، اپلیکیشن‌ها، پلتفرم‌های SaaS و سیستم‌های اختصاصی متناسب با نیاز کسب‌وکار شما.",
        heroTitle: "نرم‌افزاری که دقیقاً\nبرای کسب‌وکار شما ساخته می‌شود",
        heroDescription:
          "ما سیستم‌هایی می‌سازیم که با فرآیندهای واقعی شما هم‌خوان باشند — نه قالب‌های آماده‌ای که مجبور شوید خودتان را با آن‌ها تطبیق دهید.",
        overview: [
          "هر کسب‌وکاری نیازهای منحصربه‌فردی دارد. ما با شناخت عمیق از اهداف، چالش‌ها و فرآیندهای شما، راهکار نرم‌افزاری طراحی و پیاده‌سازی می‌کنیم.",
          "از پنل‌های مدیریتی و پلتفرم‌های SaaS تا اپلیکیشن‌های موبایل و وب‌سایت‌های سازمانی — با تمرکز بر مقیاس‌پذیری، امنیت و تجربه کاربری.",
        ],
        features: [
          {
            title: "تحلیل و طراحی معماری",
            description: "بررسی نیازها، طراحی معماری فنی و انتخاب فناوری‌های مناسب برای رشد بلندمدت.",
          },
          {
            title: "توسعه وب و موبایل",
            description: "پیاده‌سازی اپلیکیشن‌های وب، موبایل و API با کیفیت تولید و استانداردهای مدرن.",
          },
          {
            title: "پلتفرم‌های SaaS",
            description: "ساخت محصولات نرم‌افزاری چندمستاجری با مدیریت کاربر، اشتراک و صورتحساب.",
          },
          {
            title: "یکپارچه‌سازی سیستم‌ها",
            description: "اتصال نرم‌افزار جدید به سیستم‌های موجود، درگاه‌های پرداخت و سرویس‌های ثالث.",
          },
        ],
        useCases: [
          "سیستم‌های مدیریت داخلی و ERP",
          "پلتفرم‌های SaaS و محصولات دیجیتال",
          "اپلیکیشن‌های موبایل iOS و Android",
          "پورتال‌های سازمانی و مشتری",
        ],
        cta: {
          title: "پروژه بعدی شما\nاز کجا شروع می‌شود؟",
          description: "در یک جلسه آشنایی، نیازها و مسیر اجرا را بررسی می‌کنیم.",
          button: "شروع همکاری",
        },
      },
      automation: {
        slug: "automation",
        tag: "اتوماسیون",
        title: "اتوماسیون و هوشمندسازی",
        shortDescription: "کاهش فعالیت‌های تکراری و بهبود فرآیندهای داخلی با ابزارهای هوشمند.",
        heroTitle: "فرآیندهای تکراری را\nخودکار کنید",
        heroDescription:
          "زمانی که تیم شما روی کارهای دستی وقت می‌گذارد، رشد کند می‌شود. ما فرآیندها را هوشمند و خودکار می‌کنیم.",
        overview: [
          "اتوماسیون فقط جایگزین نیروی انسانی نیست — بلکه ابزاری برای آزاد کردن ظرفیت تیم و کاهش خطای انسانی است.",
          "از گردش کار داخلی و اعلان‌های خودکار تا یکپارچه‌سازی بین سیستم‌ها، راهکارهایی می‌سازیم که عملیات روزمره را ساده‌تر می‌کنند.",
        ],
        features: [
          {
            title: "خودکارسازی گردش کار",
            description: "طراحی و پیاده‌سازی workflowهای خودکار برای تأیید، اطلاع‌رسانی و پردازش داده.",
          },
          {
            title: "یکپارچه‌سازی API",
            description: "اتصال ابزارهای موجود — CRM، حسابداری، انبار و سایر سرویس‌ها — بدون ورود دستی داده.",
          },
          {
            title: "گزارش‌گیری خودکار",
            description: "تولید گزارش‌های دوره‌ای، داشبورد لحظه‌ای و هشدارهای هوشمند بر اساس داده‌های زنده.",
          },
          {
            title: "ربات‌ها و ابزارهای داخلی",
            description: "ساخت ربات‌های تلگرام، ابزارهای داخلی و اسکریپت‌های اختصاصی برای تیم عملیاتی.",
          },
        ],
        useCases: [
          "خودکارسازی فاکتور و حسابداری",
          "مدیریت موجودی و سفارشات",
          "اعلان و پیگیری مشتری",
          "گردش کار تأیید و منابع انسانی",
        ],
        cta: {
          title: "کدام فرآیند شما\nقابل خودکارسازی است؟",
          description: "با هم بررسی می‌کنیم کجا بیشترین صرفه‌جویی در زمان و هزینه ممکن است.",
          button: "درخواست مشاوره",
        },
      },
      "product-design": {
        slug: "product-design",
        tag: "طراحی محصول",
        title: "طراحی محصول دیجیتال",
        shortDescription: "طراحی تجربه‌های کاربری کاربردی و مقیاس‌پذیر برای کاربران و کسب‌وکار.",
        heroTitle: "محصولی که کاربران\nدوست دارند استفاده کنند",
        heroDescription:
          "طراحی محصول فقط ظاهر زیبا نیست — بلکه درک عمیق از کاربر، مسئله و مسیر تبدیل ایده به تجربه‌ای روان است.",
        overview: [
          "قبل از نوشتن یک خط کد، باید بدانیم چه مشکلی حل می‌کنیم و برای چه کسی. طراحی محصول در راجیمو با تحقیق، wireframe و prototype شروع می‌شود.",
          "خروجی ما طراحی‌هایی است که توسعه‌پذیر، قابل تست و هم‌راستا با اهداف کسب‌وکار هستند — نه فقط فایل‌های گرافیکی.",
        ],
        features: [
          {
            title: "تحقیق کاربر",
            description: "مصاحبه، تحلیل رقبا و شناخت pain pointهای واقعی کاربران هدف.",
          },
          {
            title: "UX و معماری اطلاعات",
            description: "طراحی جریان کاربری، ساختار منو و نقشه راه محصول برای تجربه‌ای شفاف.",
          },
          {
            title: "UI و Design System",
            description: "رابط بصری یکپارچه، کامپوننت‌های قابل استفاده مجدد و راهنمای طراحی برای تیم توسعه.",
          },
          {
            title: "Prototype و تست",
            description: "نمونه تعاملی برای اعتبارسنجی ایده قبل از سرمایه‌گذاری سنگین در توسعه.",
          },
        ],
        useCases: [
          "طراحی محصول جدید از صفر",
          "بازطراحی محصول موجود",
          "Design System سازمانی",
          "بهبود نرخ تبدیل و retention",
        ],
        cta: {
          title: "ایده محصول دارید؟\nبیایید شکلش دهیم",
          description: "از wireframe تا prototype آماده توسعه — در کنار شما هستیم.",
          button: "شروع همکاری",
        },
      },
      ai: {
        slug: "ai",
        tag: "هوش مصنوعی",
        title: "راهکارهای هوش مصنوعی",
        shortDescription: "تحلیل، تصمیم‌سازی، خودکارسازی فرآیندها و افزایش بهره‌وری.",
        heroTitle: "هوش مصنوعی\nدر خدمت تصمیم‌های بهتر",
        heroDescription:
          "AI ابزار جادویی نیست — اما وقتی در جای درست به کار برود، تحلیل، پیش‌بینی و خودکارسازی را به سطحی جدید می‌برد.",
        overview: [
          "ما راهکارهای هوش مصنوعی عملی و متناسب با داده و فرآیندهای شما طراحی می‌کنیم — نه پروژه‌های نمایشی که در عمل استفاده نمی‌شوند.",
          "از chatbot و دستیار هوشمند تا تحلیل داده و پیش‌بینی تقاضا، با تمرکز بر امنیت داده و یکپارچگی با سیستم‌های موجود.",
        ],
        features: [
          {
            title: "دستیار و Chatbot هوشمند",
            description: "ربات‌های گفتگو برای پشتیبانی مشتری، FAQ و راهنمایی داخلی تیم.",
          },
          {
            title: "تحلیل و پیش‌بینی داده",
            description: "استخراج insight از داده‌های عملیاتی، پیش‌بینی تقاضا و شناسایی الگوها.",
          },
          {
            title: "خودکارسازی هوشمند",
            description: "طبقه‌بندی خودکار، استخراج اطلاعات از اسناد و پردازش زبان طبیعی.",
          },
          {
            title: "یکپارچه‌سازی LLM",
            description: "اتصال مدل‌های زبانی به محصول و فرآیندهای شما با کنترل داده و هزینه.",
          },
        ],
        useCases: [
          "پشتیبانی مشتری هوشمند",
          "تحلیل بازخورد و نظرات",
          "خلاصه‌سازی و پردازش اسناد",
          "توصیه‌گر و شخصی‌سازی",
        ],
        cta: {
          title: "AI در کسب‌وکار شما\nکجا ارزش دارد؟",
          description: "با هم مشخص می‌کنیم کدام کاربرد هوش مصنوعی بیشترین بازده را دارد.",
          button: "درخواست جلسه",
        },
      },
    },
  },
  en: {
    index: {
      tag: "Our Solutions",
      title: "Digital Solutions\nfor Business Growth",
      description:
        "From custom software to automation and AI — solutions aligned with your real business needs.",
      backHome: "Back to home",
      backToSolutions: "All solutions",
      viewSolution: "View details",
    },
    pages: {
      "custom-software": {
        slug: "custom-software",
        tag: "Custom Development",
        title: "Custom Software Development",
        shortDescription:
          "Design and development of websites, applications, SaaS platforms, and custom systems tailored to your business needs.",
        heroTitle: "Software built\nexactly for your business",
        heroDescription:
          "We build systems that fit your real processes — not off-the-shelf templates you have to adapt to.",
        overview: [
          "Every business has unique needs. We design and implement software by deeply understanding your goals, challenges, and workflows.",
          "From admin panels and SaaS platforms to mobile apps and corporate websites — with a focus on scalability, security, and user experience.",
        ],
        features: [
          {
            title: "Analysis & Architecture",
            description: "Requirements review, technical architecture design, and technology choices for long-term growth.",
          },
          {
            title: "Web & Mobile Development",
            description: "Production-quality web apps, mobile apps, and APIs built with modern standards.",
          },
          {
            title: "SaaS Platforms",
            description: "Multi-tenant software products with user management, subscriptions, and billing.",
          },
          {
            title: "System Integration",
            description: "Connecting new software to existing systems, payment gateways, and third-party services.",
          },
        ],
        useCases: [
          "Internal management systems & ERP",
          "SaaS platforms & digital products",
          "iOS & Android mobile apps",
          "Corporate & customer portals",
        ],
        cta: {
          title: "Where does your\nnext project start?",
          description: "In an intro session, we review your needs and execution path.",
          button: "Start a project",
        },
      },
      automation: {
        slug: "automation",
        tag: "Automation",
        title: "Automation & Intelligence",
        shortDescription: "Reduce repetitive activities and improve internal processes with smart tools.",
        heroTitle: "Automate\nrepetitive processes",
        heroDescription:
          "When your team spends time on manual work, growth slows down. We make processes smarter and automated.",
        overview: [
          "Automation isn't just replacing people — it's freeing team capacity and reducing human error.",
          "From internal workflows and auto-notifications to cross-system integration, we build solutions that simplify daily operations.",
        ],
        features: [
          {
            title: "Workflow Automation",
            description: "Design and implement automated workflows for approvals, notifications, and data processing.",
          },
          {
            title: "API Integration",
            description: "Connect existing tools — CRM, accounting, inventory, and more — without manual data entry.",
          },
          {
            title: "Automated Reporting",
            description: "Periodic reports, real-time dashboards, and smart alerts based on live data.",
          },
          {
            title: "Bots & Internal Tools",
            description: "Telegram bots, internal tools, and custom scripts for operational teams.",
          },
        ],
        useCases: [
          "Invoice & accounting automation",
          "Inventory & order management",
          "Customer notifications & follow-up",
          "Approval & HR workflows",
        ],
        cta: {
          title: "Which process\ncan you automate?",
          description: "Together we'll find where the biggest time and cost savings are possible.",
          button: "Request a consultation",
        },
      },
      "product-design": {
        slug: "product-design",
        tag: "Product Design",
        title: "Digital Product Design",
        shortDescription: "Practical and scalable user experiences for users and business goals.",
        heroTitle: "Products users\nlove to use",
        heroDescription:
          "Product design isn't just pretty visuals — it's deep understanding of users, problems, and turning ideas into smooth experiences.",
        overview: [
          "Before writing a line of code, we need to know what problem we're solving and for whom. Product design at Rajimo starts with research, wireframes, and prototypes.",
          "Our output is designs that are developable, testable, and aligned with business goals — not just graphic files.",
        ],
        features: [
          {
            title: "User Research",
            description: "Interviews, competitor analysis, and understanding real pain points of target users.",
          },
          {
            title: "UX & Information Architecture",
            description: "User flows, menu structure, and product roadmap for a clear experience.",
          },
          {
            title: "UI & Design System",
            description: "Cohesive visual interface, reusable components, and design guidelines for dev teams.",
          },
          {
            title: "Prototype & Testing",
            description: "Interactive prototypes to validate ideas before heavy development investment.",
          },
        ],
        useCases: [
          "New product design from scratch",
          "Redesign of existing product",
          "Corporate design system",
          "Conversion & retention improvement",
        ],
        cta: {
          title: "Have a product idea?\nLet's shape it",
          description: "From wireframe to dev-ready prototype — we're with you.",
          button: "Start a project",
        },
      },
      ai: {
        slug: "ai",
        tag: "Artificial Intelligence",
        title: "AI Solutions",
        shortDescription: "Analysis, decision-making, process automation, and productivity enhancement.",
        heroTitle: "AI for\nbetter decisions",
        heroDescription:
          "AI isn't magic — but when applied in the right place, it elevates analysis, prediction, and automation to a new level.",
        overview: [
          "We design practical AI solutions aligned with your data and processes — not demo projects that never get used.",
          "From chatbots and smart assistants to data analysis and demand forecasting, with a focus on data security and existing system integration.",
        ],
        features: [
          {
            title: "Smart Assistant & Chatbot",
            description: "Conversational bots for customer support, FAQ, and internal team guidance.",
          },
          {
            title: "Data Analysis & Forecasting",
            description: "Extract insights from operational data, forecast demand, and identify patterns.",
          },
          {
            title: "Intelligent Automation",
            description: "Auto-classification, document information extraction, and natural language processing.",
          },
          {
            title: "LLM Integration",
            description: "Connect language models to your product and processes with data and cost control.",
          },
        ],
        useCases: [
          "Smart customer support",
          "Feedback & review analysis",
          "Document summarization & processing",
          "Recommenders & personalization",
        ],
        cta: {
          title: "Where does AI\ncreate value for you?",
          description: "Together we'll identify which AI use case delivers the highest return.",
          button: "Book a session",
        },
      },
    },
  },
}

export function getSolution(slug: string, locale: Locale): SolutionPage | null {
  if (!SOLUTION_SLUGS.includes(slug as SolutionSlug)) return null
  return solutionsData[locale].pages[slug as SolutionSlug]
}

export function getAllSolutions(locale: Locale): SolutionPage[] {
  return SOLUTION_SLUGS.map((slug) => solutionsData[locale].pages[slug])
}

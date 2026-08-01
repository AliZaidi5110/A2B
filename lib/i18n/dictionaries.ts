import type { Locale } from "./config";

export type Dictionary = typeof en;

const en = {
  meta: {
    homeTitle: "Luxury UK Chauffeur & Tours | A2B",
    homeDescription:
      "Book luxury Mercedes chauffeur and tour services across the UK with A2B. Call +44 7938 994070 or WeChat kp61pke.",
    fleetTitle: "Our Fleet",
    fleetDescription:
      "A2B fleet: Mercedes E-Class, Mercedes V-Class, Mercedes S-Class, and VIP corporate luxury vehicles available for clients across the UK.",
    servicesTitle: "Services",
    servicesDescription:
      "Airport transfers, business transport, city travel, chauffeur tours, and VIP corporate services from A2B Chauffeur Tour Services.",
    aboutTitle: "About Us",
    aboutDescription:
      "Learn about A2B Chauffeur Tour Services — trained UK chauffeurs, luxury Mercedes fleet, and bespoke VIP travel across the United Kingdom.",
    contactTitle: "Contact & Booking",
    contactDescription:
      "Contact A2B Chauffeur Tour Services. Call +44 7938 994070, WeChat kp61pke, or send an enquiry to book your luxury ride.",
  },
  nav: {
    home: "Home",
    fleet: "Fleet",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
  common: {
    brandSub: "Chauffeur Tours",
    bookNow: "Book Now",
    bookYourRide: "Book Your Ride",
    callAnytime: "Call Anytime",
    menu: "Menu",
    close: "Close",
    learnMore: "Learn More →",
    book: "Book →",
    fullFleet: "Full Fleet",
    viewFleet: "View Fleet",
    aboutA2b: "About A2B",
    contactUs: "Contact Us",
    requestQuote: "Request a Quote",
    wechat: "WeChat",
    wechatId: "WeChat ID",
    available: "Available",
    companyNo: "Company No.",
    rights: "All rights reserved.",
    language: "Language",
    english: "English",
    chinese: "中文",
  },
  header: {
    callLabel: "Call Anytime",
  },
  footer: {
    blurb:
      "Luxury chauffeur and tour services across the United Kingdom. Book your bespoke service today.",
    services: "Services",
    explore: "Explore",
    contact: "Contact",
  },
  hero: {
    eyebrow: "A2B Chauffeur Tour Services",
    tagline: "Book Your Luxury Chauffeur Across the UK",
    support:
      "Trained UK chauffeurs. Efficient routes. Luxury Mercedes and VIP vehicles — book by phone or WeChat anytime.",
    call: "Call",
    imageAlt: "Luxury chauffeur car ready for UK travel",
  },
  services: {
    eyebrow: "Our Services",
    title: "Trusted Chauffeur Solutions",
    intro:
      "From airport transfers to VIP corporate travel, A2B delivers polished luxury journeys across the United Kingdom.",
    items: [
      {
        id: "airport",
        title: "Airport Transfer",
        description:
          "Meet-and-greet and door-to-door transfers to and from major UK airports with tracked, efficient routing.",
        icon: "plane",
      },
      {
        id: "business",
        title: "Business Transport",
        description:
          "Punctual corporate chauffeur service for meetings, conferences, and executive travel schedules.",
        icon: "briefcase",
      },
      {
        id: "city",
        title: "City Transport",
        description:
          "Comfortable city-to-city and London travel with chauffeurs trained on UK roads and routes.",
        icon: "city",
      },
      {
        id: "tours",
        title: "Chauffeur Tours",
        description:
          "Bespoke sightseeing and tour itineraries tailored around your time, comfort, and destinations.",
        icon: "map",
      },
      {
        id: "online",
        title: "Easy Booking",
        description:
          "Order your luxury ride by phone, WeChat, or our online enquiry form — we respond quickly.",
        icon: "booking",
      },
      {
        id: "vip",
        title: "VIP Corporate",
        description:
          "Discreet VIP and corporate vehicle options for clients who expect polished, private service.",
        icon: "vip",
      },
    ],
    whyEyebrow: "Why choose A2B",
    whyTitle: "Efficient Routes. Polished Service.",
    whyBody:
      "We take the most efficient route and pair you with chauffeurs who know UK roads. Whether you need an airport transfer or a full-day tour, every journey is tailored.",
    whyImageAlt: "Chauffeur holding door for passenger",
    faqEyebrow: "FAQs",
    faqTitle: "Frequently Asked",
    pageTitle: "Our Services",
    pageSubtitle:
      "Bespoke chauffeur solutions for airports, business, city travel, and luxury tours.",
  },
  about: {
    eyebrow: "Welcome to our company",
    title: "Feel the Difference And Relaxation",
    body:
      "All of our drivers are very well trained and fully educated on United Kingdom roads to take the best route. We offer customized transportation solutions for businesses, tourists, and VIP clients of all sizes.",
    callForTaxi: "Call for Taxi",
    highlights: [
      "Fully trained chauffeurs educated on UK roads",
      "We take the most efficient route every journey",
      "Luxury Mercedes and VIP corporate vehicles",
      "24/7 booking for bespoke chauffeur service",
    ],
    imageAlt1: "Professional chauffeur service with luxury vehicle",
    imageAlt2: "Comfortable luxury interior for passengers",
    pageTitle: "About A2B",
    pageSubtitle:
      "Luxury chauffeur and tour services built around comfort, punctuality, and the most efficient routes.",
    storyEyebrow: "Our story",
    storyTitle: "A2B Chauffeur Tour Services",
    storyP1:
      "Based in London and serving clients across the United Kingdom, A2B provides bespoke chauffeur travel for business, leisure, and VIP itineraries. Our drivers are very well trained and fully educated on UK roads so every journey is efficient and stress-free.",
    storyP2:
      "Order your luxury ride by phone or WeChat — we are available 24/7 to book your bespoke service today.",
    office: "Registered Office",
    company: "Company",
    bookNow: "Book Now",
    country: "United Kingdom",
  },
  fleet: {
    eyebrow: "Select a plan that suits",
    title: "Choose Your Ride",
    intro:
      "Vehicles available for clients — Mercedes sedans, luxury MPVs, and VIP corporate options.",
    pageTitle: "Our Fleet",
    pageSubtitle:
      "Following are the vehicles available for clients — luxury Mercedes and VIP corporate options.",
    ctaTitle: "Ready to book your vehicle?",
    ctaBody: "Call 24/7 or send an enquiry online.",
    vehicles: [
      {
        id: "mercedes-e-class",
        name: "Mercedes E-Class",
        category: "Sedan",
        description:
          "Executive sedan comfort for airport transfers, city travel, and discreet business journeys across the UK.",
        features: ["Executive seating", "Climate control", "Airport transfers", "Business travel"],
        passengers: "Up to 3 passengers",
      },
      {
        id: "mercedes-v-class",
        name: "Mercedes V-Class",
        category: "Luxury MPV",
        description:
          "Spacious luxury MPV ideal for families, groups, and clients who need extra room without sacrificing comfort.",
        features: ["Spacious cabin", "Group travel", "Luggage friendly", "Tour ready"],
        passengers: "Up to 6 passengers",
      },
      {
        id: "mercedes-s-class",
        name: "Mercedes S-Class",
        category: "Luxury SUV / Saloon",
        description:
          "Flagship Mercedes luxury for VIP clients seeking the smoothest ride and premium presence.",
        features: ["Flagship luxury", "VIP transfers", "Quiet cabin", "Premium finish"],
        passengers: "Up to 3 passengers",
      },
      {
        id: "vip-corporate",
        name: "VIP Corporate",
        category: "Luxury Corporate",
        description:
          "Bespoke corporate and VIP vehicles for executives, events, and high-profile itineraries.",
        features: ["Corporate events", "Executive protocol", "Discreet service", "Flexible itineraries"],
        passengers: "Configurable",
      },
    ],
  },
  booking: {
    eyebrow: "Book Your Taxi Ride",
    title: "Order Your Luxury Ride Now",
    body:
      "To get the ride of your chauffeur please select from the following and leave your details. We take the most efficient route.",
    firstName: "First name *",
    lastName: "Last name *",
    email: "Email *",
    phone: "Phone",
    vehicle: "Choose vehicle",
    selectVehicle: "Select taxi type",
    message: "Message *",
    messagePlaceholder: "Leave us a message...",
    submit: "Submit Enquiry",
    sending: "Sending...",
    success: "Thank you. We received your enquiry and will respond shortly.",
    error: "Something went wrong.",
    prefer:
      "Prefer instant booking? Call {phone} or WeChat {wechat}.",
  },
  drivers: {
    eyebrow: "Our Expert Drivers",
    title: "Meet Our Chauffeurs",
    body:
      "All of our drivers are very well trained and fully educated on United Kingdom roads to take the best route.",
    items: [
      { name: "Professional Chauffeur", role: "UK Routes Specialist" },
      { name: "Executive Driver", role: "Airport & Business" },
      { name: "Tour Chauffeur", role: "Bespoke Itineraries" },
    ],
  },
  stats: {
    items: [
      { label: "Luxury Vehicles", value: "4+" },
      { label: "Coverage", value: "UK-Wide" },
      { label: "Availability", value: "24/7" },
      { label: "Booking Channels", value: "Phone & WeChat" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Client's Reviews",
    items: [
      {
        name: "John Jue",
        role: "Client",
        quote:
          "Professional chauffeurs who know the UK roads inside out. Every transfer felt smooth, efficient, and genuinely premium.",
      },
      {
        name: "Eloise Smith",
        role: "Client",
        quote:
          "From booking on WeChat to arrival, A2B made luxury travel simple. Punctual, courteous, and perfectly organised.",
      },
    ],
  },
  faqs: [
    {
      q: "How do I book a chauffeur?",
      a: "Call +44 7938 994070, message us on WeChat (kp61pke), or send an enquiry through the contact form.",
    },
    {
      q: "Which vehicles are available?",
      a: "Our fleet includes Mercedes E-Class, Mercedes V-Class, Mercedes S-Class, and VIP corporate vehicles.",
    },
    {
      q: "Do you cover the whole United Kingdom?",
      a: "Yes. Our chauffeurs are trained on UK roads and plan the most efficient routes for your journey.",
    },
    {
      q: "Is the service available 24/7?",
      a: "Yes. Call us anytime to book your bespoke chauffeur or tour service.",
    },
  ],
  contact: {
    pageTitle: "Contact Us",
    pageSubtitle:
      "To make an order: call us, message on WeChat, or leave a message below.",
    callUs: "Call Us 24/7",
    office: "Office",
    formTitle: "Send Message",
    formIntro: "Order your luxury ride now — we will confirm your enquiry promptly.",
    openingHours: "Opening Hours:",
    hoursValue: "24/7",
    hoursBody:
      "Our chauffeurs are available around the clock across the United Kingdom. Call, WeChat, or send a message — we take the most efficient route for every journey.",
    social: "Social:",
    getTaxiOnline: "Book Online",
    yourName: "Your Name *",
    yourEmail: "Your Email *",
    yourMessage: "Message *",
    send: "Send Message",
    mapTitle: "Find Us in London",
  },
  pageHero: {
    eyebrow: "A2B Chauffeur Tours",
  },
};

const zh: Dictionary = {
  meta: {
    homeTitle: "英国豪华专车与旅游 | A2B",
    homeDescription:
      "A2B提供英国全境豪华奔驰专车与旅游服务。电话 +44 7938 994070，微信 kp61pke。",
    fleetTitle: "车队介绍",
    fleetDescription:
      "A2B车队：奔驰E级、奔驰V级、奔驰S级及VIP商务豪华车辆，服务英国全境客户。",
    servicesTitle: "服务项目",
    servicesDescription:
      "机场接送、商务用车、城市交通、专车观光及VIP商务服务 — A2B专车旅游服务。",
    aboutTitle: "关于我们",
    aboutDescription:
      "了解A2B专车旅游服务 — 训练有素的英国司机、豪华奔驰车队与定制VIP出行。",
    contactTitle: "联系与预订",
    contactDescription:
      "联系A2B专车旅游服务。电话 +44 7938 994070，微信 kp61pke，或提交在线咨询预订豪华专车。",
  },
  nav: {
    home: "首页",
    fleet: "车队",
    services: "服务",
    about: "关于",
    contact: "联系",
  },
  common: {
    brandSub: "专车旅游",
    bookNow: "立即预订",
    bookYourRide: "预订专车",
    callAnytime: "随时致电",
    menu: "菜单",
    close: "关闭",
    learnMore: "了解更多 →",
    book: "预订 →",
    fullFleet: "全部车型",
    viewFleet: "查看车队",
    aboutA2b: "关于 A2B",
    contactUs: "联系我们",
    requestQuote: "获取报价",
    wechat: "微信",
    wechatId: "微信号",
    available: "服务时间",
    companyNo: "公司编号",
    rights: "版权所有。",
    language: "语言",
    english: "English",
    chinese: "中文",
  },
  header: {
    callLabel: "随时致电",
  },
  footer: {
    blurb: "英国全境豪华专车与旅游服务。立即预订您的定制出行。",
    services: "服务",
    explore: "导航",
    contact: "联系",
  },
  hero: {
    eyebrow: "A2B 专车旅游服务",
    tagline: "预订英国豪华专车出行",
    support: "训练有素的英国司机，高效路线，豪华奔驰与VIP车辆 — 电话或微信随时预订。",
    call: "致电",
    imageAlt: "英国豪华专车出行",
  },
  services: {
    eyebrow: "我们的服务",
    title: "值得信赖的专车方案",
    intro: "从机场接送到VIP商务出行，A2B为您提供精致豪华的英国全境旅程。",
    items: [
      {
        id: "airport",
        title: "机场接送",
        description: "主要英国机场举牌接机与点对点接送，路线高效可靠。",
        icon: "plane",
      },
      {
        id: "business",
        title: "商务用车",
        description: "准时的企业专车服务，适合会议、会展与高管行程。",
        icon: "briefcase",
      },
      {
        id: "city",
        title: "城市交通",
        description: "舒适的城际与伦敦出行，司机熟悉英国道路与路线。",
        icon: "city",
      },
      {
        id: "tours",
        title: "专车观光",
        description: "根据您的时间、舒适度与目的地定制观光行程。",
        icon: "map",
      },
      {
        id: "online",
        title: "便捷预订",
        description: "可通过电话、微信或在线表单预订豪华专车，我们快速回复。",
        icon: "booking",
      },
      {
        id: "vip",
        title: "VIP商务",
        description: "为追求私密精致服务的客户提供VIP与商务车辆选择。",
        icon: "vip",
      },
    ],
    whyEyebrow: "为什么选择 A2B",
    whyTitle: "高效路线 · 精致服务",
    whyBody:
      "我们选择最高效的路线，并为您配备熟悉英国道路的专车司机。无论机场接送还是全日观光，每段行程都为您量身定制。",
    whyImageAlt: "司机为乘客开门服务",
    faqEyebrow: "常见问题",
    faqTitle: "常见疑问",
    pageTitle: "我们的服务",
    pageSubtitle: "机场、商务、城市交通与豪华观光的定制专车方案。",
  },
  about: {
    eyebrow: "欢迎了解我们",
    title: "感受不同 · 享受从容",
    body:
      "我们的司机训练有素，熟悉英国道路，始终选择最佳路线。我们为企业、游客与VIP客户提供定制交通方案。",
    callForTaxi: "呼叫专车",
    highlights: [
      "训练有素、熟悉英国道路的专车司机",
      "每次出行都选择最高效路线",
      "豪华奔驰与VIP商务车辆",
      "全天候定制专车预订服务",
    ],
    imageAlt1: "专业豪华专车服务",
    imageAlt2: "舒适豪华车内空间",
    pageTitle: "关于 A2B",
    pageSubtitle: "以舒适、准时与高效路线为核心的豪华专车与旅游服务。",
    storyEyebrow: "我们的故事",
    storyTitle: "A2B 专车旅游服务",
    storyP1:
      "A2B总部位于伦敦，服务英国全境客户，提供商务、休闲与VIP定制专车出行。我们的司机训练有素、熟悉英国道路，让每一次旅程高效无忧。",
    storyP2: "通过电话或微信预订豪华专车 — 我们全天候为您安排定制服务。",
    office: "注册地址",
    company: "公司信息",
    bookNow: "立即预订",
    country: "英国",
  },
  fleet: {
    eyebrow: "选择适合您的车型",
    title: "选择您的专车",
    intro: "为客户提供的车辆 — 奔驰轿车、豪华MPV与VIP商务车型。",
    pageTitle: "我们的车队",
    pageSubtitle: "以下为客户可选车辆 — 豪华奔驰与VIP商务选项。",
    ctaTitle: "准备好预订车辆了吗？",
    ctaBody: "全天候致电，或在线提交咨询。",
    vehicles: [
      {
        id: "mercedes-e-class",
        name: "奔驰 E级",
        category: "轿车",
        description: "行政级轿车舒适体验，适合机场接送、城市出行与低调商务行程。",
        features: ["行政座椅", "恒温空调", "机场接送", "商务出行"],
        passengers: "最多3位乘客",
      },
      {
        id: "mercedes-v-class",
        name: "奔驰 V级",
        category: "豪华MPV",
        description: "宽敞豪华MPV，适合家庭、团体及需要更大空间的客户。",
        features: ["宽敞空间", "团体出行", "行李友好", "适合观光"],
        passengers: "最多6位乘客",
      },
      {
        id: "mercedes-s-class",
        name: "奔驰 S级",
        category: "豪华轿车",
        description: "旗舰奔驰豪华体验，适合追求极致平稳与尊贵形象的VIP客户。",
        features: ["旗舰豪华", "VIP接送", "静谧座舱", "顶级内饰"],
        passengers: "最多3位乘客",
      },
      {
        id: "vip-corporate",
        name: "VIP商务车",
        category: "豪华商务",
        description: "为高管、活动与高规格行程定制的VIP商务车辆。",
        features: ["商务活动", "高管礼仪", "私密服务", "灵活行程"],
        passengers: "可灵活配置",
      },
    ],
  },
  booking: {
    eyebrow: "预订专车",
    title: "立即预订豪华专车",
    body: "请选择车型并留下您的信息。我们将为您选择最高效的路线。",
    firstName: "名 *",
    lastName: "姓 *",
    email: "邮箱 *",
    phone: "电话",
    vehicle: "选择车型",
    selectVehicle: "请选择车型",
    message: "留言 *",
    messagePlaceholder: "请留言告诉我们您的需求...",
    submit: "提交咨询",
    sending: "提交中...",
    success: "感谢您。我们已收到咨询，将尽快回复。",
    error: "提交失败，请稍后重试。",
    prefer: "需要即时预订？请致电 {phone} 或微信 {wechat}。",
  },
  drivers: {
    eyebrow: "专业司机团队",
    title: "认识我们的司机",
    body: "我们的司机训练有素，熟悉英国道路，始终为您选择最佳路线。",
    items: [
      { name: "专业专车司机", role: "英国路线专家" },
      { name: "行政司机", role: "机场与商务" },
      { name: "观光专车司机", role: "定制行程" },
    ],
  },
  stats: {
    items: [
      { label: "豪华车辆", value: "4+" },
      { label: "服务范围", value: "英国全境" },
      { label: "服务时间", value: "全天候" },
      { label: "预订方式", value: "电话与微信" },
    ],
  },
  testimonials: {
    eyebrow: "客户评价",
    title: "客户反馈",
    items: [
      {
        name: "John Jue",
        role: "客户",
        quote: "司机非常专业，对英国道路了如指掌。每次接送都顺畅高效，体验真正高端。",
      },
      {
        name: "Eloise Smith",
        role: "客户",
        quote: "从微信预订到上车，A2B让豪华出行变得简单。准时、礼貌、安排周到。",
      },
    ],
  },
  faqs: [
    {
      q: "如何预订专车？",
      a: "请致电 +44 7938 994070，微信联系 kp61pke，或通过网站表单提交咨询。",
    },
    {
      q: "有哪些可用车辆？",
      a: "我们的车队包括奔驰E级、奔驰V级、奔驰S级以及VIP商务车辆。",
    },
    {
      q: "是否覆盖整个英国？",
      a: "是的。我们的司机熟悉英国道路，并为您规划最高效的路线。",
    },
    {
      q: "是否提供全天候服务？",
      a: "是的。您可随时致电预订定制专车或旅游服务。",
    },
  ],
  contact: {
    pageTitle: "联系我们",
    pageSubtitle: "预订方式：致电、微信联系，或在下方留言。",
    callUs: "全天候致电",
    office: "办公地址",
    formTitle: "发送留言",
    formIntro: "立即预订豪华专车 — 我们会尽快确认您的咨询。",
    openingHours: "营业时间：",
    hoursValue: "全天候",
    hoursBody:
      "我们的专车司机全天候服务英国全境。可电话、微信或留言联系 — 每次出行我们都会选择最高效的路线。",
    social: "社交：",
    getTaxiOnline: "在线预订",
    yourName: "您的姓名 *",
    yourEmail: "您的邮箱 *",
    yourMessage: "留言 *",
    send: "发送留言",
    mapTitle: "伦敦办公地址",
  },
  pageHero: {
    eyebrow: "A2B 专车旅游",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

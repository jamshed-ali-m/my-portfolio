export const nav = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#automation-lab" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const services = [
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Automate repetitive business processes using AI, APIs, and workflow automation.",
    tech: ["n8n", "LLMs", "APIs", "Webhooks"],
  },
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    description:
      "Business, e-commerce, portfolio, real estate, healthcare, booking, and SaaS websites built modern, fast, and scalable — end to end.",
    tech: [
      "Business Websites",
      "Real Estate Portals",
      "Healthcare Platforms",
      "Booking Systems",
      "SaaS Dashboards",
      "Landing Pages",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    description:
      "Launch and scale online stores on Shopify, WooCommerce, Amazon, and eBay — from storefront setup to catalog, payments, and order automation.",
    tech: ["Shopify", "Amazon Seller Central", "eBay Store", "WooCommerce", "Stripe", "PayPal"],
  },
  {
    id: "ai-assistants",
    title: "AI Assistants & Chatbots",
    description:
      "Create AI assistants that understand business information and help customers or teams around the clock.",
    tech: ["LLMs", "RAG", "APIs", "Knowledge Bases"],
  },
  {
    id: "process-automation",
    title: "Business Process Automation",
    description: "Connect tools and systems to eliminate repetitive manual work.",
    tech: ["n8n", "REST APIs", "Webhooks", "Databases"],
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      "Build secure and reliable APIs that connect applications, databases, and external services.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "Prisma"],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Integrate AI capabilities into existing applications and business workflows.",
    tech: ["LLMs", "AI APIs", "Prompt Engineering", "RAG"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps built with React Native, sharing code with your web platform to ship faster.",
    tech: ["React Native", "Expo", "Push Notifications", "App Store Deployment"],
  },
  {
    id: "ui-ux",
    title: "UI/UX & Landing Page Design",
    description:
      "Conversion-focused interfaces and landing pages designed for European and US markets, built to look premium and load fast.",
    tech: ["Figma", "Responsive Design", "Design Systems", "A/B Ready"],
  },
  {
    id: "maintenance",
    title: "Website Care & Support Plans",
    description:
      "Ongoing updates, monitoring, backups, and priority support after launch, so your site keeps performing without surprises.",
    tech: ["Monitoring", "Backups", "Security Patches", "Performance Tuning"],
  },
];

export const websiteTypes = [
  {
    id: "business",
    title: "Business & Corporate",
    description: "Professional company websites that build trust and generate leads.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    description: "Shopify, WooCommerce, Amazon and eBay storefronts built to convert.",
  },
  {
    id: "real-estate",
    title: "Real Estate Platforms",
    description: "Property listing portals with search, filters, and agent dashboards.",
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    description: "Appointment booking, patient intake, and clinic information systems.",
  },
  {
    id: "booking",
    title: "Booking & Reservations",
    description: "Real-time scheduling for salons, consultants, rentals, and services.",
  },
  {
    id: "nonprofit",
    title: "Non-Profit & Volunteer",
    description: "Donation platforms and volunteer sign-up sites for charities and NGOs.",
  },
  {
    id: "restaurant",
    title: "Restaurant & Food Ordering",
    description: "Menus, online ordering, and table reservations for food businesses.",
  },
  {
    id: "education",
    title: "Education & E-Learning",
    description: "Course platforms, student portals, and learning management systems.",
  },
  {
    id: "saas",
    title: "SaaS & Web Apps",
    description: "Multi-tenant dashboards, admin panels, and subscription-based products.",
  },
  {
    id: "portfolio",
    title: "Portfolio & Personal Brand",
    description: "Personal sites for freelancers, creators, agencies, and consultants.",
  },
  {
    id: "blog",
    title: "Blogs & News/Magazine",
    description: "Content-first sites optimized for publishing speed and SEO.",
  },
  {
    id: "landing",
    title: "Landing Pages & Micro-sites",
    description: "High-converting single pages for campaigns, launches, and ads.",
  },
];

export const beforeSteps = [
  "Customer Email",
  "Employee Reads",
  "Searches Database",
  "Copies Information",
  "Writes Response",
  "Updates Spreadsheet",
];

export const afterSteps = [
  "Customer Email",
  "AI",
  "Understand Request",
  "API / Database",
  "Generate Response",
  "Update CRM",
];

export const automationLabNodes = [
  {
    id: "lead",
    title: "Lead",
    detail:
      "A new lead arrives from a form, email, or ad — the starting signal for the workflow.",
  },
  {
    id: "ai-analysis",
    title: "AI Analysis",
    detail:
      "AI analyzes the incoming information and identifies intent, potential needs, and useful context.",
  },
  {
    id: "lead-score",
    title: "Lead Score",
    detail:
      "The lead is scored based on fit and intent signals, so follow-up effort matches opportunity.",
  },
  {
    id: "personalized-message",
    title: "Personalized Message",
    detail:
      "A tailored message is generated using the lead's context instead of a generic template.",
  },
  {
    id: "crm",
    title: "CRM",
    detail:
      "The lead, score, and message are logged into the CRM automatically — no manual data entry.",
  },
  {
    id: "follow-up",
    title: "Follow-up",
    detail:
      "A follow-up sequence is scheduled or triggered based on the lead's response and score.",
  },
];

export const projects = [
  {
    id: "ai-lead-gen",
    title: "AI Lead Generation & Outreach",
    problem:
      "Manually qualifying leads and writing outreach messages doesn't scale as inbound volume grows.",
    solution:
      "An AI-powered workflow that qualifies leads, generates personalized outreach, manages follow-ups, and classifies replies.",
    stack: ["n8n", "LLM", "Gmail", "Google Sheets", "APIs"],
    workflow: ["New Lead", "AI Qualification", "Personalized Outreach", "Reply Classification", "Follow-up"],
    link: "#",
  },
  {
    id: "inventory-api",
    title: "Inventory & Order Management API",
    problem:
      "Growing product catalogs and order volume need a reliable, permissioned backend instead of spreadsheets.",
    solution:
      "A role-based backend system for managing products, inventory, users, and orders.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "JWT"],
    workflow: ["Auth & Roles", "Product/Inventory CRUD", "Order Processing", "Reporting Endpoints"],
    link: "#",
  },
  {
    id: "ai-support",
    title: "AI Customer Support Automation",
    problem:
      "Repetitive support questions consume time that could go toward complex, high-value customer issues.",
    solution:
      "An automated customer support workflow that understands incoming requests and generates contextual responses.",
    stack: ["n8n", "LLM", "APIs", "Webhooks"],
    workflow: ["Incoming Message", "Intent Detection", "Context Lookup", "Response Generation", "Escalation Rules"],
    link: "#",
  },
  {
    id: "real-estate-portal",
    title: "Real Estate Listing Platform",
    problem:
      "Agencies needed a fast property portal with search filters, media galleries, and lead capture for buyers and renters.",
    solution:
      "A full-stack real estate platform with map-based search, saved listings, agent dashboards, and automated inquiry routing.",
    stack: ["Next.js", "PostgreSQL", "Maps API", "Cloud Storage"],
    workflow: ["Listing Upload", "Search & Filters", "Buyer Inquiry", "Agent Notification", "Lead Tracking"],
    link: "#",
  },
  {
    id: "healthcare-booking",
    title: "Healthcare Appointment System",
    problem:
      "A clinic relied on phone calls for booking, causing double-bookings and missed follow-ups.",
    solution:
      "An online appointment platform with doctor availability, automated reminders, and patient intake forms.",
    stack: ["React", "Node.js", "PostgreSQL", "SMS/Email API"],
    workflow: ["Patient Booking", "Availability Check", "Confirmation", "Automated Reminder", "Follow-up"],
    link: "#",
  },
  {
    id: "shopify-store",
    title: "Shopify E-Commerce Storefront",
    problem:
      "A retail brand needed to launch on Shopify with a custom theme, synced inventory, and multi-channel selling.",
    solution:
      "A branded Shopify store with custom sections, checkout optimization, and automated inventory sync across Amazon and eBay.",
    stack: ["Shopify", "Liquid", "Amazon API", "eBay API"],
    workflow: ["Store Setup", "Catalog Import", "Inventory Sync", "Checkout Optimization", "Launch"],
    link: "#",
  },
  {
    id: "volunteer-platform",
    title: "Volunteer & Donation Platform",
    problem:
      "A non-profit needed a way to recruit volunteers, manage events, and accept donations online.",
    solution:
      "A donation and volunteer management site with event sign-ups, donor tracking, and secure online payments.",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Email Automation"],
    workflow: ["Volunteer Sign-up", "Event Scheduling", "Donation Checkout", "Receipt Automation", "Donor Reports"],
    link: "#",
  },
  {
    id: "learning-platform",
    title: "Online Learning Platform",
    problem:
      "A training provider needed to sell and deliver video courses without relying on a generic marketplace and its fees.",
    solution:
      "A branded e-learning platform with course enrollment, progress tracking, quizzes, and certificate generation.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "Video CDN"],
    workflow: ["Course Catalog", "Enrollment & Payment", "Progress Tracking", "Quiz Engine", "Certificate Generation"],
    link: "#",
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering & Reservations",
    problem:
      "A restaurant group needed online ordering and table booking without paying high commissions to delivery marketplaces.",
    solution:
      "A branded ordering and reservation system with live menu management, order tracking, and automated table booking confirmations.",
    stack: ["React", "Node.js", "PostgreSQL", "Payment Gateway"],
    workflow: ["Menu Browsing", "Cart & Checkout", "Order Tracking", "Table Reservation", "Confirmation & Reminders"],
    link: "#",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business problem.",
  },
  {
    number: "02",
    title: "Design",
    description: "Design the technical solution and workflow.",
  },
  {
    number: "03",
    title: "Build",
    description: "Build the application, automation, APIs, and AI integrations.",
  },
  {
    number: "04",
    title: "Automate",
    description: "Connect everything and reduce repetitive manual work.",
  },
];

export const techGroups = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    id: "ai",
    label: "AI",
    items: ["LLMs", "RAG", "Prompt Engineering", "AI APIs", "Ollama"],
  },
  {
    id: "automation",
    label: "Automation",
    items: ["n8n", "Webhooks", "API Integrations", "Workflow Automation"],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    items: ["Shopify", "WooCommerce", "Amazon Seller Central", "eBay", "Stripe", "PayPal"],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["React Native", "Expo", "iOS & Android", "Push Notifications"],
  },
];

export const trustItems = [
  "Web Development",
  "E-Commerce",
  "AI Integration",
  "Workflow Automation",
];

export const suggestedPrompts = [
  "What can you automate?",
  "I need an AI chatbot",
  "Can you automate my leads?",
  "I need a web application",
];

export const contactEmail = "jamoriotech@gmail.com";
export const whatsappNumber = "+92 333 7554859";
export const whatsappNumber2 = "+44 7877 669105";
export const whatsappLink = "https://wa.me/923337554859";
export const whatsappLink2 = "https://wa.me/447877669105";

// Legal / business identity used across the footer and legal policy pages.
// Kept in one place so every page shows the same, accurate information.
export const legalInfo = {
  brandName: "JamorioTech",
  operatorName: "Jamshed Ali",
  entityDescription:
    "an independent software development & AI automation service operating as JamorioTech",
  baseCountry: "Pakistan",
  serviceRegions: "Europe, the United Kingdom, the United States, and worldwide",
  email: contactEmail,
  whatsapp: [whatsappNumber, whatsappNumber2],
  whatsappLinks: [whatsappLink, whatsappLink2],
  governingLaw: "Pakistan",
  lastUpdated: "September 2026",
};

export const legalPages = [
  { id: "privacy-policy", label: "Privacy Policy", href: "/privacy-policy" },
  { id: "terms-and-conditions", label: "Terms & Conditions", href: "/terms-and-conditions" },
  { id: "refund-policy", label: "Refund Policy", href: "/refund-policy" },
];

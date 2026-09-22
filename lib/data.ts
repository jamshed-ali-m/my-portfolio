export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#automation-lab" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
    title: "Full-Stack Applications",
    description:
      "Build modern, scalable web applications from frontend to backend.",
    tech: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL"],
  },
  {
    id: "ai-assistants",
    title: "AI Assistants",
    description:
      "Create AI assistants that understand business information and help customers or teams.",
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
];

export const trustItems = [
  "Web Development",
  "AI Integration",
  "Workflow Automation",
  "API Integration",
];

export const suggestedPrompts = [
  "What can you automate?",
  "I need an AI chatbot",
  "Can you automate my leads?",
  "I need a web application",
];

export const contactEmail = "jamshedsaw@gmail.com";

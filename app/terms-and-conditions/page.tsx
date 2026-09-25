import type { Metadata } from "next";
import BackgroundGrid from "@/components/BackgroundGrid";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PolicyShell, { PolicySection } from "@/components/legal/PolicyShell";
import { legalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Jamshed Ali — JamorioTech",
  description:
    "The terms that govern web development, e-commerce, and AI automation projects delivered by JamorioTech.",
};

const sections: PolicySection[] = [
  {
    number: "01",
    title: "Introduction & Acceptance",
    paragraphs: [
      `These Terms & Conditions ("Terms") govern any proposal, quote, project, or service delivered by ${legalInfo.operatorName}, trading as ${legalInfo.brandName} ("we", "us", "our"), to a client ("you", "client"). By approving a proposal, making a deposit payment, or instructing work to begin, you agree to be bound by these Terms.`,
      "Where a separate signed contract or statement of work exists for a specific project, that document takes precedence over these Terms in case of conflict.",
    ],
  },
  {
    number: "02",
    title: "Services Provided",
    paragraphs: [
      "Services are quoted and delivered on a per-project or retainer basis and may include, but are not limited to:",
    ],
    bullets: [
      "Full-stack web development (business, portfolio, real estate, healthcare, booking, non-profit, education, and SaaS websites).",
      "E-commerce store setup and management on Shopify, WooCommerce, Amazon, and eBay.",
      "Backend and API development, database design, and system integrations.",
      "AI automation, AI assistants/chatbots, and workflow automation using tools such as n8n and LLM APIs.",
      "UI/UX design, landing pages, and ongoing website care & support plans.",
    ],
  },
  {
    number: "03",
    title: "Project Engagement & Proposals",
    paragraphs: [
      "Every project begins with a discovery conversation, after which a written proposal or quote is shared outlining scope, timeline, deliverables, and price. Work begins only after the proposal is approved and any required deposit is received.",
      "Scope not explicitly listed in the approved proposal is considered out of scope and will be quoted separately as an additional change request.",
    ],
  },
  {
    number: "04",
    title: "Payment Terms & Pricing",
    paragraphs: [
      "Unless otherwise agreed in writing, projects follow a milestone-based payment structure.",
    ],
    bullets: [
      "A non-refundable deposit (typically 30–50% of the project value) is required before work begins.",
      "Remaining payments are due at agreed milestones or upon project completion, before final files/access are handed over.",
      "Retainer and support plans are billed in advance on a recurring (usually monthly) basis.",
      "Payments are accepted via bank transfer, PayPal, or other methods agreed in the proposal; all fees charged by payment processors are the client's responsibility.",
      "Late payments may result in a pause of work until the outstanding balance is settled.",
    ],
  },
  {
    number: "05",
    title: "Revisions & Change Requests",
    paragraphs: [
      "Each project proposal specifies the number of included revision rounds. Reasonable revisions within the original scope are included at no extra cost. Requests that expand scope, add new features, or change core requirements after work has started are treated as change requests and quoted separately before being carried out.",
    ],
  },
  {
    number: "06",
    title: "Intellectual Property Rights",
    paragraphs: [
      "Upon full and final payment, ownership of the custom code, design files, and content created specifically for your project transfers to you, except for pre-existing tools, frameworks, libraries, or proprietary automation templates, which remain licensed for your use but are not sold.",
      "Until full payment is received, all work remains the intellectual property of JamorioTech and may not be used, published, or distributed by the client.",
      "We reserve the right to showcase completed, non-confidential work in a public portfolio unless the client requests otherwise in writing.",
    ],
  },
  {
    number: "07",
    title: "Client Responsibilities",
    paragraphs: [
      "To keep a project on schedule, the client agrees to:",
    ],
    bullets: [
      "Provide accurate business information, content, branding assets, and timely feedback.",
      "Grant necessary access to hosting, domain, or third-party platform accounts (e.g., Shopify, Amazon Seller Central, eBay) when required.",
      "Review and approve deliverables within a reasonable time to avoid project delays.",
      "Ensure any third-party licenses, images, or content supplied are properly licensed for commercial use.",
    ],
  },
  {
    number: "08",
    title: "Third-Party Platforms & Accounts",
    paragraphs: [
      "Where a project involves platforms such as Shopify, WooCommerce, Amazon, eBay, hosting providers, or payment gateways, all such accounts are created and owned directly by the client. We act only as a technical implementer within those platforms and are not responsible for the platforms' own fees, policies, suspensions, or terms of service.",
    ],
  },
  {
    number: "09",
    title: "Warranties & Limitation of Liability",
    paragraphs: [
      "Services are delivered using professional care and industry-standard practices, but no warranty is given that software will be entirely error-free or that automations will produce a specific business outcome, since results depend partly on factors outside our control (third-party APIs, market conditions, client-provided data, and platform policy changes).",
      "To the maximum extent permitted by law, our total liability for any claim arising from a project is limited to the amount paid by the client for that specific project.",
    ],
  },
  {
    number: "10",
    title: "Confidentiality",
    paragraphs: [
      "Both parties agree to keep confidential any non-public business information exchanged during the project, in line with the confidentiality commitments described in our Privacy Policy. A dedicated NDA is available on request for sensitive engagements.",
    ],
  },
  {
    number: "11",
    title: "Termination",
    paragraphs: [
      "Either party may terminate an active project with written notice. If the client terminates before completion, payment is due for all work completed up to the termination date, and any deposit paid is non-refundable in line with our Refund Policy. We may also pause or terminate a project if payments are significantly overdue or if requested work would be unlawful or unsafe to build.",
    ],
  },
  {
    number: "12",
    title: "Governing Law",
    paragraphs: [
      `These Terms are governed by the laws of ${legalInfo.governingLaw}, without regard to conflict-of-law principles, regardless of the client's location. Any dispute will first be addressed through good-faith direct negotiation before other steps are pursued.`,
    ],
  },
  {
    number: "13",
    title: "Contact Us",
    paragraphs: [
      "Questions about these Terms can be sent through any of the following channels:",
      `Email: ${legalInfo.email}`,
      `WhatsApp: ${legalInfo.whatsapp.join(" · ")}`,
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <BackgroundGrid />
      <Navbar />
      <PolicyShell
        activeId="terms-and-conditions"
        eyebrow="Service Agreement"
        title="Terms &"
        highlight="Conditions"
        subtitle="The agreement that governs every web development, e-commerce, and automation project we deliver."
        sections={sections}
      />
      <Footer />
      <ChatWidget />
    </main>
  );
}

import type { Metadata } from "next";
import BackgroundGrid from "@/components/BackgroundGrid";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PolicyShell, { PolicySection } from "@/components/legal/PolicyShell";
import { legalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Jamshed Ali — JamorioTech",
  description:
    "How JamorioTech collects, uses, secures, and protects client information across web development, e-commerce, and AI automation projects.",
};

const sections: PolicySection[] = [
  {
    number: "01",
    title: "Introduction & Scope",
    paragraphs: [
      `This Privacy Policy explains how ${legalInfo.operatorName} ("I", "me", "${legalInfo.brandName}", "we", "us", or "our") collects, uses, stores, and protects information when you visit this website, request a quote, or engage services for web development, e-commerce, AI automation, or related work.`,
      `This policy applies to all visitors, clients, and prospective clients located in ${legalInfo.serviceRegions}, and to any project discussion carried out by email, WhatsApp, video call, or through this website.`,
    ],
  },
  {
    number: "02",
    title: "Information We Collect",
    paragraphs: [
      "We collect only the information necessary to communicate with you, prepare accurate proposals, and deliver contracted work.",
    ],
    bullets: [
      "Contact details you provide: name, email address, phone/WhatsApp number, and company name.",
      "Project information: business requirements, brand assets, content, and any files you share for the work.",
      "Website usage data: pages visited, device/browser type, and approximate location, collected via standard analytics.",
      "Payment-related details processed by third-party payment providers (we do not store full card numbers).",
      "Access credentials you voluntarily provide for platforms such as Shopify, Amazon Seller Central, eBay, WordPress, or hosting accounts, used strictly for the scope of the agreed project.",
    ],
  },
  {
    number: "03",
    title: "Purpose of Processing & Data Use",
    paragraphs: [
      "Information collected is used exclusively to run and improve our services, and never sold to third parties.",
    ],
    bullets: [
      "To respond to inquiries and prepare project quotes or proposals.",
      "To design, develop, test, and deliver websites, e-commerce stores, APIs, or automation workflows.",
      "To communicate project updates, invoices, and support requests.",
      "To improve this website's performance and content based on aggregated, anonymized usage trends.",
      "To comply with legal, tax, or accounting obligations where required.",
    ],
  },
  {
    number: "04",
    title: "Project Confidentiality & Non-Disclosure",
    paragraphs: [
      "Business information, source code, credentials, and content shared for a project are treated as confidential by default and are not disclosed to any third party except sub-contractors bound by the same confidentiality standard, or as required by law.",
      "A signed Non-Disclosure Agreement (NDA) can be provided on request before detailed discovery calls or file sharing begins, particularly for enterprise or investor-sensitive projects.",
    ],
  },
  {
    number: "05",
    title: "Data Security & Storage Controls",
    paragraphs: [
      "Reasonable technical and organizational measures are used to protect client data against unauthorized access, alteration, disclosure, or loss.",
    ],
    bullets: [
      "Project files and credentials are stored in access-controlled, encrypted cloud storage.",
      "Communication channels used for sensitive data (client dashboards, staging environments) are password-protected.",
      "Access to client accounts (Shopify, hosting, Amazon/eBay Seller accounts) is limited to what is required for the agreed scope of work and removed once the project or support period ends, unless a retainer is in place.",
      "No security system is completely infallible; in the unlikely event of a data breach affecting your information, you will be notified without undue delay.",
    ],
  },
  {
    number: "06",
    title: "Third-Party Tools & Services",
    paragraphs: [
      "Certain tools and platforms are used to deliver services and may process limited data on our behalf, each governed by its own privacy policy.",
    ],
    bullets: [
      "Hosting & infrastructure: Vercel, and similar cloud hosting providers.",
      "Payment processing: Stripe, PayPal, and platform-native checkouts (Shopify Payments, Amazon, eBay).",
      "Analytics: privacy-respecting website analytics to understand traffic and performance.",
      "Communication: email, WhatsApp Business, and video-call tools used for client updates.",
      "AI tooling: large language model APIs used to build automations and assistants, configured to avoid retaining client data beyond what is needed to run the workflow.",
    ],
  },
  {
    number: "07",
    title: "Cookies & Website Analytics",
    paragraphs: [
      "This website may use essential cookies required for basic functionality, along with limited analytics cookies to understand how visitors use the site. You can disable cookies in your browser settings at any time; doing so may affect some website features but will not affect your ability to contact us.",
    ],
  },
  {
    number: "08",
    title: "Your Rights & Data Retention",
    paragraphs: [
      "You have the right to request access to, correction of, or deletion of your personal information held by us, and to object to certain processing.",
    ],
    bullets: [
      "Project data is retained only as long as needed to deliver the service, provide agreed support, and meet legal/accounting requirements.",
      "You may request deletion of your data by emailing us; requests are processed within 30 days unless retention is legally required.",
      "Access credentials shared for a project can be rotated or revoked by you at any time.",
    ],
  },
  {
    number: "09",
    title: "Children's Privacy",
    paragraphs: [
      "Our services are intended for businesses and individuals aged 18 and older. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so it can be removed.",
    ],
  },
  {
    number: "10",
    title: "Changes to This Policy",
    paragraphs: [
      `This Privacy Policy may be updated periodically to reflect changes in services, tools, or legal requirements. The "Version" date shown in the table of contents indicates the last revision. Continued use of this website or our services after an update constitutes acceptance of the revised policy.`,
    ],
  },
  {
    number: "11",
    title: "Contact Us",
    paragraphs: [
      "For any questions about this Privacy Policy, or to exercise your data rights, reach out through any of the channels below:",
      `Email: ${legalInfo.email}`,
      `WhatsApp: ${legalInfo.whatsapp.join(" · ")}`,
      `Operating from ${legalInfo.baseCountry}, serving clients across ${legalInfo.serviceRegions}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <BackgroundGrid />
      <Navbar />
      <PolicyShell
        activeId="privacy-policy"
        eyebrow="Corporate Governance & Data Protection"
        title="Privacy"
        highlight="Policy"
        subtitle="How information is collected, used, and protected across every web development, e-commerce, and AI automation engagement."
        sections={sections}
      />
      <Footer />
      <ChatWidget />
    </main>
  );
}

import type { Metadata } from "next";
import BackgroundGrid from "@/components/BackgroundGrid";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PolicyShell, { PolicySection } from "@/components/legal/PolicyShell";
import { legalInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund Policy | Jamshed Ali — JamorioTech",
  description:
    "Refund, cancellation, and dispute terms for web development, e-commerce, and AI automation projects delivered by JamorioTech.",
};

const sections: PolicySection[] = [
  {
    number: "01",
    title: "Overview",
    paragraphs: [
      `This Refund Policy explains when payments made to ${legalInfo.operatorName}, trading as ${legalInfo.brandName}, are refundable. It applies to all services including web development, e-commerce store setup, backend/API development, and AI automation projects, and works alongside our Terms & Conditions.`,
    ],
  },
  {
    number: "02",
    title: "Eligibility for Refunds",
    paragraphs: [
      "A refund may be considered in the following situations:",
    ],
    bullets: [
      "Work has not yet started and the client cancels within 48 hours of paying the deposit.",
      "We are unable to begin or complete the contracted work due to a reason on our side (e.g., inability to deliver the agreed scope).",
      "A clearly defined milestone was paid for in advance but was not delivered and the project is mutually cancelled before that milestone begins.",
    ],
  },
  {
    number: "03",
    title: "Non-Refundable Situations",
    paragraphs: [
      "Because time, planning, and third-party costs are committed as soon as a project starts, the following are generally non-refundable:",
    ],
    bullets: [
      "Deposits once discovery, planning, design, or development work has started.",
      "Payments for milestones that have already been delivered and approved.",
      "Third-party costs already incurred on the client's behalf (domain names, hosting, app/plugin licenses, Shopify/App Store fees, stock assets).",
      "Retainer or support-plan payments for the period already in progress.",
      "Cancellations caused by the client's delay, non-responsiveness, or change of business direction after work has begun.",
    ],
  },
  {
    number: "04",
    title: "Deposit & Milestone Payments",
    paragraphs: [
      "Projects are billed in milestones so that both sides carry fair, shared risk: the deposit reserves project time and covers early planning and setup, while later payments are tied to specific, delivered stages of work (e.g., design approval, development completion, launch). This structure is explained in the proposal before any payment is made.",
    ],
  },
  {
    number: "05",
    title: "Cancellation by the Client",
    paragraphs: [
      "If you need to cancel a project in progress, notify us in writing (email or WhatsApp) as soon as possible. You will be invoiced for all work completed up to the cancellation date; any amount already paid beyond completed work will be refunded, while amounts covering completed work or committed third-party costs are retained as described in Section 03.",
    ],
  },
  {
    number: "06",
    title: "Cancellation by Us",
    paragraphs: [
      "In the rare case that we must cancel a project (for reasons such as scope being outside our capability, or unforeseen circumstances), any portion of payment not yet used for completed work will be refunded in full within the timeline described in Section 07.",
    ],
  },
  {
    number: "07",
    title: "Refund Process & Timeline",
    paragraphs: [
      "Approved refunds are processed back to the original payment method within 7–14 business days. Bank or payment-processor transfer times may add a few additional days outside of our control. To request a refund, contact us with your project name, invoice/payment reference, and reason for the request.",
    ],
  },
  {
    number: "08",
    title: "Chargebacks & Disputes",
    paragraphs: [
      "We encourage clients to contact us directly to resolve any billing concern before filing a chargeback or payment dispute with a bank or platform, as this allows most issues to be resolved faster and more fairly. Filing a chargeback for work that has already been delivered and approved may result in the pause of any ongoing support, and we reserve the right to present the delivered work and communication history as evidence in a dispute.",
    ],
  },
  {
    number: "09",
    title: "Contact Us",
    paragraphs: [
      "For refund requests or billing questions, reach out through:",
      `Email: ${legalInfo.email}`,
      `WhatsApp: ${legalInfo.whatsapp.join(" · ")}`,
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <BackgroundGrid />
      <Navbar />
      <PolicyShell
        activeId="refund-policy"
        eyebrow="Billing & Cancellations"
        title="Refund"
        highlight="Policy"
        subtitle="Clear, fair terms for cancellations, milestone payments, and refund requests across every project."
        sections={sections}
      />
      <Footer />
      <ChatWidget />
    </main>
  );
}

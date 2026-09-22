import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Jamshed Ali | Full Stack Developer & AI Automation Engineer",
  description:
    "Jamshed Ali builds modern web applications, backend systems, AI integrations, and business automation workflows that help businesses work smarter.",
  keywords: [
    "Full Stack Developer",
    "AI Automation Engineer",
    "n8n Automation",
    "LLM Integration",
    "Business Process Automation",
    "Next.js Developer",
  ],
  authors: [{ name: "Jamshed Ali" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jamshed Ali | Full Stack Developer & AI Automation Engineer",
    description:
      "Modern web applications, backend systems, and AI-powered automations that help businesses reduce repetitive work and operate more efficiently.",
    url: "https://yourdomain.com",
    siteName: "Jamshed Ali",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamshed Ali | Full Stack Developer & AI Automation Engineer",
    description:
      "Modern web applications, backend systems, and AI-powered automations that help businesses reduce repetitive work and operate more efficiently.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-base-950 text-gray-200 selection:bg-violet-500/40">
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

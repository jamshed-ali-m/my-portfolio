import Link from "next/link";
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import {
  contactEmail,
  whatsappNumber,
  whatsappLink,
  whatsappLink2,
  whatsappNumber2,
  legalPages,
} from "@/lib/data";

const services = [
  "Full-Stack Web Development",
  "E-Commerce Store Management",
  "AI Automation & Integration",
  "Backend / API Development",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jamshed-morio-5697922b0/",
    icon: Linkedin,
  },
  { label: "Facebook", href: "https://www.facebook.com/share/1H19bFxMgB/", icon: Facebook },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jamshed_ali_morio?stkn=MW5wNDY2MmdseXA4cQ==",
    icon: Instagram,
  },
  { label: "Fiverr", href: "https://www.fiverr.com/s/NNK3BkQ", icon: FiverrIcon },
];

function FiverrIcon({ className }: { className?: string }) {
  // lucide-react has no Fiverr glyph, so this is a small custom mark
  // sized and stroked to match the surrounding lucide icons.
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.2 10.4h1.9v6.1H9.2v-6.1Zm.95-3.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Zm3.35 3.2h3.9v1.55h-2v1.05h1.75v1.5h-1.75v2h-1.9v-6.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  // lucide-react has no WhatsApp glyph, so this is a small custom mark
  // sized and stroked to match the surrounding lucide icons.
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2.5c-5.26 0-9.52 4.26-9.52 9.52 0 1.68.44 3.27 1.22 4.64L2.5 21.5l4.96-1.3a9.47 9.47 0 0 0 4.56 1.16h.01c5.26 0 9.52-4.26 9.52-9.52s-4.27-9.34-9.53-9.34Zm0 17.32h-.01a7.8 7.8 0 0 1-3.98-1.09l-.28-.17-2.94.77.79-2.87-.19-.29a7.78 7.78 0 0 1-1.2-4.15c0-4.31 3.51-7.82 7.83-7.82 2.09 0 4.05.82 5.53 2.3a7.76 7.76 0 0 1 2.29 5.53c0 4.31-3.51 7.79-7.84 7.79Zm4.3-5.83c-.24-.12-1.4-.69-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.74.93-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.31-1.64-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.38-.4-.53-.4-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/#home" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet to-accent-cyan text-sm font-bold text-white">
              JT
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-wide text-white">
                JAMORIO<span className="text-cyan-400">TECH</span>
              </span>
              <span className="mt-1 text-[9px] tracking-[0.18em] text-gray-400">
                AI AUTOMATION
              </span>
            </div>
          </Link>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Services
            </p>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Legal
            </p>
            <ul className="mt-3 space-y-2">
              {legalPages.map((page) => (
                <li key={page.id}>
                  <Link
                    href={page.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Contact
            </p>
            <div className="mt-3 space-y-2.5">
              <a             
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {contactEmail}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                
                {whatsappNumber}
                
              </a>
                 <a
                href={whatsappLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                
                {whatsappNumber2}
                
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/5 pt-6 text-center text-xs text-gray-600 sm:flex-row sm:justify-between">
          <span>© 2026 Jamshed Ali · JamorioTech. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {legalPages.map((page, i) => (
              <span key={page.id} className="flex items-center gap-4">
                <Link href={page.href} className="hover:text-gray-300 transition-colors">
                  {page.label}
                </Link>
                {i < legalPages.length - 1 && <span className="text-gray-800">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
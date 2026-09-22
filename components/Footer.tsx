import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import { contactEmail } from "@/lib/data";

const services = [
  "AI Automation",
  "Full-Stack Development",
  "Backend/API Development",
  "AI Integration",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-3">
           <a href="#home" className="flex items-center gap-3">
          

          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-wide text-white">
              JAMORIO<span className="text-cyan-400">TECH</span>
            </span>

            <span className="mt-1 text-[9px] tracking-[0.18em] text-gray-400">
              AI AUTOMATION
            </span>
          </div>
        </a>

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
              Links
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="https://github.com/"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jamshed-morio-5697922b0/"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contactEmail}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-gray-600">
          © 2026 Jamshed Ali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

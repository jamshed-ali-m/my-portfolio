"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { contactEmail } from "@/lib/data";
import { GlassCard, PrimaryButton, SectionHeading } from "./ui/primitives";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  company: string;
  need: string;
  process: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  need: "",
  process: "",
  budget: "",
  message: "",
};

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.need.trim()) errors.need = "Let me know what you need.";
  if (!form.message.trim()) errors.message = "A short message helps me understand the project.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Have a Process Worth Automating?"
          subtitle="Tell me what you're trying to improve. I'll help turn the idea into a practical technical solution."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                  placeholder="you@company.com"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Company"
                  value={form.company}
                  onChange={handleChange("company")}
                  placeholder="Company (optional)"
                />
                <Field
                  label="Budget"
                  value={form.budget}
                  onChange={handleChange("budget")}
                  placeholder="Budget (optional)"
                />
              </div>

              <Field
                label="What do you need?"
                value={form.need}
                onChange={handleChange("need")}
                error={errors.need}
                placeholder="e.g. AI chatbot, automation, web app"
              />

              <Field
                label="Current process/problem"
                value={form.process}
                onChange={handleChange("process")}
                placeholder="What's the current process, and what's not working?"
              />

              <TextAreaField
                label="Message"
                value={form.message}
                onChange={handleChange("message")}
                error={errors.message}
                placeholder="Tell me more about the project..."
              />

              <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <PrimaryButton type="submit">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Discuss My Project <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </PrimaryButton>

                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" /> {contactEmail}
                </a>
              </div>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-emerald-400"
                >
                  <CheckCircle2 className="h-4 w-4" /> Thanks — your message was sent. I'll reply
                  soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again or
                  email directly.
                </motion.p>
              )}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-300">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`w-full rounded-lg border bg-white/[0.03] px-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-600 outline-none transition-colors focus:border-accent-cyan/50 ${
          error ? "border-red-500/50" : "border-white/10"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-300">{label}</span>
      <textarea
        rows={5}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`w-full rounded-lg border bg-white/[0.03] px-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-600 outline-none transition-colors focus:border-accent-cyan/50 ${
          error ? "border-red-500/50" : "border-white/10"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

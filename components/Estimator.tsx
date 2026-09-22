"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gauge, Loader2, Sparkles, Wrench, Workflow, ArrowRight, Info } from "lucide-react";
import { GlassCard, PrimaryButton, SectionHeading } from "./ui/primitives";

type EstimateResult = {
  complexity: "Low" | "Medium" | "High";
  tools: string[];
  workflow: string[];
  note: string;
  mode: "demo" | "live";
};

const complexityColor: Record<EstimateResult["complexity"], string> = {
  Low: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  Medium: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  High: "text-red-400 border-red-500/30 bg-red-500/10",
};

export default function Estimator() {
  const [open, setOpen] = useState(false);
  const [processField, setProcessField] = useState("");
  const [current, setCurrent] = useState("");
  const [frequency, setFrequency] = useState("");
  const [tools, setTools] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!processField.trim() || !current.trim()) {
      setError("Please fill in at least the process and how it's currently handled.");
      return;
    }
    setError(null);
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ process: processField, current, frequency, tools }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong.");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="AI Project Estimator"
          title="Get an Initial AI-Assisted Assessment"
          subtitle="A quick, non-binding look at what automating your process could involve."
        />

        {!open && (
          <div className="flex justify-center">
            <PrimaryButton onClick={() => setOpen(true)}>
              <Gauge className="h-4 w-4" /> Estimate My Automation
            </PrimaryButton>
          </div>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="p-6 sm:p-8">
                {!result && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <EstimatorField
                      label="What process do you want to automate?"
                      value={processField}
                      onChange={setProcessField}
                      placeholder="e.g. Responding to customer support emails"
                    />
                    <EstimatorField
                      label="How is it currently handled?"
                      value={current}
                      onChange={setCurrent}
                      placeholder="e.g. A team member reads and replies manually"
                    />
                    <EstimatorField
                      label="How often does it happen?"
                      value={frequency}
                      onChange={setFrequency}
                      placeholder="e.g. 30–50 times per day"
                    />
                    <EstimatorField
                      label="Which tools do you currently use?"
                      value={tools}
                      onChange={setTools}
                      placeholder="e.g. Gmail, Google Sheets, a CRM"
                    />

                    {error && <p className="text-sm text-red-400">{error}</p>}

                    <PrimaryButton type="submit">
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Analyzing...
                        </>
                      ) : (
                        <>
                          Run Assessment <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </PrimaryButton>
                  </form>
                )}

                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-accent-cyan" />
                        <h3 className="text-lg font-semibold text-white">
                          Potential Automation
                        </h3>
                      </div>
                      {result.mode === "demo" && (
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-gray-400">
                          Demo mode
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-400">Automation Complexity</span>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${complexityColor[result.complexity]}`}
                      >
                        {result.complexity}
                      </span>
                    </div>

                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-300">
                        <Wrench className="h-3.5 w-3.5" /> Possible Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {result.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-300">
                        <Workflow className="h-3.5 w-3.5" /> Potential Workflow
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {result.workflow.map((step, i) => (
                          <div
                            key={step}
                            className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-gray-300"
                          >
                            {i + 1}. {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-3 text-xs text-gray-400">
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-cyan" />
                      {result.note}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <PrimaryButton href="#contact">
                        Discuss This Project <ArrowRight className="h-4 w-4" />
                      </PrimaryButton>
                      <button
                        onClick={() => {
                          setResult(null);
                        }}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        Run another assessment
                      </button>
                    </div>
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function EstimatorField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-300">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-600 outline-none focus:border-accent-cyan/50 transition-colors"
      />
    </label>
  );
}

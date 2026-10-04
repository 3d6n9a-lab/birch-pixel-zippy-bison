import { Boxes, Check, Sparkles, Workflow } from "lucide-react";
import { Glass } from "@/components/hud/Glass";
import { useApp } from "@/lib/store";
import { cn } from "@/lib/cn";

export function StudioView() {
  const prompt = useApp((s) => s.prompt);
  const setPrompt = useApp((s) => s.setPrompt);
  const generated = useApp((s) => s.generated);
  const setGenerated = useApp((s) => s.setGenerated);

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-3">
        <Glass className="p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Workflow className="size-4 text-cyan" /> Visual Builder
            <span className="text-[10px] font-normal text-muted">Drag · Connect · Build</span>
          </div>
          <div className="relative h-44 rounded-xl border border-border bg-bg/30">
            <Node className="left-4 top-6" title="User Input" sub="Form / Chat / API" />
            <Node className="left-[38%] top-4" title="AI Agent" sub="Grok · Claude · Gemini" accent />
            <Node className="left-4 bottom-4" title="Logic" sub="Condition / Loop" mag />
            <Node className="left-[38%] bottom-3" title="Web Page" sub="Frontend / UI" />
            <Node className="right-3 top-1/2 -translate-y-1/2" title="Database" sub="Postgres / Mongo" />
            <svg className="absolute inset-0 size-full" aria-hidden>
              <path d="M90 40 C140 40, 140 40, 190 36" stroke="#00e5ff" strokeWidth="1.4" fill="none" />
              <path d="M90 130 C140 130, 150 90, 200 70" stroke="#ff2fd6" strokeWidth="1.2" fill="none" />
              <path d="M250 50 C300 50, 310 80, 340 90" stroke="#00e5ff" strokeWidth="1.2" fill="none" />
            </svg>
          </div>
        </Glass>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <CodePane
            title="Frontend (React + TypeScript)"
            code={`import { useState, useEffect } from 'react';
import { Hero, Features, CTA } from './ui';

export default function LandingPage() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch('/api/landing').then(r => r.json()).then(setData); }, []);
  return <Hero data={data} />;
}`}
          />
          <CodePane
            title="Backend (Node.js + Express)"
            code={`const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/landing', async (_req, res) => {
  res.json({ success: true, data: { live: true } });
});`}
          />
        </div>
      </div>

      <div className="relative hidden min-h-[240px] xl:block">
        <div className="absolute inset-x-0 top-2 text-center">
          <div className="text-xl font-extrabold">BAZARID</div>
          <div className="text-xs text-muted">Ecosystem & ORBWEBS Landing Builder</div>
          <div className="mt-2 flex justify-center gap-2">
            <span className="glass-panel px-2 py-1 text-[10px] text-lime">Live Preview</span>
            <span className="glass-panel px-2 py-1 text-[10px] text-cyan">Web App Online</span>
            <span className="glass-panel px-2 py-1 text-[10px] text-lime">Global Traffic +32.4%</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Glass className="p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="size-4 text-cyan" /> Prompt Engineering
          </div>
          <div className="mb-2 flex gap-1 text-[11px]">
            {["System", "User", "Response", "Tools"].map((t, i) => (
              <span
                key={t}
                className={cn("rounded-lg px-2 py-1", i === 1 ? "bg-cyan/20 text-cyan" : "text-muted")}
              >
                {t}
              </span>
            ))}
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-border bg-bg/40 p-3 text-xs outline-none focus:border-cyan"
          />
          <button
            type="button"
            onClick={() => setGenerated(true)}
            className="mt-2 min-h-11 w-full rounded-xl bg-cyan font-semibold text-bg"
          >
            Generate
          </button>
        </Glass>
        <Glass className="p-4">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            <span className="flex items-center gap-2">
              <Boxes className="size-4 text-lime" /> Auto Framework Generator
            </span>
            <span className="text-[10px] text-lime">{generated ? "Ready" : "Idle"}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {["Project Structure", "UI Components", "Dependencies", "API Routes", "Configuration", "Database Models"].map(
              (x) => (
                <div key={x} className="flex items-center gap-1.5 text-muted">
                  <Check className={cn("size-3.5", generated ? "text-lime" : "text-muted")} />
                  {x}
                </div>
              ),
            )}
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-bg/50">
            <div className={cn("h-full bg-gradient-to-r from-cyan to-lime transition-all", generated ? "w-full" : "w-1/5")} />
          </div>
        </Glass>
        <Glass className="p-4">
          <div className="mb-2 text-sm font-semibold">Modules & Components</div>
          <div className="grid grid-cols-4 gap-2">
            {["Landing", "Auth", "Database", "Analytics", "Payment", "AI", "API", "Custom"].map((m) => (
              <button
                key={m}
                type="button"
                className="rounded-xl border border-border bg-bg/30 py-3 text-[10px] hover:border-cyan"
              >
                {m}
              </button>
            ))}
          </div>
        </Glass>
      </div>
    </div>
  );
}

function Node({
  className,
  title,
  sub,
  accent,
  mag,
}: {
  className?: string;
  title: string;
  sub: string;
  accent?: boolean;
  mag?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 w-28 rounded-lg border px-2 py-1.5 text-[10px]",
        mag ? "border-mag/50 bg-mag/10" : accent ? "border-lime/50 bg-lime/10" : "border-cyan/40 bg-cyan/10",
        className,
      )}
    >
      <div className="font-semibold">{title}</div>
      <div className="text-muted">{sub}</div>
    </div>
  );
}

function CodePane({ title, code }: { title: string; code: string }) {
  return (
    <Glass className="p-3">
      <div className="mb-2 text-[11px] font-semibold text-cyan">{title}</div>
      <pre className="max-h-40 overflow-auto font-mono text-[10px] leading-relaxed text-muted">{code}</pre>
    </Glass>
  );
}

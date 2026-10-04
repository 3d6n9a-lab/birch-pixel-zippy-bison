import { Globe, Search, ShieldCheck, Workflow } from "lucide-react";
import { Glass, Metric } from "@/components/hud/Glass";
import { useApp } from "@/lib/store";

export function HomeView() {
  const q = useApp((s) => s.domainQuery);
  const setQ = useApp((s) => s.setDomainQuery);
  const agent = useApp((s) => s.agent);

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 px-3 pb-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="flex flex-col gap-3">
        <Glass className="p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Globe className="size-4 text-cyan" /> Domain Search
          </div>
          <p className="mb-3 text-xs text-muted">Find, verify and manage your digital identity</p>
          <div className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-3 text-sm outline-none focus:border-cyan"
              placeholder="Search domain (e.g. example.bazarid)"
            />
            <button type="button" className="grid size-11 place-items-center rounded-xl bg-cyan/20 text-cyan" aria-label="Search domain">
              <Search className="size-4" />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {[".bazarid", ".com", ".net", ".org", ".io", ".dob"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setQ(`orbwebs${t}`)}
                className="rounded-lg border border-border px-2 py-1 text-[11px] text-muted hover:text-cyan"
              >
                {t}
              </button>
            ))}
          </div>
        </Glass>
        <Glass className="p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <ShieldCheck className="size-4 text-lime" /> Registrar Verification
          </div>
          <div className="flex gap-2">
            <input
              defaultValue="example.bazarid"
              className="min-h-11 flex-1 rounded-xl border border-border bg-bg/40 px-3 text-sm"
            />
            <button type="button" className="rounded-xl bg-cyan px-4 text-sm font-semibold text-bg">
              Verify
            </button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
            <div className="text-lime">Registered · Active</div>
            <div className="text-muted">Expires 2026-12-14</div>
            <div className="text-muted">Registrar Bazarid</div>
          </div>
        </Glass>
      </div>

      <div className="relative flex min-h-[280px] flex-col items-center justify-end pb-6">
        <div className="pointer-events-none absolute inset-x-8 top-4 mx-auto max-w-md text-center">
          <div className="text-lg font-extrabold tracking-wide">
            BAZARID <span className="text-muted text-xs font-medium">Identity Network</span>
          </div>
        </div>
        <div className="absolute left-2 top-16 hidden space-y-2 md:block">
          <Mini label="Domains" />
          <Mini label="Agents" />
        </div>
        <div className="absolute right-2 top-16 hidden space-y-2 md:block">
          <Mini label="Users" />
          <Mini label="Automation" />
        </div>
        <p className="relative z-10 max-w-xs text-center text-xs text-muted">
          One Identity. Infinite Possibilities.
          <span className="mt-1 block text-[10px]">BAZARID — The Future of Digital Identity</span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Glass className="p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <Workflow className="size-4 text-cyan" /> Modular Automation
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Domain Monitor", "Auto track changes"],
              ["DNS Manager", "Smart routing"],
              ["Identity Guard", "Fraud protection"],
              ["API Integrations", "Connect & extend"],
            ].map(([t, d]) => (
              <button
                key={t}
                type="button"
                className="rounded-xl border border-border bg-bg/30 p-3 text-left hover:border-cyan/50"
              >
                <div className="text-xs font-semibold">{t}</div>
                <div className="text-[10px] text-muted">{d}</div>
              </button>
            ))}
          </div>
        </Glass>
        <Glass className="glow-lime p-4" glow="lime">
          <div className="mb-1 flex items-center justify-between">
            <div className="text-sm font-semibold">{agent.toUpperCase()} Agent</div>
            <span className="text-[10px] text-lime">Active</span>
          </div>
          <p className="mb-3 text-[11px] text-muted">AI-Powered Intelligence Agent</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <Stat k="API Requests" v="24,893" d="↑ 12.5%" />
            <Stat k="Success Rate" v="99.8%" d="↑ 0.2%" />
            <Stat k="Latency" v="142ms" d="↓ 18.5%" />
          </div>
          <div className="mt-3 h-12 rounded-lg bg-gradient-to-r from-cyan/10 via-lime/20 to-cyan/10" />
          <Metric label="Rental Details" value="$0.12 / 1K requests" />
        </Glass>
      </div>
    </div>
  );
}

function Mini({ label }: { label: string }) {
  return (
    <div className="glass-panel px-3 py-1.5 text-[11px] text-cyan">{label}</div>
  );
}

function Stat({ k, v, d }: { k: string; v: string; d: string }) {
  return (
    <div>
      <div className="text-[10px] text-muted">{k}</div>
      <div className="text-sm font-bold tabular-nums">{v}</div>
      <div className="text-[10px] text-lime">{d}</div>
    </div>
  );
}

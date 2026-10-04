import { Bell, Search, Wallet, GraduationCap } from "lucide-react";
import { useApp, type ViewId } from "@/lib/store";
import { cn } from "@/lib/cn";

const NAV: { id: ViewId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "studio", label: "Builder" },
  { id: "domains", label: "Domains" },
  { id: "agents", label: "Agents" },
  { id: "analytics", label: "Analytics" },
  { id: "owbook", label: "OWBOOK" },
  { id: "market", label: "Market" },
  { id: "gateway", label: "Gateway" },
];

export function TopBar() {
  const view = useApp((s) => s.view);
  const setView = useApp((s) => s.setView);
  const weather = useApp((s) => s.weather);
  const name = useApp((s) => s.profileName);

  return (
    <header className="relative z-30 flex flex-wrap items-center justify-between gap-3 px-4 pt-3 md:px-6">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-cyan/15 text-lg font-extrabold text-cyan">
          B
        </div>
        <div>
          <div className="text-sm font-extrabold tracking-wide">
            BAZARID
            <span className="ml-2 text-[10px] font-medium text-muted">Identity Network</span>
          </div>
          <div className="hidden text-[10px] text-muted sm:block">Modular AI Web Studio · ORBWEBS</div>
        </div>
      </div>
      <nav className="hidden items-center gap-1 lg:flex">
        {NAV.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setView(n.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              view === n.id ? "bg-cyan/15 text-cyan" : "text-muted hover:text-fg",
            )}
          >
            {n.label}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <span className="glass-panel hidden items-center gap-1.5 px-2.5 py-1 text-[11px] text-muted sm:flex">
          {weather.label} · {Math.round(weather.tempC)}°
        </span>
        <span className="glass-panel hidden items-center gap-1 px-2 py-1 text-[11px] text-cyan md:flex">
          <GraduationCap className="size-3.5" />
          STUDENT
        </span>
        <button type="button" className="glass-panel grid size-9 place-items-center text-muted" aria-label="Search">
          <Search className="size-4" />
        </button>
        <button type="button" className="glass-panel grid size-9 place-items-center text-muted" aria-label="Alerts">
          <Bell className="size-4" />
        </button>
        <span className="glass-panel hidden items-center gap-1 px-2 py-1 text-[11px] text-fg sm:flex">
          <Wallet className="size-3.5 text-cyan" />
          $2,847.56
        </span>
        <span className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-cyan/20 text-xs font-bold text-cyan">
            JR
          </span>
          <span className="hidden text-xs text-fg md:block">
            {name}
            <span className="block text-[10px] text-muted">Pro Account</span>
          </span>
        </span>
      </div>
      <nav className="flex w-full gap-1 overflow-x-auto pb-1 lg:hidden">
        {NAV.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setView(n.id)}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs",
              view === n.id ? "bg-cyan/15 text-cyan" : "text-muted",
            )}
          >
            {n.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
